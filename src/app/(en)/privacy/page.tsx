import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import "../legal.css";

const TITLE = "Privacy Policy";
const DESCRIPTION =
  "The AIOS runs on your machine. Your Google data goes from Google to your computer directly — it never reaches a server we operate, because we do not operate one.";

export const metadata: Metadata = {
  title: `${TITLE} — The AIOS`,
  description: DESCRIPTION,
  alternates: { canonical: "https://the-aios.com/privacy" },
  openGraph: { title: `${TITLE} — The AIOS`, description: DESCRIPTION, url: "https://the-aios.com/privacy" },
};

export default function Privacy() {
  return (
    <LegalPage
      title={TITLE}
      standfirst="Most privacy policies explain what a company does with the data it collects. This one mostly explains why we do not have any."
      updated="30 August 2026"
    >
      <div className="callout">
        <p>
          <strong>The short version.</strong> The AIOS is software that runs on your own computer. When you
          connect Google Workspace, your calendar, mail and files travel from Google <strong>directly to your
          machine</strong>. They do not pass through any server we run, because we do not run one. We cannot
          read your data, and no change to this policy could give us that ability without changing the
          software itself — which is open source, so you would be able to see it.
        </p>
      </div>

      <h2>Why we cannot see your data, mechanically</h2>

      <p>
        This is worth explaining precisely rather than asking you to take it on trust, because the mechanism is
        the actual guarantee.
      </p>

      <p>
        The AIOS connects to Google using an <strong>installed-application OAuth client</strong> whose only
        redirect address is <code>http://localhost</code> — an address that means <em>this computer</em>. When
        you approve access, Google sends the authorization code to a small server running on your own machine,
        which exchanges it for a token and writes that token to your own disk, at{" "}
        <code>~/.google_workspace_mcp/credentials/</code>.
      </p>

      <div className="flow">
{`  Google  ───────────────────────►  your computer
                                      │
                                      ├─ token stored at ~/.google_workspace_mcp/credentials/
                                      └─ your calendar / mail / files, in memory, on your machine

  The AIOS project  ····················  (not in this path)`}
      </div>

      <p>
        There is no step in that sequence where your content reaches us. Our Google Cloud project supplies the
        app&rsquo;s <strong>identity</strong> — the name and logo you see on the consent screen — and nothing
        else. It is a nameplate, not a pipe.
      </p>

      <h3>What we can see, stated honestly</h3>

      <p>
        Because the OAuth client belongs to our Google Cloud project, Google shows us{" "}
        <strong>aggregate API metrics</strong> for that project: how many requests were made to each Google API
        and how many failed. That is a count, not content. We cannot see who made them, from which account, or
        what they contained. We mention it because a policy claiming <em>absolutely no visibility</em> would be
        slightly untrue, and a policy you catch being slightly untrue is worth nothing.
      </p>

      <h2>Where your information actually lives</h2>

      <ul>
        <li>
          <strong>Your vault</strong> — notes, context, daily plans — is a folder on your computer, and a{" "}
          <strong>private repository you own</strong>. We have no access to it and are not a party to it.
        </li>
        <li>
          <strong>Your Google tokens</strong> sit on your disk in your home directory. Deleting that folder
          revokes the AIOS&rsquo;s access on that machine immediately.
        </li>
        <li>
          <strong>Your conversations with Claude</strong> are between you and Anthropic, under their terms. The
          AIOS is a set of instructions and tools that runs inside Claude Code; it is not an intermediary and
          does not receive a copy.
        </li>
      </ul>

      <h2>What we collect</h2>

      <p>
        <strong>From the software: nothing.</strong> The AIOS contains no analytics, no telemetry, no
        phone-home, no crash reporting and no usage tracking. It does not send us a message when you install
        it, run it, or stop using it. We learn that someone is using it when they tell us.
      </p>

      <p>
        <strong>From this website:</strong> standard web-server request logs held by our hosting provider, and
        nothing we have added on top.
      </p>

      <p>
        <strong>If you contact us</strong> by email or open an issue on GitHub, we obviously have what you sent
        us. GitHub issues are public by design — please do not paste credentials or private content into one.
      </p>

      <h2>Google user data, specifically</h2>

      <p>
        The AIOS&rsquo;s use of information received from Google APIs adheres to the{" "}
        <a href="https://developers.google.com/terms/api-services-user-data-policy">
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements.
      </p>

      <p>
        Google data is requested so the software can do the thing you asked it to do — read your real calendar
        when you ask for a plan for the day, draft into your own documents, find a file you referred to. It is
        used on your machine, in the session where you asked for it. It is not transmitted to us, not sold, not
        shared, not used for advertising, and not used to train any model by us.
      </p>

      <h3>Removing access</h3>

      <p>Any of these ends it, and none of them require us:</p>

      <ul>
        <li>
          Revoke access at{" "}
          <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a> — this is
          Google&rsquo;s own control and it is the authoritative one.
        </li>
        <li>
          Delete <code>~/.google_workspace_mcp/credentials/</code> on your machine.
        </li>
        <li>
          Remove the connector entirely: <code>claude mcp remove google-workspace</code>.
        </li>
      </ul>

      <p>
        Because we hold nothing, there is no deletion request to send us and no waiting period. If you would
        like confirmation of that in writing anyway, ask and we will send it.
      </p>

      <h2>Children</h2>

      <p>
        The AIOS is a developer and professional tool. It is not directed at children under 13 and we do not
        knowingly collect information from them — a claim made easy by the fact that we do not knowingly
        collect information from anyone.
      </p>

      <h2>Changes to this policy</h2>

      <p>
        If this policy changes, the date at the top changes with it, and the change is visible in the public
        git history of this website. A policy that can be edited silently is not much of a commitment; ours
        cannot be.
      </p>

      <h2>Contact</h2>

      <p>
        Questions, or anything here that reads as untrue:{" "}
        <a href="mailto:hello@the-aios.com">hello@the-aios.com</a>, or open an issue at{" "}
        <a href="https://github.com/The-AIOS/aios">github.com/The-AIOS/aios</a>.
      </p>
    </LegalPage>
  );
}
