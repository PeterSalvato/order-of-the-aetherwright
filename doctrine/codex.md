\# Ætherwright Codex Syntax v1.1

A symbolic execution string used to encode creative process phases using domain glyphs. Codex lines are rendered in plaintext using Unicode and are compatible with terminal, markdown, print, and archival contexts.

---

\## Format

```
/Æ/#|●▼||▲◆|||▶⬣⟩⟩[projects.versograms.cherubrock]/
```

---

\## Syntax Reference

\| Symbol \| Meaning \|
\|--------\|---------\|
\| `/.../` \| Container for entire codex string \|
\| `Æ` \| Protocol identifier (Ætherwright Codex) \|
\| `#` \| Grid/initiation – first conscious mark or structural cut \|
\| `|` `||` `|||` \| Phase 1, 2, 3... \|
\| `●` \| Input/research phase (non-domain, pre-action) \|
\| `∅` \| Null phase – no domains active \|
\| Glyphs \| Active domains (see `glyphs.md`) \|
\| `⟩` / `⟩⟩` \| Completion state \|
\| `~` / `×` \| Ongoing / aborted \|
\| `[path]` \| Dot-delimited project identifier \|


## Glyph Quick Reference

- `▲` → UX / Systems / Strategy
- `▼` → Narrative / Language
- `◀` → Intuition / Reflection
- `▶` → Illustration / Expression
- `■` → Design / Grid / Typography
- `◆` → Craft / Physical Work
- `⬟` → Photography / Observation
- `⬣` → Code / Engineering / Logic
- `●` → Input / Research / Study

---

\## Rules

- Must begin with `#` and end with a terminal state symbol.
- May contain 1 to N phases.
- `●` may appear alone or before domain glyphs.
- `∅` is valid within a phase but not at the end.
- All symbols must be Unicode-safe and render in monospaced environments.
- Spaces are discouraged—use compressed format for maximum clarity.

---

\## Examples

\### Full Process (3 phases, released)
```
/Æ/#|●▼||▲◆|||▶⬣⟩⟩[projects.versograms.cherubrock]/
```

\### Input-only Ongoing System
```
/Æ/#|●||●|||●~[systems.signals]/
```

\### Completed, Not Released
```
/Æ/#|●||▲⬣|||⬣⟩[systems.savepoint.protocol]/
```

\### Null + Output Only
```
/Æ/#|∅||∅|||▶⟩⟩[studies.miniposters.oneoff]/
```

---

\## Usage Context

Codex strings are intended for:
- Margins and footers of digital or printed works
- Archival headers in notebooks or logs
- Symbolic signature of creative process
- Metadata blocks, commit messages, or symbolic versioning

They are not decorative—they are **ritual execution records**.