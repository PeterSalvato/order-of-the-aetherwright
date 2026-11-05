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

Each Codex can be drawn as a seal: the sigil's wheel with the domains the work used filled in, study at the centre, and the ring giving the end. A double ring is released, a single ring finished, an open ring ongoing, and a struck seal abandoned.

<div class="ex"><p>Three phases, released:</p><pre><code>/Æ/#|●▼||▲◆|||▶⬢⟩⟩[projects.versograms.cherubrock]/</code></pre><figure class="seal" data-codex="/Æ/#|●▼||▲◆|||▶⬢⟩⟩[projects.versograms.cherubrock]/"></figure></div>

<div class="ex"><p>Study only, ongoing:</p><pre><code>/Æ/#|●||●|||●~[systems.signals]/</code></pre><figure class="seal" data-codex="/Æ/#|●||●|||●~[systems.signals]/"></figure></div>

<div class="ex"><p>Finished and released:</p><pre><code>/Æ/#|●||▲⬢|||⬢⟩⟩[systems.savepoint.protocol]/</code></pre><figure class="seal" data-codex="/Æ/#|●||▲⬢|||⬢⟩⟩[systems.savepoint.protocol]/"></figure></div>

<div class="ex"><p>Two empty phases, then drawing, released:</p><pre><code>/Æ/#|∅||∅|||▶⟩⟩[studies.miniposters.oneoff]/</code></pre><figure class="seal" data-codex="/Æ/#|∅||∅|||▶⟩⟩[studies.miniposters.oneoff]/"></figure></div>

## Write a Codex

Mark a work here. Choose the glyphs for each phase in the order the domains became active, choose how the work ended and name it. The Codex is written below with its seal, to copy or save.

{% include codex-writer.html %}

<script src="{{ '/assets/js/codex.js' | relative_url }}" defer></script>
