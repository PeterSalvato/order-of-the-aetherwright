---
layout: doctrine
title: "The Codex"
nav_title: "Codex"
description: "How one line of glyphs records the phases of a work, and how to read it."
order: 3
---

A Codex is one line of glyphs that records how a work was made, phase by phase. It is plain text, so it can be written anywhere: in a margin, at the head of a notebook page, in a footer or in a commit message.

```
/Æ/#|●▼||▲◆|||▶⬢⟩⟩[projects.versograms.cherubrock]/
```

## The marks

| Mark | Meaning |
|------|---------|
| `/ … /` | Opens and closes the Codex |
| `Æ` | Marks the line as a Codex |
| `#` | The first cut: where the work begins |
| <code>&#124;</code> <code>&#124;&#124;</code> <code>&#124;&#124;&#124;</code> | First, second and third phase, and so on |
| `●` | Study |
| `∅` | A phase in which no domain was active |
| `▲ ▼ ◀ ▶ ■ ◆ ⬟ ⬢` | The domains active in that phase, from [Part II]({{ '/doctrine/glyphs/' | relative_url }}) |
| `⟩` | Finished, not released |
| `⟩⟩` | Finished and released |
| `~` | Ongoing, with no end |
| `×` | Abandoned |
| `[ … ]` | The work's name, its parts separated by dots |

## The rules

1. A Codex opens with `#` and closes with one of the four end marks: `⟩`, `⟩⟩`, `~` or `×`.
2. It holds one phase or more.
3. Within a phase, glyphs are written in the order each domain first became active.
4. `●` may stand alone in a phase or come before the domain glyphs.
5. `∅` may stand in a phase but may not close the Codex.
6. A Codex has no spaces.

## Reading a Codex

A glyph that appears in more than one phase marks a domain the work came back to. `▶` in the first phase and again in the third means the drawing was sketched early and finished late. A Codex that opens with `●` began with study.

Read from the start, a Codex gives the order the work was done in. Read from the end, it traces a finished work back to where it began.

## Examples

Three phases, released:

```
/Æ/#|●▼||▲◆|||▶⬢⟩⟩[projects.versograms.cherubrock]/
```

Study only, ongoing:

```
/Æ/#|●||●|||●~[systems.signals]/
```

Finished and released:

```
/Æ/#|●||▲⬢|||⬢⟩⟩[systems.savepoint.protocol]/
```

Two empty phases, then drawing, released:

```
/Æ/#|∅||∅|||▶⟩⟩[studies.miniposters.oneoff]/
```
