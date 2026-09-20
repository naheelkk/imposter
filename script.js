const gameData = {
    "Daily Objects": [
        { word: "Umbrella ☂️", hint: "Shield" },
        { word: "Slippers 🩴", hint: "Step" },
        { word: "Water Bottle 🍼", hint: "Fluid" },
        { word: "Key Chain 🔑", hint: "Metal" },
        { word: "Wallet 👛", hint: "Pocket" },
        { word: "Handkerchief ⬜", hint: "Cloth" },
        { word: "Spectacles 👓", hint: "Glass" },
        { word: "Watch ⌚", hint: "Time" },
        { word: "Comb 🪮", hint: "Tangle" },
        { word: "Mirror 🪞", hint: "Twin" },
        { word: "Backpack 🎒", hint: "Carry" },
        { word: "Scissors ✂️", hint: "Cut" },
        { word: "Charger 🔌", hint: "Power" },
        { word: "Towel 🧣", hint: "Dry" },
        { word: "Toothbrush 🪥", hint: "Fresh" }
    ],
    "Household Items": [
        { word: "Pressure Cooker 🍲", hint: "Steam" },
        { word: "Mixie 🌪️", hint: "Spin" },
        { word: "Steel Glass 🥛", hint: "Metal" },
        { word: "Tiffin Box 🍱", hint: "Meal" },
        { word: "Broom 🧹", hint: "Clean" },
        { word: "Saree 👘", hint: "Fabric" },
        { word: "Mat 🧶", hint: "Floor" },
        { word: "Diya 🪔", hint: "Flame" },
        { word: "Fan 🌀", hint: "Breeze" },
        { word: "Fridge ❄️", hint: "Chill" },
        { word: "Curtain カーテン", hint: "Hide" },
        { word: "Spoon 🥄", hint: "Scoop" },
        { word: "Plate 🍽️", hint: "Serve" },
        { word: "Bed 🛌", hint: "Dream" },
        { word: "Soap 🧼", hint: "Bubble" }
    ],
    "Fun": [
        { word: "Carnival 🎡", hint: "Chaos" },
        { word: "Magic Show 🪄", hint: "Trick" },
        { word: "Roller Coaster 🎢", hint: "Loop" },
        { word: "Puppet Show 🎭", hint: "Strings" },
        { word: "Fireworks 🎆", hint: "Spark" },
        { word: "Joke 😂", hint: "Laugh" },
        { word: "Game Night 🎲", hint: "Rivalry" },
        { word: "Party 🥳", hint: "Crowd" },
        { word: "Cinema 🎬", hint: "Screen" },
        { word: "Zoo 🦁", hint: "Wild" },
        { word: "Beach 🏖️", hint: "Sand" },
        { word: "Park 🌳", hint: "Green" },
        { word: "Swing 🎡", hint: "Air" },
        { word: "Music 🎶", hint: "Beat" },
        { word: "Painting 🎨", hint: "Color" }
    ],
    "Sports": [
        { word: "Cricket 🏏", hint: "Willow" },
        { word: "Football ⚽", hint: "Pitch" },
        { word: "Kabaddi 🤼", hint: "Breath" },
        { word: "Badminton 🏸", hint: "Shuttle" },
        { word: "Chess ♟️", hint: "Square" },
        { word: "Wrestling 🤼", hint: "Grip" },
        { word: "Tennis 🎾", hint: "Bounce" },
        { word: "Boxing 🥊", hint: "Punch" },
        { word: "Yoga 🧘", hint: "Peace" },
        { word: "Swimming 🏊", hint: "Deep" },
        { word: "Running 🏃", hint: "Fast" },
        { word: "Cycling 🚴", hint: "Pedal" },
        { word: "Volleyball 🏐", hint: "Net" },
        { word: "Basketball 🏀", hint: "Hoop" },
        { word: "Hockey 🏑", hint: "Stick" }
    ],
    "Colors": [
        { word: "Saffron 🟠", hint: "Spirit" },
        { word: "Turquoise 💎", hint: "Aqua" },
        { word: "Crimson 🔴", hint: "Deep" },
        { word: "Emerald 🟢", hint: "Jewel" },
        { word: "Indigo 🔵", hint: "Dye" },
        { word: "Ivory ⚪", hint: "Pure" },
        { word: "Golden 🟡", hint: "Royal" },
        { word: "Violet 🟣", hint: "Soft" },
        { word: "Black ⚫", hint: "Night" },
        { word: "White ⚪", hint: "Cloud" },
        { word: "Grey 🔘", hint: "Stone" },
        { word: "Pink 🌸", hint: "Blush" },
        { word: "Orange 🍊", hint: "Bright" },
        { word: "Yellow ☀️", hint: "Sun" },
        { word: "Brown 🪵", hint: "Earth" }
    ],
    "Hobbies": [
        { word: "Photography 📷", hint: "Lens" },
        { word: "Gardening 🪴", hint: "Seed" },
        { word: "Reading 📚", hint: "Page" },
        { word: "Cooking 🍳", hint: "Taste" },
        { word: "Dancing 💃", hint: "Rhythm" },
        { word: "Singing 🎤", hint: "Voice" },
        { word: "Painting 🎨", hint: "Brush" },
        { word: "Travel ✈️", hint: "Path" },
        { word: "Fishing 🎣", hint: "Hook" },
        { word: "Gaming 🎮", hint: "Control" },
        { word: "Hiking 🥾", hint: "Peak" },
        { word: "Collecting 🪙", hint: "Rare" },
        { word: "Writing ✍️", hint: "Ink" },
        { word: "Knitting 🧶", hint: "Wool" },
        { word: "Meditation 🧘", hint: "Still" }
    ],
    "Apps": [
        { word: "WhatsApp 🟢", hint: "Chat" },
        { word: "Instagram 📸", hint: "Scroll" },
        { word: "YouTube 🔴", hint: "Video" },
        { word: "Zomato 🍕", hint: "Food" },
        { word: "PhonePe 💜", hint: "Pay" },
        { word: "Facebook 🔵", hint: "Link" },
        { word: "Snapchat 👻", hint: "Ghost" },
        { word: "Telegram ✈️", hint: "Plane" },
        { word: "TikTok 🎵", hint: "Short" },
        { word: "LinkedIn 💼", hint: "Work" },
        { word: "Spotify 🎧", hint: "Sound" },
        { word: "Gmail ✉️", hint: "Mail" },
        { word: "Twitter 🐦", hint: "Tweet" },
        { word: "Amazon 📦", hint: "Shop" },
        { word: "Netflix 📺", hint: "Binge" }
    ],
    "Celebs": [
        { word: "Mammootty 🎭", hint: "Screen" },
        { word: "Mohanlal 🎬", hint: "Acting" },
        { word: "Shah Rukh Khan 🌟", hint: "Romance" },
        { word: "Virat Kohli 🏏", hint: "Runs" },
        { word: "Deepika Padukone ✨", hint: "Face" },
        { word: "Prithviraj 🎥", hint: "Talent" },
        { word: "Amitabh Bachchan 🎙️", hint: "Voice" },
        { word: "Dulquer Salmaan 🕶️", hint: "Youth" },
        { word: "Salman Khan 💥", hint: "Bhai" },
        { word: "Akshay Kumar 🏃", hint: "Fitness" },
        { word: "Priyanka Chopra 🌎", hint: "Global" },
        { word: "Alia Bhatt 🌸", hint: "Fresh" },
        { word: "Ranbir Kapoor 🤴", hint: "Legacy" },
        { word: "MS Dhoni 🧤", hint: "Captain" },
        { word: "Rohit Sharma 🏏", hint: "Sixes" }
    ],
    "Food and Drink": [
        { word: "Biryani 🥘", hint: "Rice" },
        { word: "Samosa 🥟", hint: "Triangular" },
        { word: "Masala Chai ☕", hint: "Warmth" },
        { word: "Dosa 🥞", hint: "Crispy" },
        { word: "Idli ⚪", hint: "Steam" },
        { word: "Payasam 🥣", hint: "Sweet" },
        { word: "Puttu 🎋", hint: "Cylinder" },
        { word: "Lassi 🥛", hint: "Cream" },
        { word: "Paneer 🧀", hint: "Cottage" },
        { word: "Vada 🍩", hint: "Donut" },
        { word: "Gulab Jamun 🍬", hint: "Syrup" },
        { word: "Paratha 🫓", hint: "Flat" },
        { word: "Mango 🥭", hint: "Summer" },
        { word: "Coconut 🥥", hint: "Coastal" },
        { word: "Curd 🥛", hint: "Sour" }
    ],
    "Gaming": [
        { word: "PUBG 🔫", hint: "Battle" },
        { word: "Free Fire 🔥", hint: "Survival" },
        { word: "Minecraft 🧊", hint: "Blocks" },
        { word: "GTA 🚗", hint: "City" },
        { word: "Among Us 🚀", hint: "Sus" },
        { word: "FIFA ⚽", hint: "Pitch" },
        { word: "Candy Crush 🍭", hint: "Sweets" },
        { word: "Valorant 🎯", hint: "Tactical" },
        { word: "Roblox 🧱", hint: "Create" },
        { word: "Fortnite 💃", hint: "Build" },
        { word: "Call of Duty 🎖️", hint: "Soldier" },
        { word: "Pokemon GO 🐹", hint: "Catch" },
        { word: "Apex Legends 🏆", hint: "Champion" },
        { word: "League of Legends ⚔️", hint: "Nexus" },
        { word: "Tencent 🏢", hint: "Giant" }
    ],
    "Animals": [
        { word: "Elephant 🐘", hint: "Giant" },
        { word: "Tiger 🐅", hint: "Stripes" },
        { word: "Cow 🐄", hint: "Sacred" },
        { word: "Monkey 🐒", hint: "Mischief" },
        { word: "Peacock 🦚", hint: "Dance" },
        { word: "Dog 🐕", hint: "Loyal" },
        { word: "Cat 🐈", hint: "Quiet" },
        { word: "Goat 🐐", hint: "Climb" },
        { word: "Lion 🦁", hint: "Roar" },
        { word: "Horse 🐎", hint: "Gallop" },
        { word: "Rabbit 🐰", hint: "Hop" },
        { word: "Snake 🐍", hint: "Slither" },
        { word: "Eagle 🦅", hint: "Sight" },
        { word: "Deer 🦌", hint: "Grace" },
        { word: "Monkey 🐒", hint: "Climb" }
    ],
    "Countries": [
        { word: "India 🇮🇳", hint: "Tricolor" },
        { word: "USA 🇺🇸", hint: "Eagle" },
        { word: "Japan 🇯🇵", hint: "Sunrise" },
        { word: "UAE 🇦🇪", hint: "Desert" },
        { word: "UK 🇬🇧", hint: "Crown" },
        { word: "France 🇫🇷", hint: "Eiffel" },
        { word: "Canada 🇨🇦", hint: "Maple" },
        { word: "Australia 🇦🇺", hint: "Outback" },
        { word: "Russia 🇷🇺", hint: "Cold" },
        { word: "Brazil 🇧🇷", hint: "Samba" },
        { word: "China 🇨🇳", hint: "Wall" },
        { word: "Germany 🇩🇪", hint: "Auto" },
        { word: "Italy 🇮🇹", hint: "Pasta" },
        { word: "Egypt 🇪🇬", hint: "Pyramid" },
        { word: "Singapore 🇸🇬", hint: "Merlion" }
    ]
};

const PLAYER_COLORS = [
    '#d4af37', '#c0c0c0', '#cd7f32', '#a9a9a9',
    '#b8860b', '#808080', '#daa520', '#708090',
    '#eee8aa', '#bebebe', '#bc8f8f', '#f5f5dc'
];

const SETTINGS_KEY = 'imposter_game_settings';

let gameState = {
    selectedCategories: [],
    secretWordObj: null,
    players: [],
    activePlayers: [],
    phase: "setup",
    votedPlayer: null,
    hintsEnabled: false,
    chaosMode: false,
    currentAssignmentIndex: 0
};

const routes = {
    '#setup': 'setup',
    '#assignment': 'assignment',
    '#game': 'game',
    '#reveal': 'reveal'
};

const screens = {
    setup: document.getElementById('setup-screen'),
    assignment: document.getElementById('assignment-screen'),
    game: document.getElementById('game-screen'),
    reveal: document.getElementById('reveal-screen')
};

const categoryTagsContainer = document.getElementById('category-tags');
const playerCountInput = document.getElementById('player-count');
const imposterCountInput = document.getElementById('imposter-count');
const hintToggle = document.getElementById('hint-toggle');
const chaosToggle = document.getElementById('chaos-toggle');
const startBtn = document.getElementById('start-game-btn');
const namesContainer = document.getElementById('player-names-container');
const assignmentContainer = document.getElementById('assignment-card-container');
const nextPlayerBtn = document.getElementById('next-player-btn');
const confirmAssignmentBtn = document.getElementById('confirm-assignment-btn');
const playersList = document.getElementById('active-players-list');
const triggerRevealBtn = document.getElementById('trigger-reveal-btn');
const revealText = document.getElementById('reveal-text');
const revealCard = document.getElementById('reveal-card');
const revealActions = document.getElementById('reveal-actions');
const continueBtn = document.getElementById('continue-btn');
const quitBtn = document.getElementById('quit-btn');
const endGameBtn = document.getElementById('end-game-btn');

function init() {
    for (let category in gameData) {
        const tag = document.createElement('div');
        tag.className = 'tag-label';
        tag.textContent = category;
        tag.onclick = () => {
            tag.classList.toggle('selected');
            saveSettings();
        };
        categoryTagsContainer.appendChild(tag);
    }

    updatePlayerInputs();
    playerCountInput.addEventListener('change', () => {
        updatePlayerInputs();
        saveSettings();
    });
    imposterCountInput.addEventListener('change', saveSettings);
    hintToggle.addEventListener('change', saveSettings);
    chaosToggle.addEventListener('change', saveSettings);

    loadSettings();
    handleRoute();
    window.addEventListener('hashchange', handleRoute);
}

function saveSettings() {
    const selectedTags = Array.from(document.querySelectorAll('.tag-label.selected'))
                               .map(tag => tag.textContent);
    const settings = {
        categories: selectedTags,
        playerCount: playerCountInput.value,
        imposterCount: imposterCountInput.value,
        hintsEnabled: hintToggle.checked,
        chaosMode: chaosToggle.checked
    };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function loadSettings() {
    const saved = localStorage.getItem(SETTINGS_KEY);
    if (!saved) return;

    const settings = JSON.parse(saved);

    document.querySelectorAll('.tag-label').forEach(tag => {
        if (settings.categories.includes(tag.textContent)) {
            tag.classList.add('selected');
        }
    });

    playerCountInput.value = settings.playerCount || 3;
    imposterCountInput.value = settings.imposterCount || 1;
    hintToggle.checked = settings.hintsEnabled || false;
    chaosToggle.checked = settings.chaosMode || false;

    updatePlayerInputs();
}

function handleRoute() {
    const hash = window.location.hash || '#setup';
    const screenKey = routes[hash] || 'setup';
    showScreen(screenKey);
}

function showScreen(screenKey) {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    screens[screenKey].classList.remove('hidden');

    const currentHash = Object.keys(routes).find(key => routes[key] === screenKey);
    if (currentHash && window.location.hash !== currentHash) {
        window.location.hash = currentHash;
    }
}

function navigateTo(hash) {
    window.location.hash = hash;
}

function startGame() {
    const selectedTags = Array.from(document.querySelectorAll('.tag-label.selected'))
                               .map(tag => tag.textContent);
    const count = parseInt(playerCountInput.value);
    const imposterCount = parseInt(imposterCountInput.value);

    if (selectedTags.length === 0) {
        alert("Please select at least one category!");
        return;
    }
    if (count < 3) {
        alert("Minimum 3 players required!");
        return;
    }
    if (imposterCount < 1 || imposterCount >= count) {
        alert("Imposter count must be between 1 and " + (count - 1));
        return;
    }

    gameState.selectedCategories = selectedTags;
    gameState.hintsEnabled = hintToggle.checked;
    gameState.chaosMode = chaosToggle.checked;
    gameState.currentAssignmentIndex = 0;

    const combinedPool = selectedTags.flatMap(cat => gameData[cat]);
    gameState.secretWordObj = combinedPool[Math.floor(Math.random() * combinedPool.length)];

    if (gameState.chaosMode) {
        // In Chaos Mode, everyone gets a word, but they are all different and vaguely related
        // or completely random. To make it interesting: everyone gets a random word from the pool.
        gameState.players = [];
        const nameInputs = document.querySelectorAll('.player-name-input');
        const shuffledIndices = [...Array(count).keys()].sort(() => Math.random() - 0.5);
        const imposterIndices = new Set(shuffledIndices.slice(0, imposterCount));

        for (let i = 0; i < count; i++) {
            const customName = nameInputs[i]?.value.trim();
            const role = imposterIndices.has(i) ? 'imposter' : 'civilian';

            // Chaos Logic: Civilians get different random words from the pool
            // Imposters get a completely different random word (or the same as a random civilian)
            const randomWord = combinedPool[Math.floor(Math.random() * combinedPool.length)];

            gameState.players.push({
                id: i + 1,
                name: customName || `Player ${i + 1}`,
                role: role,
                color: PLAYER_COLORS[i % PLAYER_COLORS.length],
                revealed: false,
                chaosWord: randomWord // Custom word for chaos mode
            });
        }
    } else {
        const nameInputs = document.querySelectorAll('.player-name-input');
        const shuffledIndices = [...Array(count).keys()].sort(() => Math.random() - 0.5);
        const imposterIndices = new Set(shuffledIndices.slice(0, imposterCount));

        gameState.players = [];
        for (let i = 0; i < count; i++) {
            const customName = nameInputs[i]?.value.trim();
            gameState.players.push({
                id: i + 1,
                name: customName || `Player ${i + 1}`,
                role: imposterIndices.has(i) ? 'imposter' : 'civilian',
                color: PLAYER_COLORS[i % PLAYER_COLORS.length],
                revealed: false
            });
        }
    }
    gameState.activePlayers = [...gameState.players];

    setupAssignmentScreen();
    navigateTo('#assignment');
}

function setupAssignmentScreen() {
    renderCurrentAssignmentCard();
    nextPlayerBtn.classList.remove('hidden');
    confirmAssignmentBtn.classList.add('hidden');
}

function renderCurrentAssignmentCard() {
    assignmentContainer.innerHTML = '';
    const player = gameState.players[gameState.currentAssignmentIndex];

    const card = document.createElement('div');
    card.className = 'single-role-card';
    card.textContent = player.name;
    card.style.borderColor = player.color;

    const reveal = () => {
        card.classList.add('revealed');
        card.style.backgroundColor = player.color;
        if (player.role === 'imposter') {
            const hintText = gameState.hintsEnabled
                ? `IMPOSTER\nHint: ${gameState.secretWordObj.hint}`
                : 'YOU ARE THE IMPOSTER';
            card.textContent = hintText;
            card.style.whiteSpace = "pre-line";
        } else {
            const word = gameState.chaosMode ? player.chaosWord.word : gameState.secretWordObj.word;
            card.textContent = `WORD: ${word}`;
        }
    };

    const hide = () => {
        card.classList.remove('revealed');
        card.style.backgroundColor = '';
        card.textContent = player.name;
    };

    card.addEventListener('mousedown', reveal);
    card.addEventListener('mouseup', hide);
    card.addEventListener('mouseleave', hide);
    card.addEventListener('touchstart', (e) => {
        e.preventDefault();
        reveal();
    });
    card.addEventListener('touchend', hide);

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

function renderPlayers() {
    playersList.innerHTML = '';
    gameState.activePlayers.forEach(player => {
        const item = document.createElement('div');
        item.className = 'player-item';
        item.style.borderLeftColor = player.color;
        item.innerHTML = `
            <span class="player-name">${player.name}</span>
            <button class="primary-btn" onclick="votePlayer(${player.id})">Vote</button>
        `;
        playersList.appendChild(item);
    });
}

window.votePlayer = function(id) {
    const player = gameState.players.find(p => p.id === id);
    gameState.votedPlayer = player;

    revealText.textContent = "???";
    revealCard.classList.remove('revealed');
    revealCard.style.borderColor = 'var(--accent-color)';
    revealActions.classList.add('hidden');
    triggerRevealBtn.classList.remove('hidden');

    navigateTo('#reveal');
};

function triggerReveal() {
    triggerRevealBtn.classList.add('hidden');

    // Animation for reveal
    revealCard.classList.add('revealed');

    setTimeout(() => {
        revealCard.style.borderColor = gameState.votedPlayer.color;
        revealCard.style.backgroundColor = gameState.votedPlayer.color;

        const isImposter = gameState.votedPlayer.role === 'imposter';
        revealText.textContent = isImposter ? "IMPOSTER" : "CIVILIAN";
        revealText.style.color = isImposter ? "var(--danger-color)" : "var(--success-color)";

        revealActions.classList.remove('hidden');

        if (isImposter) {
            // "Caught" animation effect (shake or flash)
            revealCard.style.animation = "shake 0.5s ease-in-out";
            setTimeout(() => { revealCard.style.animation = ""; }, 500);

            const currentImposters = gameState.activePlayers.filter(p => p.role === 'imposter');
            if (currentImposters.length <= 1 && gameState.votedPlayer.role === 'imposter') {
                 document.getElementById('reveal-status').textContent = `${gameState.votedPlayer.name} was the last IMPOSTER!`;
                 continueBtn.classList.add('hidden');
            } else {
                 document.getElementById('reveal-status').textContent = `${gameState.votedPlayer.name} was an IMPOSTER!`;
                 continueBtn.classList.remove('hidden');
                 gameState.activePlayers = gameState.activePlayers.filter(p => p.id !== gameState.votedPlayer.id);
            }
        } else {
            document.getElementById('reveal-status').textContent = `${gameState.votedPlayer.name} was a CIVILIAN...`;
            continueBtn.classList.remove('hidden');
            gameState.activePlayers = gameState.activePlayers.filter(p => p.id !== gameState.votedPlayer.id);
        }
    }, 600);
}

function continueGame() {
    const imposters = gameState.activePlayers.filter(p => p.role === 'imposter').length;
    const civilians = gameState.activePlayers.length - imposters;

    if (imposters >= civilians) {
        alert("Game Over! The Imposters have taken over.");
        resetGame();
        return;
    }

    document.getElementById('reveal-status').textContent = "The Trial Continues";
    navigateTo('#game');
}

function resetGame() {
    gameState = {
        selectedCategories: [],
        secretWordObj: null,
        players: [],
        activePlayers: [],
        phase: "setup",
        votedPlayer: null,
        hintsEnabled: false,
        currentAssignmentIndex: 0
    };
    navigateTo('#setup');
}

startBtn.addEventListener('click', startGame);
confirmAssignmentBtn.addEventListener('click', () => {
    setupGameScreen();
    navigateTo('#game');
});
triggerRevealBtn.addEventListener('click', triggerReveal);
continueBtn.addEventListener('click', continueGame);
quitBtn.addEventListener('click', resetGame);
endGameBtn.addEventListener('click', () => {
    alert("Game ended manually!");
    resetGame();
});

function updatePlayerInputs() {
    const count = parseInt(playerCountInput.value) || 3;
    const existingNames = Array.from(document.querySelectorAll('.player-name-input'))
                               .map(input => input.value);

    namesContainer.innerHTML = '';
    for (let i = 1; i <= count; i++) {
        const group = document.createElement('div');
        group.className = 'name-input-group';
        const savedName = existingNames[i - 1] || "";
        group.innerHTML = `
            <label>Player ${i}</label>
            <input type="text" class="player-name-input" placeholder="Player ${i}" value="${savedName}">
        `;
        namesContainer.appendChild(group);
    }
}

init();
