---
name: Order of the Ætherwright
description: A photocopied occult tract from the 1980s, played straight. Black toner on white copy paper, no grays, hierarchy from size, case, rules and reversed bars.

colors:
  paper: "#ffffff"   # bright copy paper
  ink: "#0b0b0b"     # toner
  # Two values only. A copier has no grays and no spot color.

typography:
  body:     { fontFamily: "Space Mono", fontSize: 15px, lineHeight: 1.65 }
  display:  { fontFamily: "Aptly", fontWeight: 700, textTransform: uppercase }   # the sigil's lettering; Adobe Fonts web project dii1fja
  page-title: { fontFamily: "Aptly", fontSize: "clamp(2.6rem, 6.4vw, 4.6rem)", lineHeight: 0.92 }
  part-numeral: { fontFamily: "Aptly", fontWeight: 800, fontSize: "clamp(6rem, 15vw, 13rem)" }
  section-heading: { fontFamily: "Aptly", treatment: reversed bar, fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)" }
  label:    { fontSize: 0.72rem, letterSpacing: 0.18em, textTransform: uppercase }

layout:
  max-width: 760px
  content-measure: 62ch
  breakpoint: 600px

textures:
  type-texture: assets/texture/toner.webp   # toner scan screened over black areas
  paper-texture: none                        # hook, waiting for Peter's scans
  ink-mask: none                             # hook, waiting for Peter's scans
---

# Order of the Ætherwright design

Rules for aetherwright.com, taken from decisions Peter made on October 29, 2026 and the site as it stands. When a design tool or skill disagrees with this file, this file wins.

## Overview

The Order of the Ætherwright is a structure for creative practice: eight glyphs, a codex, a sigil. The site presents its doctrine the way a secret society's tract from the 1980s would have circulated: typed, pasted up and run through an office copier, the look of satanic-panic-era photocopies. It's played straight, as if the Order were real.

- **Played straight.** No winking, no Halloween, no horror-movie fonts. The seriousness is the effect.
- **Black and white only.** No spot color, no grays. Hierarchy comes from size, weight, case, rules and reversed (white-on-black) bars.
- **Degradation lives in the display layer.** Titles, bars, the sigil and table headers take the toner scan. Body text stays clean and readable, because the doctrine has to be read.
- **Built from real material.** Peter has scans and textures. The direction comes from them, not from a generic grunge kit. Until they arrive, the texture hooks stay empty.
- **Mode: reading.** It's doctrine. The tract treatment frames the reading and never gets in its way.

Sibling site: savepointprotocol.org is also a numbered set of documents, treated as a typed spec. The two share structure and must not share treatment. Ætherwright is loud, black and white and copied. Savepoint is quiet, cool and typed.

## Colors

Ink and paper. Any third value would break the copier logic. Hover inverts: a link becomes white on a black block.

## Typography

Two faces. **Aptly** (Nick Shinn, Shinntype) is the display face: the sigil's wordmark is set in it, so the headlines match the mark. It sets the cover statement, the contents, part numerals, part titles and section heads, all in capitals. It loads from Peter's Adobe Fonts web project; the font files are never committed. **Space Mono** sets running text, the running head and small labels.

No typewriter faces: that look belongs to Savepoint (decided November 2, 2026).

- `em` is underlined, not italic, like typed emphasis.
- Section headings are reversed bars: Aptly capitals knocked out of black, a clear step up from the text so a long part reads in sections.

## The mark

The sigil: a circle enclosing interlocked A-forms that make a six-pointed star, with small geometric markers around it, and the wordmark "THE ORDER OF THE ÆTHERWRIGHT · MMXXV" below. It runs grayscale at 250% contrast with multiply blending, so it sits in the toner. On the home page the sigil lockup carries the name. On inner pages a 40px sigil and the name head the nav.

## Toner

The toner scan (`assets/texture/toner.webp`) is screened over the page, so black picks up streaks and dropout while white stays paper.

Copier marks come from the machine, so they sit in fixed places on the sheet (decided November 1, 2026). Drum streaks run the full length of the page at a fixed distance from the edge, and roller bands repeat at a fixed interval. So the scan is one layer for the whole page, at a fixed size, anchored to the sheet's top-left corner, and never stretched. A streak runs straight through every black area it crosses. Don't give each element its own random slice of the scan. 

Crush the scan so black stays black and only streaks, scratches and bands show. An even gray wash reads as dirt, not toner.

The page is mostly white. No large flooded black areas (Peter rejected a full-height black column on November 1, 2026). Black is for type, rules, bars and blocks.

## Components

### Cover and contents
The cover is the sigil beside the statement of what the Order is. Below it the contents: the word CONTENTS set large in black Aptly in the left column, held in view while the numbered list of parts (Roman numerals, Aptly capitals, ruled) runs beside it. A black "Begin · Part I" block closes it.

### Running head
Every page carries one line above a heavy rule: on the cover the Order's name, "Doctrine in 10 parts" and a numbered copy; inside a part, "← Contents", "Part II of X" and "Next: [part] →".

### Part page
The Roman numeral, very large in Aptly, holds the left column and stays in view as you read the part. The title sits beside it in large Aptly capitals over a rule; the text, section heads and the next-part block run in the column under the title. On phones it all stacks: numeral, title, text.

### Notices
Blockquotes are boxed warnings with a 3px border and bold text, like the notices in a tract.

### Tables
2px outer border, 1px cells, black header row with one toner scan across the whole row.

### Rules
4px for major breaks (masthead, header, footer nav), 1px for minor, and a double rule above the footer.

## Motion

Added 5 November 2026. The site moves like an office copier, because toner has no grays and nothing may fade (Peter: "80s satanic panic, not glowing magic"). Black arrives by being scanned, fed or snapped in, with hard edges. The code is the Motion block at the end of `main.scss`, a flag in `head.html` and the sigil script in `default.html`. None of it runs under reduced motion.

- **The copy pass:** the first page of a visit is copied once. A hard black lamp line runs down the sheet and the page appears behind it, while the sigil develops out of toner specks, each pixel either toner or paper. It waits for Aptly so headlines never show in a stand-in face.
- **Feed:** section bars and the next-part block feed in left to right, in hard steps, as they come up the screen.
- **Hover blocks:** contents rows, running-head links and the footer links invert under a block that wipes across in four hard steps.
- **Page to page:** the new page feeds out over the old one, top first, in hard steps.
- **Never:** glows, pulses, smoke, drifting, loops or fades.

## Layout

A single 760px column. Running text holds to 62ch. Headings, tables and rules run the full column. Below 600px the nav goes to two columns.

## Do

- Work from Peter's own scans and references.
- Keep every color decision binary: ink or paper.
- Put wear on display elements and keep the doctrine readable.
- Check phone layouts at a true 390px (Playwright at `C:\Users\ptsal\tools\shots`).

## Don't

- No color, not even one accent.
- No grays, transparency tricks or soft shadows that read as gray.
- No stock grunge: no splatter brushes, fake tape or distressed web fonts.
- No horror or Halloween tropes.
- No Joinery palette, and no Savepoint purple.
- Never apply toner or masks to body text.

## Open

- Navigation design (see Navigation).
- Display typeface, once references arrive.
- Paper texture and ink mask scans to fill the empty hooks.
