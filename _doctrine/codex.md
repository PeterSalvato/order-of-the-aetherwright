---
layout: doctrine
title: "Ætherwright Codex Syntax v1.1"
nav_title: "Codex"
description: "Codex syntax: how one line of glyphs records the phases of a creative project."
order: 4
---

A Codex string is one line of glyphs that records the phases of a creative project. It is plain Unicode text, so it works in a terminal, in markdown, in print, and in an archive.

---

## Format

```
/Æ/#|●▼||▲◆|||▶⬣⟩⟩[projects.versograms.cherubrock]/
```

---

## Syntax Reference

- `/.../` → Container for entire Codex string
- `Æ` → Protocol identifier (Ætherwright Codex)
- `#` → Grid/initiation – the first structural or symbolic cut
- `|` `||` `|||` → Phase markers (Phase 1, Phase 2, Phase 3, etc.)
- `●` → Input / research / orientation phase (not a domain)
- `∅` → Null phase (no domains active)
- Domain glyphs → Active domains (see [Glyphs]({{ '/doctrine/glyphs/' | relative_url }}))
- `⟩` → Completed but not released
- `⟩⟩` → Completed and released
- `~` → Ongoing / perpetual state
- `×` → Aborted / discarded
- `[path]` → Dot-delimited project identifier or namespace

---

## Rules

- Must begin with `#` and end with a terminal state symbol.
- May contain 1 to N phases.
- `●` may appear alone or before domain glyphs.
- `∅` is valid within a phase but not at the end.
- All symbols must be Unicode-safe and render in monospaced environments.
- Leave out spaces. The compressed form is the canonical one.

---

## Domain Reuse and Relational Proof

Domain glyphs may repeat across phases, and that is deliberate.

A Codex string is a **relational proof**: it records how different faculties worked together *across time*. When a domain appears more than once, the string shows its role in the process changing.

`▶` might first appear as sketching, then return in a later phase as final rendering. The repeat records **refinement**.

---

## Examples

### Full Process (3 phases, released)
```
/Æ/#|●▼||▲◆|||▶⬣⟩⟩[projects.versograms.cherubrock]/
```

### Input-only Ongoing System
```
/Æ/#|●||●|||●~[systems.signals]/
```

### Completed, Not Released
```
/Æ/#|●||▲⬣|||⬣⟩[systems.savepoint.protocol]/
```

### Null + Output Only
```
/Æ/#|∅||∅|||▶⟩⟩[studies.miniposters.oneoff]/
```

---

## Usage Context

Codex strings are intended for:

- Margins and footers of digital or printed works
- Archival headers in notebooks or logs
- Symbolic signature of creative process
- Metadata blocks, commit messages, or symbolic versioning

Each one is a **ritual execution record**: proof of work actually done.
