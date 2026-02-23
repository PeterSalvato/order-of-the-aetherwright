# Ætherwright System – Changelog

A chronological record of the Order’s structural evolution and conceptual development.  
This document traces the architecture, symbolic shifts, and public releases of the system.  
All changes are authored and timestamped under Peter Salvato.

---

## Pre-Scaffold Period (Undated – Early 2024)

The Order of the Ætherwright was conceived as a symbolic philosophy and sovereign practice framework.  
No tools or digital assets were yet defined. The work centered around:

- Tone setting and metaphysical structure
- Early glyph and sigil exploration
- The foundational idea of “working like an Ætherwright”

These early states are not preserved in a legacy folder but remain available in Git history.

---

## Early 2024 – Symbolic Doctrine Drafted

- First structured writings on glyph systems, directional logic, and identity tiers
- Began documenting the concept of symbolic sovereignty
- Created static PDF references and working doctrine fragments

---

## February 2025 – Glyphs and Semiotic System Stabilized

- Defined the visual glyph vocabulary of the Order
- Moved from sketch to typological logic
- Focus shifted from aesthetic to operational symbolism

---

## March 2025 – Drop Kit Conceptualized

- Introduced the Drop Kit as a symbolic entry-point and practical onboarding system
- Defined overlays (VSCode, Obsidian, Terminal) as ritual interfaces
- Envisioned a unified workspace using theming and spatial metaphor

---

## March 2025 – Language Layer Introduced

- Created first symbolic shell aliases (`aetherize`, `fieldlog`, `invoke`)
- Designed metaphors around Bench (build), Chamber (invoke), Codex (reflect), Relay (connect)
- Reframed the terminal as a space of symbolic invocation, not code alone

---

## Early April 2025 – Immersive Working Bench Formalized

- Defined the fourfold immersive interface:
  - **Bench** → VSCode  
  - **Chamber** → Terminal  
  - **Codex** → Obsidian  
  - **Relay** → Firefox/Browser
- Established these as the symbolic layout for intentional creative practice

---

## April 3, 2025 – Ritual Tools and Printables Designed

- Added concept plans for printable journaling sheets and 3D-printable glyph stamps
- Defined the Drop Kit as both a symbolic and tactile package
- Solidified the Order as inhabitable, not just conceptual

---

## April 3, 2025 – Public Scaffold Deployed (`v0.1-public-scaffold`)

- Formalized repository structure and modular system directories:
  - `/doctrine/`, `/overlays/`, `/language/`, `/install/`, `/legal/`, `/artifacts/`, `/assets/`, `/docs/`
- Created placeholder `aether-init.sh` and protected bootstrapping logic
- Updated `README.md` to reflect in-progress status, authorship, and IP protection
- Added IP declaration and Creative Commons license
- Tagged public milestone for versioned proof of authorship

---

## February 2026 – Repository Cleanup and Narrative Restructure

Removed all empty placeholder directories and .gitkeep files that created the impression of unbuilt features. The repository now contains only real content.

**Removed:**
- Empty directories: `artifacts/`, `assets/covers/`, `assets/misc/`, `assets/symbols/`, `assets/source/`, `docs/`, `install/`, `language/`, `overlays/`
- Empty file: `doctrine/invocation.md`
- Redundant `legal/` directory (consolidated into root `ip_declaration.md`)
- Redundant `copyright.md` (covered by `license.md`)

**Fixed:**
- Renamed `doctrine/menifesto.md` → `doctrine/manifesto.md`
- Fixed escaped markdown (`\#`, `\|`) in `glyphs.md`, `codex.md`, `codex-theory.md`
- Fixed broken sigil image path in README
- Updated `ip_declaration.md` to reference current directory structure

**Restructured:**
- README rewritten: doctrine reading-order table, honest "What Exists Today" vs. "Roadmap" sections
- `system.md`: Drop Kit, shell aliases, and printables now clearly marked **(Planned)** with status notes
- `usage.md`: Leads with what's available now (doctrine + practice), separates planned features
- `terminology.md`: Shell aliases marked as **(Planned)**, added Core Symbolic Terms table

**Added:**
- `CITATION.cff` for academic/software citation
- Spoke site files: `index.html`, `CNAME`, `llms.txt`, `robots.txt`, `sitemap.xml`

---

## Status

The doctrine is complete and the repository reflects what actually exists.
Planned features (overlays, shell aliases, Drop Kit, printables) are documented in the roadmap but no longer occupy empty directories pretending to be real.
