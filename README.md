# 🕵️ Imposter

A browser-based party game (like Spyfall / Among Us in card form) where one or more players are secretly the **Imposter** and must bluff their way through a round while everyone else tries to figure out who doesn't actually know the secret word.

Play it locally by opening `index.html` in a browser — no build step, no server, no dependencies.

## How to Play

1. **Select Categories** — choose one or more word categories (Animals, Sports, Food and Drink, Celebs, Gaming, etc.). The secret word is drawn from the combined pool of selected categories.
2. **Set Player Count & Imposter Count** — 3–20 players, 1–5 imposters (must be fewer imposters than players).
3. **Enter Player Names** — optional; defaults to "Player 1", "Player 2", etc.
4. **Choose Difficulty & Mode**:
   - **Imposter Hints** — gives imposters a one-word clue instead of leaving them totally in the dark.
   - **Chaos Mode 🌀** — every civilian gets their *own* random word instead of sharing one, making the round much harder to reason about.
5. **Pass-and-Play Assignment** — the device is passed around; each player presses and holds their card to privately reveal their role/word, then releases to hide it again before passing to the next player.
6. **Discuss & Vote** — players discuss out loud, then vote to eliminate a suspected imposter. Tap **Vote** next to a player's name, then **Reveal Identity** to dramatically flip the card and show whether they were an Imposter or a Civilian.
7. **Continue or End** — the game continues (eliminated players are removed) until either all imposters are caught or the imposters equal/outnumber the remaining civilians, at which point the imposters win.

## Features

- 12 built-in word categories (Daily Objects, Household Items, Fun, Sports, Colors, Hobbies, Apps, Celebs, Food and Drink, Gaming, Animals, Countries), each with emoji-tagged words and one-word hints.
- Configurable player count (3–20) and imposter count (1–5).
- Optional **hints** for imposters and an optional **Chaos Mode** where civilians don't share a common word.
- Hash-based screen routing (`#setup`, `#assignment`, `#game`, `#reveal`) with animated screen transitions.
- Press-and-hold "physical card" reveal interaction (mouse + touch support).
- Settings (categories, player/imposter count, toggles) are saved to `localStorage` and restored on reload.
- Dark, neon "premium" visual theme with glow effects, bouncy easing animations, and a responsive mobile layout.

## Project Structure

```
.
├── index.html   # Screen markup (setup, assignment, game, reveal)
├── style.css    # Dark/neon theming, layout, and animations
└── script.js    # Game data, state management, routing, and game logic
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

Vanilla HTML, CSS, and JavaScript — no frameworks, bundlers, or external libraries. State is kept in a single in-memory `gameState` object, with settings persisted via the browser's `localStorage`.

## Notes for Contributors

- Word categories and entries live in the `gameData` object at the top of `script.js` — add a new category by adding a key with an array of `{ word, hint }` objects.
- Player card colors are pulled round-robin from the `PLAYER_COLORS` array.
- Screen navigation is driven by `window.location.hash`; see the `routes` and `screens` mappings in `script.js`.
