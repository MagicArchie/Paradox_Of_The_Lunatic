let gameState = {
    roleSelected: 0,
    difficultySelected: 0,
    playButtonActive: false,
    showMessage: false,
    message: "",
};

let buttonDimensions, buttonPositions = {};
let assets = {};
let PathfinderBT, PuzzleMasterBT, CrazyBT, InsaneBT, LunaticBT, PlayBT;

function preload() {
    // Load assets
    assets.backgroundImage1 = loadImage('materials/images/Background5.png');
    assets.backgroundImage2 = loadImage('materials/images/Background6.png');

    assets.pathfinderImages = [
        'materials/images/buttons/Pathfinder BT1.png',
        'materials/images/buttons/Pathfinder BT2.png',
        'materials/images/buttons/Pathfinder BT3.png',
    ];
    assets.puzzlemasterImages = [
        'materials/images/buttons/PuzzleMaster BT1.png',
        'materials/images/buttons/PuzzleMaster BT2.png',
        'materials/images/buttons/PuzzleMaster BT3.png',
    ];
    assets.roleButtonSound = loadSound('materials/sounds/RoleBT.wav');

    assets.difficultyImages = {
        crazy: [
            'materials/images/buttons/BT Crazy.png',
            'materials/images/buttons/Press Crazy.png',
            'materials/images/buttons/Pressed Crazy.png',
        ],
        insane: [
            'materials/images/buttons/BT Insane.png',
            'materials/images/buttons/Press Insane.png',
            'materials/images/buttons/Pressed Insane.png',
        ],
        lunatic: [
            'materials/images/buttons/BT Lunatic.png',
            'materials/images/buttons/Press Lunatic.png',
            'materials/images/buttons/Pressed Lunatic.png',
        ],
    };
    assets.difficultyButtonSound = loadSound('materials/sounds/ButtonPress.wav');

    assets.playButtonImages = [
        'materials/images/buttons/Not Active Play.png',
        'materials/images/buttons/Active Play.png',
        'materials/images/buttons/Press Not Active.png',
        'materials/images/buttons/Press Play.png',
        'materials/images/buttons/Pressed Play.png',
    ];
    assets.playButtonSounds = {
        success: loadSound('materials/sounds/PlayBT2.wav'),
        error: loadSound('materials/sounds/PlayBT1.wav'),
    };
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    buttonDimensions = {
        pathfinderDiameter: windowWidth * 0.36,
        puzzlemasterDiameter: windowWidth * 0.36,
        difficultyDiameter: windowWidth * 0.23,
        playWidth: windowWidth * 0.5,
        playHeight: windowWidth * 0.15,
    };

    initializeButtons();
    updateButtonPositions();
}

function draw() {
    image(
        displayHeight < 700 ? assets.backgroundImage2 : assets.backgroundImage1,
        0,
        0,
        width,
        height
    );

    activatePlayButton();

    if (gameState.showMessage) {
        drawMessage(gameState.message);
    }
}

// Function to handle starting the game
function startGame() {
    if (!gameState.roleSelected || !gameState.difficultySelected) {
        animatePlayButton(assets.playButtonImages[2], assets.playButtonImages[0], 300);
        displayError("Please select a role and difficulty.");
        assets.playButtonSounds.error.play();
        return;
    }

    animatePlayButton(assets.playButtonImages[3], assets.playButtonImages[4], 300, () => {
        setTimeout(() => {
            assets.playButtonSounds.success.play();
            console.log("Starting game...");

            if (gameState.roleSelected === 1) {
                window.location.href = "PathFinderPage/index.html";
            } else if (gameState.roleSelected === 2) {
                window.location.href = "PuzzleMasterPage/index.html";
            }
        }, 2200);
    });
}

// Function to initialize buttons
function initializeButtons() {
    PathfinderBT = createImg(assets.pathfinderImages[0], 'Pathfinder');
    PathfinderBT.mousePressed(() => {
        selectRole(1);
    });

    PuzzleMasterBT = createImg(assets.puzzlemasterImages[0], 'PuzzleMaster');
    PuzzleMasterBT.mousePressed(() => {
        selectRole(2);
    });

    CrazyBT = createImg(assets.difficultyImages.crazy[0], 'Crazy');
    CrazyBT.mousePressed(() => {
        selectDifficulty(1, CrazyBT, assets.difficultyImages.crazy);
    });

    InsaneBT = createImg(assets.difficultyImages.insane[0], 'Insane');
    InsaneBT.mousePressed(() => {
        selectDifficulty(2, InsaneBT, assets.difficultyImages.insane);
    });

    LunaticBT = createImg(assets.difficultyImages.lunatic[0], 'Lunatic');
    LunaticBT.mousePressed(() => {
        selectDifficulty(3, LunaticBT, assets.difficultyImages.lunatic);
    });

    PlayBT = createImg(assets.playButtonImages[0], 'Play');
    PlayBT.mousePressed(() => {
        startGame();
    });
}

// Function to update button positions
function updateButtonPositions() {
    const centerX = width / 2;
    const centerY = height / 2;

    buttonPositions.pathfinder = {
        x: centerX - buttonDimensions.pathfinderDiameter - 30,
        y: centerY - buttonDimensions.pathfinderDiameter / 5,
    };
    buttonPositions.puzzlemaster = {
        x: centerX + 30,
        y: centerY - buttonDimensions.puzzlemasterDiameter / 5,
    };

    PathfinderBT.position(buttonPositions.pathfinder.x, buttonPositions.pathfinder.y);
    PathfinderBT.size(buttonDimensions.pathfinderDiameter, buttonDimensions.pathfinderDiameter);

    PuzzleMasterBT.position(buttonPositions.puzzlemaster.x, buttonPositions.puzzlemaster.y);
    PuzzleMasterBT.size(buttonDimensions.puzzlemasterDiameter, buttonDimensions.puzzlemasterDiameter);

    buttonPositions.difficulty = [
        { x: centerX - buttonDimensions.difficultyDiameter * 1.75, y: centerY + 200 },
        { x: centerX - buttonDimensions.difficultyDiameter / 2, y: centerY + 200 },
        { x: centerX + buttonDimensions.difficultyDiameter * 0.75, y: centerY + 200 },
    ];

    CrazyBT.position(buttonPositions.difficulty[0].x, buttonPositions.difficulty[0].y);
    CrazyBT.size(buttonDimensions.difficultyDiameter, buttonDimensions.difficultyDiameter);

    InsaneBT.position(buttonPositions.difficulty[1].x, buttonPositions.difficulty[1].y);
    InsaneBT.size(buttonDimensions.difficultyDiameter, buttonDimensions.difficultyDiameter);

    LunaticBT.position(buttonPositions.difficulty[2].x, buttonPositions.difficulty[2].y);
    LunaticBT.size(buttonDimensions.difficultyDiameter, buttonDimensions.difficultyDiameter);

    buttonPositions.play = {
        x: centerX - buttonDimensions.playWidth / 2,
        y: centerY + 322,
    };

    PlayBT.position(buttonPositions.play.x, buttonPositions.play.y);
    PlayBT.size(buttonDimensions.playWidth, buttonDimensions.playHeight);
}

// Function to animate play button
function animatePlayButton(pressedSrc, nextSrc, delay, callback) {
    PlayBT.attribute('src', pressedSrc);
    setTimeout(() => {
        PlayBT.attribute('src', nextSrc);
        if (callback) callback();
    }, delay);
}

// Function to select a role
function selectRole(role) {
    if (role === 1) {
        animateRoleButton(PathfinderBT, assets.pathfinderImages[1], assets.pathfinderImages[2], 600);
        resetOtherRole(PuzzleMasterBT, assets.puzzlemasterImages[0]);
    } else if (role === 2) {
        animateRoleButton(PuzzleMasterBT, assets.puzzlemasterImages[1], assets.puzzlemasterImages[2], 600);
        resetOtherRole(PathfinderBT, assets.pathfinderImages[0]);
    }
    gameState.roleSelected = role;
    assets.roleButtonSound.play();
    console.log(`Role selected: ${role}`);
}

// Function to animate role button
function animateRoleButton(button, pressedSrc, activeSrc, delay) {
    button.attribute('src', pressedSrc);
    setTimeout(() => {
        button.attribute('src', activeSrc);
    }, delay);
}

// Function to reset other role button
function resetOtherRole(button, defaultSrc) {
    button.attribute('src', defaultSrc);
}

// Function to select a difficulty
function selectDifficulty(difficulty, button, images) {
    if (gameState.difficultySelected !== 0) {
        resetDifficultyButton(gameState.difficultySelected);
    }
    animateDifficultyButton(button, images[1], images[2], 400);
    gameState.difficultySelected = difficulty;
    assets.difficultyButtonSound.play();
    console.log(`Difficulty selected: ${difficulty}`);
}

// Function to animate difficulty button
function animateDifficultyButton(button, pressedSrc, activeSrc, delay) {
    button.attribute('src', pressedSrc);
    setTimeout(() => {
        button.attribute('src', activeSrc);
    }, delay);
}

// Function to reset difficulty button
function resetDifficultyButton(difficulty) {
    let button;
    let defaultSrc;

    if (difficulty === 1) {
        button = CrazyBT;
        defaultSrc = assets.difficultyImages.crazy[0];
    } else if (difficulty === 2) {
        button = InsaneBT;
        defaultSrc = assets.difficultyImages.insane[0];
    } else if (difficulty === 3) {
        button = LunaticBT;
        defaultSrc = assets.difficultyImages.lunatic[0];
    }

    if (button) {
        button.attribute('src', defaultSrc);
    }
}

// Function to activate the Play button
function activatePlayButton() {
    if (gameState.roleSelected && gameState.difficultySelected && !gameState.playButtonActive) {
        PlayBT.attribute('src', assets.playButtonImages[1]);
        gameState.playButtonActive = true;
    }
}

// Function to display error messages
function displayError(message) {
    gameState.showMessage = true;
    gameState.message = message;
    setTimeout(() => (gameState.showMessage = false), 3500);
}

// Function to draw error messages
function drawMessage(msg) {
    fill(0, 0, 0, 200);
    rect(width / 2 - 150, height / 2 - 148, 300, 50, 20);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(15);
    text(msg, width / 2, height / 2.7);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    updateButtonPositions();
}
