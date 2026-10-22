// Secret-word data lives in words.js (loaded first by a script tag), so this
// file stays pure game logic.

const PLAYER_COLORS = [
    '#9333ea', '#c026d3', '#db2777', '#ea580c',
    '#059669', '#2563eb', '#0284c7', '#7c3aed',
    '#d97706', '#dc2626', '#16a34a', '#4f46e5'
];

const SETTINGS_KEY = 'impostor_game_settings';
const LEADERBOARD_KEY = 'impostor_game_leaderboard';
const IMPOSTOR_HISTORY_KEY = 'impostor_game_last_impostors';

/* ── Impostor History Helpers (anti-repeat logic) ──────────────────── */
function getImpostorHistory() {
    try {
        return JSON.parse(localStorage.getItem(IMPOSTOR_HISTORY_KEY) || '[]');
    } catch { return []; }
}

function saveImpostorHistory(names) {
    // Keep only the last 2 rounds of impostor names to avoid stale data
    localStorage.setItem(IMPOSTOR_HISTORY_KEY, JSON.stringify(names.slice(-20)));
}

/**
 * Picks `count` impostor indices from `playerNames` with weighted randomness.
 * Players who were impostors recently get a 0.2x weight; others get 1.0x.
 * This makes repeats unlikely without making them impossible.
 */
function pickImpostorIndicesWeighted(playerNames, count) {
    const recentImpostors = new Set(getImpostorHistory());
    // Assign weights: lower weight for recently-been-impostors
    const weights = playerNames.map(name => recentImpostors.has(name) ? 0.2 : 1.0);
    const totalWeight = weights.reduce((s, w) => s + w, 0);

    const chosen = new Set();
    const remaining = playerNames.map((_, i) => i); // all indices

    while (chosen.size < count && remaining.length > 0) {
        // Weighted random pick from remaining candidates
        let r = Math.random() * remaining.reduce((s, idx) => s + weights[idx], 0);
        for (const idx of remaining) {
            r -= weights[idx];
            if (r <= 0) {
                chosen.add(idx);
                remaining.splice(remaining.indexOf(idx), 1);
                break;
            }
        }
    }

    // Fallback: if somehow underfilled (edge case), fill randomly
    while (chosen.size < count) {
        const pick = remaining[Math.floor(Math.random() * remaining.length)];
        chosen.add(pick);
        remaining.splice(remaining.indexOf(pick), 1);
    }

    return chosen;
}

let gameState = {
    selectedCategories: [],
    secretWordObj: null,
    players: [],
    activePlayers: [],
    phase: "setup",
    votedPlayer: null,
    hintsEnabled: false,
    chaosMode: false,
    currentAssignmentIndex: 0,
    starterPlayer: null
};

let mafiaState = {
    players: [],
    activePlayers: [],
    phase: "setup",
    mafiaCount: 1,
    hasDoctor: true,
    hasDetective: true,
    dayNumber: 1,
    nightActions: {
        mafiaTarget: null,
        doctorTarget: null,
        detectiveTarget: null
    },
    currentAssignmentIndex: 0,
    nightStep: 0, // 0: Mafia, 1: Doctor, 2: Detective
    starterPlayer: null,
    votedPlayer: null,
    lastNightOutcomeText: ""
};

const routes = {
    '#home': 'home',
    '#setup': 'setup',
    '#assignment': 'assignment',
    '#game': 'game',
    '#reveal': 'reveal',
    '#mafia-setup': 'mafiaSetup',
    '#mafia-assignment': 'mafiaAssignment',
    '#mafia-night': 'mafiaNight',
    '#mafia-day': 'mafiaDay',
    '#mafia-reveal': 'mafiaReveal'
};

const screens = {
    home: document.getElementById('home-screen'),
    setup: document.getElementById('setup-screen'),
    assignment: document.getElementById('assignment-screen'),
    game: document.getElementById('game-screen'),
    reveal: document.getElementById('reveal-screen'),
    mafiaSetup: document.getElementById('mafia-setup-screen'),
    mafiaAssignment: document.getElementById('mafia-assignment-screen'),
    mafiaNight: document.getElementById('mafia-night-screen'),
    mafiaDay: document.getElementById('mafia-day-screen'),
    mafiaReveal: document.getElementById('mafia-reveal-screen')
};

const categoryTagsContainer = document.getElementById('category-tags');
const playerCountInput = document.getElementById('player-count');
const impostorCountInput = document.getElementById('impostor-count');
const hintToggle = document.getElementById('hint-toggle');
const chaosToggle = document.getElementById('chaos-toggle');
const startBtn = document.getElementById('start-game-btn');
const namesContainer = document.getElementById('player-names-container');
const assignmentContainer = document.getElementById('assignment-card-container');
const assignmentHintToggle = document.getElementById('assignment-hint-toggle');
const nextPlayerBtn = document.getElementById('next-player-btn');
const confirmAssignmentBtn = document.getElementById('confirm-assignment-btn');
const playersList = document.getElementById('active-players-list');
const triggerRevealBtn = document.getElementById('trigger-reveal-btn');
const revealText = document.getElementById('reveal-text');
const revealCard = document.getElementById('reveal-card');
const revealActions = document.getElementById('reveal-actions');
const continueBtn = document.getElementById('continue-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const quitBtn = document.getElementById('quit-btn');
const endGameBtn = document.getElementById('end-game-btn');
const impostorGuessContainer = document.getElementById('impostor-guess-container');
const impostorGuessCheckbox = document.getElementById('impostor-guess-checkbox');

// Mafia DOM elements
const mafiaPlayerCountInput = document.getElementById('mafia-player-count');
const mafiaCountInput = document.getElementById('mafia-count');
const doctorToggle = document.getElementById('doctor-toggle');
const detectiveToggle = document.getElementById('detective-toggle');
const mafiaNamesContainer = document.getElementById('mafia-player-names-container');
const startMafiaBtn = document.getElementById('start-mafia-btn');
const mafiaAssignmentContainer = document.getElementById('mafia-assignment-card-container');
const mafiaNextPlayerBtn = document.getElementById('mafia-next-player-btn');
const mafiaStartNightBtn = document.getElementById('mafia-start-night-btn');
const mafiaActivePlayersList = document.getElementById('mafia-active-players-list');
const mafiaEndGameBtn = document.getElementById('mafia-end-game-btn');
const mafiaContinueBtn = document.getElementById('mafia-continue-btn');
const mafiaQuitBtn = document.getElementById('mafia-quit-btn');

function triggerCosmicWarpEffect() {
    document.querySelectorAll('.cosmic-warp-ring').forEach(el => el.remove());
    const ring = document.createElement('div');
    ring.className = 'cosmic-warp-ring';
    document.body.appendChild(ring);
    setTimeout(() => ring.remove(), 500);
}

/* ── Running Particle Canvas Background ──────────────────────── */
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

/**
 * Builds a soft radial glow sprite once. Blitting pre-rendered sprites is
 * dramatically cheaper than filling arcs with a shadowBlur every frame.
 */
function createGlowSprite(hue) {
    const size = 48;
    const sprite = document.createElement('canvas');
    sprite.width = sprite.height = size;
    const sctx = sprite.getContext('2d');
    if (!sctx) return sprite;
    const g = sctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0,    `hsla(${hue}, 90%, 80%, 0.95)`);
    g.addColorStop(0.28, `hsla(${hue}, 90%, 72%, 0.42)`);
    g.addColorStop(1,    `hsla(${hue}, 90%, 66%, 0)`);
    sctx.fillStyle = g;
    sctx.fillRect(0, 0, size, size);
    return sprite;
}

function initBackgroundParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const sprites = [createGlowSprite(268), createGlowSprite(322)];
    const particles = [];
    let width = 0, height = 0, dpr = 1, rafId = 0, running = false;

    function seed() {
        const count = Math.max(12, Math.min(60, Math.round((width * height) / 24000)));
        particles.length = 0;
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                r: 5 + Math.random() * 8,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                a: 0.16 + Math.random() * 0.42,
                s: Math.random() > 0.5 ? 0 : 1
            });
        }
    }

    function resize() {
        const rect = canvas.getBoundingClientRect();
        const nextW = Math.max(1, Math.round(rect.width  || window.innerWidth));
        const nextH = Math.max(1, Math.round(rect.height || window.innerHeight));
        if (nextW === width && nextH === height) return;
        width = nextW;
        height = nextH;
        // The glow sprites are soft radial gradients, so they don't need full
        // retina density — capping at 1.5 keeps the fill cost in check.
        dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width  = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        seed();
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = width; else if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height; else if (p.y > height) p.y = 0;
            ctx.globalAlpha = p.a;
            ctx.drawImage(sprites[p.s], p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
        }
        ctx.globalAlpha = 1;
    }

    function loop() {
        draw();
        rafId = requestAnimationFrame(loop);
    }

    function start() {
        if (running || reducedMotionQuery.matches) return;
        running = true;
        rafId = requestAnimationFrame(loop);
    }

    function stop() {
        if (!running) return;
        running = false;
        cancelAnimationFrame(rafId);
    }

    resize();

    if (reducedMotionQuery.matches) {
        draw(); // one static frame for reduced-motion users
    } else {
        start();
        document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));

        if ('ResizeObserver' in window) {
            let pending = 0;
            const observer = new ResizeObserver(() => {
                cancelAnimationFrame(pending);
                pending = requestAnimationFrame(resize);
            });
            observer.observe(canvas);
        } else {
            let pending = 0;
            window.addEventListener('resize', () => {
                cancelAnimationFrame(pending);
                pending = requestAnimationFrame(resize);
            });
        }
    }
}

function flashScreen(color = 'rgba(255,255,255,0.55)') {
    const el = document.createElement('div');
    el.className = 'flash-overlay';
    el.style.background = color;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 700);
}

/** Converts a #rrggbb color to an rgba() string. */
function hexToRgba(hex, alpha) {
    const h = hex.replace('#', '');
    const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
    const num = parseInt(full, 16);
    if (Number.isNaN(num)) return hex;
    return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
}

function createParticles(originEl, color, count = 18) {
    const rect = originEl.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;

    const fragment = document.createDocumentFragment();
    const created = [];

    // A radial gradient paints the glow in one pass — far cheaper than a
    // blurred box-shadow on every particle.
    const core = hexToRgba(color, 1);
    const mid  = hexToRgba(color, 0.45);
    const edge = hexToRgba(color, 0);
    const paint = `radial-gradient(circle, ${core} 0%, ${mid} 45%, ${edge} 72%)`;

    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
        const dist  = 60 + Math.random() * 140;
        const size  = 10 + Math.random() * 16;
        p.style.left = cx + 'px';
        p.style.top = cy + 'px';
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.background = paint;
        p.style.setProperty('--dx',  Math.cos(angle) * dist + 'px');
        p.style.setProperty('--dy',  Math.sin(angle) * dist + 'px');
        p.style.setProperty('--dur', (0.65 + Math.random() * 0.45) + 's');
        fragment.appendChild(p);
        created.push(p);
    }

    document.body.appendChild(fragment);
    setTimeout(() => created.forEach(p => p.remove()), 1200);
}

/** Dot strip showing how far through the pass-and-play assignment we are. */
function renderAssignmentProgress(containerId, index, total) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.textContent = '';
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('span');
        if (i < index) dot.className = 'done';
        else if (i === index) dot.className = 'current';
        fragment.appendChild(dot);
    }
    container.appendChild(fragment);
}

function init() {
    initBackgroundParticles();

    // Category tags are real buttons → keyboard + screen-reader friendly
    const tagFragment = document.createDocumentFragment();
    Object.keys(gameData).forEach(category => {
        const tag = document.createElement('button');
        tag.type = 'button';
        tag.className = 'tag-label';
        tag.textContent = category;
        tag.setAttribute('aria-pressed', 'false');
        tag.addEventListener('click', () => {
            const selected = tag.classList.toggle('selected');
            tag.setAttribute('aria-pressed', String(selected));
            updatePoolCounter();
            saveSettings();
        });
        tagFragment.appendChild(tag);
    });
    categoryTagsContainer.appendChild(tagFragment);

    updatePlayerInputs();
    updateMafiaPlayerInputs();

    playerCountInput.addEventListener('change', () => {
        updatePlayerInputs();
        saveSettings();
    });
    impostorCountInput.addEventListener('change', saveSettings);
    hintToggle.addEventListener('change', () => {
        setHintsEnabled(hintToggle.checked);
        refreshCurrentAssignmentCard(false);
    });
    chaosToggle.addEventListener('change', saveSettings);

    // The assignment screen carries its own hint switch so a player can
    // turn hints on mid-round without going back to setup.
    if (assignmentHintToggle) {
        let cardWasOpenBeforeSwitch = false;
        // The checkbox itself is visually hidden, so the open-state has to be
        // captured on the wrapper that actually receives the pointer event.
        const toolsBar = assignmentHintToggle.closest('.assignment-tools');
        if (toolsBar) {
            toolsBar.addEventListener('pointerdown', () => {
                const card = assignmentContainer.querySelector('.single-role-card');
                cardWasOpenBeforeSwitch = !!card && card.classList.contains('revealed');
            });
        }
        assignmentHintToggle.addEventListener('change', () => {
            setHintsEnabled(assignmentHintToggle.checked);
            refreshCurrentAssignmentCard(cardWasOpenBeforeSwitch);
        });
    }

    // Keep the roster grid in sync while the number is being typed.
    playerCountInput.addEventListener('input', () => {
        if (playerCountInput.value === '' || !Number.isFinite(parseInt(playerCountInput.value, 10))) return;
        updatePlayerInputs();
        saveSettings();
    });

    mafiaPlayerCountInput.addEventListener('change', () => {
        updateMafiaPlayerInputs();
        saveSettings();
    });

    mafiaPlayerCountInput.addEventListener('input', () => {
        if (mafiaPlayerCountInput.value === '' || !Number.isFinite(parseInt(mafiaPlayerCountInput.value, 10))) return;
        updateMafiaPlayerInputs();
        saveSettings();
    });

    // Number steppers (− / + around the count inputs)
    document.addEventListener('click', event => {
        const btn = event.target instanceof Element ? event.target.closest('.stepper-btn') : null;
        if (!btn) return;
        const input = document.getElementById(btn.dataset.stepper);
        if (!input) return;
        const min = parseInt(input.min, 10) || 0;
        const max = parseInt(input.max, 10) || 100;
        const current = parseInt(input.value, 10) || min;
        const next = Math.min(max, Math.max(min, current + (parseInt(btn.dataset.dir, 10) || 1)));
        if (next === current) return;
        input.value = next;
        input.dispatchEvent(new Event('change', { bubbles: true }));
    });

    // Setup-screen reset button
    const resetSetupBtn = document.getElementById('reset-leaderboard-btn');
    if (resetSetupBtn) resetSetupBtn.addEventListener('click', resetLeaderboard);

    // Vote buttons are delegated — one listener per list instead of per row
    playersList.addEventListener('click', event => {
        const btn = event.target instanceof Element ? event.target.closest('[data-vote-id]') : null;
        if (!btn) return;
        votePlayer(Number(btn.dataset.voteId));
    });
    mafiaActivePlayersList.addEventListener('click', event => {
        const btn = event.target instanceof Element ? event.target.closest('[data-vote-id]') : null;
        if (!btn) return;
        voteMafiaPlayer(Number(btn.dataset.voteId));
    });

    // Subtle ripple feedback on the main actions
    document.addEventListener('pointerdown', event => {
        const btn = event.target instanceof Element ? event.target.closest('.primary-btn, .secondary-btn, .vote-btn') : null;
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const ripple = document.createElement('span');
        ripple.className = 'btn-ripple';
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 650);
    });

    loadSettings();
    updatePoolCounter();
    updateHomeStats();
    renderLeaderboard();
    handleRoute();
    window.addEventListener('hashchange', () => {
        if (expectedHash && window.location.hash === expectedHash) {
            expectedHash = null;
            return;
        }
        expectedHash = null;
        handleRoute();
    });
}

/** Categories the player has currently ticked. */
function getSelectedCategories() {
    return Array.from(categoryTagsContainer.querySelectorAll('.tag-label.selected'))
        .map(tag => tag.textContent);
}

/** Live count of secret words in the selected pool. */
function updatePoolCounter() {
    const total = getSelectedCategories()
        .reduce((sum, cat) => sum + ((gameData[cat] && gameData[cat].length) || 0), 0);
    const countEl = document.getElementById('word-pool-count');
    const wrap = document.getElementById('pool-counter');
    if (countEl) countEl.textContent = String(total);
    if (wrap) wrap.classList.toggle('is-empty', total === 0);
}

/** Headline stats on the home screen. */
function updateHomeStats() {
    const categories = Object.keys(gameData).length;
    const words = Object.keys(gameData)
        .reduce((sum, cat) => sum + gameData[cat].length, 0);
    const catEl = document.getElementById('stat-categories');
    const wordEl = document.getElementById('stat-words');
    if (catEl) catEl.textContent = String(categories);
    if (wordEl) wordEl.textContent = String(words);
}

/* LocalStorage Leaderboard Helpers */
let leaderboardCache = null;
let leaderboardRenderScheduled = false;

function getLeaderboard() {
    if (leaderboardCache) return leaderboardCache;
    let parsed = null;
    try {
        const saved = localStorage.getItem(LEADERBOARD_KEY) || localStorage.getItem('imposter_game_leaderboard');
        parsed = saved ? JSON.parse(saved) : {};
    } catch (e) {
        parsed = {};
    }
    leaderboardCache = (parsed && typeof parsed === 'object') ? parsed : {};
    return leaderboardCache;
}

function saveLeaderboard(scores) {
    leaderboardCache = scores;
    try {
        localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(scores));
    } catch (e) {
        /* storage full or unavailable — the in-memory cache still works */
    }
}

/** Renders are coalesced into one frame so rapid score changes stay cheap. */
function scheduleLeaderboardRender() {
    if (leaderboardRenderScheduled) return;
    leaderboardRenderScheduled = true;
    requestAnimationFrame(() => {
        leaderboardRenderScheduled = false;
        renderLeaderboard();
    });
}

function updateScore(playerName, points, options) {
    if (!playerName) return;
    const render = !options || options.render !== false;
    const scores = getLeaderboard();
    scores[playerName] = (scores[playerName] || 0) + points;
    saveLeaderboard(scores);
    if (render) scheduleLeaderboardRender();
}

/** Registers new names without touching storage on every call. */
function ensurePlayersRegistered(names) {
    const scores = getLeaderboard();
    let changed = false;
    names.forEach(name => {
        if (name && scores[name] === undefined) {
            scores[name] = 0;
            changed = true;
        }
    });
    if (changed) saveLeaderboard(scores);
}

function renderLeaderboard() {
    const scores = getLeaderboard();
    const sortedNames = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);

    const containers = [
        document.getElementById('leaderboard-list'),
        document.getElementById('leaderboard-list-home')
    ];

    containers.forEach(container => {
        if (!container) return;
        container.textContent = '';

        if (sortedNames.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'empty-msg';
            empty.textContent = 'No player scores saved yet.';
            container.appendChild(empty);
            return;
        }

        const fragment = document.createDocumentFragment();
        sortedNames.slice(0, 5).forEach((name, index) => {
            const row = document.createElement('div');
            row.className = 'leaderboard-item';

            const label = document.createElement('span');
            const strong = document.createElement('strong');
            strong.textContent = `${index === 0 ? '👑' : '#' + (index + 1)} ${name}`;
            label.appendChild(strong);

            const badge = document.createElement('span');
            badge.className = 'score-badge' + (scores[name] < 0 ? ' negative' : '');
            badge.textContent = `${scores[name]} pts`;

            row.append(label, badge);
            fragment.appendChild(row);
        });
        container.appendChild(fragment);
    });

    // Populate modal screenshot grid for 12-14+ players
    const modalGrid = document.getElementById('modal-leaderboard-grid');
    if (!modalGrid) return;
    modalGrid.textContent = '';

    if (sortedNames.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'empty-msg';
        empty.textContent = 'No player scores saved yet.';
        modalGrid.appendChild(empty);
        return;
    }

    const gridFragment = document.createDocumentFragment();
    sortedNames.forEach((name, index) => {
        const rankIcon = index === 0 ? '👑' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`;
        const card = document.createElement('div');
        card.className = 'snapshot-player-card';

        const nameWrap = document.createElement('span');
        const rank = document.createElement('span');
        rank.className = 'snapshot-rank';
        rank.textContent = rankIcon;
        nameWrap.append(rank, document.createTextNode(' ' + name));

        const badge = document.createElement('span');
        badge.className = 'score-badge' + (scores[name] < 0 ? ' negative' : '');
        badge.textContent = `${scores[name]} pts`;

        card.append(nameWrap, badge);
        gridFragment.appendChild(card);
    });
    modalGrid.appendChild(gridFragment);
}

function resetLeaderboard() {
    showAppDialog({
        icon: '🧹',
        title: 'Reset all points?',
        message: 'Every saved score for every player will be cleared. This cannot be undone.',
        actions: [
            { label: 'Cancel', variant: 'secondary' },
            {
                label: 'Reset Points',
                variant: 'danger',
                onClick: () => {
                    localStorage.removeItem(LEADERBOARD_KEY);
                    localStorage.removeItem('imposter_game_leaderboard');
                    leaderboardCache = {};
                    renderLeaderboard();
                    showToast('All points have been cleared.', 'success');
                }
            }
        ]
    });
}

/* Screenshot Leaderboard Modal & Image Generator */
function openLeaderboardModal() {
    renderLeaderboard();
    document.getElementById('leaderboard-modal').classList.remove('hidden');
}

function closeLeaderboardModal() {
    document.getElementById('leaderboard-modal').classList.add('hidden');
}

function downloadLeaderboardImage() {
    const scores = getLeaderboard();
    const sortedNames = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);

    const canvas = document.createElement('canvas');
    const width = 1000;
    const height = Math.max(600, 200 + Math.ceil(sortedNames.length / 2) * 55);
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');

    // Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, '#0d0322');
    bgGrad.addColorStop(0.5, '#180738');
    bgGrad.addColorStop(1, '#07000f');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Glowing Header
    ctx.font = 'bold 36px Outfit, sans-serif';
    ctx.fillStyle = '#fcd34d';
    ctx.textAlign = 'center';
    ctx.fillText('🏆 BLUFF & BETRAYAL — HALL OF FAME', width / 2, 60);

    ctx.font = '16px Outfit, sans-serif';
    ctx.fillStyle = '#9d88c0';
    ctx.fillText('Leaderboard Snapshot • ' + sortedNames.length + ' Players Registered', width / 2, 95);

    // Player Cards Grid (2 columns for high player count)
    const startY = 140;
    const cardWidth = 440;
    const cardHeight = 45;
    const gapX = 30;
    const gapY = 12;

    sortedNames.forEach((name, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        const x = 45 + col * (cardWidth + gapX);
        const y = startY + row * (cardHeight + gapY);

        // Card bg
        ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.beginPath();
        ctx.roundRect(x, y, cardWidth, cardHeight, 10);
        ctx.fill();

        ctx.strokeStyle = idx === 0 ? '#f59e0b' : 'rgba(124, 58, 237, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Rank & Name
        const rankStr = idx === 0 ? '👑 #1' : `#${idx + 1}`;
        ctx.font = 'bold 18px Outfit, sans-serif';
        ctx.fillStyle = idx === 0 ? '#fcd34d' : '#f0e8ff';
        ctx.textAlign = 'left';
        ctx.fillText(`${rankStr}  ${name}`, x + 18, y + 28);

        // Score
        const scoreStr = `${scores[name]} pts`;
        ctx.fillStyle = scores[name] < 0 ? '#f43f5e' : '#10d98d';
        ctx.textAlign = 'right';
        ctx.fillText(scoreStr, x + cardWidth - 18, y + 28);
    });

    const link = document.createElement('a');
    link.download = 'bluff-and-betrayal-leaderboard.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

function saveSettings() {
    const settings = {
        categories: getSelectedCategories(),
        playerCount: playerCountInput.value,
        impostorCount: impostorCountInput.value,
        hintsEnabled: hintToggle.checked,
        chaosMode: chaosToggle.checked,
        mafiaPlayerCount: mafiaPlayerCountInput.value,
        mafiaCount: mafiaCountInput.value,
        doctorEnabled: doctorToggle.checked,
        detectiveEnabled: detectiveToggle.checked
    };
    try {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
        /* private-mode storage failures must not break the game */
    }
}

function loadSettings() {
    const saved = localStorage.getItem(SETTINGS_KEY) || localStorage.getItem('imposter_game_settings');
    if (!saved) return;

    let settings = null;
    try {
        settings = JSON.parse(saved);
    } catch (e) {
        settings = null;
    }
    if (!settings) return;

    const selected = settings.categories || [];
    categoryTagsContainer.querySelectorAll('.tag-label').forEach(tag => {
        const isSelected = selected.includes(tag.textContent);
        tag.classList.toggle('selected', isSelected);
        tag.setAttribute('aria-pressed', String(isSelected));
    });

    playerCountInput.value = settings.playerCount || 3;
    impostorCountInput.value = settings.impostorCount || settings.imposterCount || 1;
    // Hints default to on; an explicit saved choice always wins.
    hintToggle.checked = settings.hintsEnabled !== undefined ? !!settings.hintsEnabled : true;
    chaosToggle.checked = settings.chaosMode || false;
    if (settings.mafiaPlayerCount) mafiaPlayerCountInput.value = settings.mafiaPlayerCount;
    if (settings.mafiaCount) mafiaCountInput.value = settings.mafiaCount;
    if (settings.doctorEnabled !== undefined) doctorToggle.checked = settings.doctorEnabled;
    if (settings.detectiveEnabled !== undefined) detectiveToggle.checked = settings.detectiveEnabled;

    updatePlayerInputs();
    updateMafiaPlayerInputs();
}

function handleRoute() {
    const hash = window.location.hash || '#home';
    const screenKey = routes[hash] || 'home';
    showScreen(screenKey);
}

let currentActiveScreenKey = null;
let screenEnterTimer = 0;
let expectedHash = null;

/* Screen key → hash, so the URL can be synced without a second route pass. */
const ROUTE_HASHES = Object.keys(routes).reduce((map, hash) => {
    map[routes[hash]] = hash;
    return map;
}, {});

function showScreen(screenKey) {
    const targetScreen = screens[screenKey];
    if (!targetScreen) return;

    if (currentActiveScreenKey !== screenKey) {
        if (currentActiveScreenKey) {
            triggerCosmicWarpEffect();
        }
        currentActiveScreenKey = screenKey;

        Object.values(screens).forEach(s => {
            if (s) {
                s.classList.add('hidden');
                s.classList.remove('screen-enter');
            }
        });

        targetScreen.classList.remove('hidden');
        targetScreen.classList.add('screen-enter');

        clearTimeout(screenEnterTimer);
        screenEnterTimer = setTimeout(() => targetScreen.classList.remove('screen-enter'), 520);
    }

    // Keep the URL in sync without re-entering the router
    const hash = ROUTE_HASHES[screenKey];
    if (hash && window.location.hash !== hash) {
        expectedHash = hash;
        window.location.hash = hash;
    }

    // The accent palette follows the active game mode
    document.body.dataset.mode = screenKey.indexOf('mafia') === 0 ? 'mafia' : 'impostor';
}

function navigateTo(hash) {
    if (window.location.hash === hash) {
        handleRoute();
        return;
    }
    window.location.hash = hash;
}

/* ═══════════════════════════════════════════════════════════
   IN-APP MESSAGING
   Native alert()/confirm() are suppressed inside embedded
   webviews, so a blocked dialog would strand the player with no
   feedback (and a reset would silently do nothing). Everything
   the game needs to say is rendered in-page instead.
   ═══════════════════════════════════════════════════════════ */
const appDialog = document.getElementById('app-dialog');
const appDialogIcon = document.getElementById('app-dialog-icon');
const appDialogTitle = document.getElementById('app-dialog-title');
const appDialogMessage = document.getElementById('app-dialog-message');
const appDialogActions = document.getElementById('app-dialog-actions');
const toastStack = document.getElementById('toast-stack');

let appDialogOnClose = null;
let appDialogLastFocused = null;

/** Small, non-blocking message pinned to the bottom of the screen. */
function showToast(message, type = 'info', duration = 3400) {
    if (!toastStack) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', type === 'error' ? 'alert' : 'status');

    const icon = document.createElement('span');
    icon.className = 'toast-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = type === 'success' ? '✅' : type === 'error' ? '⚠️' : 'ℹ️';

    const text = document.createElement('span');
    text.className = 'toast-message';
    text.textContent = message;

    toast.append(icon, text);
    toastStack.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('toast-visible'));

    let timer = setTimeout(dismiss, duration);
    function dismiss() {
        clearTimeout(timer);
        toast.classList.remove('toast-visible');
        toast.classList.add('toast-leaving');
        setTimeout(() => toast.remove(), 280);
    }
    toast.addEventListener('click', dismiss);
}

/**
 * Modal dialog used for confirmations and round results.
 * @param {{icon?:string,title:string,message?:string,
 *          actions?:Array<{label:string,variant?:string,onClick?:Function}>,
 *          onClose?:Function}} options
 */
function showAppDialog(options) {
    if (!appDialog) return;
    const {
        icon = 'ℹ️',
        title = '',
        message = '',
        actions = [],
        onClose = null
    } = options || {};

    appDialogLastFocused = document.activeElement;
    appDialogOnClose = onClose;

    appDialogIcon.textContent = icon;
    appDialogTitle.textContent = title;
    appDialogMessage.textContent = message;
    appDialogMessage.classList.toggle('hidden', !message);

    appDialogActions.textContent = '';
    actions.forEach(action => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `dialog-btn dialog-btn-${action.variant || 'secondary'}`;
        btn.textContent = action.label;
        btn.addEventListener('click', () => {
            closeAppDialog();
            if (typeof action.onClick === 'function') action.onClick();
        });
        appDialogActions.appendChild(btn);
    });

    appDialog.classList.remove('hidden');

    requestAnimationFrame(() => {
        const target = appDialogActions.querySelector('.dialog-btn-primary') ||
                       appDialogActions.querySelector('button');
        if (target) target.focus();
    });
}

function closeAppDialog() {
    if (!appDialog || appDialog.classList.contains('hidden')) return;
    appDialog.classList.add('hidden');

    const callback = appDialogOnClose;
    appDialogOnClose = null;

    if (appDialogLastFocused && typeof appDialogLastFocused.focus === 'function') {
        appDialogLastFocused.focus();
    }
    appDialogLastFocused = null;

    if (typeof callback === 'function') callback();
}

if (appDialog) {
    appDialog.addEventListener('click', event => {
        if (event.target === appDialog) closeAppDialog();
    });
}

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && appDialog && !appDialog.classList.contains('hidden')) {
        closeAppDialog();
    }
});

/* ═══════════════════════════════════════════════════════════
   IMPOSTOR GAME MODE LOGIC
   ═══════════════════════════════════════════════════════════ */
function startGame() {
    const selectedTags = getSelectedCategories();
    const count = parseInt(playerCountInput.value);
    const impostorCount = parseInt(impostorCountInput.value);

    if (selectedTags.length === 0) {
        showToast('Please select at least one category!', 'error');
        return;
    }
    if (!Number.isFinite(count) || count < 3) {
        showToast('Minimum 3 players required!', 'error');
        return;
    }
    if (count > 20) {
        showToast('Maximum 20 players supported!', 'error');
        return;
    }
    if (impostorCount < 1 || impostorCount >= count) {
        showToast('Impostor count must be between 1 and ' + (count - 1), 'error');
        return;
    }

    gameState.selectedCategories = selectedTags;
    gameState.hintsEnabled = hintToggle.checked;
    gameState.chaosMode = chaosToggle.checked;
    gameState.currentAssignmentIndex = 0;

    const combinedPool = selectedTags.flatMap(cat => gameData[cat]);
    gameState.secretWordObj = combinedPool[Math.floor(Math.random() * combinedPool.length)];

    const nameInputs = document.querySelectorAll('#player-names-container .player-name-input');
    const playerNames = Array.from({ length: count }, (_, i) =>
        nameInputs[i]?.value.trim() || `Player ${i + 1}`
    );

    // Weighted impostor selection: recently-been-impostors get lower probability
    const impostorIndices = pickImpostorIndicesWeighted(playerNames, impostorCount);

    // Save the names of this round's impostors for next-round weighting
    const newImpostorNames = [...impostorIndices].map(i => playerNames[i]);
    const prevHistory = getImpostorHistory();
    saveImpostorHistory([...prevHistory, ...newImpostorNames]);

    gameState.players = [];
    for (let i = 0; i < count; i++) {
        const customName = playerNames[i];
        const isImpostor = impostorIndices.has(i);

        gameState.players.push({
            id: i + 1,
            name: customName,
            role: isImpostor ? 'impostor' : 'civilian',
            color: PLAYER_COLORS[i % PLAYER_COLORS.length],
            revealed: false,
            chaosWord: gameState.chaosMode
                ? combinedPool[Math.floor(Math.random() * combinedPool.length)]
                : null
        });
    }

    // One batched write instead of a storage hit + re-render per player
    ensurePlayersRegistered(playerNames);
    scheduleLeaderboardRender();

    gameState.activePlayers = [...gameState.players];
    selectRandomStarterPlayer();

    setupAssignmentScreen();
    navigateTo('#assignment');
}

function selectRandomStarterPlayer() {
    if (gameState.activePlayers.length === 0) return;
    const starter = gameState.activePlayers[Math.floor(Math.random() * gameState.activePlayers.length)];
    gameState.starterPlayer = starter;
    const bannerText = document.getElementById('starter-player-text');
    if (bannerText) {
        bannerText.textContent = `🎙️ Speaker: ${starter.name} starts the trial!`;
    }
}

function rerollStarterPlayer() {
    selectRandomStarterPlayer();
    flashScreen('rgba(245,158,11,0.25)');
}

/** Rebuilds the currently-open assignment card (used by the hint switch). */
let currentAssignmentCardRefresh = null;

function setupAssignmentScreen() {
    if (assignmentHintToggle) assignmentHintToggle.checked = gameState.hintsEnabled;
    renderCurrentAssignmentCard();
    nextPlayerBtn.classList.remove('hidden');
    confirmAssignmentBtn.classList.add('hidden');
}

/** Keeps the assignment-screen hint switch, the setup switch and the
 *  running game state in sync. */
function setHintsEnabled(enabled) {
    gameState.hintsEnabled = enabled;
    if (assignmentHintToggle) assignmentHintToggle.checked = enabled;
    if (hintToggle) hintToggle.checked = enabled;
    saveSettings();
}

/** Re-renders the card if it is currently held open, so the hint
 *  appears (or disappears) immediately when the switch is flipped.
 *  @param {boolean} forceReveal re-open the card even if the browser
 *         dropped focus when the switch was tapped. */
function refreshCurrentAssignmentCard(forceReveal) {
    if (typeof currentAssignmentCardRefresh === 'function') {
        currentAssignmentCardRefresh(!!forceReveal);
    }
}

function renderCurrentAssignmentCard() {
    currentAssignmentCardRefresh = null;
    assignmentContainer.textContent = '';
    const player = gameState.players[gameState.currentAssignmentIndex];
    renderAssignmentProgress('assignment-progress', gameState.currentAssignmentIndex, gameState.players.length);

    const card = document.createElement('div');
    card.className = 'single-role-card';
    card.style.borderColor = player.color;

    const inner = document.createElement('div');
    inner.className = 'assignment-card-inner';

    const topDeco = document.createElement('div');
    topDeco.className = 'card-deco-top';
    topDeco.textContent = '✨';

    const centerArea = document.createElement('div');
    centerArea.className = 'card-center-area';

    const playerLabel = document.createElement('div');
    playerLabel.className = 'card-player-label';
    playerLabel.textContent = `PLAYER ${gameState.currentAssignmentIndex + 1} OF ${gameState.players.length}`;

    const playerName = document.createElement('div');
    playerName.className = 'card-player-name';
    playerName.textContent = player.name;

    const lockIcon = document.createElement('div');
    lockIcon.className = 'card-lock-icon';
    lockIcon.textContent = '🔒';

    const holdHint = document.createElement('div');
    holdHint.className = 'hold-hint';
    holdHint.textContent = '👆 PRESS & HOLD TO REVEAL';

    centerArea.appendChild(playerLabel);
    centerArea.appendChild(playerName);
    centerArea.appendChild(lockIcon);
    centerArea.appendChild(holdHint);

    const bottomDeco = document.createElement('div');
    bottomDeco.className = 'card-deco-bottom';
    bottomDeco.textContent = '✨';

    inner.appendChild(topDeco);
    inner.appendChild(centerArea);
    inner.appendChild(bottomDeco);
    card.appendChild(inner);

    const reveal = () => {
        if (card.classList.contains('revealed')) return;
        card.classList.add('revealed');
        card.style.backgroundColor = player.color + '18';
        card.style.borderColor = player.color;

        centerArea.innerHTML = '';

        const isImpostor = player.role === 'impostor';

        const stamp = document.createElement('div');
        stamp.className = `role-stamp ${isImpostor ? 'impostor-stamp' : 'civilian-stamp'}`;
        stamp.textContent = isImpostor ? 'IMPOSTOR 🕵️' : 'CIVILIAN 🛡️';

        centerArea.appendChild(playerLabel);
        centerArea.appendChild(playerName);

        if (isImpostor) {
            if (gameState.hintsEnabled) {
                const hintEl = document.createElement('div');
                hintEl.className = 'card-hint-reveal';
                hintEl.textContent = `💡 Hint: ${gameState.secretWordObj.hint}`;
                const hintNote = document.createElement('div');
                hintNote.className = 'card-hint-note';
                hintNote.textContent = 'Only you can see this — keep it secret!';
                centerArea.append(hintEl, hintNote);
            } else {
                const noHintEl = document.createElement('div');
                noHintEl.className = 'card-hint-reveal';
                noHintEl.textContent = '❓ Secret Word Hidden';
                const noHintNote = document.createElement('div');
                noHintNote.className = 'card-hint-note';
                noHintNote.textContent = 'Turn on “💡 Impostor Hints” above for a clue';
                centerArea.append(noHintEl, noHintNote);
            }
        } else {
            const wordEl = document.createElement('div');
            wordEl.className = 'secret-word';
            const wordToShow = gameState.chaosMode ? player.chaosWord.word : gameState.secretWordObj.word;
            wordEl.textContent = `🔑 ${wordToShow}`;
            centerArea.appendChild(wordEl);
        }

        centerArea.appendChild(stamp);

        const releaseHint = document.createElement('div');
        releaseHint.className = 'release-hint';
        releaseHint.textContent = 'RELEASE TO HIDE';
        centerArea.appendChild(releaseHint);

        createParticles(card, player.color, 18);
    };

    const hide = () => {
        if (!card.classList.contains('revealed')) return;
        card.classList.remove('revealed');
        card.style.backgroundColor = '';
        card.style.borderColor = player.color;

        centerArea.innerHTML = '';
        centerArea.appendChild(playerLabel);
        centerArea.appendChild(playerName);
        centerArea.appendChild(lockIcon);
        centerArea.appendChild(holdHint);
    };

    card.addEventListener('mousedown', reveal);
    card.addEventListener('mouseup', hide);
    card.addEventListener('mouseleave', hide);
    card.addEventListener('touchstart', (e) => {
        e.preventDefault();
        reveal();
    });
    card.addEventListener('touchend', hide);

    // Keyboard parity: Space/Enter behaves like press-and-hold.
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Reveal ${player.name}'s secret card`);
    card.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            reveal();
        }
    });
    card.addEventListener('keyup', (e) => {
        if (e.key === ' ' || e.key === 'Enter') hide();
    });
    card.addEventListener('blur', hide);

    // Lets the hint switch refresh an already-open card.
    currentAssignmentCardRefresh = (forceReveal) => {
        if (!card.isConnected) return;
        if (!card.classList.contains('revealed')) {
            if (forceReveal) reveal();
            return;
        }
        hide();
        reveal();
    };

    assignmentContainer.appendChild(card);
}

window.nextPlayer = function() {
    gameState.currentAssignmentIndex++;
    if (gameState.currentAssignmentIndex < gameState.players.length) {
        renderCurrentAssignmentCard();
    } else {
        nextPlayerBtn.classList.add('hidden');
        confirmAssignmentBtn.classList.remove('hidden');
    }
};

nextPlayerBtn.addEventListener('click', window.nextPlayer);

function setupGameScreen() {
    renderPlayers();
    showScreen('game');
}

/** Builds the "N Civilians VS N Impostors" scoreboard strip. */
function buildHudRow(leftCount, leftLabel, leftClass, rightCount, rightLabel, rightClass) {
    const frag = document.createDocumentFragment();

    const left = document.createElement('div');
    left.className = 'hud-chip ' + leftClass;
    const leftNum = document.createElement('span');
    leftNum.className = 'hud-num';
    leftNum.textContent = String(leftCount);
    const leftText = document.createElement('span');
    leftText.className = 'hud-label';
    leftText.textContent = leftLabel;
    left.append(leftNum, leftText);

    const vs = document.createElement('div');
    vs.className = 'hud-vs';
    vs.textContent = 'VS';

    const right = document.createElement('div');
    right.className = 'hud-chip ' + rightClass;
    const rightNum = document.createElement('span');
    rightNum.className = 'hud-num';
    rightNum.textContent = String(rightCount);
    const rightText = document.createElement('span');
    rightText.className = 'hud-label';
    rightText.textContent = rightLabel;
    right.append(rightNum, rightText);

    frag.append(left, vs, right);
    return frag;
}

function updateGameHUD() {
    const hud = document.getElementById('game-hud');
    if (!hud) return;

    const impostorsCount = gameState.activePlayers.filter(p => p.role === 'impostor').length;
    const civiliansCount = gameState.activePlayers.length - impostorsCount;

    hud.textContent = '';
    hud.appendChild(buildHudRow(civiliansCount, 'Civilians', 'civilian-chip', impostorsCount, 'Impostors', 'impostor-chip'));
}

/** Builds a player row. Names go through textContent, never innerHTML. */
function buildPlayerRow(player, isActive, voteClass) {
    const item = document.createElement('div');
    item.className = 'player-item' + (isActive ? '' : ' eliminated-player');
    item.style.borderLeftColor = player.color;

    const profile = document.createElement('div');
    profile.className = 'player-profile';

    const avatar = document.createElement('div');
    avatar.className = 'player-avatar';
    avatar.style.background = player.color + '22';
    avatar.style.borderColor = player.color;
    avatar.style.color = player.color;
    avatar.textContent = player.name.charAt(0).toUpperCase();

    const info = document.createElement('div');
    info.className = 'player-info';

    const nameEl = document.createElement('span');
    nameEl.className = 'player-name';
    nameEl.textContent = player.name;

    const tagEl = document.createElement('span');
    tagEl.className = 'player-suspect-tag';
    tagEl.textContent = isActive ? 'ACTIVE SUSPECT' : 'ELIMINATED 💀';

    info.append(nameEl, tagEl);
    profile.append(avatar, info);
    item.appendChild(profile);

    if (isActive) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = voteClass;
        btn.dataset.voteId = String(player.id);
        const icon = document.createElement('span');
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = '🚨';
        btn.append(icon, document.createTextNode(' Vote Out'));
        item.appendChild(btn);
    } else {
        const badge = document.createElement('span');
        badge.className = 'eliminated-badge';
        badge.textContent = 'OUT';
        item.appendChild(badge);
    }

    return item;
}

function renderPlayers() {
    updateGameHUD();
    playersList.textContent = '';

    const activeIds = new Set(gameState.activePlayers.map(p => p.id));
    const fragment = document.createDocumentFragment();

    gameState.players.forEach(player => {
        fragment.appendChild(buildPlayerRow(player, activeIds.has(player.id), 'vote-btn'));
    });

    playersList.appendChild(fragment);
}

window.votePlayer = function(id) {
    const player = gameState.players.find(p => p.id === id);
    if (!player) return;
    gameState.votedPlayer = player;

    revealText.textContent = '???';
    revealText.style.color = '';
    revealText.classList.remove('bounce-in');

    revealCard.style.transition = 'none';
    revealCard.classList.remove('revealed', 'suspense-pulse');
    revealCard.style.borderColor = '';
    revealCard.style.backgroundColor = '';
    revealCard.style.boxShadow = '';
    revealCard.style.animation = '';
    requestAnimationFrame(() => { revealCard.style.transition = ''; });

    revealActions.classList.add('hidden');
    triggerRevealBtn.classList.remove('hidden');
    playAgainBtn.classList.add('hidden');

    impostorGuessCheckbox.checked = false;
    impostorGuessContainer.classList.add('hidden');

    navigateTo('#reveal');
};

function triggerReveal() {
    triggerRevealBtn.classList.add('hidden');

    flashScreen('rgba(255,255,255,0.48)');
    revealCard.classList.add('suspense-pulse');

    setTimeout(() => {
        revealCard.classList.remove('suspense-pulse');
        revealCard.classList.add('revealed');
        revealCard.style.borderColor = gameState.votedPlayer.color;
        revealCard.style.backgroundColor = gameState.votedPlayer.color + '22';

        const isImpostor = gameState.votedPlayer.role === 'impostor';
        revealText.textContent = isImpostor ? 'IMPOSTOR 🕵️' : 'CIVILIAN 🛡️';
        revealText.style.color = isImpostor ? 'var(--danger)' : 'var(--success)';
        revealText.classList.add('bounce-in');

        revealActions.classList.remove('hidden');

        if (isImpostor) {
            impostorGuessContainer.classList.remove('hidden');
            const currentImpostors = gameState.activePlayers.filter(p => p.role === 'impostor');
            if (currentImpostors.length <= 1) {
                document.getElementById('reveal-status').textContent = `${gameState.votedPlayer.name} was the last IMPOSTOR! 🎉`;
                // The round is over — offer a rematch instead of continuing.
                continueBtn.classList.add('hidden');
                playAgainBtn.classList.remove('hidden');
            } else {
                document.getElementById('reveal-status').textContent = `${gameState.votedPlayer.name} was an IMPOSTOR! 🕵️`;
                continueBtn.classList.remove('hidden');
                playAgainBtn.classList.add('hidden');
            }
        } else {
            document.getElementById('reveal-status').textContent = `${gameState.votedPlayer.name} was a Civilian... 😔`;
            continueBtn.classList.remove('hidden');
            playAgainBtn.classList.add('hidden');
        }

        setTimeout(() => {
            const col = isImpostor ? '#f43f5e' : '#10d98d';
            flashScreen(isImpostor ? 'rgba(244,63,94,0.40)' : 'rgba(16,217,141,0.32)');
            revealCard.style.boxShadow =
                `0 0 65px ${col}cc, 0 0 140px ${col}44, 0 22px 55px rgba(0,0,0,.65)`;
            createParticles(revealCard, col, 35);
            if (isImpostor) {
                revealCard.style.animation = 'shake 0.5s ease-in-out';
                setTimeout(() => { revealCard.style.animation = ''; }, 500);
            }
        }, 750);

    }, 600);
}

function processScoring() {
    if (!gameState.votedPlayer) return;

    if (gameState.votedPlayer.role === 'impostor') {
        const guessedCorrectly = impostorGuessCheckbox.checked;
        if (guessedCorrectly) {
            updateScore(gameState.votedPlayer.name, 0);
        } else {
            updateScore(gameState.votedPlayer.name, -5);
        }
    }

    const remainingActive = gameState.activePlayers.filter(p => p.id !== gameState.votedPlayer.id);
    remainingActive.forEach(p => {
        if (p.role === 'impostor') {
            updateScore(p.name, 5);
        }
    });

    gameState.activePlayers = remainingActive;
    // Clear the vote so a second call cannot score the same round twice.
    gameState.votedPlayer = null;
}

function continueGame() {
    processScoring();

    const impostors = gameState.activePlayers.filter(p => p.role === 'impostor').length;
    const civilians = gameState.activePlayers.length - impostors;

    if (impostors >= civilians || impostors === 0) {
        finishImpostorGame(impostors === 0);
        return;
    }

    selectRandomStarterPlayer();
    renderPlayers();
    document.getElementById('reveal-status').textContent = "The Trial Continues";
    navigateTo('#game');
}

/** Clears the round state without changing the current screen. */
function resetGameState() {
    if (gameState.votedPlayer) {
        processScoring();
    }

    gameState = {
        selectedCategories: [],
        secretWordObj: null,
        players: [],
        activePlayers: [],
        phase: "setup",
        votedPlayer: null,
        hintsEnabled: hintToggle.checked,
        chaosMode: chaosToggle.checked,
        currentAssignmentIndex: 0,
        starterPlayer: null
    };
    currentAssignmentCardRefresh = null;
    assignmentContainer.textContent = '';
    renderLeaderboard();
}

function resetGame() {
    resetGameState();
    navigateTo('#home');
}

/**
 * Ends the round from the reveal screen and drops back to setup so the
 * same group can play again. The round's score is paid exactly once
 * (processScoring clears the vote, so a later reset cannot pay it twice).
 */
function playAgainFromReveal() {
    const voted = gameState.votedPlayer;
    const guessedCorrectly = impostorGuessCheckbox.checked;

    // Pay the round out before anything is cleared. processScoring() clears
    // the vote, so resetGameState() below cannot pay it a second time.
    if (voted) {
        processScoring();
    }
    resetGameState();

    // Put the reveal screen back to its neutral state for the next round.
    revealText.textContent = '???';
    revealText.style.color = '';
    revealText.classList.remove('bounce-in');
    revealCard.classList.remove('revealed', 'suspense-pulse');
    revealCard.style.borderColor = '';
    revealCard.style.backgroundColor = '';
    revealCard.style.boxShadow = '';
    revealCard.style.animation = '';
    revealActions.classList.add('hidden');
    triggerRevealBtn.classList.remove('hidden');
    continueBtn.classList.add('hidden');
    playAgainBtn.classList.add('hidden');
    impostorGuessCheckbox.checked = false;
    impostorGuessContainer.classList.add('hidden');
    document.getElementById('reveal-status').textContent = 'The Verdict...';

    navigateTo('#setup');

    if (voted && voted.role === 'impostor') {
        showToast(
            guessedCorrectly
                ? `${voted.name} guessed the word — no points lost. Set up a rematch!`
                : `${voted.name} lost 5 points. Set up a rematch!`,
            guessedCorrectly ? 'success' : 'info'
        );
    } else {
        showToast('Great round! Set up a rematch below.', 'success');
    }
}

/**
 * Ends the round and explains the outcome in-page. The player chooses
 * where to go next instead of being dropped on the home screen.
 */
function finishImpostorGame(victory) {
    resetGameState();
    showAppDialog({
        icon: victory ? '🎉' : '🕵️',
        title: victory ? 'Villains Caught!' : 'The Impostors Win!',
        message: victory
            ? 'Every impostor has been eliminated. The secret word is safe — the crowd goes wild!'
            : 'The impostors outnumbered the crew and took over the party. Better luck next round!',
        actions: [
            { label: '🔁 Play Again', variant: 'primary', onClick: () => navigateTo('#setup') },
            { label: '🏠 Home', variant: 'secondary', onClick: () => navigateTo('#home') }
        ]
    });
}

startBtn.addEventListener('click', startGame);
confirmAssignmentBtn.addEventListener('click', () => {
    setupGameScreen();
    navigateTo('#game');
});
triggerRevealBtn.addEventListener('click', triggerReveal);
continueBtn.addEventListener('click', continueGame);
playAgainBtn.addEventListener('click', playAgainFromReveal);
quitBtn.addEventListener('click', resetGame);
endGameBtn.addEventListener('click', () => {
    const activeImpostors = gameState.activePlayers.filter(p => p.role === 'impostor');
    activeImpostors.forEach(p => {
        updateScore(p.name, 5);
    });
    gameState.votedPlayer = null;
    resetGameState();
    showAppDialog({
        icon: '🏴',
        title: 'Game Ended',
        message: 'The round was ended manually. The surviving impostors were awarded +5 points.',
        actions: [
            { label: '🔁 Play Again', variant: 'primary', onClick: () => navigateTo('#setup') },
            { label: '🏠 Home', variant: 'secondary', onClick: () => navigateTo('#home') }
        ]
    });
});

/** Rebuilds a grid of name inputs, keeping existing values and keyboard focus. */
function buildNameInputs(container, count) {
    const existing = Array.from(container.querySelectorAll('.player-name-input'))
                           .map(input => input.value);
    const focusedIndex = (() => {
        const active = document.activeElement;
        if (!active || !active.classList || !active.classList.contains('player-name-input')) return -1;
        return Array.prototype.indexOf.call(container.querySelectorAll('.player-name-input'), active);
    })();

    container.textContent = '';
    const fragment = document.createDocumentFragment();
    let focusedEl = null;

    for (let i = 1; i <= count; i++) {
        const group = document.createElement('div');
        group.className = 'name-input-group';

        const label = document.createElement('label');
        label.textContent = `Player ${i}`;

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'player-name-input';
        input.placeholder = `Player ${i}`;
        input.value = existing[i - 1] || '';
        input.autocomplete = 'off';

        group.append(label, input);
        fragment.appendChild(group);
        if (i - 1 === focusedIndex) focusedEl = input;
    }

    container.appendChild(fragment);
    if (focusedEl) {
        focusedEl.focus();
        focusedEl.setSelectionRange(focusedEl.value.length, focusedEl.value.length);
    }
}

function updatePlayerInputs() {
    const min = parseInt(playerCountInput.min, 10) || 3;
    const max = parseInt(playerCountInput.max, 10) || 20;
    const raw = parseInt(playerCountInput.value, 10);
    const count = Number.isFinite(raw) ? Math.min(max, Math.max(min, raw)) : min;
    buildNameInputs(namesContainer, count);
}

/* ═══════════════════════════════════════════════════════════
   CLASSIC MAFIA GAME MODE LOGIC
   ═══════════════════════════════════════════════════════════ */

function startMafiaFlow() {
    updateMafiaPlayerInputs();
    navigateTo('#mafia-setup');
}

function updateMafiaPlayerInputs() {
    const min = parseInt(mafiaPlayerCountInput.min, 10) || 4;
    const max = parseInt(mafiaPlayerCountInput.max, 10) || 20;
    const raw = parseInt(mafiaPlayerCountInput.value, 10);
    const count = Number.isFinite(raw) ? Math.min(max, Math.max(min, raw)) : min;
    buildNameInputs(mafiaNamesContainer, count);
}

function startMafiaGame() {
    const count = parseInt(mafiaPlayerCountInput.value) || 6;
    const mafiaCount = parseInt(mafiaCountInput.value) || 1;
    if (count < 4 || count > 20) {
        showToast('Mafia needs between 4 and 20 players!', 'error');
        return;
    }
    const hasDoctor = doctorToggle.checked;
    const hasDetective = detectiveToggle.checked;

    const specialRolesCount = mafiaCount + (hasDoctor ? 1 : 0) + (hasDetective ? 1 : 0);
    if (specialRolesCount >= count) {
        showToast(`Too many special roles for ${count} players! Lower Mafia/special counts.`, 'error');
        return;
    }

    const nameInputs = document.querySelectorAll('#mafia-player-names-container .player-name-input');
    const shuffledIndices = [...Array(count).keys()].sort(() => Math.random() - 0.5);

    let idx = 0;
    const mafiaIndices = new Set(shuffledIndices.slice(idx, idx + mafiaCount));
    idx += mafiaCount;

    const doctorIndex = hasDoctor ? shuffledIndices[idx++] : null;
    const detectiveIndex = hasDetective ? shuffledIndices[idx++] : null;

    mafiaState.players = [];
    const mafiaNames = [];
    for (let i = 0; i < count; i++) {
        const customName = nameInputs[i]?.value.trim() || `Player ${i + 1}`;
        mafiaNames.push(customName);
        let role = 'villager';
        if (mafiaIndices.has(i)) role = 'mafia';
        else if (i === doctorIndex) role = 'doctor';
        else if (i === detectiveIndex) role = 'detective';

        mafiaState.players.push({
            id: i + 1,
            name: customName,
            role: role,
            alive: true,
            color: PLAYER_COLORS[i % PLAYER_COLORS.length]
        });
    }

    // One batched write instead of a storage hit + re-render per player
    ensurePlayersRegistered(mafiaNames);
    scheduleLeaderboardRender();

    mafiaState.activePlayers = [...mafiaState.players];
    mafiaState.dayNumber = 1;
    mafiaState.currentAssignmentIndex = 0;
    mafiaState.hasDoctor = hasDoctor;
    mafiaState.hasDetective = hasDetective;

    setupMafiaAssignmentScreen();
    navigateTo('#mafia-assignment');
}

function setupMafiaAssignmentScreen() {
    renderCurrentMafiaAssignmentCard();
    mafiaNextPlayerBtn.classList.remove('hidden');
    mafiaStartNightBtn.classList.add('hidden');
}

function renderCurrentMafiaAssignmentCard() {
    mafiaAssignmentContainer.textContent = '';
    const player = mafiaState.players[mafiaState.currentAssignmentIndex];
    renderAssignmentProgress('mafia-assignment-progress', mafiaState.currentAssignmentIndex, mafiaState.players.length);

    const card = document.createElement('div');
    card.className = 'single-role-card';
    card.style.borderColor = player.color;

    const inner = document.createElement('div');
    inner.className = 'assignment-card-inner';

    const topDeco = document.createElement('div');
    topDeco.className = 'card-deco-top';
    topDeco.textContent = '✨';

    const centerArea = document.createElement('div');
    centerArea.className = 'card-center-area';

    const playerLabel = document.createElement('div');
    playerLabel.className = 'card-player-label';
    playerLabel.textContent = `PLAYER ${mafiaState.currentAssignmentIndex + 1} OF ${mafiaState.players.length}`;

    const playerName = document.createElement('div');
    playerName.className = 'card-player-name';
    playerName.textContent = player.name;

    const lockIcon = document.createElement('div');
    lockIcon.className = 'card-lock-icon';
    lockIcon.textContent = '🔒';

    const holdHint = document.createElement('div');
    holdHint.className = 'hold-hint';
    holdHint.textContent = '👆 PRESS & HOLD TO REVEAL';

    centerArea.appendChild(playerLabel);
    centerArea.appendChild(playerName);
    centerArea.appendChild(lockIcon);
    centerArea.appendChild(holdHint);

    const bottomDeco = document.createElement('div');
    bottomDeco.className = 'card-deco-bottom';
    bottomDeco.textContent = '✨';

    inner.appendChild(topDeco);
    inner.appendChild(centerArea);
    inner.appendChild(bottomDeco);
    card.appendChild(inner);

    const reveal = () => {
        if (card.classList.contains('revealed')) return;
        card.classList.add('revealed');
        card.style.backgroundColor = player.color + '18';
        card.style.borderColor = player.color;

        centerArea.innerHTML = '';

        const stamp = document.createElement('div');
        let roleTitle = 'VILLAGER 🌾';
        let roleDescText = 'Deduce who the Mafia is and vote them out by day.';
        let stampClass = 'civilian-stamp';

        if (player.role === 'mafia') {
            roleTitle = 'MAFIA 😈';
            const fellowMafia = mafiaState.players.filter(p => p.role === 'mafia' && p.id !== player.id).map(p => p.name);
            roleDescText = fellowMafia.length > 0
                ? `Eliminate villagers by night! Fellow Mafia: ${fellowMafia.join(', ')}`
                : 'Eliminate villagers by night and stay hidden!';
            stampClass = 'impostor-stamp';
        } else if (player.role === 'doctor') {
            roleTitle = 'DOCTOR 🩺';
            roleDescText = 'Heal one player each night to save them from being killed.';
            stampClass = 'civilian-stamp';
        } else if (player.role === 'detective') {
            roleTitle = 'DETECTIVE 🔍';
            roleDescText = 'Investigate one suspect each night to reveal if they are Mafia.';
            stampClass = 'civilian-stamp';
        }

        stamp.className = `role-stamp ${stampClass}`;
        stamp.textContent = roleTitle;

        centerArea.appendChild(playerLabel);
        centerArea.appendChild(playerName);

        const descEl = document.createElement('div');
        descEl.className = 'card-hint-reveal';
        descEl.textContent = roleDescText;
        centerArea.appendChild(descEl);

        centerArea.appendChild(stamp);

        const releaseHint = document.createElement('div');
        releaseHint.className = 'release-hint';
        releaseHint.textContent = 'RELEASE TO HIDE';
        centerArea.appendChild(releaseHint);

        createParticles(card, player.color, 18);
    };

    const hide = () => {
        if (!card.classList.contains('revealed')) return;
        card.classList.remove('revealed');
        card.style.backgroundColor = '';
        card.style.borderColor = player.color;

        centerArea.innerHTML = '';
        centerArea.appendChild(playerLabel);
        centerArea.appendChild(playerName);
        centerArea.appendChild(lockIcon);
        centerArea.appendChild(holdHint);
    };

    card.addEventListener('mousedown', reveal);
    card.addEventListener('mouseup', hide);
    card.addEventListener('mouseleave', hide);
    card.addEventListener('touchstart', (e) => {
        e.preventDefault();
        reveal();
    });
    card.addEventListener('touchend', hide);

    // Keyboard parity: Space/Enter behaves like press-and-hold.
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Reveal ${player.name}'s secret role`);
    card.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            reveal();
        }
    });
    card.addEventListener('keyup', (e) => {
        if (e.key === ' ' || e.key === 'Enter') hide();
    });
    card.addEventListener('blur', hide);

    mafiaAssignmentContainer.appendChild(card);
}

function nextMafiaPlayer() {
    mafiaState.currentAssignmentIndex++;
    if (mafiaState.currentAssignmentIndex < mafiaState.players.length) {
        renderCurrentMafiaAssignmentCard();
    } else {
        mafiaNextPlayerBtn.classList.add('hidden');
        mafiaStartNightBtn.classList.remove('hidden');
    }
}

function startMafiaNightPhase() {
    mafiaState.nightStep = 0;
    mafiaState.nightActions = {
        mafiaTarget: null,
        doctorTarget: null,
        detectiveTarget: null
    };
    renderCurrentNightStep();
    navigateTo('#mafia-night');
}

function renderCurrentNightStep() {
    const iconEl = document.getElementById('night-step-icon');
    const headingEl = document.getElementById('night-step-heading');
    const descEl = document.getElementById('night-step-desc');
    const controlsEl = document.getElementById('night-action-controls');

    controlsEl.innerHTML = '';
    const alivePlayers = mafiaState.players.filter(p => p.alive);

    if (mafiaState.nightStep === 0) {
        // MAFIA STEP
        iconEl.textContent = '😈';
        headingEl.textContent = `Night ${mafiaState.dayNumber}: Mafia Turn`;
        descEl.textContent = "Pass phone to Mafia. Choose player to eliminate tonight:";

        const select = document.createElement('select');
        select.className = 'night-select-dropdown';
        alivePlayers.forEach(p => {
            if (p.role !== 'mafia') {
                const opt = document.createElement('option');
                opt.value = p.id;
                opt.textContent = `${p.name}`;
                select.appendChild(opt);
            }
        });
        if (select.options.length === 0) {
            alivePlayers.forEach(p => {
                const opt = document.createElement('option');
                opt.value = p.id;
                opt.textContent = `${p.name}`;
                select.appendChild(opt);
            });
        }
        controlsEl.appendChild(select);

        const btn = document.createElement('button');
        btn.className = 'primary-btn mafia-theme-btn';
        btn.textContent = 'Confirm Target 😈';
        btn.onclick = () => {
            mafiaState.nightActions.mafiaTarget = parseInt(select.value);
            advanceNightStep();
        };
        controlsEl.appendChild(btn);

    } else if (mafiaState.nightStep === 1) {
        // DOCTOR STEP
        const doctorAlive = alivePlayers.some(p => p.role === 'doctor');
        if (!doctorAlive) {
            advanceNightStep();
            return;
        }

        iconEl.textContent = '🩺';
        headingEl.textContent = `Night ${mafiaState.dayNumber}: Doctor Turn`;
        descEl.textContent = "Pass phone to Doctor. Select player to heal/protect:";

        const select = document.createElement('select');
        select.className = 'night-select-dropdown';
        alivePlayers.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = `${p.name}`;
            select.appendChild(opt);
        });
        controlsEl.appendChild(select);

        const btn = document.createElement('button');
        btn.className = 'primary-btn';
        btn.textContent = 'Confirm Protect 🩺';
        btn.onclick = () => {
            mafiaState.nightActions.doctorTarget = parseInt(select.value);
            advanceNightStep();
        };
        controlsEl.appendChild(btn);

    } else if (mafiaState.nightStep === 2) {
        // DETECTIVE STEP
        const detectiveAlive = alivePlayers.some(p => p.role === 'detective');
        if (!detectiveAlive) {
            startMafiaDayPhase();
            return;
        }

        iconEl.textContent = '🔍';
        headingEl.textContent = `Night ${mafiaState.dayNumber}: Detective Turn`;
        descEl.textContent = "Pass phone to Detective. Choose suspect to inspect:";

        const select = document.createElement('select');
        select.className = 'night-select-dropdown';
        alivePlayers.forEach(p => {
            if (p.role !== 'detective') {
                const opt = document.createElement('option');
                opt.value = p.id;
                opt.textContent = `${p.name}`;
                select.appendChild(opt);
            }
        });
        controlsEl.appendChild(select);

        const inspectBtn = document.createElement('button');
        inspectBtn.className = 'primary-btn';
        inspectBtn.textContent = 'Inspect Suspect 🔍';
        inspectBtn.onclick = () => {
            const suspectId = parseInt(select.value);
            const suspect = mafiaState.players.find(p => p.id === suspectId);
            const isMafia = suspect?.role === 'mafia';

            controlsEl.innerHTML = '';
            const resultBox = document.createElement('div');
            resultBox.className = 'detective-result-box';
            const resultText = document.createElement('p');
            resultText.className = 'detective-result-text ' + (isMafia ? 'mafia-found' : 'innocent-found');
            // Names come from user input — build the text node instead of interpolating HTML.
            resultText.appendChild(document.createTextNode(suspect.name + ' is '));
            const verdict = document.createElement('strong');
            verdict.textContent = isMafia ? 'MAFIA 😈' : 'INNOCENT 😇';
            resultText.appendChild(verdict);
            resultBox.appendChild(resultText);
            controlsEl.appendChild(resultBox);

            const wakeBtn = document.createElement('button');
            wakeBtn.className = 'primary-btn mafia-theme-btn';
            wakeBtn.style.marginTop = '14px';
            wakeBtn.textContent = 'Wake Up Town ☀️';
            wakeBtn.onclick = startMafiaDayPhase;
            controlsEl.appendChild(wakeBtn);
        };
        controlsEl.appendChild(inspectBtn);
    }
}

function advanceNightStep() {
    mafiaState.nightStep++;
    if (mafiaState.nightStep === 1 && !mafiaState.hasDoctor) mafiaState.nightStep++;
    if (mafiaState.nightStep === 2 && !mafiaState.hasDetective) {
        startMafiaDayPhase();
        return;
    }
    if (mafiaState.nightStep > 2) {
        startMafiaDayPhase();
    } else {
        renderCurrentNightStep();
    }
}

function startMafiaDayPhase() {
    const actions = mafiaState.nightActions;
    let killedPlayer = null;

    if (actions.mafiaTarget) {
        if (actions.mafiaTarget === actions.doctorTarget) {
            mafiaState.lastNightOutcomeText = "🩺 The Doctor successfully protected the target! No one died tonight!";
        } else {
            const victim = mafiaState.players.find(p => p.id === actions.mafiaTarget);
            if (victim) {
                victim.alive = false;
                killedPlayer = victim;
                mafiaState.lastNightOutcomeText = `💀 Tragedy struck! ${victim.name} was killed during the night!`;
            }
        }
    } else {
        mafiaState.lastNightOutcomeText = "☀️ The night passed peacefully. No one was killed.";
    }

    mafiaState.activePlayers = mafiaState.players.filter(p => p.alive);

    document.getElementById('night-report-status').textContent = mafiaState.lastNightOutcomeText;
    document.getElementById('mafia-day-title').textContent = `Day ${mafiaState.dayNumber} Phase ☀️`;

    selectRandomMafiaStarterPlayer();
    renderMafiaDayPlayers();

    const impostorsCount = mafiaState.activePlayers.filter(p => p.role === 'mafia').length;
    const innocentCount = mafiaState.activePlayers.length - impostorsCount;

    if (impostorsCount === 0 || impostorsCount >= innocentCount) {
        finishMafiaGame(impostorsCount === 0);
        return;
    }

    navigateTo('#mafia-day');
}

function selectRandomMafiaStarterPlayer() {
    if (mafiaState.activePlayers.length === 0) return;
    const starter = mafiaState.activePlayers[Math.floor(Math.random() * mafiaState.activePlayers.length)];
    mafiaState.starterPlayer = starter;
    const bannerText = document.getElementById('mafia-starter-text');
    if (bannerText) {
        bannerText.textContent = `🎙️ Speaker: ${starter.name} starts the Day discussion!`;
    }
}

function rerollMafiaStarterPlayer() {
    selectRandomMafiaStarterPlayer();
    flashScreen('rgba(245,158,11,0.25)');
}

function updateMafiaHUD() {
    const hud = document.getElementById('mafia-hud');
    if (!hud) return;

    const mafiaCount = mafiaState.activePlayers.filter(p => p.role === 'mafia').length;
    const innocentCount = mafiaState.activePlayers.length - mafiaCount;

    hud.textContent = '';
    hud.appendChild(buildHudRow(innocentCount, 'Innocents', 'civilian-chip', mafiaCount, 'Mafia', 'impostor-chip'));
}

function renderMafiaDayPlayers() {
    updateMafiaHUD();
    mafiaActivePlayersList.textContent = '';

    const fragment = document.createDocumentFragment();
    mafiaState.players.forEach(player => {
        fragment.appendChild(buildPlayerRow(player, player.alive, 'vote-btn mafia-theme-btn'));
    });

    mafiaActivePlayersList.appendChild(fragment);
}

window.voteMafiaPlayer = function(id) {
    const player = mafiaState.players.find(p => p.id === id);
    if (!player) return;
    mafiaState.votedPlayer = player;

    const revealTextEl = document.getElementById('mafia-reveal-text');
    const statusEl = document.getElementById('mafia-reveal-status');

    player.alive = false;
    mafiaState.activePlayers = mafiaState.players.filter(p => p.alive);

    let roleStr = 'VILLAGER 🌾';
    if (player.role === 'mafia') roleStr = 'MAFIA 😈';
    else if (player.role === 'doctor') roleStr = 'DOCTOR 🩺';
    else if (player.role === 'detective') roleStr = 'DETECTIVE 🔍';

    statusEl.textContent = `${player.name} was voted out!`;
    revealTextEl.textContent = roleStr;

    if (player.role === 'mafia') {
        updateScore(player.name, -5);
    }

    navigateTo('#mafia-reveal');
};

function continueMafiaGame() {
    const mafiaCount = mafiaState.activePlayers.filter(p => p.role === 'mafia').length;
    const innocentCount = mafiaState.activePlayers.length - mafiaCount;

    if (mafiaCount === 0 || mafiaCount >= innocentCount) {
        finishMafiaGame(mafiaCount === 0);
        return;
    }

    mafiaState.dayNumber++;
    startMafiaNightPhase();
}

/** Clears the mafia round without changing the current screen. */
function resetMafiaState() {
    mafiaState = {
        players: [],
        activePlayers: [],
        phase: "setup",
        mafiaCount: 1,
        hasDoctor: true,
        hasDetective: true,
        dayNumber: 1,
        nightActions: { mafiaTarget: null, doctorTarget: null, detectiveTarget: null },
        currentAssignmentIndex: 0,
        nightStep: 0,
        starterPlayer: null,
        votedPlayer: null,
        lastNightOutcomeText: ""
    };
    mafiaAssignmentContainer.textContent = '';
    renderLeaderboard();
}

function resetMafiaGame() {
    resetMafiaState();
    navigateTo('#home');
}

/** Ends the mafia round and explains the outcome in-page. */
function finishMafiaGame(victory) {
    resetMafiaState();
    showAppDialog({
        icon: victory ? '🎉' : '😈',
        title: victory ? 'The Town Wins!' : 'The Mafia Wins!',
        message: victory
            ? 'Every Mafia member has been eliminated. The town is safe — the villagers are celebrating!'
            : 'The Mafia now controls the town. The night belongs to them 😈',
        actions: [
            { label: '🔁 Play Again', variant: 'primary', onClick: () => navigateTo('#mafia-setup') },
            { label: '🏠 Home', variant: 'secondary', onClick: () => navigateTo('#home') }
        ]
    });
}

startMafiaBtn.addEventListener('click', startMafiaGame);
mafiaNextPlayerBtn.addEventListener('click', nextMafiaPlayer);
mafiaStartNightBtn.addEventListener('click', startMafiaNightPhase);
mafiaContinueBtn.addEventListener('click', continueMafiaGame);
mafiaQuitBtn.addEventListener('click', resetMafiaGame);
mafiaEndGameBtn.addEventListener('click', () => {
    mafiaState.activePlayers
        .filter(p => p.role === 'mafia')
        .forEach(p => updateScore(p.name, 5));
    resetMafiaState();
    showAppDialog({
        icon: '🏴',
        title: 'Game Ended',
        message: 'The round was ended manually. The surviving Mafia were awarded +5 points.',
        actions: [
            { label: '🔁 Play Again', variant: 'primary', onClick: () => navigateTo('#mafia-setup') },
            { label: '🏠 Home', variant: 'secondary', onClick: () => navigateTo('#home') }
        ]
    });
});

init();