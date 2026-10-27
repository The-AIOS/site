#!/usr/bin/env python3
"""AIOS avatar generator: the AIOS ant (the logo is its head) with a hat or an initial.

Seeds and gallery: https://www.the-aios.com/avatar-seeds
Needs: pip install pymupdf pillow

  python3 generator.py list                         # every hat and the agent it belongs to
  python3 generator.py hat lawyer                   # by agent name or hat name, bundle colour
  python3 generator.py hat cowboy --colour "#0d9488"
  python3 generator.py hat --hat-svg my-hat.svg --colour "#7c3aed" --name gardener
  python3 generator.py initial C --colour "#ff5d4d"

A custom hat is SVG drawn in the hat box: base on y=1, centred on x=3.5, up is negative,
about 7 wide and at most ~6.3 tall. For scale, open any file in hats/ (e.g. aios-lawyer.svg):
the hat group there is drawn in exactly this box. Keep shapes few and bold; fine detail
vanishes at 40 px. Use fill="#fff" for the hat and "BG" for cut-out details.
Every hat render is checked against Discord's circle crop (initials have fixed, safe geometry).
Every render also writes a 40 px preview (*-40.png) to check that it still reads small.
Initials use JetBrains Mono ExtraBold (OFL), downloaded from github.com on first use if not installed. Coral #ff5d4d is kept for the AIOS team.
"""
import argparse, io, json, math, os, sys, urllib.request
import fitz
from PIL import Image, ImageDraw, ImageFont
W='#fff'
# --- fixed geometry (do not reshape) -------------------------------------------------
ANT='''<path d="M 11.5 1 C 12 -1.5, 13.5 -3, 15.5 -3.5" fill="none" stroke="C" stroke-width="SW" stroke-linecap="round"/>
<path d="M 7 1 C 7 -2, 8.3 -3.7, 10.3 -4.3" fill="none" stroke="C" stroke-width="SW" stroke-linecap="round"/>
<circle cx="15.9" cy="-3.6" r="R" fill="C"/><circle cx="10.7" cy="-4.4" r="R" fill="C"/>'''
def ant(c,sw,r): return ANT.replace('C"',c+'"').replace('SW',str(sw)).replace('"R"',f'"{r}"')
BOX='<rect x="1" y="1" width="16" height="16" rx="2" fill="BG" stroke="#fff" stroke-width="1.5"/><rect x="9" y="2" width="6" height="6" rx="1" fill="#fff"/>'
# --- frame: head centre x=9; composition (head + hat zone + antennae) centred in the circle
R=17.5; CX=7.8; CY=5.0
VB=f'{CX-R} {CY-R} {2*R} {2*R}'
# hat placement: local box (base y=1, centre x=3.5) -> head coords
HX=4.4; HS=1.7
HAT_T=f'translate({HX} 1) scale({HS}) translate(-3.5 -1)'
f=f'fill="{W}"'
B='fill="BG"'
L=lambda w: f'fill="none" stroke="{W}" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round"'
LB=lambda w: f'fill="none" stroke="BG" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round"'
def star(cx,cy,ro,ri,n=5):
    pts=[]
    for i in range(2*n):
        a=-math.pi/2+i*math.pi/n; r=ro if i%2==0 else ri
        pts.append(f'{cx+r*math.cos(a):.2f} {cy+r*math.sin(a):.2f}')
    return 'M '+' L '.join(pts)+' Z'
# hats in a local box: base y=1, x about 0..7 (centre 3.5), up is negative.
# budget (circle crop): <= ~6.3 tall at the centre, less toward the far left; FULL: hats are in head coordinates
H={
'wizard':f'<path {f} d="M -0.9 1.2 L 2.4 -3.6 C 2.8 -4.6, 3.4 -5.3, 4.6 -5.5 C 4.1 -4.9, 3.9 -4.1, 4.2 -3.1 L 7.9 1.2 Z"/><circle cx="5.1" cy="-5.3" r="0.95" {f}/><ellipse cx="3.5" cy="0.9" rx="5.6" ry="1.2" {f}/><path {B} d="{star(3.45,-1.0,1.5,0.64)}"/>',
'crown':f'<path {f} d="M -0.1 1.4 L 0.1 -3.6 L 1.9 -1.4 L 3.5 -4.9 L 5.1 -1.4 L 6.9 -3.6 L 7.1 1.4 Z"/><g {f}><circle cx="0.1" cy="-3.6" r="0.62"/><circle cx="3.5" cy="-4.9" r="0.62"/><circle cx="6.9" cy="-3.6" r="0.62"/></g><g {B}><circle cx="1.6" cy="-0.1" r="0.6"/><circle cx="3.5" cy="-0.1" r="0.6"/><circle cx="5.4" cy="-0.1" r="0.6"/></g>',
'deerstalker':f'<path {f} d="M -0.2 1.2 C -0.2 -4.6, 7.2 -4.6, 7.2 1.2 Z"/><path {f} d="M 0 -1.3 C -2.2 -1.3, -3.4 -0.2, -3.7 1.3 L 0 1.3 Z"/><path {f} d="M 7 -1.3 C 9.2 -1.3, 10.4 -0.2, 10.7 1.3 L 7 1.3 Z"/><g {f}><ellipse cx="2" cy="-4" rx="1.5" ry="0.85" transform="rotate(-38 2 -4)"/><ellipse cx="5" cy="-4" rx="1.5" ry="0.85" transform="rotate(38 5 -4)"/></g><path d="M -0.2 -0.5 L 7.2 -0.5" {LB(0.7)}/>',
'pencil':f'<g transform="rotate(-30 3.5 -0.8)"><rect x="-2.2" y="-2.2" width="10.8" height="2.9" rx="0.6" {f}/><path {f} d="M 8.4 -2.2 L 11.1 -0.75 L 8.4 0.7 Z"/><path d="M -0.3 -2.2 L -0.3 0.7" {LB(0.7)}/><path d="M 8.4 -2.2 L 8.4 0.7" {LB(0.55)}/></g>',
'hardhat':f'<path {f} d="M -0.6 1.2 C -0.6 -4.9, 7.6 -4.9, 7.6 1.2 Z"/><rect x="-2.3" y="0" width="11.6" height="1.6" rx="0.8" {f}/><path d="M 3.5 -3.4 L 3.5 0" {LB(0.8)}/><path d="M 1.1 -2 L 1.1 0" {LB(0.55)}/><path d="M 5.9 -2 L 5.9 0" {LB(0.55)}/>',
'knight':f'<path {f} d="M -0.3 1.2 L -0.3 -2.4 C -0.3 -5.2, 7.3 -5.2, 7.3 -2.4 L 7.3 1.2 Z"/><path {f} d="M 3.3 -4.4 C 4 -6.3, 6.4 -6.7, 8.4 -5.9 C 7 -5.8, 6 -5, 5.3 -3.8 Z"/><g {LB(0.75)}><path d="M 0.8 -1.5 L 6.2 -1.5"/><path d="M 3.5 -4.2 L 3.5 -2.1"/></g>',
'backcap':f'<path {f} d="M -0.3 1.2 C -0.3 -4, 7.3 -4, 7.3 1.2 Z"/><path {f} d="M 0.4 0.4 L -3.2 1.4 C -3.2 0, -1.6 -1, 0.4 -1.2 Z"/><circle cx="3.5" cy="-2.9" r="0.6" {f}/><path d="M 3.5 -2.4 L 3.5 1" {LB(0.5)}/>',
'feathercap':f'<path {f} d="M -1.8 1.2 L 8.8 1.2 C 7.6 -3, 1.2 -4.8, -1.8 1.2 Z"/><path {f} d="M 2.6 -1 C 3 -3.8, 4.3 -5.5, 6.4 -6 C 6.3 -3.7, 5.5 -1.9, 4 -0.6 Z"/><path d="M 3.3 -1.1 C 3.9 -2.9, 4.8 -4.3, 5.9 -5.5" {LB(0.5)}/>',
'partyhat':f'<path {f} d="M 0 1.2 L 3.5 -4.9 L 7 1.2 Z"/><circle cx="3.5" cy="-5" r="1" {f}/><g {LB(0.75)}><path d="M 0.9 -0.4 L 6.1 -2.6"/><path d="M 2 -2.6 L 5 -3.8"/><path d="M 0.3 1.4 L 6.9 -1"/></g>',
'sailor':f'<rect x="-0.4" y="-3.7" width="7.8" height="4" rx="1.9" {f}/><path {f} d="M -3 1.3 C -3 -1.4, -2 -2.8, -0.7 -1.8 C 1.5 -0.7, 5.5 -0.7, 7.7 -1.8 C 9 -2.8, 10 -1.4, 10 1.3 Z"/><path d="M -0.2 -0.9 L 7.2 -0.9" {LB(0.7)}/>',
'beret':f'<ellipse cx="3.5" cy="-0.6" rx="5.7" ry="2.6" {f} transform="rotate(-9 3.5 -0.6)"/><path d="M 3.1 -3.1 L 3.6 -4.5" {L(1.1)}/>',
'paperhat':f'<path {f} d="M -1.3 1.2 L 3.5 -5.3 L 8.3 1.2 Z"/><rect x="-1.7" y="-1" width="10.4" height="2.4" rx="0.3" {f}/><g {LB(0.6)}><path d="M -1.3 -1 L 8.3 -1"/><path d="M 0.2 -1 L 3.5 -4.6"/><path d="M 1.5 -3.4 L 5.5 -3.4"/></g>',
'postalcap':f'<path {f} d="M -0.2 0.8 L -0.8 -3 C 2 -4.2, 5 -4.2, 7.8 -3 L 7.2 0.8 Z"/><path {f} d="M 3.5 0.4 L 9.8 0.4 C 9.8 1.6, 6 2, 3.5 1.6 Z"/><rect x="1.8" y="-2.6" width="3.4" height="2.3" rx="0.2" {B}/><path d="M 1.9 -2.5 L 3.5 -1.2 L 5.1 -2.5" {L(0.5)}/>',
'lightbulb':f'<circle cx="3.5" cy="-3.4" r="2.6" {f}/><path {f} d="M 1.9 -2 L 5.1 -2 L 4.9 1.2 L 2.1 1.2 Z"/><g {LB(0.55)}><path d="M 2.1 -0.7 L 4.9 -0.7"/><path d="M 2.2 0.3 L 4.8 0.3"/><path d="M 2.4 -1.9 L 2.9 -3.4 L 3.5 -2.3 L 4.1 -3.4 L 4.6 -1.9"/></g>',
'book':f'<g transform="rotate(-6 3.5 -0.8)"><rect x="-1.6" y="-2.8" width="10.2" height="3.9" rx="0.5" {f}/><g {LB(0.55)}><path d="M -0.6 -1.7 L 7.2 -1.7"/><path d="M -0.6 -0.5 L 7.2 -0.5"/></g><rect x="7.1" y="-2.8" width="1.5" height="3.9" {B}/></g>',
'newsboy':f'<path {f} d="M -1.9 0.3 C -1.7 -4.1, 8 -4.7, 8.7 -0.2 C 8.7 0.7, -1.9 0.9, -1.9 0.3 Z"/><path {f} d="M 2 0 L 10 0 C 10.2 1.1, 7 1.6, 2 1.4 Z"/><circle cx="3.4" cy="-3.3" r="0.6" {B}/><g transform="rotate(-10 0.85 -2.6)"><rect x="-0.4" y="-4.2" width="2.5" height="3.2" rx="0.25" {f}/><g {LB(0.5)}><path d="M 0.2 -3.3 L 1.5 -3.3"/><path d="M 0.2 -2.3 L 1.5 -2.3"/></g></g>',
'tophat':f'<rect x="0.5" y="-5.2" width="6" height="6.2" rx="0.5" {f}/><rect x="-1.6" y="0" width="10.2" height="1.6" rx="0.8" {f}/><rect x="0.5" y="-1.9" width="6" height="1.2" {B}/>',
'policecap':f'<path {f} d="M -0.4 0 L -1.5 -3.3 C 2 -4.7, 5 -4.7, 8.5 -3.3 L 7.4 0 Z"/><rect x="-0.4" y="-0.6" width="7.8" height="1.6" rx="0.3" {f}/><path {f} d="M 3.5 0.6 L 9.8 0.6 C 9.6 1.8, 5.6 2, 3.5 1.4 Z"/><path {B} d="{star(3.5,-2.2,1.3,0.55)}"/><path d="M -0.4 -0.6 L 7.4 -0.6" {LB(0.5)}/>',
'bubble':f'<g {f}><circle cx="1.6" cy="-3.3" r="1.55"/><circle cx="6.4" cy="-3.3" r="1.55"/><circle cx="4" cy="-4.1" r="1.9"/><rect x="1.6" y="-4" width="4.8" height="2.2" rx="1"/><circle cx="1.6" cy="-0.7" r="0.8"/><circle cx="0.6" cy="0.8" r="0.5"/></g><g {B}><circle cx="2.4" cy="-3.1" r="0.5"/><circle cx="4" cy="-3.1" r="0.5"/><circle cx="5.6" cy="-3.1" r="0.5"/></g>',
'firefighter':f'<path {f} d="M -0.4 1.2 C -0.4 -4.6, 7.4 -4.6, 7.4 1.2 Z"/><path {f} d="M 1.6 -3.2 C 2 -5, 5 -5, 5.4 -3.2 Z"/><path {f} d="M -0.2 -0.2 L -3.8 2.6 C -3.6 0.6, -2.2 -0.6, -0.2 -0.8 Z"/><rect x="-0.9" y="-0.1" width="10.6" height="1.6" rx="0.8" {f}/><path {B} d="M 2 -2.9 L 5 -2.9 L 5 -1.4 C 5 -0.4, 3.5 0, 3.5 0 C 3.5 0, 2 -0.4, 2 -1.4 Z"/>',
'sprout':f'<path d="M 3.5 1.2 L 3.5 -2.6" {L(1.2)}/><path {f} d="M 3.5 -2.4 C 3.4 -4, 2.2 -5.3, 0.9 -5 C 0.9 -3.2, 1.9 -2.3, 3.5 -2.4 Z"/><path {f} d="M 3.5 -2.4 C 3.6 -4, 4.8 -5.3, 6.1 -5 C 6.1 -3.2, 5.1 -2.3, 3.5 -2.4 Z"/>',
'nightcap':f'<path {f} d="M -0.6 1.2 C 0 -3, 3 -5.2, 7.2 -4.9 C 5.8 -3.4, 6.9 -1.2, 7.4 1.2 Z"/><circle cx="7.9" cy="-4.9" r="1.1" {f}/><rect x="-1.2" y="-0.3" width="9.4" height="1.7" rx="0.85" {f}/><path d="M -0.8 -0.3 L 7.8 -0.3" {LB(0.6)}/>',
'propeller':f'<path {f} d="M -0.2 1.2 C -0.2 -3.8, 7.2 -3.8, 7.2 1.2 Z"/><line x1="3.5" y1="-2.4" x2="3.5" y2="-4.3" {L(0.8)}/><ellipse cx="1.75" cy="-4.4" rx="1.75" ry="0.72" {f}/><ellipse cx="5.25" cy="-4.4" rx="1.75" ry="0.72" {f}/><g {LB(0.55)}><path d="M 1.5 -1.7 L 1.2 1"/><path d="M 5.5 -1.7 L 5.8 1"/></g>',
'gradcap':f'<rect x="0.8" y="-2.2" width="5.6" height="3.4" rx="0.5" {f}/><path {f} d="M -1.7 -2.6 L 3.5 -5.2 L 8.7 -2.6 L 3.5 0 Z"/><path d="M 3.5 -2.6 L -1.2 -1.6 L -1.2 1.4" {L(0.9)}/><circle cx="-1.2" cy="1.9" r="0.8" {f}/>',
'radar':f'<line x1="3.5" y1="1" x2="3.5" y2="-1.4" {L(1.1)}/><path {f} d="M 0.3 -4.6 C 1.3 0.1, 6.6 0.5, 8.6 -2.6 Z"/><line x1="4.2" y1="-2.4" x2="5.4" y2="-4.9" {L(0.7)}/><circle cx="5.6" cy="-5.2" r="0.75" {f}/><path d="M 6.9 -5.4 C 7.7 -5, 8.2 -4.3, 8.4 -3.5" {L(0.65)}/>',
'sticky':f'<g transform="rotate(8 3.6 -1.9)"><path {f} d="M 0.8 -4.9 L 6.4 -4.9 L 6.4 -0.4 L 4.8 1.1 L 0.8 1.1 Z"/><path {B} d="M 6.4 -0.4 L 4.8 -0.4 L 4.8 1.1 Z"/><g {LB(0.55)}><path d="M 1.8 -3.4 L 5.4 -3.4"/><path d="M 1.8 -2.1 L 5.4 -2.1"/><path d="M 1.8 -0.8 L 4 -0.8"/></g></g>',
'cowboy':f'<path {f} d="M 0.9 0.4 L 0.5 -4.3 C 1.4 -5.5, 2.6 -4.3, 3.5 -5.1 C 4.4 -4.3, 5.6 -5.5, 6.5 -4.3 L 6.1 0.4 Z"/><path {f} d="M -2.5 -1.6 C -2.9 1.7, 9.9 1.7, 10.3 -1.6 C 9.5 -0.3, 8.6 0.3, 7.6 0.3 L -0.6 0.3 C -1.6 0.3, -2 -0.3, -2.5 -1.6 Z"/>',
'fedora':f'<path {f} d="M 0.6 0.4 L 1 -4 C 1.8 -4.6, 2.8 -3.6, 3.5 -4.4 C 4.2 -3.6, 5.2 -4.6, 6 -4 L 6.4 0.4 Z"/><path {f} d="M -1.9 0.1 C -0.6 -0.5, 1.5 -0.6, 3.5 -0.6 C 6 -0.6, 8.3 -0.3, 9.7 1.3 C 9.6 1.9, -1.9 1.9, -1.9 0.1 Z"/><rect x="0.4" y="-1.9" width="6.2" height="1.3" {B}/>',
'miner':f'<path {f} d="M -0.5 1.2 C -0.5 -4.6, 7.5 -4.6, 7.5 1.2 Z"/><rect x="-1.8" y="0.1" width="10.6" height="1.5" rx="0.75" {f}/><circle cx="3.5" cy="-2.2" r="1.55" {B}/><circle cx="3.5" cy="-2.2" r="0.75" {f}/><path d="M -0.5 -0.6 L 7.5 -0.6" {LB(0.5)}/>',
'bowler':f'<path {f} d="M 0.6 0.4 C 0.6 -4.4, 6.4 -4.4, 6.4 0.4 Z"/><path {f} d="M -1.2 0.6 C -1.2 -0.4, 0 0, 3.5 0 C 7 0, 8.2 -0.4, 8.2 0.6 C 8.2 1.7, -1.2 1.7, -1.2 0.6 Z"/><rect x="0.6" y="-0.9" width="5.8" height="0.9" {B}/>',
'pith':f'<path {f} d="M -0.2 0.2 C -0.2 -6, 7.2 -6, 7.2 0.2 Z"/><path {f} d="M -3 1.6 C -2 -0.7, 9 -0.7, 10 1.6 C 6.4 0.6, 0.6 0.6, -3 1.6 Z"/><circle cx="3.5" cy="-4.6" r="0.8" {f}/><path d="M 0.2 -0.7 L 6.8 -0.7" {LB(0.8)}/><path d="M 3.5 -4 L 3.5 -1.3" {LB(0.5)}/>',
'FULL:laurel':f'<g {L(0.8)}><path d="M -1.6 10.4 C -2.8 5, -1 0.6, 4.6 -3"/><path d="M 19.6 10.4 C 20.8 5, 19.6 1.4, 17.4 -0.4"/></g><g {f}>'+''.join(f'<ellipse cx="{x}" cy="{y}" rx="2.7" ry="1.2" transform="rotate({a} {x} {y})"/>' for x,y,a in [(-1.5,8.2,-82),(-1.2,4.2,-62),(0.6,0.6,-42),(3.9,-2.3,-16),(19.5,8.2,82),(19.2,4.2,62),(17.4,0.6,42)])+'</g>',
'captain':f'<path {f} d="M -0.6 0 L -1.3 -3 C 2 -4.6, 5 -4.6, 8.3 -3 L 7.6 0 Z"/><rect x="-0.6" y="-0.7" width="8.2" height="1.7" rx="0.3" {B}/><rect x="-0.6" y="-0.7" width="8.2" height="1.7" rx="0.3" fill="none" stroke="#fff" stroke-width="0.5"/><path {f} d="M 3.5 0.9 L 9.9 0.9 C 9.7 2.1, 5.6 2.3, 3.5 1.7 Z"/><g {LB(0.55)}><circle cx="3.5" cy="-3.1" r="0.5"/><path d="M 3.5 -2.5 L 3.5 -1.2"/><path d="M 2.4 -1.9 C 2.6 -1.1, 4.4 -1.1, 4.6 -1.9"/></g>',
'signpost':f'<line x1="3.5" y1="1" x2="3.5" y2="-5.6" {L(1)}/><path {f} d="M 3.8 -5.6 L 7.6 -5.6 L 8.7 -4.7 L 7.6 -3.8 L 3.8 -3.8 Z"/><path {f} d="M 3.2 -3.2 L -0.5 -3.2 L -1.6 -2.3 L -0.5 -1.4 L 3.2 -1.4 Z"/>',
'boater':f'<g transform="rotate(-6 3.5 0.4)"><rect x="-3" y="0" width="13" height="1.3" rx="0.65" {f}/><rect x="0.3" y="-2.9" width="6.4" height="3.2" rx="0.4" {f}/><rect x="0.3" y="-1.8" width="6.4" height="1.1" {B}/></g>',
'pirate':f'<path {f} d="M -2.6 1.2 C 0 0, 7 0, 9.6 1.2 C 9.4 -1.6, 8 -3.2, 6.6 -3 C 5.8 -6, 1.2 -6, 0.4 -3 C -1 -3.2, -2.4 -1.6, -2.6 1.2 Z"/><circle cx="3.5" cy="-3.2" r="0.95" {B}/><g {LB(0.7)}><path d="M 2.2 -1.7 L 4.8 0.3"/><path d="M 4.8 -1.7 L 2.2 0.3"/></g>',
'chef':f'<g {f}><circle cx="1.4" cy="-3.2" r="1.7"/><circle cx="5.6" cy="-3.2" r="1.7"/><circle cx="3.5" cy="-4" r="1.9"/><rect x="0.2" y="-3.4" width="6.6" height="4.7" rx="0.5"/></g><g {LB(0.7)}><path d="M 2.4 -1.5 L 2.4 1"/><path d="M 4.6 -1.5 L 4.6 1"/></g>',
'nursecap':f'<path {f} d="M -1 1.4 L 0.2 -3.6 L 6.8 -3.6 L 8 1.4 Z"/><path {B} d="M 2.9 -2.9 h 1.2 v 1.4 h 1.4 v 1.2 h -1.4 v 1.4 h -1.2 v -1.4 h -1.4 v -1.2 h 1.4 Z"/>',
'FULL:sunglasses':f'<g transform="rotate(-12 2.2 -1.6)"><path d="M -2.6 -1.6 L -4.8 0.4" {L(1)}/><rect x="-3.6" y="-3.5" width="4.6" height="3.6" rx="1.4" {f}/><rect x="1.9" y="-3.5" width="4.6" height="3.6" rx="1.4" {f}/><path d="M 0.8 -2 L 2.2 -2" {L(1.1)}/><g {B}><rect x="-2.5" y="-2.5" width="2.4" height="1.7" rx="0.65"/><rect x="3" y="-2.5" width="2.4" height="1.7" rx="0.65"/></g></g>',
'FULL:visor':f'<rect x="-1.8" y="-1.5" width="8.8" height="3.1" rx="0.9" {f}/><path {f} d="M 2.2 -0.4 C -2 -2.2, -5.4 -1.6, -7.8 1.6 C -5 0.6, -2 0.8, 2.2 1.6 Z"/>',
'FULL:headphones':f'<path d="M -0.6 6 C -0.6 -12.4, 18.6 -12.4, 18.6 6" {L(1.8)}/><rect x="-2.9" y="3.6" width="4" height="7" rx="1.4" {f}/><rect x="16.9" y="3.6" width="4" height="7" rx="1.4" {f}/>',
'FULL:headset':f'<path d="M -0.4 6 C -0.4 -12, 18.4 -12, 18.4 6" {L(1.2)}/><rect x="-2.4" y="4.2" width="3.2" height="5.4" rx="1.3" {f}/><path d="M -0.8 9.6 C -0.6 13.4, 2.6 14.4, 5 13.8" {L(1)}/><rect x="4.6" y="12.8" width="2.4" height="1.9" rx="0.95" {f}/>',
'FULL:wig':f'<g {f}>'+''.join(f'<circle cx="{x}" cy="{y}" r="1.85"/>' for x,y in [(0.4,0.2),(2.8,-1.1),(5.4,-1.8),(8,-2),(10.6,-2),(13.2,-1.8),(15.8,-1.1),(17.8,0.2),(-0.5,2.9),(-0.7,5.8),(-0.5,8.7),(18.5,2.9),(18.7,5.8),(18.5,8.7)])+'</g>',
}
AGENTS=[
('engineering','#0284c7',[('aios-builder','wizard'),('technical-cofounder','crown'),('bug-triager','deerstalker'),('code-reviewer','FULL:sunglasses'),('code-documenter','pencil'),('refactor-engineer','hardhat'),('security-engineer','knight'),('growth-engineer','backcap')]),
('communication','#db2777',[('content-writer','feathercap'),('content-scheduler','partyhat'),('deck-builder','sailor'),('design-md-author','beret'),('animation-composer','FULL:headphones'),('brochure-builder','paperhat'),('email-drafter','postalcap'),('explainer','lightbulb'),('kdp-publisher','book'),('meeting-prepper','FULL:headset'),('report-drafter','newsboy')]),
('finance-legal','#059669',[('accountant','FULL:visor'),('invoice-tracker','tophat'),('lawyer','FULL:wig'),('compliance-checker','policecap')]),
('personal','#7c3aed',[('aios-feedback','bubble'),('crisis-mode','firefighter'),('decision-journaler','signpost'),('growth-companion','sprout'),('journal-prompter','nightcap'),('onboarding-aios','propeller'),('study-buddy','gradcap')]),
('sales','#ea580c',[('brand-monitor','radar'),('crm-updater','sticky'),('lead-generator','cowboy'),('proposal-writer','fedora')]),
('strategy','#1e40af',[('company-analyst','miner'),('consultant','bowler'),('market-researcher','pith'),('okr-coach','FULL:laurel'),('protocol-steward','captain')]),
('commerce','#ca8a04',[('commerce-agent-architect','boater')]),
('community','#ff5d4d',[('operator',None),('creator','wizard')]),
('community+','#334155',[('pirate','pirate'),('chef','chef'),('nurse','nursecap')]),
]
def svg_for(hat,c):
    if hat is None: h=''
    elif hat.startswith('FULL:'): h=H[hat]
    else: h=f'<g transform="{HAT_T}">{H[hat]}</g>'
    body=h+ant(c,2.8,1.75)+ant('#fff',1.2,1)+BOX
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{VB}" width="1024" height="1024"><rect x="{CX-R}" y="{CY-R}" width="{2*R}" height="{2*R}" fill="{c}"/>{body}</svg>'.replace('BG',c)

# --- initials: a mono letter behind a see-through ant head --------------------------------
FONT_URL='https://github.com/JetBrains/JetBrainsMono/raw/master/fonts/ttf/JetBrainsMono-ExtraBold.ttf'
def font_path():
    for p in ['/Library/Fonts/JetBrainsMono-ExtraBold.ttf',os.path.expanduser('~/Library/Fonts/JetBrainsMono-ExtraBold.ttf'),'JetBrainsMono-ExtraBold.ttf']:
        if os.path.exists(p): return p
    p=os.path.join(os.path.dirname(os.path.abspath(__file__)),'JetBrainsMono-ExtraBold.ttf')
    if not os.path.exists(p): urllib.request.urlretrieve(FONT_URL,p)  # OFL-1.1, JetBrains
    return p
def shade(h,a=0.26):
    r,g,b=(int(h[i:i+2],16) for i in (1,3,5)); return tuple(int(c*(1-a)) for c in (r,g,b))
def initial_png(letter,c):
    im=Image.new('RGBA',(1024,1024),c)
    ImageDraw.Draw(im).text((512,560),letter.upper(),font=ImageFont.truetype(font_path(),1000),fill=shade(c),anchor='mm')
    head=('<rect x="1" y="1" width="16" height="16" rx="2" fill="none" stroke="#fff" stroke-width="1.5"/>'
          '<rect x="9" y="2" width="6" height="6" rx="1" fill="#fff"/>'+ant('#fff',1.2,1))
    svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -14.8 42 42" width="1024" height="1024">{head}</svg>'
    p=fitz.open(stream=svg.encode(),filetype='svg')[0].get_pixmap(alpha=True)
    im.alpha_composite(Image.open(io.BytesIO(p.tobytes('png'))).convert('RGBA'))
    return im.convert('RGB')
def check(rows,margin=0.8):
    """max distance (in head units) of any white pixel from the frame centre; flag > R-margin"""
    from PIL import ImageChops
    px=1024/(2*R); bad=[]
    def outside(im,r):  # any white pixel farther than r units from centre?
        m=Image.new('L',(1024,1024),255); rp=r*px
        ImageDraw.Draw(m).ellipse((511.5-rp,511.5-rp,511.5+rp,511.5+rp),fill=0)
        return ImageChops.multiply(im,m).getbbox() is not None
    for _,n in rows:
        im=Image.open(f'{OUT}/aios-{n}.png').convert('L').point(lambda v:255 if v>200 else 0)
        lo,hi=0.0,R*1.5
        for _ in range(12):
            mid=(lo+hi)/2
            if outside(im,mid): lo=mid
            else: hi=mid
        if hi>R-margin: bad.append((n,round(hi,2)))
    return bad

BUNDLE_COLOUR={b:c for b,c,_ in AGENTS}
AGENT_HAT={n:(h,c,b) for b,c,items in AGENTS for n,h in items}
CORAL='#ff5d4d'
INITIAL_PALETTE=['#ca8a04','#0284c7','#ea580c','#0d9488','#4f46e5','#7c3aed','#1e40af','#059669','#b45309','#65a30d','#db2777','#a21caf','#78716c','#334155','#be123c']

def preview40(path_png):
    Image.open(path_png).convert('RGB').resize((40,40),Image.LANCZOS).save(path_png[:-4]+'-40.png')

def render_svg(svg,path_png):
    fitz.open(stream=svg.encode(),filetype='svg')[0].get_pixmap().save(path_png)
    preview40(path_png)

def main():
    ap=argparse.ArgumentParser(description=__doc__,formatter_class=argparse.RawDescriptionHelpFormatter)
    sub=ap.add_subparsers(dest='cmd',required=True)
    sub.add_parser('list')
    h=sub.add_parser('hat'); h.add_argument('which',nargs='?'); h.add_argument('--colour'); h.add_argument('--hat-svg'); h.add_argument('--name'); h.add_argument('--out',default='.')
    i=sub.add_parser('initial'); i.add_argument('letter'); i.add_argument('--colour',default=INITIAL_PALETTE[1]); i.add_argument('--out',default='.')
    a=ap.parse_args()
    if a.cmd=='list':
        for b,c,items in AGENTS:
            print(f'{b} {c}')
            for n,hat in items: print(f'  {n:26} {hat or "(no hat)"}')
        return
    if a.cmd=='initial':
        p=os.path.join(a.out,f'aios-{a.letter.upper()}.png'); initial_png(a.letter[0],a.colour).save(p); preview40(p); print(p); return
    if a.hat_svg:
        hat_key='custom'; H['custom']=open(a.hat_svg).read(); colour=a.colour or '#334155'; name=a.name or 'custom'
    else:
        if not a.which: sys.exit('name an agent or a hat (see: generator.py list), or pass --hat-svg')
        if a.which in AGENT_HAT: hat_key,colour,_=AGENT_HAT[a.which]
        elif a.which in H or 'FULL:'+a.which in H: hat_key=a.which if a.which in H else 'FULL:'+a.which; colour='#334155'
        else: sys.exit(f'unknown agent or hat: {a.which} (see: generator.py list)')
        colour=a.colour or colour; name=a.name or a.which
    svg=svg_for(hat_key,colour); base=os.path.join(a.out,f'aios-{name}')
    open(base+'.svg','w').write(svg); render_svg(svg,base+'.png')
    global OUT; OUT=a.out
    bad=check([('',name)])
    print(base+'.png'+('' if not bad else f'  WARNING: reaches past the circle crop {bad}; make the hat smaller'))

if __name__=='__main__':
    main()
