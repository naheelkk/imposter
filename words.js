/**
 * Secret-word pool for Bluff & Betrayal.
 *
 * Loaded before script.js by a plain <script src="words.js"> tag, so it keeps
 * working from file:// with no build step and no server. Each entry is a
 * { word, hint } pair: the word is what civilians see, the hint is a clue the
 * impostor gets instead of the word.
 *
 * Run `node tools/validate-pool.js` after editing. A hint must be unique pool
 * -wide, must not repeat its own word, and must not be the name of another word
 * in the pool — otherwise it hands the impostor the answer.
 */
const gameData = {
    "Daily Objects": [
        {
            "word": "Umbrella ☂️",
            "hint": "Rain"
        },
        {
            "word": "Slippers 🩴",
            "hint": "Scuff"
        },
        {
            "word": "Water Bottle 🍼",
            "hint": "Hydration"
        },
        {
            "word": "Key Chain 🔑",
            "hint": "Jingle"
        },
        {
            "word": "Wallet 👛",
            "hint": "Cash"
        },
        {
            "word": "Handkerchief 🤍",
            "hint": "Fabric"
        },
        {
            "word": "Spectacles 👓",
            "hint": "Lenses"
        },
        {
            "word": "Watch ⌚",
            "hint": "Tick"
        },
        {
            "word": "Comb 🪮",
            "hint": "Strand"
        },
        {
            "word": "Mirror 🪞",
            "hint": "Reflection"
        },
        {
            "word": "Backpack 🎒",
            "hint": "Books"
        },
        {
            "word": "Scissors ✂️",
            "hint": "Blades"
        },
        {
            "word": "Charger 🔌",
            "hint": "Plug"
        },
        {
            "word": "Bath Towel 🛁",
            "hint": "Drench"
        },
        {
            "word": "Toothbrush 🪥",
            "hint": "Plaque"
        },
        {
            "word": "Headphones 🎧",
            "hint": "Cushions"
        },
        {
            "word": "Laptop 💻",
            "hint": "Screens"
        },
        {
            "word": "Notebook 📓",
            "hint": "Paper"
        },
        {
            "word": "Pen 🖊️",
            "hint": "Signature"
        },
        {
            "word": "Flashlight 🔦",
            "hint": "Beam"
        },
        {
            "word": "Lip Balm 💄",
            "hint": "Gloss"
        },
        {
            "word": "Nail Clipper 💅",
            "hint": "Manicure"
        },
        {
            "word": "Power Bank 🔋",
            "hint": "Reserve"
        },
        {
            "word": "Helmet 🪖",
            "hint": "Safety"
        },
        {
            "word": "Sanitizer 🧴",
            "hint": "Germs"
        },
        {
            "word": "Sunglasses 🕶️",
            "hint": "UV"
        },
        {
            "word": "Earbuds 🎧",
            "hint": "Wireless"
        },
        {
            "word": "Perfume 🧴",
            "hint": "Aroma"
        },
        {
            "word": "Tissue 🧻",
            "hint": "Blow"
        },
        {
            "word": "Calculator 🧮",
            "hint": "Digits"
        },
        {
            "word": "Coffee Mug ☕",
            "hint": "Caffeine"
        },
        {
            "word": "Hair Band 💇",
            "hint": "Elastic"
        },
        {
            "word": "Pencil ✏️",
            "hint": "Graphite"
        },
        {
            "word": "Stapler 📎",
            "hint": "Paperclip"
        },
        {
            "word": "Water Filter 🚰",
            "hint": "Limescale"
        },
        {
            "word": "Bookmark 🔖",
            "hint": "Ribbon"
        },
        {
            "word": "Passport 📕",
            "hint": "Stamps"
        },
        {
            "word": "Thermos 🧪",
            "hint": "Vacuum"
        },
        {
            "word": "Safety Pin 🧷",
            "hint": "Fastener"
        },
        {
            "word": "Wristband 🎗️",
            "hint": "Admission"
        },
        {
            "word": "Shoe Polish 👞",
            "hint": "Shine"
        },
        {
            "word": "Coin Pouch 🪙",
            "hint": "Drawstring"
        },
        {
            "word": "Pocket Knife 🔪",
            "hint": "Folding"
        },
        {
            "word": "Tape Measure 📏",
            "hint": "Inches"
        },
        {
            "word": "Sticky Notes 🗒️",
            "hint": "Memo"
        },
        {
            "word": "Dental Floss 🧵",
            "hint": "Cavity"
        },
        {
            "word": "Comb Case 🪮",
            "hint": "Velvet"
        },
        {
            "word": "Hand Fan 🪭",
            "hint": "Cooling"
        },
        {
            "word": "Jacket 🧥",
            "hint": "Zipper"
        },
        {
            "word": "Socks 🧦",
            "hint": "Heel"
        },
        {
            "word": "Hoodie 👕",
            "hint": "Drawstrings"
        },
        {
            "word": "Scarf 🧣",
            "hint": "Fringe"
        },
        {
            "word": "Belt 👖",
            "hint": "Buckle"
        },
        {
            "word": "Necktie 👔",
            "hint": "Knot"
        },
        {
            "word": "Bandage 🩹",
            "hint": "Plaster"
        },
        {
            "word": "Thermometer 🌡️",
            "hint": "Degrees"
        },
        {
            "word": "Toothpaste 🪥",
            "hint": "Fluoride"
        },
        {
            "word": "Shampoo 🧴",
            "hint": "Lather"
        },
        {
            "word": "Conditioner 🧴",
            "hint": "Rinse"
        },
        {
            "word": "Phone Case 📱",
            "hint": "Bumper"
        },
        {
            "word": "Battery 🔋",
            "hint": "Cells"
        },
        {
            "word": "Lighter 🔥",
            "hint": "Flame"
        },
        {
            "word": "Business Card 💳",
            "hint": "Title"
        },
        {
            "word": "Gym Bag 🎒",
            "hint": "Duffel"
        },
        {
            "word": "Rain Boots 🌧️",
            "hint": "Splash"
        },
        {
            "word": "ID Card 🪪",
            "hint": "Plastic"
        },
        {
            "word": "Face Mask 😷",
            "hint": "Pandemic"
        },
        {
            "word": "Vitamins 💊",
            "hint": "Supplement"
        },
        {
            "word": "First Aid Kit 🚑",
            "hint": "Emergency"
        },
        {
            "word": "Lipstick 👄",
            "hint": "Red"
        },
        {
            "word": "Necklace 📿",
            "hint": "Pendant"
        },
        {
            "word": "Earrings 👂",
            "hint": "Studs"
        },
        {
            "word": "Ring 💍",
            "hint": "Finger"
        },
        {
            "word": "Bracelet 🪢",
            "hint": "Beads"
        },
        {
            "word": "Name Badge 🎫",
            "hint": "Attendee"
        },
        {
            "word": "Dictionary 📖",
            "hint": "Thesaurus"
        },
        {
            "word": "Postcard 💌",
            "hint": "Vacation"
        },
        {
            "word": "Map 🗺️",
            "hint": "Waypoints"
        },
        {
            "word": "Magnetic Compass 🧭",
            "hint": "Bearing"
        },
        {
            "word": "Extension Cord ⚡",
            "hint": "Socket"
        },
        {
            "word": "Tote Bag 👜",
            "hint": "Tidy"
        },
        {
            "word": "Drawer 🗃️",
            "hint": "Slides"
        },
        {
            "word": "Cushion 🪑",
            "hint": "Squishy"
        },
        {
            "word": "Coat Rack 🪝",
            "hint": "Hanging"
        }
    ],
    "Household Items": [
        {
            "word": "Pressure Cooker 🫕",
            "hint": "Steamy"
        },
        {
            "word": "Mixer 🥤",
            "hint": "Smoothie"
        },
        {
            "word": "Steel Glass 🥛",
            "hint": "Stainless"
        },
        {
            "word": "Tiffin Box 🍱",
            "hint": "Carrier"
        },
        {
            "word": "Broom 🧹",
            "hint": "Sweep"
        },
        {
            "word": "Saree 👘",
            "hint": "Drape"
        },
        {
            "word": "Mat 🧶",
            "hint": "Jute"
        },
        {
            "word": "Diya 🪔",
            "hint": "Lamp"
        },
        {
            "word": "Fan 🌀",
            "hint": "Draft"
        },
        {
            "word": "Fridge ❄️",
            "hint": "Chilled"
        },
        {
            "word": "Curtain 🪟",
            "hint": "Sheer"
        },
        {
            "word": "Spoon 🥄",
            "hint": "Scoop"
        },
        {
            "word": "Plate 🍽️",
            "hint": "Ceramic"
        },
        {
            "word": "Bed 🛌",
            "hint": "Doze"
        },
        {
            "word": "Soap 🧼",
            "hint": "Scent"
        },
        {
            "word": "Washing Machine 🧺",
            "hint": "Spin"
        },
        {
            "word": "Toaster 🍞",
            "hint": "Slot"
        },
        {
            "word": "Microwave 🍲",
            "hint": "Hum"
        },
        {
            "word": "Dustbin 🗑️",
            "hint": "Rubbish"
        },
        {
            "word": "Clock ⏰",
            "hint": "Ticking"
        },
        {
            "word": "Pillow 🛏️",
            "hint": "Feather"
        },
        {
            "word": "Bucket 🪣",
            "hint": "Carry"
        },
        {
            "word": "Iron 🧺",
            "hint": "Wrinkles"
        },
        {
            "word": "Door Lock 🔒",
            "hint": "Deadbolt"
        },
        {
            "word": "Calendar 📅",
            "hint": "Date"
        },
        {
            "word": "Air Conditioner ❄️",
            "hint": "Cooler"
        },
        {
            "word": "Gas Stove ♨️",
            "hint": "Burner"
        },
        {
            "word": "Frying Pan 🍳",
            "hint": "Nonstick"
        },
        {
            "word": "Doormat 🚪",
            "hint": "Welcome"
        },
        {
            "word": "Ceiling Fan 🌀",
            "hint": "Blade"
        },
        {
            "word": "Vacuum Cleaner 🧹",
            "hint": "Dust"
        },
        {
            "word": "Wardrobe 🚪",
            "hint": "Outfits"
        },
        {
            "word": "Vase 🏺",
            "hint": "Bouquet"
        },
        {
            "word": "Water Heater 🚿",
            "hint": "Thermostat"
        },
        {
            "word": "Dining Table 🪑",
            "hint": "Feast"
        },
        {
            "word": "Dustpan 🧹",
            "hint": "Corner"
        },
        {
            "word": "Mop 🧽",
            "hint": "Floor"
        },
        {
            "word": "Kettle 🫖",
            "hint": "Boil"
        },
        {
            "word": "Blanket 🛋️",
            "hint": "Cozy"
        },
        {
            "word": "Hanger 🧥",
            "hint": "Closet"
        },
        {
            "word": "Shoe Rack 👠",
            "hint": "Hallway"
        },
        {
            "word": "Cutting Board 🪵",
            "hint": "Slice"
        },
        {
            "word": "Torch 🔦",
            "hint": "Powercut"
        },
        {
            "word": "Clothespin 📎",
            "hint": "Line"
        },
        {
            "word": "Rug 🧶",
            "hint": "Wool"
        },
        {
            "word": "Squeegee 🧹",
            "hint": "Streak"
        },
        {
            "word": "Furniture 🛋️",
            "hint": "Upholstery"
        },
        {
            "word": "Shelving 🗄️",
            "hint": "Racks"
        },
        {
            "word": "Laundry Basket 🧺",
            "hint": "Hamper"
        },
        {
            "word": "Detergent 🧴",
            "hint": "Suds"
        },
        {
            "word": "Sponge 🧽",
            "hint": "Scrub"
        },
        {
            "word": "Shower Curtain 🚿",
            "hint": "Liner"
        },
        {
            "word": "Ladder 🪜",
            "hint": "Rungs"
        },
        {
            "word": "Toolbox 🧰",
            "hint": "Clutter"
        },
        {
            "word": "Screwdriver 🪛",
            "hint": "Groove"
        },
        {
            "word": "Hammer 🔨",
            "hint": "Claw"
        },
        {
            "word": "Paint Can 🎨",
            "hint": "Primer"
        },
        {
            "word": "Paint Brush 🖌️",
            "hint": "Bristle"
        },
        {
            "word": "Wok 🥘",
            "hint": "Sizzle"
        },
        {
            "word": "Kitchen Knife 🗡️",
            "hint": "Sharpened"
        },
        {
            "word": "Ladle 🥣",
            "hint": "Soup"
        },
        {
            "word": "Rolling Pin 🥖",
            "hint": "Flattened"
        },
        {
            "word": "Grater 🧀",
            "hint": "Shredded"
        },
        {
            "word": "Mortar & Pestle 🪨",
            "hint": "Grinding"
        },
        {
            "word": "Dish Rack 🧺",
            "hint": "Drying"
        },
        {
            "word": "Kitchen Scale ⚖️",
            "hint": "Weighing"
        },
        {
            "word": "Apron 👨‍🍳",
            "hint": "Pockets"
        },
        {
            "word": "Wall Clock 🕰️",
            "hint": "Chimes"
        },
        {
            "word": "Picture Frame 🖼️",
            "hint": "Portrait"
        },
        {
            "word": "Key Holder 🗝️",
            "hint": "Hooks"
        },
        {
            "word": "Bathtub 🛁",
            "hint": "Bubbles"
        },
        {
            "word": "Shower 🚿",
            "hint": "Warmth"
        },
        {
            "word": "Chandelier 💡",
            "hint": "Sparkle"
        },
        {
            "word": "Wallpaper 📄",
            "hint": "Pattern"
        },
        {
            "word": "Floor Lamp 🕯️",
            "hint": "Lamplight"
        }
    ],
    "Fun & Games": [
        {
            "word": "Carnival 🎡",
            "hint": "Crowd"
        },
        {
            "word": "Magic Show 🪄",
            "hint": "Illusion"
        },
        {
            "word": "Roller Coaster 🎢",
            "hint": "Loop"
        },
        {
            "word": "Puppet Show 🎭",
            "hint": "Marionette"
        },
        {
            "word": "Fireworks 🎆",
            "hint": "Midnight"
        },
        {
            "word": "Joke 😂",
            "hint": "Laughter"
        },
        {
            "word": "Game Night 🎲",
            "hint": "Dice"
        },
        {
            "word": "Party 🥳",
            "hint": "Celebrate"
        },
        {
            "word": "Cinema 🎬",
            "hint": "Reel"
        },
        {
            "word": "Zoo 🦁",
            "hint": "Enclosure"
        },
        {
            "word": "Beach 🏖️",
            "hint": "Shoreline"
        },
        {
            "word": "Park 🌳",
            "hint": "Lawn"
        },
        {
            "word": "Swing 🎡",
            "hint": "Pendulum"
        },
        {
            "word": "Music 🎶",
            "hint": "Tune"
        },
        {
            "word": "Karaoke 🎤",
            "hint": "Duet"
        },
        {
            "word": "Water Park 🏊",
            "hint": "Slide"
        },
        {
            "word": "Circus 🎪",
            "hint": "Acrobat"
        },
        {
            "word": "Bowling 🎳",
            "hint": "Spare"
        },
        {
            "word": "Arcade 🕹️",
            "hint": "Cabinet"
        },
        {
            "word": "Trampoline 🤸",
            "hint": "Bounce"
        },
        {
            "word": "Escape Room 🔑",
            "hint": "Timed"
        },
        {
            "word": "Camping ⛺",
            "hint": "Tents"
        },
        {
            "word": "Picnic 🧺",
            "hint": "Basket"
        },
        {
            "word": "Ferris Wheel 🎡",
            "hint": "Skyline"
        },
        {
            "word": "Haunted House 👻",
            "hint": "Scream"
        },
        {
            "word": "Laser Tag 🔫",
            "hint": "Vest"
        },
        {
            "word": "Treasure Hunt 🗺️",
            "hint": "Compass"
        },
        {
            "word": "Bumper Cars 🚗",
            "hint": "Collision"
        },
        {
            "word": "Bonfire 🔥",
            "hint": "Smoke"
        },
        {
            "word": "Piñata 🪅",
            "hint": "Blindfold"
        },
        {
            "word": "Talent Show 🌟",
            "hint": "Encore"
        },
        {
            "word": "Go-Karting 🏎️",
            "hint": "Steering"
        },
        {
            "word": "Costume Party 🎭",
            "hint": "Masquerade"
        },
        {
            "word": "Kite Flying 🪁",
            "hint": "Wind"
        },
        {
            "word": "Snake Game 🐍",
            "hint": "Slither"
        },
        {
            "word": "Stand-up Comedy 🎤",
            "hint": "Roast"
        },
        {
            "word": "Carrom 🏓",
            "hint": "Striker"
        },
        {
            "word": "Pool Table 🎱",
            "hint": "Pocket"
        },
        {
            "word": "Video Game 🎮",
            "hint": "Level"
        },
        {
            "word": "Birthday Party 🎂",
            "hint": "Candles"
        },
        {
            "word": "Dance Floor 🕺",
            "hint": "Disco"
        },
        {
            "word": "Nightclub 🎶",
            "hint": "Late"
        },
        {
            "word": "Movie Night 🍿",
            "hint": "Feature"
        },
        {
            "word": "Snow Day ⛄",
            "hint": "Sleigh"
        },
        {
            "word": "Sandcastle 🏰",
            "hint": "Shovel"
        },
        {
            "word": "Monopoly 🎲",
            "hint": "Property"
        },
        {
            "word": "Jigsaw 🧩",
            "hint": "Interlock"
        },
        {
            "word": "Clue 🔍",
            "hint": "Suspect"
        },
        {
            "word": "Dart Board 🎯",
            "hint": "Bullseye"
        },
        {
            "word": "Nerf Gun 🧸",
            "hint": "Foam Bullets"
        },
        {
            "word": "Bubble Wrap 🫧",
            "hint": "Pop"
        },
        {
            "word": "Face Paint 💄",
            "hint": "Colourful"
        },
        {
            "word": "Tug of War 🪢",
            "hint": "Rope"
        },
        {
            "word": "Obstacle Course 🏃",
            "hint": "Crawl"
        },
        {
            "word": "Hula Hoop 🌀",
            "hint": "Waist"
        },
        {
            "word": "Tabletop Game 🃏",
            "hint": "Pieces"
        },
        {
            "word": "Charades 🤫",
            "hint": "Mimes"
        },
        {
            "word": "Hide and Seek 🙈",
            "hint": "Hiding"
        },
        {
            "word": "Scavenger Hunt 🗝️",
            "hint": "Checklist"
        },
        {
            "word": "Photo Booth 📸",
            "hint": "Props"
        },
        {
            "word": "Game Show 📺",
            "hint": "Contestants"
        },
        {
            "word": "Dance Off 💃",
            "hint": "Battle"
        },
        {
            "word": "Rock Paper Scissors ✌️",
            "hint": "Gesture"
        }
    ],
    "Sports": [
        {
            "word": "Cricket 🏏",
            "hint": "Wicket"
        },
        {
            "word": "Football ⚽",
            "hint": "Goalpost"
        },
        {
            "word": "Kabaddi 🤼",
            "hint": "Raid"
        },
        {
            "word": "Badminton 🏸",
            "hint": "Shuttle"
        },
        {
            "word": "Chess ♟️",
            "hint": "Checkmate"
        },
        {
            "word": "Wrestling 🤼",
            "hint": "Hold"
        },
        {
            "word": "Tennis 🎾",
            "hint": "Volley"
        },
        {
            "word": "Boxing 🥊",
            "hint": "Knockout"
        },
        {
            "word": "Yoga 🧘",
            "hint": "Asana"
        },
        {
            "word": "Swimming 🏊",
            "hint": "Freestyle"
        },
        {
            "word": "Running 🏃",
            "hint": "Sprint"
        },
        {
            "word": "Cycling 🚴",
            "hint": "Pedal"
        },
        {
            "word": "Volleyball 🏐",
            "hint": "Spiker"
        },
        {
            "word": "Basketball 🏀",
            "hint": "Dunk"
        },
        {
            "word": "Hockey 🏑",
            "hint": "Puck"
        },
        {
            "word": "Table Tennis 🏓",
            "hint": "Smash"
        },
        {
            "word": "Archery 🏹",
            "hint": "Aim"
        },
        {
            "word": "Golf ⛳",
            "hint": "Fairway"
        },
        {
            "word": "Rugby 🏉",
            "hint": "Try"
        },
        {
            "word": "Surfing 🏄",
            "hint": "Wave"
        },
        {
            "word": "Baseball ⚾",
            "hint": "Infield"
        },
        {
            "word": "Skiing 🎿",
            "hint": "Powder"
        },
        {
            "word": "Skateboarding 🛹",
            "hint": "Deck"
        },
        {
            "word": "Rock Climbing 🧗",
            "hint": "Chalk"
        },
        {
            "word": "Rowing 🚣",
            "hint": "Oar"
        },
        {
            "word": "Gymnastics 🤸",
            "hint": "Tumble"
        },
        {
            "word": "Karate 🥋",
            "hint": "Dojo"
        },
        {
            "word": "Snooker 🎱",
            "hint": "Cue"
        },
        {
            "word": "Fencing 🤺",
            "hint": "Foil"
        },
        {
            "word": "Polo 🐎",
            "hint": "Mallet"
        },
        {
            "word": "Marathon 🏃",
            "hint": "Pace"
        },
        {
            "word": "Darts 🎯",
            "hint": "Double"
        },
        {
            "word": "Skating ⛸️",
            "hint": "Edge"
        },
        {
            "word": "Snorkeling 🤿",
            "hint": "Shallow"
        },
        {
            "word": "Diving 🐠",
            "hint": "Deep"
        },
        {
            "word": "Lacrosse 🥍",
            "hint": "Stick"
        },
        {
            "word": "Handball 🤾",
            "hint": "Goal"
        },
        {
            "word": "Curling 🥌",
            "hint": "Stone"
        },
        {
            "word": "Triathlon 🏊",
            "hint": "Three"
        },
        {
            "word": "Paralympics ♿",
            "hint": "Classification"
        },
        {
            "word": "Squash 🏸",
            "hint": "Paddle"
        },
        {
            "word": "Javelin 🎯",
            "hint": "Throwing"
        },
        {
            "word": "Shot Put 🥎",
            "hint": "Heavy"
        },
        {
            "word": "Weightlifting 🏋️",
            "hint": "Barbell"
        },
        {
            "word": "Parkour 🏃",
            "hint": "Gap"
        },
        {
            "word": "Taekwondo 🥋",
            "hint": "Kick"
        },
        {
            "word": "Sumo 🤼",
            "hint": "Dohyo"
        },
        {
            "word": "Esports 🎮",
            "hint": "Tournament"
        },
        {
            "word": "Futsal 🥅",
            "hint": "Compact"
        },
        {
            "word": "Streetball 🏙️",
            "hint": "Asphalt"
        },
        {
            "word": "Ultimate Frisbee 🥏",
            "hint": "Flying"
        },
        {
            "word": "CrossFit ⛑️",
            "hint": "Rounds"
        },
        {
            "word": "Shooting 🔫",
            "hint": "Rifle"
        },
        {
            "word": "Sailing ⛵",
            "hint": "Tacking"
        },
        {
            "word": "Bodybuilding 💪",
            "hint": "Symmetry"
        },
        {
            "word": "Kickboxing 🦶",
            "hint": "Roundhouse"
        },
        {
            "word": "Dodgeball 🧱",
            "hint": "Duck"
        },
        {
            "word": "Horse Racing 🏇",
            "hint": "Jockey"
        },
        {
            "word": "Bouldering 🪨",
            "hint": "Crag"
        },
        {
            "word": "Biathlon ❄️",
            "hint": "Target"
        },
        {
            "word": "Snowboarding 🏂",
            "hint": "Carve"
        }
    ],
    "Food & Drink": [
        {
            "word": "Biryani 🥘",
            "hint": "Fragrant"
        },
        {
            "word": "Samosa 🥟",
            "hint": "Chaat"
        },
        {
            "word": "Masala Chai ☕",
            "hint": "Ginger"
        },
        {
            "word": "Dosa 🥞",
            "hint": "Batter"
        },
        {
            "word": "Idli ⚪",
            "hint": "Soak"
        },
        {
            "word": "Payasam 🥣",
            "hint": "Festival"
        },
        {
            "word": "Puttu 🎋",
            "hint": "Cylinder"
        },
        {
            "word": "Lassi 🥛",
            "hint": "Thick"
        },
        {
            "word": "Paneer 🧀",
            "hint": "Cottage"
        },
        {
            "word": "Vada 🟠",
            "hint": "Lentil"
        },
        {
            "word": "Gulab Jamun 🍬",
            "hint": "Syrup"
        },
        {
            "word": "Paratha 🫓",
            "hint": "Ghee"
        },
        {
            "word": "Mango 🥭",
            "hint": "Alphonso"
        },
        {
            "word": "Coconut 🥥",
            "hint": "Tropical"
        },
        {
            "word": "Curd 🥛",
            "hint": "Set"
        },
        {
            "word": "Shawarma 🌯",
            "hint": "Wrap"
        },
        {
            "word": "Pizza 🍕",
            "hint": "Cheese"
        },
        {
            "word": "Burger 🍔",
            "hint": "Layer"
        },
        {
            "word": "Momos 🥟",
            "hint": "Tibetan"
        },
        {
            "word": "Noodles 🍜",
            "hint": "Strands"
        },
        {
            "word": "Ice Cream 🍦",
            "hint": "Cone"
        },
        {
            "word": "Falooda 🍧",
            "hint": "Vermicelli"
        },
        {
            "word": "Pani Puri 🥣",
            "hint": "Tamarind"
        },
        {
            "word": "Omelette 🍳",
            "hint": "Whisk"
        },
        {
            "word": "Lemonade 🍋",
            "hint": "Tart"
        },
        {
            "word": "Tacos 🌮",
            "hint": "Folded"
        },
        {
            "word": "Sushi 🍣",
            "hint": "Roll"
        },
        {
            "word": "Pasta 🍝",
            "hint": "Semolina"
        },
        {
            "word": "Waffles 🧇",
            "hint": "Belgian"
        },
        {
            "word": "Ramen 🍜",
            "hint": "Broth"
        },
        {
            "word": "Cheesecake 🍰",
            "hint": "Cream"
        },
        {
            "word": "Hot Dog 🌭",
            "hint": "Ketchup"
        },
        {
            "word": "French Fries 🍟",
            "hint": "Salt"
        },
        {
            "word": "Pancakes 🥞",
            "hint": "Maple"
        },
        {
            "word": "Croissant 🥐",
            "hint": "Flaky"
        },
        {
            "word": "Milkshake 🥤",
            "hint": "Sip"
        },
        {
            "word": "Popcorn 🍿",
            "hint": "Kernel"
        },
        {
            "word": "Donut 🍩",
            "hint": "Glaze"
        },
        {
            "word": "Chowmein 🥢",
            "hint": "Stir-Fry"
        },
        {
            "word": "Kebab 🍢",
            "hint": "Skewer"
        },
        {
            "word": "Rasgulla 🍮",
            "hint": "Soft"
        },
        {
            "word": "Litti Chokha 🥟",
            "hint": "Round"
        },
        {
            "word": "Rajma 🍲",
            "hint": "Gravy"
        },
        {
            "word": "Chole Bhature 🫓",
            "hint": "Chickpea"
        },
        {
            "word": "Poha 🍚",
            "hint": "Breakfast"
        },
        {
            "word": "Vada Pav 🍔",
            "hint": "Bun"
        },
        {
            "word": "Uttapam 🥞",
            "hint": "Ferment"
        },
        {
            "word": "Appam 🍮",
            "hint": "Lace"
        },
        {
            "word": "Filter Coffee ☕",
            "hint": "Decant"
        },
        {
            "word": "Barfi 🍬",
            "hint": "Square"
        },
        {
            "word": "Kheer 🍮",
            "hint": "Milk"
        },
        {
            "word": "Pickle 🥒",
            "hint": "Brine"
        },
        {
            "word": "Chutney 🫙",
            "hint": "Relish"
        },
        {
            "word": "Chai Latte ☕",
            "hint": "Foam"
        },
        {
            "word": "Mint Margarita 🍹",
            "hint": "Muddled"
        },
        {
            "word": "Cola 🥤",
            "hint": "Fizz"
        },
        {
            "word": "Brownie 🍫",
            "hint": "Fudgy"
        },
        {
            "word": "Cookie 🍪",
            "hint": "Crumb"
        },
        {
            "word": "Candy 🍬",
            "hint": "Wrapper"
        },
        {
            "word": "Fruit Salad 🥗",
            "hint": "Fresh"
        },
        {
            "word": "Butter 🧈",
            "hint": "Toast"
        },
        {
            "word": "Cheddar 🧀",
            "hint": "Rind"
        },
        {
            "word": "Sugar 🧂",
            "hint": "Sweet"
        },
        {
            "word": "Honeycomb 🍯",
            "hint": "Hive"
        },
        {
            "word": "Tofu 🥡",
            "hint": "Silken"
        },
        {
            "word": "Avocado 🥑",
            "hint": "Guacamole"
        },
        {
            "word": "Tandoori Chicken 🍖",
            "hint": "Charred"
        },
        {
            "word": "Corn 🌽",
            "hint": "Cob"
        },
        {
            "word": "Pineapple 🍍",
            "hint": "Spiky"
        },
        {
            "word": "Maple Syrup 🧃",
            "hint": "Pour"
        },
        {
            "word": "Fish and Chips 🐟",
            "hint": "Tartar"
        },
        {
            "word": "Pav Bhaji 🍞",
            "hint": "Spiced"
        },
        {
            "word": "Butter Chicken 🍗",
            "hint": "Creamy"
        },
        {
            "word": "Raita 🍥",
            "hint": "Tempered"
        },
        {
            "word": "Jalebi 🥧",
            "hint": "Coil"
        },
        {
            "word": "Kulfi 🧊",
            "hint": "Glacial"
        }
    ],
    "Animals": [
        {
            "word": "Elephant 🐘",
            "hint": "Herd"
        },
        {
            "word": "Tiger 🐅",
            "hint": "Stripe"
        },
        {
            "word": "Cow 🐄",
            "hint": "Moo"
        },
        {
            "word": "Monkey 🐒",
            "hint": "Bananas"
        },
        {
            "word": "Peacock 🦚",
            "hint": "Plumage"
        },
        {
            "word": "Dog 🐕",
            "hint": "Woof"
        },
        {
            "word": "Cat 🐈",
            "hint": "Purr"
        },
        {
            "word": "Goat 🐐",
            "hint": "Bleat"
        },
        {
            "word": "Lion 🦁",
            "hint": "Mane"
        },
        {
            "word": "Horse 🐎",
            "hint": "Gallop"
        },
        {
            "word": "Rabbit 🐰",
            "hint": "Burrow"
        },
        {
            "word": "Snake 🐍",
            "hint": "Hiss"
        },
        {
            "word": "Eagle 🦅",
            "hint": "Talons"
        },
        {
            "word": "Deer 🦌",
            "hint": "Antler"
        },
        {
            "word": "Dolphin 🐬",
            "hint": "Leap"
        },
        {
            "word": "Bear 🐻",
            "hint": "Honey"
        },
        {
            "word": "Panda 🐼",
            "hint": "Bamboo"
        },
        {
            "word": "Wolf 🐺",
            "hint": "Pack"
        },
        {
            "word": "Giraffe 🦒",
            "hint": "Neck"
        },
        {
            "word": "Kangaroo 🦘",
            "hint": "Pouch"
        },
        {
            "word": "Penguin 🐧",
            "hint": "Waddle"
        },
        {
            "word": "Crocodile 🐊",
            "hint": "Jaws"
        },
        {
            "word": "Fox 🦊",
            "hint": "Rustling"
        },
        {
            "word": "Owl 🦉",
            "hint": "Hoot"
        },
        {
            "word": "Camel 🐫",
            "hint": "Hump"
        },
        {
            "word": "Cheetah 🐆",
            "hint": "Spots"
        },
        {
            "word": "Flamingo 🦩",
            "hint": "Wading"
        },
        {
            "word": "Koala 🐨",
            "hint": "Eucalyptus"
        },
        {
            "word": "Shark 🦈",
            "hint": "Fin"
        },
        {
            "word": "Octopus 🐙",
            "hint": "Ink"
        },
        {
            "word": "Gorilla 🦍",
            "hint": "Chestbeat"
        },
        {
            "word": "Zebra 🦓",
            "hint": "Stripes"
        },
        {
            "word": "Hippo 🦛",
            "hint": "Mud"
        },
        {
            "word": "Rhinoceros 🦏",
            "hint": "Horn"
        },
        {
            "word": "Chameleon 🦎",
            "hint": "Tongue"
        },
        {
            "word": "Sloth 🦥",
            "hint": "Slow"
        },
        {
            "word": "Hedgehog 🦔",
            "hint": "Quills"
        },
        {
            "word": "Otter 🦦",
            "hint": "River"
        },
        {
            "word": "Walrus 🦭",
            "hint": "Tusks"
        },
        {
            "word": "Alpaca 🦙",
            "hint": "Fleece"
        },
        {
            "word": "Llama 🦙",
            "hint": "Spit"
        },
        {
            "word": "Beaver 🦫",
            "hint": "Dam"
        },
        {
            "word": "Hamster 🐹",
            "hint": "Wheel"
        },
        {
            "word": "Parrot 🦜",
            "hint": "Squawk"
        },
        {
            "word": "Ostrich 🦤",
            "hint": "Egg"
        },
        {
            "word": "Snail 🐌",
            "hint": "Shell"
        },
        {
            "word": "Frog 🐸",
            "hint": "Lily"
        },
        {
            "word": "Butterfly 🦋",
            "hint": "Wings"
        },
        {
            "word": "Firefly ✨",
            "hint": "Glow"
        },
        {
            "word": "Scorpion 🦂",
            "hint": "Venom"
        },
        {
            "word": "Turtle 🐢",
            "hint": "Carapace"
        },
        {
            "word": "Raccoon 🦝",
            "hint": "Greedy"
        },
        {
            "word": "Ant 🐜",
            "hint": "Colony"
        },
        {
            "word": "Spider 🕷️",
            "hint": "Silk"
        },
        {
            "word": "Leopard 🐆",
            "hint": "Pounce"
        },
        {
            "word": "Meerkat 🦡",
            "hint": "Sentinel"
        },
        {
            "word": "Impala 🐇",
            "hint": "Leaping"
        },
        {
            "word": "Puffin 🐦",
            "hint": "Colonies"
        },
        {
            "word": "Toucan 🪶",
            "hint": "Bill"
        },
        {
            "word": "Narwhal ❄️",
            "hint": "Spear"
        },
        {
            "word": "Mongoose 🐀",
            "hint": "Rodent"
        },
        {
            "word": "Wombat 🐾",
            "hint": "Burrows"
        },
        {
            "word": "Quokka 🫶",
            "hint": "Smile"
        },
        {
            "word": "Cassowary 🐔",
            "hint": "Casque"
        },
        {
            "word": "Pangolin 🐍",
            "hint": "Scales"
        },
        {
            "word": "Snowy Owl 🌨️",
            "hint": "Camouflage"
        },
        {
            "word": "Sea Turtle 🌊",
            "hint": "Flippers"
        },
        {
            "word": "Crane 🕊️",
            "hint": "Symbol"
        },
        {
            "word": "Red Panda 🍂",
            "hint": "Ringtail"
        },
        {
            "word": "Bison 🦬",
            "hint": "Prairie"
        },
        {
            "word": "Axolotl 🩷",
            "hint": "Smiley"
        }
    ],
    "Countries": [
        {
            "word": "India 🇮🇳",
            "hint": "Spice"
        },
        {
            "word": "USA 🇺🇸",
            "hint": "Stars"
        },
        {
            "word": "Japan 🇯🇵",
            "hint": "Samurai"
        },
        {
            "word": "UAE 🇦🇪",
            "hint": "Mirage"
        },
        {
            "word": "UK 🇬🇧",
            "hint": "London"
        },
        {
            "word": "France 🇫🇷",
            "hint": "Baguette"
        },
        {
            "word": "Canada 🇨🇦",
            "hint": "Moose"
        },
        {
            "word": "Australia 🇦🇺",
            "hint": "Outback"
        },
        {
            "word": "Russia 🇷🇺",
            "hint": "Siberia"
        },
        {
            "word": "Brazil 🇧🇷",
            "hint": "Samba"
        },
        {
            "word": "China 🇨🇳",
            "hint": "Terracotta"
        },
        {
            "word": "Germany 🇩🇪",
            "hint": "Pretzel"
        },
        {
            "word": "Italy 🇮🇹",
            "hint": "Boot"
        },
        {
            "word": "Egypt 🇪🇬",
            "hint": "Nile"
        },
        {
            "word": "Singapore 🇸🇬",
            "hint": "Marina"
        },
        {
            "word": "Argentina 🇦🇷",
            "hint": "Tango"
        },
        {
            "word": "Spain 🇪🇸",
            "hint": "Flamenco"
        },
        {
            "word": "South Korea 🇰🇷",
            "hint": "Kpop"
        },
        {
            "word": "Mexico 🇲🇽",
            "hint": "Tequila"
        },
        {
            "word": "Switzerland 🇨🇭",
            "hint": "Alps"
        },
        {
            "word": "Turkey 🇹🇷",
            "hint": "Bosphorus"
        },
        {
            "word": "South Africa 🇿🇦",
            "hint": "Cape"
        },
        {
            "word": "Saudi Arabia 🇸🇦",
            "hint": "Oil"
        },
        {
            "word": "New Zealand 🇳🇿",
            "hint": "Kiwi"
        },
        {
            "word": "Thailand 🇹🇭",
            "hint": "Land of Smiles"
        },
        {
            "word": "Greece 🇬🇷",
            "hint": "Column"
        },
        {
            "word": "Netherlands 🇳🇱",
            "hint": "Windmill"
        },
        {
            "word": "Norway 🇳🇴",
            "hint": "Vikings"
        },
        {
            "word": "Portugal 🇵🇹",
            "hint": "Sail"
        },
        {
            "word": "Vietnam 🇻🇳",
            "hint": "Hanoi"
        },
        {
            "word": "Ireland 🇮🇪",
            "hint": "Cliffs"
        },
        {
            "word": "Sweden 🇸🇪",
            "hint": "IKEA"
        },
        {
            "word": "Kenya 🇰🇪",
            "hint": "Rift"
        },
        {
            "word": "Morocco 🇲🇦",
            "hint": "Medina"
        },
        {
            "word": "Iceland 🇮🇸",
            "hint": "Geyser"
        },
        {
            "word": "Peru 🇵🇪",
            "hint": "Andes"
        },
        {
            "word": "Colombia 🇨🇴",
            "hint": "Caribbean"
        },
        {
            "word": "Sri Lanka 🇱🇰",
            "hint": "Tea"
        },
        {
            "word": "Malaysia 🇲🇾",
            "hint": "Orangutan"
        },
        {
            "word": "Finland 🇫🇮",
            "hint": "Sauna"
        },
        {
            "word": "Chile 🇨🇱",
            "hint": "Atacama"
        },
        {
            "word": "Denmark 🇩🇰",
            "hint": "Hygge"
        },
        {
            "word": "Austria 🇦🇹",
            "hint": "Waltz"
        },
        {
            "word": "Poland 🇵🇱",
            "hint": "Pierogi"
        },
        {
            "word": "Nepal 🇳🇵",
            "hint": "Himalaya"
        },
        {
            "word": "Bhutan 🇧🇹",
            "hint": "Happiness"
        },
        {
            "word": "Indonesia 🇮🇩",
            "hint": "Krakatoa"
        },
        {
            "word": "Algeria 🇩🇿",
            "hint": "Casbah"
        },
        {
            "word": "Madagascar 🇲🇬",
            "hint": "Lemur"
        },
        {
            "word": "Fiji 🇫🇯",
            "hint": "Coconuts"
        },
        {
            "word": "Jamaica 🇯🇲",
            "hint": "Reggae"
        },
        {
            "word": "Cuba 🇨🇺",
            "hint": "Cigars"
        },
        {
            "word": "Bolivia 🇧🇴",
            "hint": "Altiplano"
        },
        {
            "word": "Nigeria 🇳🇬",
            "hint": "Lagos"
        },
        {
            "word": "Kazakhstan 🇰🇿",
            "hint": "Steppe"
        },
        {
            "word": "Mongolia 🇲🇳",
            "hint": "Nomad"
        },
        {
            "word": "Pakistan 🇵🇰",
            "hint": "Rivers"
        },
        {
            "word": "Bangladesh 🇧🇩",
            "hint": "Delta"
        },
        {
            "word": "Myanmar 🇲🇲",
            "hint": "Pagodas"
        },
        {
            "word": "Tanzania 🇹🇿",
            "hint": "Safari"
        },
        {
            "word": "Tunisia 🇹🇳",
            "hint": "Carthage"
        },
        {
            "word": "Zimbabwe 🇿🇼",
            "hint": "Zambezi"
        },
        {
            "word": "Ethiopia 🇪🇹",
            "hint": "Crater"
        },
        {
            "word": "Qatar 🇶🇦",
            "hint": "Pearling"
        },
        {
            "word": "Kuwait 🇰🇼",
            "hint": "Refineries"
        },
        {
            "word": "Hungary 🇭🇺",
            "hint": "Paprika"
        },
        {
            "word": "Romania 🇷🇴",
            "hint": "Vlad"
        },
        {
            "word": "Ukraine 🇺🇦",
            "hint": "Dumplings"
        },
        {
            "word": "Croatia 🇭🇷",
            "hint": "Adriatic"
        }
    ],
    "Colors": [
        {
            "word": "Saffron 🟠",
            "hint": "Monk"
        },
        {
            "word": "Turquoise 💎",
            "hint": "Lagoon"
        },
        {
            "word": "Crimson 🔴",
            "hint": "Rich"
        },
        {
            "word": "Emerald 🟢",
            "hint": "Jewel"
        },
        {
            "word": "Indigo 🔵",
            "hint": "Denim"
        },
        {
            "word": "Ivory 🦷",
            "hint": "Tusk"
        },
        {
            "word": "Golden 🟡",
            "hint": "Medal"
        },
        {
            "word": "Violet 🟣",
            "hint": "Spectrum"
        },
        {
            "word": "Black ⚫",
            "hint": "Night"
        },
        {
            "word": "White ⚪",
            "hint": "Sheet"
        },
        {
            "word": "Grey 🔘",
            "hint": "Overcast"
        },
        {
            "word": "Pink 🌸",
            "hint": "Bubblegum"
        },
        {
            "word": "Orange 🍊",
            "hint": "Citrus"
        },
        {
            "word": "Yellow ☀️",
            "hint": "Daylight"
        },
        {
            "word": "Brown 🪵",
            "hint": "Bark"
        },
        {
            "word": "Teal 🪶",
            "hint": "Tiffany"
        },
        {
            "word": "Maroon 🍾",
            "hint": "Wine"
        },
        {
            "word": "Magenta 🌺",
            "hint": "Neon"
        },
        {
            "word": "Silver 🥈",
            "hint": "Chrome"
        },
        {
            "word": "Bronze 🥉",
            "hint": "Alloy"
        },
        {
            "word": "Navy Blue ⚓",
            "hint": "Sailor"
        },
        {
            "word": "Olive Green 🫒",
            "hint": "Mediterranean"
        },
        {
            "word": "Coral 🪸",
            "hint": "Reef"
        },
        {
            "word": "Lavender 🪻",
            "hint": "Calm"
        },
        {
            "word": "Peach 🍑",
            "hint": "Fuzzy"
        },
        {
            "word": "Amber 🍯",
            "hint": "Fossil"
        },
        {
            "word": "Mint 🌿",
            "hint": "Herb"
        },
        {
            "word": "Charcoal 🖤",
            "hint": "Soot"
        },
        {
            "word": "Beige 🪵",
            "hint": "Ecru"
        },
        {
            "word": "Ruby 🩷",
            "hint": "Gemstone"
        },
        {
            "word": "Cyan 🩵",
            "hint": "Electric"
        },
        {
            "word": "Lime Green 🍈",
            "hint": "Tangy"
        },
        {
            "word": "Burgundy 🟥",
            "hint": "Claret"
        },
        {
            "word": "Copper 🪙",
            "hint": "Penny"
        },
        {
            "word": "Khaki 🟤",
            "hint": "Sand"
        },
        {
            "word": "Scarlet 🩸",
            "hint": "Blood"
        },
        {
            "word": "Blush 💗",
            "hint": "Cheeks"
        },
        {
            "word": "Tan 🟫",
            "hint": "Caramel"
        },
        {
            "word": "Azure 🔷",
            "hint": "Sky"
        },
        {
            "word": "Chartreuse 🟩",
            "hint": "Acid"
        },
        {
            "word": "Amethyst 💜",
            "hint": "Quartz"
        },
        {
            "word": "Rose Gold 🥇",
            "hint": "Champagne"
        },
        {
            "word": "Gunmetal 🪨",
            "hint": "Slate"
        },
        {
            "word": "Sea Green 🌊",
            "hint": "Marine"
        },
        {
            "word": "Cherry 🍒",
            "hint": "Fruit"
        },
        {
            "word": "Aqua 🦋",
            "hint": "Clear"
        },
        {
            "word": "Mauve 🪁",
            "hint": "Dusty"
        },
        {
            "word": "Lilac 🍇",
            "hint": "Grape"
        },
        {
            "word": "Apricot 🥭",
            "hint": "Pit"
        },
        {
            "word": "Sepia 🎞️",
            "hint": "Old"
        },
        {
            "word": "Fuchsia 🌷",
            "hint": "Vivid"
        },
        {
            "word": "Rust 🔩",
            "hint": "Oxide"
        },
        {
            "word": "Mustard 🟨",
            "hint": "Sandwich"
        },
        {
            "word": "Cerulean 🌤️",
            "hint": "Bright"
        },
        {
            "word": "Carmine 🫐",
            "hint": "Wine Red"
        },
        {
            "word": "Jade 🥬",
            "hint": "Smooth"
        },
        {
            "word": "Sienna 🍂",
            "hint": "Burnt"
        },
        {
            "word": "Periwinkle 💐",
            "hint": "Twilight"
        },
        {
            "word": "Salmon 🐟",
            "hint": "Sashimi"
        },
        {
            "word": "Onyx 🪞",
            "hint": "Shiny"
        },
        {
            "word": "Sapphire 💙",
            "hint": "Ocean"
        },
        {
            "word": "Opal 🔮",
            "hint": "Iridescent"
        },
        {
            "word": "Topaz 🧡",
            "hint": "November"
        }
    ],
    "Hobbies": [
        {
            "word": "Photography 📷",
            "hint": "Framing"
        },
        {
            "word": "Gardening 🪴",
            "hint": "Soil"
        },
        {
            "word": "Reading 📚",
            "hint": "Chapters"
        },
        {
            "word": "Cooking 🍳",
            "hint": "Heat"
        },
        {
            "word": "Dancing 💃",
            "hint": "Rhythm"
        },
        {
            "word": "Singing 🎤",
            "hint": "Melody"
        },
        {
            "word": "Painting 🎨",
            "hint": "Color"
        },
        {
            "word": "Travel ✈️",
            "hint": "Luggage"
        },
        {
            "word": "Fishing 🎣",
            "hint": "Rod"
        },
        {
            "word": "Gaming 🎮",
            "hint": "Joystick"
        },
        {
            "word": "Hiking 🥾",
            "hint": "Trail"
        },
        {
            "word": "Collecting 🪙",
            "hint": "Hoard"
        },
        {
            "word": "Writing ✍️",
            "hint": "Prose"
        },
        {
            "word": "Knitting 🧶",
            "hint": "Needles"
        },
        {
            "word": "Meditation 🧘",
            "hint": "Zen"
        },
        {
            "word": "Baking 🧁",
            "hint": "Oven"
        },
        {
            "word": "Origami 📄",
            "hint": "Fold"
        },
        {
            "word": "Astronomy 🔭",
            "hint": "Telescope"
        },
        {
            "word": "Pottery 🏺",
            "hint": "Kiln"
        },
        {
            "word": "Woodworking 🪵",
            "hint": "Timber"
        },
        {
            "word": "Ukulele 🪕",
            "hint": "Aloha"
        },
        {
            "word": "Bird Watching 🦜",
            "hint": "Binoculars"
        },
        {
            "word": "Juggling 🤹",
            "hint": "Toss"
        },
        {
            "word": "Puzzles 🧩",
            "hint": "Tiles"
        },
        {
            "word": "Calligraphy 🖋️",
            "hint": "Stroke"
        },
        {
            "word": "Sculpting 🗿",
            "hint": "Clay"
        },
        {
            "word": "Magic Tricks 🃏",
            "hint": "Sleight"
        },
        {
            "word": "Podcast 🎙️",
            "hint": "Episode"
        },
        {
            "word": "Scrapbooking 📒",
            "hint": "Memories"
        },
        {
            "word": "DJing 🎧",
            "hint": "Scratch"
        },
        {
            "word": "Candle Making 🕯️",
            "hint": "Wick"
        },
        {
            "word": "Leathercraft 👞",
            "hint": "Saddle"
        },
        {
            "word": "Whittling 🪚",
            "hint": "Shaving"
        },
        {
            "word": "Aquarium 🐠",
            "hint": "Tank"
        },
        {
            "word": "Stamp Collecting 📮",
            "hint": "Perforation"
        },
        {
            "word": "Poetry ✒️",
            "hint": "Meter"
        },
        {
            "word": "Lego Building 🧱",
            "hint": "Bricks"
        },
        {
            "word": "Rocket Launching 🚀",
            "hint": "Payload"
        },
        {
            "word": "Bird Feeding 🪺",
            "hint": "Seed"
        },
        {
            "word": "Fossil Hunting ⛏️",
            "hint": "Bedrock"
        },
        {
            "word": "Wine Tasting 🍷",
            "hint": "Tannin"
        },
        {
            "word": "Coffee Roasting ☕",
            "hint": "Origin"
        },
        {
            "word": "Soap Making 🧼",
            "hint": "Curing"
        },
        {
            "word": "Video Editing 🎬",
            "hint": "Timeline"
        },
        {
            "word": "Sketching ✏️",
            "hint": "Drafts"
        },
        {
            "word": "Sudoku 🔢",
            "hint": "Logic"
        },
        {
            "word": "Beatboxing 🥁",
            "hint": "Bassline"
        },
        {
            "word": "Digital Art 💻",
            "hint": "Canvas"
        },
        {
            "word": "Walking 🚶",
            "hint": "Stroll"
        },
        {
            "word": "Composing 🎹",
            "hint": "Notation"
        },
        {
            "word": "Bookbinding 📕",
            "hint": "Spine"
        },
        {
            "word": "Bullet Journal 🗓️",
            "hint": "Dots"
        },
        {
            "word": "Stargazing 🌌",
            "hint": "Nightfall"
        },
        {
            "word": "Language Learning 🗣️",
            "hint": "Verb"
        },
        {
            "word": "Graffiti 🖌️",
            "hint": "Spray"
        },
        {
            "word": "Fashion Design 🧵",
            "hint": "Couture"
        },
        {
            "word": "Antiques 🕰️",
            "hint": "Heirloom"
        },
        {
            "word": "Card Tricks 🃏",
            "hint": "Palm"
        }
    ],
    "Apps": [
        {
            "word": "WhatsApp 🟢",
            "hint": "Chats"
        },
        {
            "word": "Instagram 📸",
            "hint": "Story"
        },
        {
            "word": "YouTube 🔴",
            "hint": "Video"
        },
        {
            "word": "Zomato 🍕",
            "hint": "Rating"
        },
        {
            "word": "PhonePe 💜",
            "hint": "UPI"
        },
        {
            "word": "Facebook 🔵",
            "hint": "Wall"
        },
        {
            "word": "Snapchat 👻",
            "hint": "Ephemeral"
        },
        {
            "word": "Telegram ✈️",
            "hint": "Pinned"
        },
        {
            "word": "TikTok 🎶",
            "hint": "Trend"
        },
        {
            "word": "LinkedIn 💼",
            "hint": "Network"
        },
        {
            "word": "Spotify 🎧",
            "hint": "Audio"
        },
        {
            "word": "Gmail ✉️",
            "hint": "Compose"
        },
        {
            "word": "Twitter 🐦",
            "hint": "Tweet"
        },
        {
            "word": "Amazon 📦",
            "hint": "Delivery"
        },
        {
            "word": "Netflix 📺",
            "hint": "Binge"
        },
        {
            "word": "Uber 🚗",
            "hint": "Ride"
        },
        {
            "word": "Google Maps 🗺️",
            "hint": "Directions"
        },
        {
            "word": "Reddit 🤖",
            "hint": "Karma"
        },
        {
            "word": "Pinterest 📌",
            "hint": "Board"
        },
        {
            "word": "Duolingo 🦉",
            "hint": "Mascot"
        },
        {
            "word": "Discord 👾",
            "hint": "Guild"
        },
        {
            "word": "Swiggy 🛵",
            "hint": "Hunger"
        },
        {
            "word": "Twitch 🟣",
            "hint": "Channel"
        },
        {
            "word": "Paytm 💙",
            "hint": "Scan"
        },
        {
            "word": "Notion 📝",
            "hint": "Workspace"
        },
        {
            "word": "ChatGPT 💬",
            "hint": "Prompt"
        },
        {
            "word": "Canva 🎨",
            "hint": "Template"
        },
        {
            "word": "Zoom 💻",
            "hint": "Mute"
        },
        {
            "word": "Tinder 🔥",
            "hint": "Swipe"
        },
        {
            "word": "Steam 🎮",
            "hint": "Wishlist"
        },
        {
            "word": "Shazam 🎵",
            "hint": "Humming"
        },
        {
            "word": "Google Drive 📁",
            "hint": "Storage"
        },
        {
            "word": "Slack 🔔",
            "hint": "Ping"
        },
        {
            "word": "SoundCloud ☁️",
            "hint": "Track"
        },
        {
            "word": "Airbnb 🏡",
            "hint": "Rental"
        },
        {
            "word": "Signal 📶",
            "hint": "Encrypted"
        },
        {
            "word": "Threads 🧵",
            "hint": "Posts"
        },
        {
            "word": "Waze 🧭",
            "hint": "Turn"
        },
        {
            "word": "BeReal 📷",
            "hint": "Photo"
        },
        {
            "word": "Dropbox 🗃️",
            "hint": "Folder"
        },
        {
            "word": "Flipkart 🛒",
            "hint": "Sale"
        },
        {
            "word": "Myntra 👗",
            "hint": "Fashion"
        },
        {
            "word": "IRCTC 🚆",
            "hint": "Ticket"
        },
        {
            "word": "Airtel 🗼",
            "hint": "Telecom"
        },
        {
            "word": "Zerodha 📈",
            "hint": "Broker"
        },
        {
            "word": "Google Translate 🌐",
            "hint": "Language"
        },
        {
            "word": "Photoshop 🖌️",
            "hint": "Layers"
        },
        {
            "word": "Claude 🤖",
            "hint": "Assistant"
        },
        {
            "word": "Ola 🚕",
            "hint": "Cab"
        },
        {
            "word": "Croma 🖌️",
            "hint": "Etch"
        },
        {
            "word": "Blinkit 🪣",
            "hint": "Minutes"
        },
        {
            "word": "Nykaa 💄",
            "hint": "Beauty"
        },
        {
            "word": "Jio 🟦",
            "hint": "Speed"
        },
        {
            "word": "Hotstar ⭐",
            "hint": "Streaming"
        },
        {
            "word": "PicsArt 🎨",
            "hint": "Filters"
        },
        {
            "word": "Meesho 🛍️",
            "hint": "Reseller"
        },
        {
            "word": "Indeed 📋",
            "hint": "Hiring"
        },
        {
            "word": "Naukri 🗂️",
            "hint": "Resume"
        },
        {
            "word": "Coursera 🎓",
            "hint": "Lectures"
        },
        {
            "word": "Byju's 📚",
            "hint": "Tutor"
        },
        {
            "word": "Zoho 📄",
            "hint": "Suite"
        },
        {
            "word": "Figma 🎯",
            "hint": "Wireframe"
        }
    ],
    "Celebs": [
        {
            "word": "Mammootty 🎭",
            "hint": "Megastar"
        },
        {
            "word": "Mohanlal 🎬",
            "hint": "Lalettan"
        },
        {
            "word": "Shah Rukh Khan 🌟",
            "hint": "King Khan"
        },
        {
            "word": "Virat Kohli 🏏",
            "hint": "Century"
        },
        {
            "word": "Deepika Padukone ✨",
            "hint": "Runway"
        },
        {
            "word": "Prithviraj 🎥",
            "hint": "Malayalam"
        },
        {
            "word": "Amitabh Bachchan 🎙️",
            "hint": "Shahenshah"
        },
        {
            "word": "Dulquer Salmaan 🕶️",
            "hint": "Kunjikka"
        },
        {
            "word": "Salman Khan 💥",
            "hint": "Dab"
        },
        {
            "word": "Akshay Kumar 🏃",
            "hint": "Khiladi"
        },
        {
            "word": "Priyanka Chopra 🌎",
            "hint": "Hollywood"
        },
        {
            "word": "Alia Bhatt 🌸",
            "hint": "Aaloo"
        },
        {
            "word": "Ranbir Kapoor 🤴",
            "hint": "Rockstar"
        },
        {
            "word": "MS Dhoni 🧤",
            "hint": "Captain"
        },
        {
            "word": "Rohit Sharma 🏏",
            "hint": "Hitman"
        },
        {
            "word": "Fahadh Faasil 👁️",
            "hint": "FaFa"
        },
        {
            "word": "Tovino Thomas 🦸",
            "hint": "Minnal Murali"
        },
        {
            "word": "Kamal Haasan 🎭",
            "hint": "Ulaganayagan"
        },
        {
            "word": "Rajinikanth 🕶️",
            "hint": "Thalaivar"
        },
        {
            "word": "Suriya ⚔️",
            "hint": "Nadippin Nayagan"
        },
        {
            "word": "Vijay 🪙",
            "hint": "Thalapathy"
        },
        {
            "word": "Ajith Kumar 🏍️",
            "hint": "Alludu Arjuna"
        },
        {
            "word": "Hrithik Roshan 🕺",
            "hint": "Greek"
        },
        {
            "word": "Katrina Kaif 💃",
            "hint": "Boom"
        },
        {
            "word": "Prabhas 🏹",
            "hint": "Bahubali"
        },
        {
            "word": "Taylor Swift 🎤",
            "hint": "Eras"
        },
        {
            "word": "Lionel Messi ⚽",
            "hint": "Left Foot"
        },
        {
            "word": "Cristiano Ronaldo 🇵🇹",
            "hint": "Siu"
        },
        {
            "word": "Keanu Reeves 🕶️",
            "hint": "Neo"
        },
        {
            "word": "Tom Cruise 🛩️",
            "hint": "Maverick"
        },
        {
            "word": "Robert Downey Jr 🦾",
            "hint": "Stark"
        },
        {
            "word": "Dwayne Johnson 🪨",
            "hint": "WrestleMania"
        },
        {
            "word": "Zendaya 🕷️",
            "hint": "Euphoria"
        },
        {
            "word": "Cillian Murphy 🎩",
            "hint": "Shelby"
        },
        {
            "word": "Leonardo DiCaprio 🚢",
            "hint": "Titan"
        },
        {
            "word": "Aamir Khan 🎭",
            "hint": "Perfection"
        },
        {
            "word": "Anushka Sharma 👀",
            "hint": "NH10"
        },
        {
            "word": "Ranveer Singh 💃",
            "hint": "Bawra"
        },
        {
            "word": "Tiger Shroff 🐯",
            "hint": "Stunt"
        },
        {
            "word": "Kartik Aaryan 🎭",
            "hint": "Punchnama"
        },
        {
            "word": "Ajay Devgn 🕶️",
            "hint": "Gadar"
        },
        {
            "word": "Mithun Chakraborty 🎩",
            "hint": "Disco Dancer"
        },
        {
            "word": "Rekha 👠",
            "hint": "Evergreen"
        },
        {
            "word": "Madhuri Dixit 💃",
            "hint": "Dhak Dhak"
        },
        {
            "word": "Jackie Shroff 🚬",
            "hint": "Jaggu Dada"
        },
        {
            "word": "Allu Arjun 🕺",
            "hint": "Pushpa"
        },
        {
            "word": "Mahesh Babu 👑",
            "hint": "Prince"
        },
        {
            "word": "NTR 🔥",
            "hint": "Man of Masses"
        },
        {
            "word": "Ram Charan 🏹",
            "hint": "Chiru"
        },
        {
            "word": "Sanjay Dutt 💪",
            "hint": "Triceps"
        },
        {
            "word": "Varun Dhawan 🍺",
            "hint": "Bhediya"
        },
        {
            "word": "Sara Ali Khan 👗",
            "hint": "Kedarnath"
        },
        {
            "word": "Nagarjuna 🏍️",
            "hint": "Yuva Samrat"
        },
        {
            "word": "Dhanush 🎬",
            "hint": "Kodi"
        },
        {
            "word": "Yash ⭐",
            "hint": "Rocking"
        },
        {
            "word": "R Madhavan 🎥",
            "hint": "Maddy"
        },
        {
            "word": "Emma Watson 🧙",
            "hint": "Hermione"
        },
        {
            "word": "Chris Evans 🛡️",
            "hint": "Shield"
        },
        {
            "word": "Chris Hemsworth ⚡",
            "hint": "Mjolnir"
        },
        {
            "word": "Will Smith 🕶️",
            "hint": "Rap"
        },
        {
            "word": "Johnny Depp 🍄",
            "hint": "Pirate"
        },
        {
            "word": "Kobe Bryant 🏀",
            "hint": "Mamba"
        },
        {
            "word": "Michael Jordan 🐐",
            "hint": "Air"
        },
        {
            "word": "Serena Williams 🎾",
            "hint": "Slam"
        },
        {
            "word": "Roger Federer 🎾",
            "hint": "Serve"
        },
        {
            "word": "Neymar 🇧🇷",
            "hint": "Dribble"
        },
        {
            "word": "Karan Johar 🎬",
            "hint": "KJo"
        },
        {
            "word": "Vicky Kaushal 🎭",
            "hint": "Uri"
        },
        {
            "word": "Ayushmann Khurrana 🎤",
            "hint": "Andhadhun"
        },
        {
            "word": "Taapsee Pannu 🎬",
            "hint": "KGF"
        },
        {
            "word": "Rashmika Mandanna 💃",
            "hint": "Radhe Shyam"
        },
        {
            "word": "Nayanthara 💃",
            "hint": "Kollywood"
        },
        {
            "word": "Keerthy Suresh 👰",
            "hint": "Kitty"
        },
        {
            "word": "Sushant Singh Rajput 🕺",
            "hint": "Filmy"
        },
        {
            "word": "Ileana D'Cruz 💃",
            "hint": "Divya"
        },
        {
            "word": "Rana Daggubati 🎭",
            "hint": "Bhallaladeva"
        },
        {
            "word": "Suniel Shetty ☀️",
            "hint": "Golmaal"
        },
        {
            "word": "Sharmila Tagore 🌸",
            "hint": "Aparajita"
        },
        {
            "word": "Asha Bhosle 🎤",
            "hint": "Asha Tai"
        },
        {
            "word": "Lata Mangeshkar 🎤",
            "hint": "Swar"
        },
        {
            "word": "Arijit Singh 🎤",
            "hint": "Soulful"
        },
        {
            "word": "Sidharth Malhotra 🕺",
            "hint": "SOTY"
        }
    ],
    "Gaming": [
        {
            "word": "PUBG 🔫",
            "hint": "Loot"
        },
        {
            "word": "Free Fire 🔥",
            "hint": "Survival"
        },
        {
            "word": "Minecraft 🧊",
            "hint": "Blocks"
        },
        {
            "word": "GTA 🚗",
            "hint": "City"
        },
        {
            "word": "Among Us 🚀",
            "hint": "Crew"
        },
        {
            "word": "FIFA ⚽",
            "hint": "Match"
        },
        {
            "word": "Candy Crush 🍭",
            "hint": "Cascade"
        },
        {
            "word": "Valorant 🎯",
            "hint": "Radiant"
        },
        {
            "word": "Roblox 🧱",
            "hint": "Sandbox"
        },
        {
            "word": "Fortnite 💃",
            "hint": "Storm"
        },
        {
            "word": "Call of Duty 🎖️",
            "hint": "Deploy"
        },
        {
            "word": "Pokemon GO 🐹",
            "hint": "Explore"
        },
        {
            "word": "Apex Legends 🏆",
            "hint": "Squad"
        },
        {
            "word": "League of Legends ⚔️",
            "hint": "Nexus"
        },
        {
            "word": "Clash of Clans 🏰",
            "hint": "Builder"
        },
        {
            "word": "Subway Surfers 🏃",
            "hint": "Tracks"
        },
        {
            "word": "Temple Run ⛩️",
            "hint": "Relic"
        },
        {
            "word": "Ludo King 🎲",
            "hint": "Tokens"
        },
        {
            "word": "God of War 🪓",
            "hint": "Pantheon"
        },
        {
            "word": "Cyberpunk 🌆",
            "hint": "Future"
        },
        {
            "word": "Counter-Strike 💣",
            "hint": "Defusal"
        },
        {
            "word": "Overwatch 🛡️",
            "hint": "Roster"
        },
        {
            "word": "Elden Ring 💍",
            "hint": "Runes"
        },
        {
            "word": "Fall Guys 🥇",
            "hint": "Hurdle"
        },
        {
            "word": "Brawl Stars 🌟",
            "hint": "Shards"
        },
        {
            "word": "Zelda 🗡️",
            "hint": "Quest"
        },
        {
            "word": "Super Mario 🍄",
            "hint": "Kingdom"
        },
        {
            "word": "Rocket League 🏎️",
            "hint": "Boost"
        },
        {
            "word": "The Witcher 🐺",
            "hint": "Beast"
        },
        {
            "word": "Assassins Creed 🦅",
            "hint": "History"
        },
        {
            "word": "Red Dead Redemption 🤠",
            "hint": "Frontier"
        },
        {
            "word": "Terraria 🌳",
            "hint": "Pixel"
        },
        {
            "word": "Genshin Impact ✨",
            "hint": "Wander"
        },
        {
            "word": "Resident Evil 🧟",
            "hint": "Mansion"
        },
        {
            "word": "Hollow Knight 🪲",
            "hint": "Bug"
        },
        {
            "word": "Tekken 🥊",
            "hint": "Combo"
        },
        {
            "word": "Mortal Kombat 🥷",
            "hint": "Fatality"
        },
        {
            "word": "Street Fighter 👊",
            "hint": "Versus"
        },
        {
            "word": "Clash Royale 👑",
            "hint": "Arena"
        },
        {
            "word": "Hearthstone 🃏",
            "hint": "Tavern"
        },
        {
            "word": "Shadow Fight ⚔️",
            "hint": "Steel"
        },
        {
            "word": "Need for Speed 🏁",
            "hint": "Nitro"
        },
        {
            "word": "Far Cry 🏝️",
            "hint": "Outpost"
        },
        {
            "word": "Dota 2 🗼",
            "hint": "Creeps"
        },
        {
            "word": "Mobile Legends 🐉",
            "hint": "Lane"
        },
        {
            "word": "Stumble Guys 🧍",
            "hint": "Wobble"
        },
        {
            "word": "Skyrim ⛰️",
            "hint": "Dragonborn"
        },
        {
            "word": "Dark Souls 🕯️",
            "hint": "Dread"
        },
        {
            "word": "BGMI 🪂",
            "hint": "Drop"
        },
        {
            "word": "Stardew Valley 🌾",
            "hint": "Farm"
        },
        {
            "word": "Celeste 🏔️",
            "hint": "Climb"
        },
        {
            "word": "Dead Cells 🧬",
            "hint": "Rogue"
        },
        {
            "word": "Bloodborne 🩸",
            "hint": "Victorian"
        },
        {
            "word": "Sekiro 🪶",
            "hint": "Ronin"
        },
        {
            "word": "Persona 🎭",
            "hint": "Identity"
        },
        {
            "word": "Cuphead ☕",
            "hint": "Cartoon"
        },
        {
            "word": "Age of Empires 🏛️",
            "hint": "RTS"
        },
        {
            "word": "Civilization 🌐",
            "hint": "Settlers"
        }
    ],
    "Movies & Shows": [
        {
            "word": "Inception 🌀",
            "hint": "Totem"
        },
        {
            "word": "Avengers 🦸",
            "hint": "Assemble"
        },
        {
            "word": "Stranger Things 🚲",
            "hint": "Upside"
        },
        {
            "word": "Harry Potter 🪄",
            "hint": "Castle"
        },
        {
            "word": "Game of Thrones 🐲",
            "hint": "Dragons"
        },
        {
            "word": "Interstellar 🚀",
            "hint": "Relativity"
        },
        {
            "word": "Titanic 🚢",
            "hint": "Voyage"
        },
        {
            "word": "Squid Game 🦑",
            "hint": "Wager"
        },
        {
            "word": "Breaking Bad 🧪",
            "hint": "RV"
        },
        {
            "word": "The Dark Knight 🦇",
            "hint": "Vigilante"
        },
        {
            "word": "The Matrix 🕶️",
            "hint": "Pill"
        },
        {
            "word": "Lord of the Rings 💍",
            "hint": "Fellowship"
        },
        {
            "word": "Money Heist 🎭",
            "hint": "Mask"
        },
        {
            "word": "Sherlock 🔍",
            "hint": "Deduction"
        },
        {
            "word": "Gladiator ⚔️",
            "hint": "Combat"
        },
        {
            "word": "Jurassic Park 🦖",
            "hint": "Dinosaur"
        },
        {
            "word": "Fight Club 🧼",
            "hint": "Basement"
        },
        {
            "word": "Avatar 🌿",
            "hint": "Tribe"
        },
        {
            "word": "Peaky Blinders 🧢",
            "hint": "Flatcap"
        },
        {
            "word": "The Godfather 🎩",
            "hint": "Family"
        },
        {
            "word": "Wednesday 🕷️",
            "hint": "Nevermore"
        },
        {
            "word": "Oppenheimer 💣",
            "hint": "Trinity"
        },
        {
            "word": "Black Mirror 📱",
            "hint": "Dystopia"
        },
        {
            "word": "The Boys 🦸‍♂️",
            "hint": "Corporate"
        },
        {
            "word": "Spider-Man 🕸️",
            "hint": "Web"
        },
        {
            "word": "Star Wars ⚔️",
            "hint": "Force"
        },
        {
            "word": "Shrek 🧅",
            "hint": "Fairytale"
        },
        {
            "word": "Toy Story 🤠",
            "hint": "Childhood"
        },
        {
            "word": "John Wick 🐕",
            "hint": "Assassin"
        },
        {
            "word": "Narcos 💵",
            "hint": "Smuggle"
        },
        {
            "word": "Friends ☕",
            "hint": "Rooftop"
        },
        {
            "word": "House MD 🏥",
            "hint": "Diagnostic"
        },
        {
            "word": "Rick and Morty 🧪",
            "hint": "Portal"
        },
        {
            "word": "Arcane 🪄",
            "hint": "Piltover"
        },
        {
            "word": "House of the Dragon 🐉",
            "hint": "Targaryen"
        },
        {
            "word": "Miracle Workers 🙏",
            "hint": "Intervention"
        },
        {
            "word": "Suits 💼",
            "hint": "Courtroom"
        },
        {
            "word": "Top Gun 🛩️",
            "hint": "Velocity"
        },
        {
            "word": "Barbie 🩷",
            "hint": "Dollhouse"
        },
        {
            "word": "Home Alone 🏠",
            "hint": "Christmas"
        },
        {
            "word": "Jumanji 🎲",
            "hint": "Jungle"
        },
        {
            "word": "Rocky 🥊",
            "hint": "Philly"
        },
        {
            "word": "Finding Nemo 🐠",
            "hint": "Search"
        },
        {
            "word": "Dune 🏜️",
            "hint": "Arrakis"
        },
        {
            "word": "The Martian 🚀",
            "hint": "Isolation"
        },
        {
            "word": "Joker 🃏",
            "hint": "Laugh"
        },
        {
            "word": "Everything Everywhere 🌌",
            "hint": "Time"
        },
        {
            "word": "The Office 📆",
            "hint": "Paperwork"
        },
        {
            "word": "Succession 👑",
            "hint": "Heir"
        },
        {
            "word": "The Crown 💎",
            "hint": "Monarchy"
        },
        {
            "word": "Chernobyl ☢️",
            "hint": "Reactor"
        },
        {
            "word": "Dark 🌑",
            "hint": "German"
        },
        {
            "word": "The Last of Us 🍄",
            "hint": "Fungal"
        },
        {
            "word": "Mr Bean 🤖",
            "hint": "Towel"
        },
        {
            "word": "Tom and Jerry 🐭",
            "hint": "Squeak"
        },
        {
            "word": "Scooby-Doo 😱",
            "hint": "Snack"
        },
        {
            "word": "Doraemon 🔵",
            "hint": "Nobita"
        }
    ],
    "Tech & Gadgets": [
        {
            "word": "Drone 🛸",
            "hint": "Telemetry"
        },
        {
            "word": "Smartwatch ⌚",
            "hint": "Vibration"
        },
        {
            "word": "3D Printer 🖨️",
            "hint": "Nozzle"
        },
        {
            "word": "VR Headset 🥽",
            "hint": "Vision"
        },
        {
            "word": "Microphone 🎙️",
            "hint": "Diaphragm"
        },
        {
            "word": "Solar Panel ☀️",
            "hint": "Roof"
        },
        {
            "word": "Projector 📽️",
            "hint": "Keystone"
        },
        {
            "word": "SSD Drive 💾",
            "hint": "Memory"
        },
        {
            "word": "Robot Vacuum 🤖",
            "hint": "Sensor"
        },
        {
            "word": "Keyboard ⌨️",
            "hint": "Tactile"
        },
        {
            "word": "Router 📡",
            "hint": "Wifi"
        },
        {
            "word": "Action Camera 📷",
            "hint": "Wide"
        },
        {
            "word": "Satellite Dish 🛰️",
            "hint": "Receiver"
        },
        {
            "word": "Graphics Card 🎮",
            "hint": "Silicon"
        },
        {
            "word": "Smart Speaker 🔊",
            "hint": "Voice"
        },
        {
            "word": "E-Reader 📖",
            "hint": "Glare-free"
        },
        {
            "word": "Walkie-Talkie 📻",
            "hint": "Frequency"
        },
        {
            "word": "Webcam 📹",
            "hint": "Monitor"
        },
        {
            "word": "Wireless Mouse 🖱️",
            "hint": "Optical"
        },
        {
            "word": "Gimbal Stabilizer 🎥",
            "hint": "Horizon"
        },
        {
            "word": "Smart Lightbulb 💡",
            "hint": "Dimmer"
        },
        {
            "word": "Stylus Pen 🖊️",
            "hint": "Pressure"
        },
        {
            "word": "Laser Pointer 🔴",
            "hint": "Dot"
        },
        {
            "word": "Smart Doorbell 🔔",
            "hint": "Visitor"
        },
        {
            "word": "Hard Drive 💽",
            "hint": "Spindle"
        },
        {
            "word": "Water Flosser 💧",
            "hint": "Jet"
        },
        {
            "word": "Tablet 📱",
            "hint": "Slab"
        },
        {
            "word": "Laptop Stand 🖥️",
            "hint": "Tilt"
        },
        {
            "word": "Mechanical Keyboard 🎛️",
            "hint": "Switch"
        },
        {
            "word": "NAS Drive 🗄️",
            "hint": "Mirroring"
        },
        {
            "word": "UPS 🔋",
            "hint": "Backup"
        },
        {
            "word": "Ring Doorbell 🏠",
            "hint": "Feed"
        },
        {
            "word": "Chromecast 📺",
            "hint": "Casting"
        },
        {
            "word": "Dashcam 🚗",
            "hint": "Windshield"
        },
        {
            "word": "Fitness Band 🏃",
            "hint": "Steps"
        },
        {
            "word": "Rice Cooker 🍚",
            "hint": "Fluffy"
        },
        {
            "word": "Air Fryer 🍟",
            "hint": "Crisp"
        },
        {
            "word": "Coffee Grinder ⚙️",
            "hint": "Burr"
        },
        {
            "word": "Sewing Machine 🧵",
            "hint": "Stitch"
        },
        {
            "word": "Camera Lens 📷",
            "hint": "Aperture"
        },
        {
            "word": "Trail Camera 🕵️",
            "hint": "Scout"
        },
        {
            "word": "Soldering Iron 🔧",
            "hint": "Tin"
        },
        {
            "word": "Label Maker 🏷️",
            "hint": "Barcode"
        },
        {
            "word": "Barcode Scanner 📷",
            "hint": "Laser"
        },
        {
            "word": "RFID Tag 🪪",
            "hint": "Tracking"
        },
        {
            "word": "Portable Charger 🔋",
            "hint": "Juice"
        },
        {
            "word": "Digital Scale ⚖️",
            "hint": "Weight"
        },
        {
            "word": "AirPods 🎧",
            "hint": "Bluetooth"
        },
        {
            "word": "Kindle 🕯️",
            "hint": "E-Ink"
        },
        {
            "word": "Modem 📶",
            "hint": "Dialup"
        },
        {
            "word": "Firewall 🧱",
            "hint": "Secures"
        },
        {
            "word": "Encryption 🔐",
            "hint": "Scramble"
        },
        {
            "word": "Bandwidth 📶",
            "hint": "Throughput"
        },
        {
            "word": "Server 🏢",
            "hint": "Uptime"
        },
        {
            "word": "Linux 🐧",
            "hint": "Terminal"
        },
        {
            "word": "Arduino 🔌",
            "hint": "Open Source"
        },
        {
            "word": "Raspberry Pi 🍓",
            "hint": "Computer"
        },
        {
            "word": "CCTV 📹",
            "hint": "Surveillance"
        },
        {
            "word": "Bitcoin ₿",
            "hint": "Blockchain"
        },
        {
            "word": "USB Hub 🔌",
            "hint": "Ports"
        }
    ],
    "Landmarks": [
        {
            "word": "Taj Mahal 🕌",
            "hint": "Mughal"
        },
        {
            "word": "Eiffel Tower 🗼",
            "hint": "Lattice"
        },
        {
            "word": "Statue of Liberty 🗽",
            "hint": "Harbor"
        },
        {
            "word": "Great Wall 🧱",
            "hint": "Watchtowers"
        },
        {
            "word": "Colosseum 🏛️",
            "hint": "Arches"
        },
        {
            "word": "Burj Khalifa 🏙️",
            "hint": "Spire"
        },
        {
            "word": "Pyramids 🏜️",
            "hint": "Limestone"
        },
        {
            "word": "Big Ben 🗼",
            "hint": "Dial"
        },
        {
            "word": "Machu Picchu ⛰️",
            "hint": "Terrace"
        },
        {
            "word": "Sydney Opera House ⛵",
            "hint": "Sails"
        },
        {
            "word": "Christ the Redeemer 🗿",
            "hint": "Peak"
        },
        {
            "word": "Golden Gate Bridge 🌉",
            "hint": "Span"
        },
        {
            "word": "Mount Fuji 🗻",
            "hint": "Snowcap"
        },
        {
            "word": "Stonehenge 🪨",
            "hint": "Solstice"
        },
        {
            "word": "Leaning Tower of Pisa 🏛️",
            "hint": "Foundation"
        },
        {
            "word": "Mount Everest 🏔️",
            "hint": "Summit"
        },
        {
            "word": "Niagara Falls 🌊",
            "hint": "Mist"
        },
        {
            "word": "Grand Canyon 🏜️",
            "hint": "Strata"
        },
        {
            "word": "Petra 🏛️",
            "hint": "Canyon"
        },
        {
            "word": "Acropolis 🏛️",
            "hint": "Pillars"
        },
        {
            "word": "Times Square 🏙️",
            "hint": "Intersection"
        },
        {
            "word": "Louvre Museum 🏛️",
            "hint": "Mona Lisa"
        },
        {
            "word": "Angkor Wat 🛕",
            "hint": "Moat"
        },
        {
            "word": "Hollywood Sign 🎬",
            "hint": "Letters"
        },
        {
            "word": "Chichen Itza 🐍",
            "hint": "Serpent"
        },
        {
            "word": "Hagia Sophia 🕌",
            "hint": "Dome"
        },
        {
            "word": "Sagrada Familia ⛪",
            "hint": "Spires"
        },
        {
            "word": "Brandenburg Gate 🚪",
            "hint": "Prussian"
        },
        {
            "word": "Statue of Unity 🗿",
            "hint": "Giant"
        },
        {
            "word": "Gateway of India 🚪",
            "hint": "Arch"
        },
        {
            "word": "Charles Bridge 🌉",
            "hint": "Statues"
        },
        {
            "word": "Parthenon 🏛️",
            "hint": "Marbles"
        },
        {
            "word": "Kailash 🕉️",
            "hint": "Abode"
        },
        {
            "word": "Konark Sun Temple ☀️",
            "hint": "Sculpture"
        },
        {
            "word": "Hawa Mahal 🏰",
            "hint": "Facade"
        },
        {
            "word": "Red Fort 🔴",
            "hint": "Imperial"
        },
        {
            "word": "Amber Fort 🟠",
            "hint": "Ramparts"
        },
        {
            "word": "Hampi 🪨",
            "hint": "Ruins"
        },
        {
            "word": "Masada 🏯",
            "hint": "Siege"
        },
        {
            "word": "Registan 🏛️",
            "hint": "Madrasa"
        },
        {
            "word": "Blue Mosque 🌙",
            "hint": "Minarets"
        },
        {
            "word": "Bermuda Triangle 🔺",
            "hint": "Ships"
        },
        {
            "word": "Gobi Desert 🐫",
            "hint": "Dunes"
        },
        {
            "word": "Sahara 🐪",
            "hint": "Camels"
        }
    ],
    "Mythical & Space": [
        {
            "word": "Dragon 🐉",
            "hint": "Lair"
        },
        {
            "word": "Unicorn 🦄",
            "hint": "Purity"
        },
        {
            "word": "Phoenix 🦅",
            "hint": "Rebirth"
        },
        {
            "word": "Black Hole 🕳️",
            "hint": "Singularity"
        },
        {
            "word": "Supernova 💥",
            "hint": "Stellar"
        },
        {
            "word": "Astronaut 👨‍🚀",
            "hint": "Suit"
        },
        {
            "word": "Mars 🔴",
            "hint": "Red Planet"
        },
        {
            "word": "Alien 👽",
            "hint": "Abduction"
        },
        {
            "word": "Pegasus 🪽",
            "hint": "Steed"
        },
        {
            "word": "Kraken 🐙",
            "hint": "Tentacles"
        },
        {
            "word": "Nebula 🌌",
            "hint": "Gas"
        },
        {
            "word": "Comet ☄️",
            "hint": "Tail"
        },
        {
            "word": "Asteroid 🪨",
            "hint": "Rock"
        },
        {
            "word": "Eclipse 🌘",
            "hint": "Alignment"
        },
        {
            "word": "Centaur 🏹",
            "hint": "Wild"
        },
        {
            "word": "Mermaid 🧜‍♀️",
            "hint": "Tale"
        },
        {
            "word": "Minotaur 🐂",
            "hint": "Labyrinth"
        },
        {
            "word": "Saturn 🪐",
            "hint": "System"
        },
        {
            "word": "Milky Way 🌌",
            "hint": "Spiral"
        },
        {
            "word": "Vampire 🧛",
            "hint": "Nocturnal"
        },
        {
            "word": "Werewolf 🐺",
            "hint": "Lunar"
        },
        {
            "word": "Yeti ❄️",
            "hint": "Abominable"
        },
        {
            "word": "Solar Flare ☀️",
            "hint": "Eruption"
        },
        {
            "word": "Constellation ✨",
            "hint": "Guide"
        },
        {
            "word": "Zodiac ♈",
            "hint": "Sign"
        },
        {
            "word": "Moon 🌕",
            "hint": "Orbit"
        },
        {
            "word": "Jupiter 🪐",
            "hint": "Red Spot"
        },
        {
            "word": "Neptune 🌊",
            "hint": "Blue"
        },
        {
            "word": "UFO 🛸",
            "hint": "Saucer"
        },
        {
            "word": "Atlantis 🌊",
            "hint": "Sunken"
        },
        {
            "word": "Bigfoot 🦍",
            "hint": "Forest"
        },
        {
            "word": "Krypton 💎",
            "hint": "Fortress"
        },
        {
            "word": "Robin Hood 🏹",
            "hint": "Merry"
        },
        {
            "word": "King Arthur ⚔️",
            "hint": "Table"
        },
        {
            "word": "Hercules 🏋️",
            "hint": "Twelve"
        },
        {
            "word": "Medusa 🐍",
            "hint": "Gaze"
        },
        {
            "word": "Zeus ⚡",
            "hint": "Olympus"
        },
        {
            "word": "Poseidon 🐋",
            "hint": "Trident"
        },
        {
            "word": "Odin 🪓",
            "hint": "Ragnarok"
        },
        {
            "word": "Thor 🔨",
            "hint": "Bifrost"
        },
        {
            "word": "Anubis 🐕",
            "hint": "Jackal"
        },
        {
            "word": "Horus ☀️",
            "hint": "Falcon"
        },
        {
            "word": "Banshee 👻",
            "hint": "Wail"
        },
        {
            "word": "Loch Ness 🐊",
            "hint": "Monster"
        },
        {
            "word": "Mothman 👁️",
            "hint": "Omen"
        },
        {
            "word": "Fenrir 🐺",
            "hint": "Bound"
        },
        {
            "word": "Selkie 🦭",
            "hint": "Seal"
        },
        {
            "word": "Hades ⚰️",
            "hint": "Underworld"
        }
    ],

    "Jobs & Professions": [
        {
            "word": "Doctor 🩺",
            "hint": "Diagnosis"
        },
        {
            "word": "Nurse 👩‍⚕️",
            "hint": "Ward"
        },
        {
            "word": "Teacher 🍎",
            "hint": "Blackboard"
        },
        {
            "word": "Chef 👨‍🍳",
            "hint": "Kitchen"
        },
        {
            "word": "Plumber 🔧",
            "hint": "Pipes"
        },
        {
            "word": "Electrician 💡",
            "hint": "Wiring"
        },
        {
            "word": "Mechanic 🔧",
            "hint": "Engine"
        },
        {
            "word": "Farmer 🚜",
            "hint": "Harvest"
        },
        {
            "word": "Baker 🥖",
            "hint": "Dough"
        },
        {
            "word": "Butcher 🔪",
            "hint": "Chop"
        },
        {
            "word": "Carpenter 🔨",
            "hint": "Sawdust"
        },
        {
            "word": "Barber 💈",
            "hint": "Shave"
        },
        {
            "word": "Dentist 🦷",
            "hint": "Drill"
        },
        {
            "word": "Firefighter 🧑‍🚒",
            "hint": "Hose"
        },
        {
            "word": "Police 👮",
            "hint": "Patrol"
        },
        {
            "word": "Soldier 🪖",
            "hint": "March"
        },
        {
            "word": "Pilot 👨‍✈️",
            "hint": "Cockpit"
        },
        {
            "word": "Flight Attendant ✈️",
            "hint": "Cabin"
        },
        {
            "word": "Photographer 📷",
            "hint": "Shutter"
        },
        {
            "word": "Writer 🖋️",
            "hint": "Manuscript"
        },
        {
            "word": "Journalist 📰",
            "hint": "Headline"
        },
        {
            "word": "Editor ✂️",
            "hint": "Cut"
        },
        {
            "word": "Designer 🎨",
            "hint": "Sketch"
        },
        {
            "word": "Architect 📐",
            "hint": "Blueprint"
        },
        {
            "word": "Engineer 🔧",
            "hint": "Circuit"
        },
        {
            "word": "Scientist 🔬",
            "hint": "Experiment"
        },
        {
            "word": "Mathematician 📐",
            "hint": "Equation"
        },
        {
            "word": "Judge 👨‍⚖️",
            "hint": "Gavel"
        },
        {
            "word": "Lawyer ⚖️",
            "hint": "Brief"
        },
        {
            "word": "Accountant 💼",
            "hint": "Ledger"
        },
        {
            "word": "Shopkeeper 🏪",
            "hint": "Counter"
        },
        {
            "word": "Bartender 🍸",
            "hint": "Shake"
        },
        {
            "word": "Tailor 🧵",
            "hint": "Hemline"
        },
        {
            "word": "Jeweller 💍",
            "hint": "Setting"
        },
        {
            "word": "Blacksmith 🔨",
            "hint": "Forge"
        },
        {
            "word": "Glassblower 🫧",
            "hint": "Bubble"
        },
        {
            "word": "Printer 🖨️",
            "hint": "Cartridge"
        },
        {
            "word": "Postman 📮",
            "hint": "Letterbox"
        },
        {
            "word": "Fisherman 🎣",
            "hint": "Trawler"
        },
        {
            "word": "Miner ⛏️",
            "hint": "Ore"
        },
        {
            "word": "Lifeguard 🏊",
            "hint": "Rescue"
        },
        {
            "word": "Veterinarian 🐾",
            "hint": "Clinic"
        },
        {
            "word": "Pharmacist 💊",
            "hint": "Prescription"
        },
        {
            "word": "Optician 👓",
            "hint": "Focal"
        },
        {
            "word": "DJ 🎧",
            "hint": "Mix"
        },
        {
            "word": "Cartographer 🗺️",
            "hint": "Atlas"
        },
        {
            "word": "Locksmith 🔑",
            "hint": "Warded"
        },
        {
            "word": "Sculptor 🗿",
            "hint": "Chisel"
        },
        {
            "word": "Barista ☕",
            "hint": "Espresso"
        },
        {
            "word": "Model 🕴️",
            "hint": "Campaign"
        },
        {
            "word": "Coroner ⚰️",
            "hint": "Autopsy"
        },
        {
            "word": "Archaeologist 🏺",
            "hint": "Dig"
        },
        {
            "word": "Economist 📈",
            "hint": "Forecast"
        },
        {
            "word": "Translator 🗣️",
            "hint": "Babel"
        },
        {
            "word": "Referee 📣",
            "hint": "Decisions"
        },
        {
            "word": "Dermatologist 🧴",
            "hint": "Skin"
        },
        {
            "word": "Air Traffic Controller 🎙️",
            "hint": "Radar"
        },
        {
            "word": "Waiter 🍽️",
            "hint": "Order"
        },
        {
            "word": "Stylist 💇",
            "hint": "Blowdry"
        },
        {
            "word": "Therapist 🛋️",
            "hint": "Couch"
        },
        {
            "word": "Chemist ⚗️",
            "hint": "Flask"
        }
    ],
    "Nature & Weather": [
        {
            "word": "Rainbow 🌈",
            "hint": "Arc"
        },
        {
            "word": "Thunderstorm ⛈️",
            "hint": "Downpour"
        },
        {
            "word": "Snowflake ❄️",
            "hint": "Flurry"
        },
        {
            "word": "Hailstone 🧊",
            "hint": "Sleet"
        },
        {
            "word": "Hurricane 🌀",
            "hint": "Cyclone"
        },
        {
            "word": "Tornado 🌪️",
            "hint": "Funnel"
        },
        {
            "word": "Blizzard 🌨️",
            "hint": "Whiteout"
        },
        {
            "word": "Fog 🌫️",
            "hint": "Haze"
        },
        {
            "word": "Dew 💧",
            "hint": "Droplet"
        },
        {
            "word": "Frost ❄️",
            "hint": "Pane"
        },
        {
            "word": "Breeze 🌬️",
            "hint": "Gust"
        },
        {
            "word": "Thunder ⛈️",
            "hint": "Rumble"
        },
        {
            "word": "Lightning ⚡",
            "hint": "Flash"
        },
        {
            "word": "Sunset 🌅",
            "hint": "Dusk"
        },
        {
            "word": "Sunrise 🌄",
            "hint": "Dawn"
        },
        {
            "word": "Moon Phase 🌘",
            "hint": "Crescent"
        },
        {
            "word": "Sand Dune 🏜️",
            "hint": "Crest"
        },
        {
            "word": "Glacier 🏔️",
            "hint": "Crevasse"
        },
        {
            "word": "Volcano 🌋",
            "hint": "Caldera"
        },
        {
            "word": "Waterfall 💦",
            "hint": "Plunge"
        },
        {
            "word": "Cave 🕳️",
            "hint": "Darkness"
        },
        {
            "word": "Desert 🏜️",
            "hint": "Oasis"
        },
        {
            "word": "Meadow 🌾",
            "hint": "Grass"
        },
        {
            "word": "Humidity 💧",
            "hint": "Sticky"
        },
        {
            "word": "Aurora 🌌",
            "hint": "Polar"
        },
        {
            "word": "Tide 🌊",
            "hint": "Ebb"
        },
        {
            "word": "Cactus 🌵",
            "hint": "Thorn"
        },
        {
            "word": "Fern 🌿",
            "hint": "Frond"
        },
        {
            "word": "Ivy 🍃",
            "hint": "Vine"
        },
        {
            "word": "Mushroom 🍄",
            "hint": "Spore"
        },
        {
            "word": "Wheat 🌾",
            "hint": "Mill"
        },
        {
            "word": "Coral Reef 🪸",
            "hint": "Atoll"
        },
        {
            "word": "Tulip 🌷",
            "hint": "Bulb"
        },
        {
            "word": "Rose 🌹",
            "hint": "Petal"
        },
        {
            "word": "Sunflower 🌻",
            "hint": "Helix"
        },
        {
            "word": "Lotus 🪷",
            "hint": "Pond"
        },
        {
            "word": "Maple Leaf 🍁",
            "hint": "Autumn"
        },
        {
            "word": "Seashell 🐚",
            "hint": "Pearl"
        },
        {
            "word": "Starfish 🐟",
            "hint": "Arms"
        },
        {
            "word": "Seahorse 🐴",
            "hint": "Sway"
        },
        {
            "word": "Whale 🐋",
            "hint": "Songs"
        },
        {
            "word": "Jellyfish 🪼",
            "hint": "Sting"
        },
        {
            "word": "Polar Bear 🐻‍❄️",
            "hint": "Arctic"
        },
        {
            "word": "Snowman ⛄",
            "hint": "Carrot"
        },
        {
            "word": "Icicle 🧊",
            "hint": "Drip"
        },
        {
            "word": "Puddle 💧",
            "hint": "Ripples"
        },
        {
            "word": "Sapling 🌱",
            "hint": "Sprout"
        },
        {
            "word": "Log 🌳",
            "hint": "Stump"
        },
        {
            "word": "Typhoon 🌀",
            "hint": "Pacific"
        },
        {
            "word": "Monsoon 🌧️",
            "hint": "Season"
        },
        {
            "word": "Heatwave 🥵",
            "hint": "Scorch"
        },
        {
            "word": "Drought 🏙️",
            "hint": "Thirst"
        },
        {
            "word": "Avalanche 🏔️",
            "hint": "Snowball"
        },
        {
            "word": "Tundra 🥶",
            "hint": "Permafrost"
        },
        {
            "word": "Dust Devil 🐫",
            "hint": "Blowing"
        },
        {
            "word": "Cloud ☁️",
            "hint": "Cumulus"
        },
        {
            "word": "Sundial 🕰️",
            "hint": "Shadow"
        },
        {
            "word": "Seaweed 🥬",
            "hint": "Kelp"
        },
        {
            "word": "Acorn 🌰",
            "hint": "Squirrel"
        },
        {
            "word": "Pebble 🪨",
            "hint": "Stream"
        },
        {
            "word": "Wildflower 🌼",
            "hint": "Weeds"
        },
        {
            "word": "Lichen 🍂",
            "hint": "Crust"
        }
    ],
    "Indian States": [
        {
            "word": "Maharashtra 🏔️",
            "hint": "Mumbai"
        },
        {
            "word": "Kerala 🌴",
            "hint": "Backwaters"
        },
        {
            "word": "Karnataka 🛕",
            "hint": "Mysuru"
        },
        {
            "word": "Tamil Nadu 🏛️",
            "hint": "Dravidian"
        },
        {
            "word": "Telangana 🪷",
            "hint": "Charminar"
        },
        {
            "word": "Andhra Pradesh 🌶️",
            "hint": "Coastal"
        },
        {
            "word": "Gujarat 🪔",
            "hint": "Gandhi"
        },
        {
            "word": "Rajasthan 🏜️",
            "hint": "Thar"
        },
        {
            "word": "Punjab 🏏",
            "hint": "Bhangra"
        },
        {
            "word": "Haryana 🌾",
            "hint": "Green"
        },
        {
            "word": "Uttarakhand 🏔️",
            "hint": "Char Dham"
        },
        {
            "word": "Himachal Pradesh 🍎",
            "hint": "Shimla"
        },
        {
            "word": "West Bengal 🕉️",
            "hint": "Durga"
        },
        {
            "word": "Odisha 🐘",
            "hint": "Chariot"
        },
        {
            "word": "Assam 🍵",
            "hint": "Orthodox"
        },
        {
            "word": "Bihar 🏛️",
            "hint": "Bodh"
        },
        {
            "word": "Jharkhand ⛏️",
            "hint": "Falls"
        },
        {
            "word": "Madhya Pradesh 🦕",
            "hint": "Khajuraho"
        },
        {
            "word": "Chhattisgarh ⚒️",
            "hint": "Bastar"
        },
        {
            "word": "Goa 🏖️",
            "hint": "Portuguese"
        },
        {
            "word": "Tripura 🍋",
            "hint": "Jhum"
        },
        {
            "word": "Manipur 🪘",
            "hint": "Rasa"
        },
        {
            "word": "Meghalaya 🌧️",
            "hint": "Cherrapunji"
        },
        {
            "word": "Mizoram 🌺",
            "hint": "Hill"
        },
        {
            "word": "Nagaland 🥁",
            "hint": "Hornbill"
        },
        {
            "word": "Arunachal Pradesh 🏞️",
            "hint": "Tawang"
        },
        {
            "word": "Sikkim 🏔️",
            "hint": "Guru"
        },
        {
            "word": "Jammu & Kashmir 🕌",
            "hint": "Chinar"
        },
        {
            "word": "Ladakh 🏔️",
            "hint": "Monastic"
        },
        {
            "word": "Puducherry 🏛️",
            "hint": "French"
        },
        {
            "word": "Chandigarh 🏗️",
            "hint": "Planned"
        },
        {
            "word": "Delhi 🏛️",
            "hint": "Capital"
        }
    ]

};
