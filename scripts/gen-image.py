#!/usr/bin/env python3
"""Generate an image via Gemini 2.5 Flash Image (nano-banana).

Bypasses the MCP framework for sessions where the tool isn't yet surfaced.
Uses the same .venv + the same code path as the nano-banana MCP — just a
direct CLI shim.

Usage:
    python scripts/gen-image.py \\
        --prompt "..." \\
        --output public/og-image.png \\
        --aspect 16:9

API key lookup order: env GEMINI_API_KEY first, then ~/.claude.json
(MCP server config for nano-banana).
"""
import argparse
import json
import os
import sys
from pathlib import Path


def load_api_key() -> str:
    """Resolve GEMINI_API_KEY from env first, then any nano-banana MCP entry
    in ~/.claude.json (regardless of which project owns it). No hardcoded
    user paths — works for any operator who has the nano-banana MCP set up."""
    key = os.environ.get("GEMINI_API_KEY")
    if key:
        return key
    settings = Path.home() / ".claude.json"
    if not settings.exists():
        sys.exit("ERROR: GEMINI_API_KEY env not set and ~/.claude.json missing.")
    data = json.loads(settings.read_text())
    for project_path, project in (data.get("projects") or {}).items():
        nb = ((project.get("mcpServers") or {}).get("nano-banana") or {})
        env_key = (nb.get("env") or {}).get("GEMINI_API_KEY")
        if env_key:
            return env_key
    sys.exit(
        "ERROR: nano-banana MCP not configured in ~/.claude.json. "
        "Either: (a) set GEMINI_API_KEY env var, or "
        "(b) register the nano-banana MCP via the AIOS vault (mcps/nano-banana-mcp/)."
    )


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate image via Gemini 2.5 Flash Image.")
    parser.add_argument("--prompt", required=True, help="Natural-language image prompt.")
    parser.add_argument("--output", required=True, help="Output PNG path.")
    parser.add_argument("--aspect", default="16:9", choices=["1:1", "16:9", "9:16", "4:3", "3:4"])
    args = parser.parse_args()

    os.environ["GEMINI_API_KEY"] = load_api_key()

    from google import genai
    from google.genai import types

    client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

    print(f"→ prompt: {args.prompt[:80]}{'...' if len(args.prompt) > 80 else ''}", file=sys.stderr)
    print(f"→ aspect: {args.aspect}", file=sys.stderr)

    response = client.models.generate_content(
        model="gemini-2.5-flash-image",
        contents=args.prompt,
        config=types.GenerateContentConfig(
            response_modalities=["IMAGE"],
            image_config=types.ImageConfig(aspect_ratio=args.aspect),
        ),
    )

    out = Path(args.output)
    out.parent.mkdir(parents=True, exist_ok=True)

    for part in response.candidates[0].content.parts:
        if part.inline_data and part.inline_data.data:
            out.write_bytes(part.inline_data.data)
            kb = out.stat().st_size // 1024
            print(f"✓ wrote {out} ({kb} KB)", file=sys.stderr)
            return 0

    print("ERROR: Gemini returned no image data.", file=sys.stderr)
    return 1


if __name__ == "__main__":
    sys.exit(main())
