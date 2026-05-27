# Halcyon Atelier

A single-page editorial website for a fictional independent design studio in Lisbon
that brands boutique hotels, restaurants, and members' clubs.

It is built as a one-shot brief: commit fully to one aesthetic direction, no
hedging, no template-assembled feel. Every section is hand-laid; every animation
is a deliberate design decision, not decoration.

**Live demo locally:** `npm install && npm run dev`

---

## The design point of view

> *Aesop meets a 1970s Italian magazine layout.*

Picking a single direction and executing on it:

### Palette — "Lisbon Sun"

| Token | Value | Where it lives |
|---|---|---|
| `--bone` | `#F1EADD` | Background |
| `--bone-deep` | `#E7DECC` | Practice section, marquee well |
| `--ink` | `#14110E` | Type |
| `--taupe` | `#6B5E50` | Meta, labels |
| `--terracotta` | `#C44A1E` | The single sharp accent — used sparingly |
| `--hairline` | `#C9BFAE` | Decorative rules |

Warm, sun-bleached, paper-feeling. The terracotta accent appears no more than
once per visual region: the dot after *Atelier*, the italic *catalogue*, the
roman numerals, the cycling farewell, the closing flourish line. Never gradient,
never decorative — always doing one specific job.

### Typography

Two voices, in tension.

- **[Fraunces](https://fonts.google.com/specimen/Fraunces)** as the editorial
  display serif. The `SOFT` and `WONK` variation axes are pushed deliberately
  (`'SOFT' 80, 'WONK' 1`) to give the type the off-kilter, hand-cut quality of a
  1970s Italian magazine masthead. The italic uses `SOFT 100` for an even
  rounder, more decorative cut — visible in *catalogue*, *correspond*, and the
  flip-text hover effect.
- **IBM Plex Mono** as the supporting voice. All labels, meta, addresses, and
  decorative editorial marks (`VOL. VII / N° 27`). Adds the studied, technical
  counterpoint that keeps the serif from feeling precious.

No Inter, no Roboto, no Space Grotesk — by design.

### Atmosphere

The background is never flat. Site-wide:

- An SVG fractal-noise grain overlay at `mix-blend-mode: multiply` and ~22%
  opacity — this is the single most important atmospheric detail. It gives the
  whole page the feel of being printed on uncoated stock.
- A subtle radial vignette in the corners.
- Hairline-thin (1px) decorative rules separating sections, often terminated
  with a tiny terracotta dot or a section number.
- Asymmetric vertical hairline frames inside the hero.

---

## The five sections

Each section was treated as its own typographic problem, not a content slot.

### 1. Hero — Editorial folio cover

The studio name `Halcyon / Atelier.` is set huge in Fraunces, broken across two
lines with the second indented several columns to the right (the *Atelier* line
hangs to the right of *Halcyon*). The capital *A* in *Atelier* is set in italic
terracotta, with a punctuating terracotta dot at the end.

- **Entrance**: every letter slides up from 110% with a slight rotate, staggered
  by 50ms each, on an `expo` curve (`[0.16, 1, 0.3, 1]`).
- **Manifesto** — *"Quiet identities for places that intend to be remembered."*
  Each word reveals on its own delay (60ms apart) starting at +900ms after the
  letters begin.
- **Ambient motion**: two large blurred radial gradients (a terracotta wash and
  a sandstone wash) drift continuously on independent 28s and 36s `easeInOut`
  loops with translation and scale. They never stop.
- **Bottom marquee**: an infinite horizontal scroll of studio metadata,
  separated by terracotta `✦` glyphs, in italic Fraunces.
- **Editorial marks**: `VOL. VII — N° 27 — SUMMER FOLIO` and `INDEPENDENT — BY
  APPOINTMENT` set in the top corners. A real-time Lisbon clock in the nav.

### 2. About — A note from the studio

A ~60-word passage. Asymmetric layout: a narrow left column with a label rule
(`A NOTE — / 001`), a sketched ink signature that draws itself on view via SVG
`pathLength`, then the body passage to the right.

- **Word-level scroll-triggered reveal**: each word slides up from below at
  18ms intervals, once only, when the section enters view.
- Three words — *slowly,* *hand,* *long* — are picked out in italic terracotta.
- A terracotta dot + hairline rule + meta line caps the bottom.

### 3. Selected Work — The catalogue

Five fictional projects (Casa Verol, Tartine Móvel, The Pomelo Room, Hotel
Lumeira, Stella Notte) on a hand-placed 12-column grid where each tile breaks
the column rules in a different way — large left, small floating right, offset
center, etc. The grid is genuinely asymmetric, not "asymmetric-looking".

Each tile shows a **bespoke SVG specimen**, not a stock photo — an imagined
piece of the project's identity:

- *Casa Verol* — a roman + italic wordmark on deep forest with a hairline
  inner frame and stamped meta.
- *Tartine Móvel* — a circular postal stamp that slowly rotates on hover.
- *The Pomelo Room* — a citrus-segmented background with a large italic *P*
  monogram.
- *Hotel Lumeira* — `L U M E I R A` stacked vertically with a shaft of light
  that drifts on hover, side meta running rotated 90°.
- *Stella Notte* — italic *Stella* + tracked-out *NOTTE*, ambient blinking
  stars, a terracotta starburst that rotates on hover.

The **hover state** is the surprising part. Three things happen at once:

1. **Flip-text** on the project name. Each letter slides up by 110% while an
   italic terracotta duplicate slides up from below to replace it, letters
   staggered by 20ms — a deliberate, mechanical flicker, not a fade.
2. **Color slab** rises from the bottom of the plate (90% in 900ms, quart
   easing) revealing a one-line description in italic Fraunces and three
   color-palette chips.
3. The specimen itself gets a 1.4–1.6s ambient response (rotation, light
   shift, etc.), so the image doesn't sit still.

### 4. Practice — Five disciplines

Identity, Editorial, Spatial, Voice, Digital. Each row has:

- A roman numeral in terracotta on the left.
- The discipline name in massive serif.
- A right-aligned mono subtitle.
- A `+` caret that rotates 45° to become an `×` on hover.

On hover/focus the discipline name's fill goes transparent and a 1px
`-webkit-text-stroke` outline replaces it, while a ghost italic terracotta
variant of the name slides in behind. Simultaneously the row expands via
`AnimatePresence` to reveal a long-form description and a numbered list of
deliverables that stagger in.

### 5. Contact — Correspondence

Massive `Let us correspond.` with the italic terracotta *correspond.* indented
several columns to the right. Four meta columns underneath (By post / By wire /
In person / Currently) with a pulsing terracotta status dot.

The closing motion flourish is a single SVG sine wave that draws itself across
the full width over four seconds, with terracotta dots punctuating both ends.

A `FAREWELL, IN PASSING —` cycles through five languages on a 2.4s loop
("Até breve / À bientôt / A presto / See you / Hasta pronto").

The final element is a **reverse-direction** marquee in massive serif on an
ink-black band, mirroring the hero's bottom marquee but inverting its
direction and palette — the page begins and ends in continuous motion.

---

## How motion was used

Framer Motion drives everything. A few rules I held to:

- **Easing always intentional**. Entrances use expo-out
  (`[0.16, 1, 0.3, 1]`) — slow start, decisive arrival. Hover/exit transitions
  use quart in-out (`[0.76, 0, 0.24, 1]`) — symmetrical, mechanical. Linear is
  reserved for marquees.
- **Stagger by sequence, not by index alone**. Letters stagger at 50ms, words
  at 18–60ms depending on density. The hero's full sequence is choreographed:
  frame draws → corner marks → first headline letters → second headline →
  manifesto words → meta strip → scroll cue.
- **Once-only scroll reveals**. Using `useInView({ once: true })` so revisiting
  doesn't re-trigger animation — the page is "set" once you've passed it.
- **Two pieces of continuous ambient motion**: the hero washes drift forever,
  and the marquees scroll forever, so the page never feels frozen.
- **`prefers-reduced-motion`** is respected globally in `index.css`.

---

## Tech stack

- **Vite 8** + **React 19**
- **Framer Motion 12**
- Hand-written CSS (no framework). One file per component, plus `index.css`
  for tokens and base.
- No images: every visual is SVG or CSS.

---

## How to run

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

Other scripts:

```bash
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

The site is fully static — `npm run build` produces a `dist/` folder you can
drop on any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

---

## Project structure

```
.
├── index.html                  # Loads Fraunces + IBM Plex Mono from Google Fonts
├── src/
│   ├── main.jsx
│   ├── App.jsx                 # Section orchestration, grain + vignette overlays
│   ├── styles/
│   │   └── index.css           # Design tokens, base type, grain, vignette
│   └── components/
│       ├── Nav.jsx / .css       # Fixed top bar with live Lisbon clock
│       ├── Hero.jsx / .css      # Entrance choreography + ambient washes
│       ├── Marquee.jsx / .css   # Reusable infinite marquee, supports reverse
│       ├── About.jsx / .css     # Scroll-revealed passage + drawing signature
│       ├── Work.jsx / .css      # Asymmetric grid, FlipText, sliding slab
│       ├── WorkPlates.jsx       # Bespoke SVG specimens for each project
│       ├── Practice.jsx / .css  # Accordion list with text-stroke hover
│       └── Contact.jsx / .css   # Headline, columns, flourish, end marquee
└── vite.config.js
```

---

## Notes

- The studio, its address, the projects, the team — all fictional. Any
  resemblance to real establishments in Lisbon is incidental.
- The clock in the navigation is live (`Europe/Lisbon` via `Intl.DateTimeFormat`)
  and updates every 30 seconds.
- The site is fully responsive — the asymmetric work grid collapses to a clean
  vertical stack below 900px; the hero meta strip and contact columns reflow on
  small screens.

---

Pressed locally in Lisboa. Site set in Fraunces & IBM Plex Mono.
