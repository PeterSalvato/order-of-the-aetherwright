"""The sigil of a work, as Part IV sets it out (decided 5 Nov 2026).

The canonical star, traced from assets/sigils/sigil.full.cropped.png, is one closed line through
eight points, one domain per point. A work's sigil draws only the glyphs of the domains it
involved, and the shortest stretch of the star's line that passes through all of their points.
All eight domains give back the whole star. Order and outcome are left to the Codex.

    python tools/sigil.py ▲⬢ > savepoint.svg
"""
import sys

INK = '#0b0b0b'
# The star's points, in the drawing's 928px space
V = {'T1': (430, 122), 'T2': (490, 122), 'B1': (424, 698), 'B2': (488, 698),
     'UL': (192, 252), 'UR': (728, 256), 'LL': (192, 562), 'LR': (728, 560)}
# The order the line meets them, and the domain each carries
LOOP = ['T1', 'B1', 'UL', 'LR', 'T2', 'B2', 'UR', 'LL']
AT = {'◀': 'T1', '▼': 'B1', '■': 'UL', '⬢': 'LR', '▶': 'T2', '▲': 'B2', '◆': 'UR', '⬟': 'LL'}
# Where each glyph is set beside its point, outside the ring
SLOT = {'T1': (429, 28), 'T2': (491, 28), 'B1': (432, 794), 'B2': (488, 794),
        'UL': (118, 198), 'UR': (803, 199), 'LL': (116, 601), 'LR': (803, 600)}
SHAPE = {'▲': [(0, -14), (15, 12), (-15, 12)], '▼': [(0, 14), (15, -12), (-15, -12)],
         '◀': [(-14, 0), (12, 15), (12, -15)], '▶': [(14, 0), (-12, 15), (-12, -15)],
         '◆': [(0, -19), (19, 0), (0, 19), (-19, 0)], '■': [(-14, -14), (14, -14), (14, 14), (-14, 14)],
         '⬟': [(0, -16), (16, -4), (10, 15), (-10, 15), (-16, -4)],
         '⬢': [(0, -17), (15, -8), (15, 8), (0, 17), (-15, 8), (-15, -8)]}


def stretch(points):
    """The shortest stretch of the line through every point: the line minus its longest gap."""
    n = len(LOOP)
    idx = sorted(LOOP.index(p) for p in points)
    if len(idx) < 2:
        return []
    if len(idx) == n:
        return LOOP + [LOOP[0]]
    gap, k = max(((idx[(i + 1) % len(idx)] - idx[i]) % n, i) for i in range(len(idx)))
    start = idx[(k + 1) % len(idx)]
    return [LOOP[(start + i) % n] for i in range(n - gap + 1)]


def svg(domains):
    domains = [g for g in dict.fromkeys(domains) if g in AT]
    path = stretch([AT[g] for g in domains])
    out = [f'<circle cx="460" cy="410" r="346" fill="none" stroke="{INK}" stroke-width="20"/>']
    for a, b in zip(path, path[1:]):
        (x1, y1), (x2, y2) = V[a], V[b]
        out.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{INK}" stroke-width="30" stroke-linecap="round"/>')
    out.append(f'<g fill="{INK}"><rect x="140" y="382" width="9" height="46"/><rect x="156" y="378" width="9" height="54"/><rect x="172" y="382" width="9" height="46"/></g>')
    out.append(f'<text x="770" y="432" font-family="aptly, Arial Narrow, sans-serif" font-weight="700" font-size="74" text-anchor="middle" fill="{INK}">æ</text>')
    for g in domains:
        x, y = SLOT[AT[g]]
        pts = ' '.join(f'{x + a},{y + b}' for a, b in SHAPE[g])
        out.append(f'<polygon points="{pts}" fill="none" stroke="{INK}" stroke-width="7" stroke-linejoin="round"/>')
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 940 840">{"".join(out)}</svg>'


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    print(svg(sys.argv[1] if len(sys.argv) > 1 else ''.join(AT)))
