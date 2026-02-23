# Ætherwright Codex Syntax v1.1

A symbolic execution string used to encode creative process phases using domain glyphs. Codex lines are rendered in plaintext using Unicode and are compatible with terminal, markdown, print, and archival contexts.

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
- Domain glyphs → Represent active domains (see `glyphs.md`)
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
- Spaces are discouraged—use compressed format for maximum clarity.

---

## Domain Reuse and Relational Proof

Domain glyphs may repeat across phases.

This is intentional.

The Codex string is not a checklist of domains used—it is a **relational proof** of how different faculties interacted *across time*. When a domain appears multiple times, it reflects its **evolution** and **changing role** in the creative process.

A glyph like `▶` might first appear in a sketching context, then return in a later phase as final rendering—symbolically representing **refinement**, **transformation**, or **domain continuity**.

Each repetition matters.

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

They are not decorative—they are **ritual execution records**.