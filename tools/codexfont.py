# python tools/codexfont.py DejaVuSans.ttf assets/fonts/ae-glyphs.woff2   (needs fonttools and brotli)
# Cut DejaVu Sans down to the Codex characters and centre every mark on one axis (the square's middle).
import sys
from fontTools.ttLib import TTFont
from fontTools.subset import Subsetter, Options
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.transformPen import TransformPen
chars = '△▽◁▷□◇⬠⬡#|>∴'
f = TTFont(sys.argv[1])
o = Options(); o.layout_features = []; o.flavor = None
s = Subsetter(o); s.populate(text=chars); s.subset(f)
cmap = f.getBestCmap(); gs = f.getGlyphSet(); glyf = f['glyf']
def bounds(n):
    p = BoundsPen(gs); gs[n].draw(p); return p.bounds
sq = bounds(cmap[ord('□')]); axis = (sq[1] + sq[3]) / 2
for ch in chars:
    n = cmap[ord(ch)]; b = bounds(n); dy = round(axis - (b[1] + b[3]) / 2)
    pen = TTGlyphPen(gs); gs[n].draw(TransformPen(pen, (1, 0, 0, 1, 0, dy)))
    g = pen.glyph(); glyf[n] = g
for r in f['name'].names:
    if r.nameID in (1, 4, 16): r.string = 'AE Codex'
    if r.nameID == 6: r.string = 'AECodex'
f.flavor = 'woff2'
f.save(sys.argv[2])
