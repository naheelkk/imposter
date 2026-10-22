# 🕵️ Impostor & Mafia — Bluff & Betrayal

A browser-based party game (like Spyfall / Among Us in card form) where one or more players are secretly the **Impostor** and must bluff their way through a round while everyone else tries to figure out who doesn't actually know the secret word. A second mode, **Classic Mafia**, adds night kills, a Doctor and a Detective.

Play it locally by opening `index.html` in a browser — no build step, no server, no dependencies.

## How to Play

1. **Select Categories** — choose one or more word categories (Daily Objects, Household Items, Fun & Games, Sports, Food & Drink, Animals, 21 categories, …). The secret word is drawn from the combined pool of selected categories.
2. **Set Player Count & Impostor Count** — 3–20 players, 1–5 impostors (must be fewer impostors than players).
3. **Enter Player Names** — optional; defaults to "Player 1", "Player 2", etc. The roster grid grows and shrinks live as you change the player count.
4. **Choose Difficulty & Mode**:
   - **Impostor Hints** — gives impostors a one-word clue instead of leaving them totally in the dark. On by default; you can flip it again on the assignment screen while the device is being passed around.
   - **Chaos Mode 🌀** — every civilian gets their *own* random word instead of sharing one, making the round much harder to reason about.
5. **Pass-and-Play Assignment** — the device is passed around; each player presses and holds their card to privately reveal their role/word, then releases to hide it again before passing to the next player. A dot strip shows how far through the round you are. The **💡 Impostor Hints** switch sits right above the card, so hints can be toggled mid-round.
6. **Discuss & Vote** — players discuss out loud, then vote to eliminate a suspected impostor. Tap **Vote Out** next to a player's name, then **Reveal Identity** to dramatically flip the card and show whether they were an Impostor or a Civilian.
7. **Continue or End** — the game continues (eliminated players are removed) until either all impostors are caught or the impostors equal/outnumber the remaining civilians. When the round ends an in-page result dialog explains the outcome and offers **🔁 Play Again** (straight back to setup with every setting preserved) or **🏠 Home**.

### Classic Mafia

Mafia runs a night/day loop: the Mafia picks a victim, the Doctor protects someone, the Detective inspects a suspect, then the town votes out one player by day. Winning conditions mirror the Impostor mode.

## Features

- 21 built-in word categories (1260 words total). Every entry is an emoji-tagged word plus a one-word hint.
- Configurable player count (3–20) and impostor count (1–5).
- Optional **hints** for impostors and an optional **Chaos Mode** where civilians don't share a common word.
- Two full game modes: **Impostor** and **Classic Mafia**.
- Hash-based screen routing (`#setup`, `#assignment`, `#game`, `#reveal`, plus the `#mafia-*` screens) with animated screen transitions.
- Press-and-hold "physical card" reveal interaction — mouse, touch **and keyboard** (Space/Enter).
- Local **Hall of Fame** leaderboard with a shareable PNG screenshot export, an in-app **Reset Points** confirmation and a screenshot view for 12+ players.
- Settings (categories, player/impostor count, toggles) are saved to `localStorage` and restored on reload.
- **In-page messaging** — every confirmation, warning and round result is rendered by the app itself (modal dialog + toast) instead of using `alert()`/`confirm()`, which embedded webviews suppress. That means nothing gets silently skipped inside a desktop/app window.
- **One-click rematch** — catching the last impostor puts a **🔁 Play Again** button right on the reveal screen, so a finished round never dead-ends.

## Round Flow

| Screen | What happens |
| --- | --- |
| `#setup` | Categories, player/impostor count, names, difficulty toggles. The leaderboard card lives here too. |
| `#assignment` | Pass-and-hold card reveal. The **💡 Impostor Hints** switch here is live — flipping it refreshes an open card immediately. |
| `#game` | The trial: HUD, live roster, vote buttons. |
| `#reveal` | Dramatic role flip for the voted player, plus the impostor's self-report checkbox. When the **last impostor** is caught, **Continue Game** is replaced by **🔁 Play Again**, which pays the round out and reopens setup with every setting intact. |
| Result dialog | Shown in place of the screen (the page does **not** jump to the home screen on its own). **🔁 Play Again** reopens setup with categories, counts and toggles intact; **🏠 Home** returns to the mode picker. |

## Scores

Points live in `localStorage` and are shown on the home and setup leaderboards, in the **🏆 Scores** modal and in the PNG export.

- Civilians: no points for being voted out.
- Impostor caught: **-5** (or **0** if the impostor ticked "correctly guessed the word").
- Impostors still in play: **+5** each when a round ends.
- **Reset Points** asks for confirmation in-page, then clears every stored score.

Scoring is applied exactly once per round — the vote is cleared after it is paid out, so ending a round can never award the same points twice. **🔁 Play Again** pays the round out before clearing the state, then shows a toast naming the result, so the points are never lost or double-counted when you replay immediately.

## Design

The UI is built on a small token system (`style.css` → `:root`) so every colour, radius, shadow and easing stays consistent:

- **Cosmic theme** — deep violet surfaces, hot-pink and amber-gold accents, on a live starfield background.
- **Per-mode theming** — `body[data-mode="mafia"]` swaps the accent tokens, so the whole page re-tints between the two modes without duplicating any rules.
- **Layout** — a centred shell with a sticky top nav, responsive grids for the mode cards, category pills, settings and player rosters.
- **Motion** — transform/opacity-only animations so everything stays on the compositor; a `prefers-reduced-motion` query renders a single static background frame and drops the burst effects.
- **Accessibility** — landmark regions, `aria-live` HUD/reveal regions, visible `:focus-visible` rings, keyboard-reachable cards, and ≥32px touch targets for small controls.

### In-App Messaging

The game never calls the native `alert()`, `confirm()` or `prompt()`. Embedded webviews and in-app browsers silently suppress those dialogs: a blocked `confirm()` reads as `false` (so **Reset Points** looked like it did nothing) and a blocked `alert()` left the player staring at a screen that had already changed underneath them.

Instead, `script.js` ships a small message layer:

- `showToast(message, type)` — a non-blocking message pinned to the bottom of the screen, used for validation errors and confirmations. It can be tapped to dismiss and auto-dismisses after a few seconds.
- `showAppDialog({ icon, title, message, actions })` — a modal dialog with an arbitrary set of buttons, used for the round result and destructive confirmations. It traps focus on its primary action, closes on `Escape` or a backdrop click, and restores focus to whatever was focused before.

Both are styled from the same token system as the rest of the UI, so they re-tint when the page switches to the Mafia palette.

## Performance

The hot paths were profiled and rewritten:

- **Background canvas** — glow sprites are pre-rendered once and blitted instead of re-filling blurred arcs every frame. The canvas resizes correctly (it previously stayed at 0×0), pauses on tab hide, respects reduced motion, and caps its device-pixel ratio at 1.5 to halve the fill cost on retina screens.
- **Rendering** — the roster, leaderboard, HUD and night-phase controls are built with DOM APIs into a `DocumentFragment` and inserted in one pass, instead of re-parsing `innerHTML` strings on every vote.
- **Event handling** — vote buttons use a single delegated listener per list rather than one listener per row, so re-rendering the roster never leaks handlers.
- **Storage** — the leaderboard is cached in memory, written once per change and rendered at most once per frame.
- **Effects** — particle bursts are appended in one fragment and cleaned up with a single timer; each particle paints its glow with a radial gradient instead of a blurred `box-shadow` (measured 5.6 ms → 1.2 ms per burst).
- **Layout** — off-screen roster rows use `content-visibility: auto` with an intrinsic size, so long games don't pay for content that isn't visible.

## Project Structure

```
.
├── index.html   # Screen markup (home, setup, assignment, game, reveal, mafia screens)
├── style.css    # Design tokens, cosmic theme, layout, animations, responsive rules
└── script.js    # Game data, state management, routing, game logic and rendering
```

## Running It

No installation required:

1. Download/clone the three files (`index.html`, `style.css`, `script.js`) into the same folder.
2. Open `index.html` directly in any modern browser (Chrome, Firefox, Safari, Edge).

For local development with live reload, you can optionally serve the folder with any static server, e.g.:

```bash
npx serve .
# or
python -m http.server 8000
```

## Tech Stack

Vanilla HTML, CSS, and JavaScript — no frameworks, bundlers, or external libraries. State is kept in a single in-memory `gameState` object (plus `mafiaState` for the second mode), with settings and scores persisted via the browser's `localStorage`. The only external asset is the Outfit webfont from Google Fonts, with system fonts as the fallback.

## Notes for Contributors

- Word categories and entries live in the `gameData` object at the top of `script.js` — add a new category by adding a key with an array of `{ word, hint }` objects.
- Hint rules (the pool is validated against them): every hint is unique across the whole pool, never repeats the word it belongs to, and is never the name of another word in the pool — otherwise a hint would hand the impostor the answer or point at the wrong word.
- A hint should be an *associated* clue, not a synonym and not a restatement of the answer. "Pasta 🍝 → Semolina" and "Umbrella ☂️ → Rain" work; "Pasta 🍝 → Noodles" or "Umbrella ☂️ → Umbrella" do not — they either give the answer away or say nothing.
- Player card colors are pulled round-robin from the `PLAYER_COLORS` array.
- Screen navigation is driven by `window.location.hash`; see the `routes` and `screens` mappings in `script.js`.
- Player-supplied text (names, categories) is always written with `textContent` — never interpolated into an HTML string.
- Never use `alert()`/`confirm()`/`prompt()` — embedded webviews suppress them. Use `showToast()` or `showAppDialog()` instead.
- To end a round, call `finishImpostorGame(victory)` / `finishMafiaGame(victory)` rather than `resetGame()`. `resetGameState()` clears the round without navigating; `resetGame()` clears it *and* jumps to the home screen.
- The hint state has three moving parts that must stay in sync: `hintToggle` (setup screen), `assignment-hint-toggle` (assignment screen) and `gameState.hintsEnabled`. Use `setHintsEnabled()` rather than setting one of them directly.
- Adding a category? The home screen's category/word counters, the pool counter and the leaderboard snapshot all read from `gameData`, so they update automatically.
