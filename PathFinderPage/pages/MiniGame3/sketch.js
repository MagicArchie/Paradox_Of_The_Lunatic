/**********************************************
 * Global Variables
 **********************************************/

// Retrieve the stored DifficultySL value from localStorage (if needed)
const DifficultySL = localStorage.getItem('DifficultySL');

// Admin helper switch. Set to true if you want to see extra logs
let AdminHelper = false; 

// Optional custom font
let customFont;

let OneUse = false;
let OneUse2 = false;

// Background images
let backgroundImage, backgroundImage2;
let ActiveCard = 0;

// Card dimensions and positions
let CardWidth = 120;
let CardHeight = 240;

let CardX1, CardX2, CardX3, CardY123 = 100;
let CardX4, CardX5, CardX6, CardY456 = 100;

// Arrays and variables for the game logic
let cardImages = [];   
let cards = [];        
let visibleCards = []; 
let matchedCards = []; 
let isProcessing = false; 

// Global variables for text positions
let roundTextY, matchesTextY, roomCodeTextY, roomCodeTextY2;

// Round tracking
let showRoundMessage = true;   
let roundMessageTimer = 3000;  
let messageStartTime;
let currentRound = 1;
const TOTAL_ROUNDS = 3;        

// Victory check
let victorySequenceStarted = false; 

// Round 1 back choice
let round1BackChoice = null;

// Current round's back image/pool
let currentBackImagePath = '';
let currentFrontImagePool = [];

/**********************************************
 * Lives / Hearts Tracking
 **********************************************/
let hearts = [];     
let heartsLost = 0;  

const HEART_COUNT = 10;

// Heart size & spacing
let heartWidth = 50; 
let heartHeight = 50;
let heartSpacing = 5; 

// Variables for the bounding rectangle behind hearts
let heartsRectX, heartsRectY;
let heartsRectW, heartsRectH;

/**********************************************
 * "You Lost" Screen
 **********************************************/
// Show "You lost" for 3 seconds, then revert a round
let showLostMessage = false;
let lostMessageStartTime = 0;
let lostMessageDuration = 3000; 

/**********************************************
 * Preload and Setup
 **********************************************/
function preload() {
  // If you have a custom font, load it here:
  // customFont = loadFont('materials/fonts/WitchMystery.otf'); 

  backgroundImage = loadImage('materials/images/BackGround.png');
  backgroundImage2 = loadImage('materials/images/PathFinderBG2.png');
  
  backgroundMS = loadSound('materials/sounds/DarkPiano_Silence.mp3');
  CardFlip1 = loadSound('materials/sounds/CardFlip1.mp3');
  CardFlip2 = loadSound('materials/sounds/CardFlip2.wav');
  HeartLost = loadSound('materials/sounds/HeartLost.mp3');
  LevelUp = loadSound('materials/sounds/LevelUp.mp3');
  RoundStart = loadSound('materials/sounds/RoundStart.mp3');
  RoundLost = loadSound('materials/sounds/RoundLost.mp3');
  Complete = loadSound('materials/sounds/Complete.mp3');
  GameStart = loadSound('materials/sounds/GameStart.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // If using a custom font:
  // textFont(customFont);

  // Calculate card positions
  CardX1 = width / 2 - CardWidth / 2 - 325;
  CardX2 = width / 2 - CardWidth / 2 - 195;
  CardX3 = width / 2 - CardWidth / 2 - 65;
  CardX4 = width / 2 - CardWidth / 2 + 65;
  CardX5 = width / 2 - CardWidth / 2 + 195;
  CardX6 = width / 2 - CardWidth / 2 + 325;

  // Initialize Round 1
  initializeRound();
  createHearts(); // create hearts (lives)

  // Start timer for initial round message
  messageStartTime = millis();
  
  // Play background music on loop
  backgroundMS.loop();
  backgroundMS.setVolume(0.4);
  
  windowResized();
}

/**********************************************
 * Round / Card Setup
 **********************************************/
function initializeRound() {
  initializeRandomCardPairs();
  createAllCards(); 
  
  if (OneUse2 == false) {
	GameStart.setVolume(0.9);
	GameStart.play();  
	OneUse2 = true;
  }
}

function initializeRandomCardPairs() {
  if (currentRound === 1) {
    const choice = Math.floor(Math.random() * 2);
    if (choice === 0) {
      setV11Config();
    } else {
      setV21Config();
    }
    round1BackChoice = currentBackImagePath;

    pickAndShuffleFronts();
    logFrontSelection();
    logAdminCardOrderIfEnabled();

  } else if (currentRound === 2) {
    if (round1BackChoice && round1BackChoice.includes('MemortBackCardV11')) {
      setV21Config();
    } else {
      setV11Config();
    }
    pickAndShuffleFronts();
    logFrontSelection();
    logAdminCardOrderIfEnabled();

  } else {
    // Round 3: uses V2 folder
    const v2Options = [
      'materials/images/cards/V2/Card1.png',
      'materials/images/cards/V2/Card2.png',
      'materials/images/cards/V2/Card3.png',
      'materials/images/cards/V2/Card4.png',
      'materials/images/cards/V2/Card5.png',
      'materials/images/cards/V2/Card6.png',
    ];

    const chosenV2 = [];
    while (chosenV2.length < 3) {
      const randIndex = Math.floor(Math.random() * v2Options.length);
      const c = v2Options[randIndex];
      if (!chosenV2.includes(c)) {
        chosenV2.push(c);
      }
    }

    cardImages = [...chosenV2, ...chosenV2];
    shuffleArray(cardImages);

    currentBackImagePath = 'materials/images/cards/V2/Card0.png';

    const friendlyFronts = chosenV2.map(f => f.split('/').pop()).join(', ');
    console.log(`Round ${currentRound}: Using V2 logic - Card Selected: ${friendlyFronts}`);

    if (AdminHelper) {
      console.log(`AdminHelper: Round ${currentRound} card order:`);
      cardImages.forEach((img, idx) => {
        console.log(`  [${idx}]: ${img.split('/').pop()}`);
      });
    }
  }
}

function setV11Config() {
  currentBackImagePath = 'materials/images/cards/V1/MemortBackCardV11.png';
  currentFrontImagePool = [
    'materials/images/cards/V1/MemoryCard1.2.png',
    'materials/images/cards/V1/MemoryCard2.2.png',
    'materials/images/cards/V1/MemoryCard3.2.png',
    'materials/images/cards/V1/MemoryCard4.2.png'
  ];
}

function setV21Config() {
  currentBackImagePath = 'materials/images/cards/V1/MemortBackCardV21.png';
  currentFrontImagePool = [
    'materials/images/cards/V1/MemoryCard5.2.png',
    'materials/images/cards/V1/MemoryCard6.2.png',
    'materials/images/cards/V1/MemoryCard7.2.png',
    'materials/images/cards/V1/MemoryCard8.2.png'
  ];
}

function pickAndShuffleFronts() {
  const selectedFronts = [];
  while (selectedFronts.length < 3) {
    const randIndex = Math.floor(Math.random() * currentFrontImagePool.length);
    const chosen = currentFrontImagePool[randIndex];
    if (!selectedFronts.includes(chosen)) {
      selectedFronts.push(chosen);
    }
  }
  cardImages = [...selectedFronts, ...selectedFronts];
  shuffleArray(cardImages);
}

function logFrontSelection() {
  const friendlyBack = currentBackImagePath.split('/').pop();
  const uniqueFronts = [...new Set(cardImages)];
  const friendlyFronts = uniqueFronts.map(f => f.split('/').pop()).join(', ');
  console.log(`Round ${currentRound}:
    Back = ${friendlyBack}
    Card Selected: ${friendlyFronts}`);
}

function logAdminCardOrderIfEnabled() {
  if (AdminHelper) {
    console.log(`AdminHelper: Round ${currentRound} card order:`);
    cardImages.forEach((img, idx) => {
      console.log(`  [${idx}]: ${img.split('/').pop()}`);
    });
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/**********************************************
 * Create & Manage Hearts
 **********************************************/
function createHearts() {
  hearts = [];
  heartsLost = 0;

  let totalWidth = HEART_COUNT * heartWidth + (HEART_COUNT - 1) * heartSpacing;
  let y = height - heartHeight - 40; // a bit from the bottom
  let startX = (width - totalWidth) / 2;

  heartsRectX = startX - 10;
  heartsRectY = y - 10;
  heartsRectW = totalWidth + 20;
  heartsRectH = heartHeight + 20;

  for (let i = 0; i < HEART_COUNT; i++) {
    let x = startX + i * (heartWidth + heartSpacing);
    let heart = createImg('materials/images/HealthBar/ActiveHeart.png', `heart-${i}`);
    heart.size(heartWidth, heartHeight);
    heart.position(x, y);
    hearts.push(heart);
  }
}

/**********************************************
 * Main Game Logic
 **********************************************/
function createAllCards() {
  cards = [];
  cards.push(createCard(CardX1, CardY123, 0));
  cards.push(createCard(CardX2, CardY123, 1));
  cards.push(createCard(CardX3, CardY123, 2));
  cards.push(createCard(CardX4, CardY456, 3));
  cards.push(createCard(CardX5, CardY456, 4));
  cards.push(createCard(CardX6, CardY456, 5));

  // By default, hide them. We'll show them once messages are done
  cards.forEach(c => c.hide());
}

function createCard(x, y, index) {
  const card = createImg(currentBackImagePath, `Card-${index + 1}`);
  card.size(CardWidth, CardHeight);
  card.position(x, y);
  card.mousePressed(() => handleCardPress(card, index));
  return card;
}

function handleCardPress(card, index) {
  // If we're showing a message or if it's matched/processing => block clicks
  if (isProcessing || showRoundMessage || showLostMessage || matchedCards.includes(index)) {
    return;
  }
  
  CardFlip1.play(); 

  const frontImagePath = cardImages[index];
  card.attribute('src', frontImagePath);
  visibleCards.push({ card, index });

  // If 2 cards face-up => check match
  if (visibleCards.length === 2) {
    isProcessing = true;
    const [first, second] = visibleCards;

    if (cardImages[first.index] === cardImages[second.index]) {
		
      setTimeout(() => {
	    Complete.play();	
	  }, 500);		
		
      console.log('Match found!');
      matchedCards.push(first.index, second.index);

      first.card.removeAttribute('mousePressed');
      second.card.removeAttribute('mousePressed');
      visibleCards = [];
      isProcessing = false;
      checkForRoundCompletion();

    } else {
      console.log('No match!');
      loseOneHeart();

      setTimeout(() => {  
		CardFlip2.play();  
		  
        first.card.attribute('src', currentBackImagePath);
        second.card.attribute('src', currentBackImagePath);
        visibleCards = [];
        isProcessing = false;
      }, 2000);
    }
  }
}

// Hearts do NOT reset on round complete => only on user-lost
function loseOneHeart() {
	
	HeartLost.play();
	
  if (heartsLost < HEART_COUNT) {
    let indexToKill = (HEART_COUNT - 1) - heartsLost;
    hearts[indexToKill].attribute('src', 'materials/images/HealthBar/DeadHeart.png');
    heartsLost++;
  }

  // If all hearts are lost => show "You lost" after 2s, revert round
  if (heartsLost >= HEART_COUNT) {
    console.log("All hearts lost => wait 2s, then show lost message");
    isProcessing = true;

    setTimeout(() => {
      showLostMessage = true;
      lostMessageStartTime = millis();
    }, 2000);
  }
}

function checkForRoundCompletion() {
  if (matchedCards.length === cardImages.length) {
	  
	  LevelUp.play();  
	  
    console.log(`Round ${currentRound} Completed!`);

    setTimeout(() => {
      currentRound++;
      showRoundMessage = true;
      messageStartTime = millis();
      matchedCards = [];
      visibleCards = [];

      if (currentRound > TOTAL_ROUNDS) {
        cards.forEach(c => c.remove());
        cards = [];
      } else {
        // do NOT reset hearts => only user-lost resets them
		
		RoundStart.play();
		
        cards.forEach(c => c.remove());
        cards = [];
        initializeRound();
      }
    }, 2000);
  }
}

/**********************************************
 * Drawing / UI
 **********************************************/
function draw() {
  // If using a custom font => textFont(customFont);

  // 1) If "You lost" message
  if (showLostMessage) {
	  
	if (OneUse == false) {
	  RoundLost.play();  
	  OneUse = true;
    }
	  
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(64);
    text('YOU LOST!', width / 2, height / 2);

    // (1) Hide hearts & cards
    hearts.forEach(h => h.hide());
    cards.forEach(c => c.hide());

    // After 3s => revert round
    if (millis() - lostMessageStartTime >= lostMessageDuration) {
      showLostMessage = false;
      isProcessing = false;

      if (currentRound > 1) currentRound--;
      matchedCards = [];
      visibleCards = [];

      // reset hearts only on user-lost
      hearts.forEach(h => h.remove());
      hearts = [];
      createHearts();

      // re-init round
      initializeRound();
    }
    return;
  }

  // 2) If round message
  if (showRoundMessage) {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(64);

    if (currentRound > TOTAL_ROUNDS) {
      text('CONGRATULATIONS!', width / 2, height / 2 - 60);
      textSize(48);
      text('You have completed all rounds!', width / 2, height / 2 + 10);
	  textSize(55);
      text('Code: 2X2X', width / 2, height / 2 + 120);
	  
	  cards.forEach(c => c.hide());
      hearts.forEach(h => h.hide());

      if (!victorySequenceStarted) {
        victorySequenceStarted = true;
        setTimeout(function() {
          localStorage.setItem('MiniGameN3', true);
          window.location.href = "../../index.html";
        }, 5500);
      }
    } else {
      if (matchedCards.length === cardImages.length && currentRound <= TOTAL_ROUNDS) {
        text(`Round ${currentRound - 1} Completed!`, width / 2, height / 2 - 50);
        text(`Starting Round ${currentRound}...`, width / 2, height / 2 + 50);
      } else {
        text(`Round ${currentRound}`, width / 2, height / 2);
      }

      // (1) hide hearts & cards
      cards.forEach(c => c.hide());
      hearts.forEach(h => h.hide());

      if (millis() - messageStartTime >= roundMessageTimer && currentRound <= TOTAL_ROUNDS) {
        showRoundMessage = false;
        image(backgroundImage, 0, 0, width, height);

        cards.forEach(c => c.show());
        hearts.forEach(h => h.show());
      }
    }
  } else {
    // 3) Normal gameplay
    image(backgroundImage, 0, 0, width, height);

    // Round text top-center
    textAlign(CENTER, TOP);
    fill(255);
    textSize(48);
    text(`Round ${currentRound}`, width / 2, 35);

    // Matches top-right
    textAlign(RIGHT, TOP);
    textSize(24);
    let pairsMatched = matchedCards.length / 2;
    text(`Matches: ${pairsMatched}/3`, width - 30, 30);

    // Draw black transparent rect behind hearts
    push();
    fill(0, 80); 
    stroke(195);
    strokeWeight(2);
    rect(heartsRectX, heartsRectY, heartsRectW, heartsRectH, 20);
    pop();

    hearts.forEach(h => h.show());
    cards.forEach(c => c.show());
  }
}

/**********************************************
 * windowResized
 **********************************************/
function windowResized() {
  let newWidth = fullscreen() ? displayWidth : windowWidth;
  let newHeight = fullscreen() ? displayHeight : windowHeight;
  
  resizeCanvas(newWidth, newHeight);

  // Ensure background image covers full canvas
  redrawBackground();

  // Maintain proportional scaling of game elements
  let aspectRatio = width / height;
  let heartScale = aspectRatio > 1.5 ? 0.045 : 0.055;

  // Adjust card dimensions dynamically
  CardWidth = width * 0.13; // Cards take up 13% of width
  CardHeight = height * 0.48; // Cards take up 48% of height

  let cardSpacingX = width * 0.02; // Spacing between cards

  // Calculate total width occupied by all 6 cards + 5 spaces in between
  let totalCardWidth = (CardWidth * 6) + (cardSpacingX * 5);

  // Calculate starting X position to center the row
  let startX = (width - totalCardWidth) / 2;

  // Adjust card positions dynamically to maintain equal margins
  CardX1 = startX;
  CardX2 = CardX1 + CardWidth + cardSpacingX;
  CardX3 = CardX2 + CardWidth + cardSpacingX;
  CardX4 = CardX3 + CardWidth + cardSpacingX;
  CardX5 = CardX4 + CardWidth + cardSpacingX;
  CardX6 = CardX5 + CardWidth + cardSpacingX;

  CardY123 = height * 0.25; // Aligns all cards on the same Y-axis

  if (cards.length > 0) {
    cards[0].position(CardX1, CardY123);
    cards[1].position(CardX2, CardY123);
    cards[2].position(CardX3, CardY123);
    cards[3].position(CardX4, CardY123);
    cards[4].position(CardX5, CardY123);
    cards[5].position(CardX6, CardY123);

    cards.forEach(card => {
      card.size(CardWidth, CardHeight);
    });
  }

  heartWidth = width * heartScale;
  heartHeight = heartWidth;
  heartSpacing = width * 0.005;

  let totalHeartWidth = (HEART_COUNT * heartWidth) + ((HEART_COUNT - 1) * heartSpacing);
  let heartStartX = (width - totalHeartWidth) / 2;
  let heartY = height * 0.82;

  heartsRectX = heartStartX - 5;
  heartsRectY = heartY - 5;
  heartsRectW = totalHeartWidth + 10;
  heartsRectH = heartHeight + 10;

  hearts.forEach((heart, i) => {
    let x = heartStartX + i * (heartWidth + heartSpacing);
    heart.position(x, heartY);
    heart.size(heartWidth, heartHeight);
  });

  //Store text positions globally so they update dynamically!
  roundTextY = height * 0.05;
  matchesTextY = height * 0.10;
  roomCodeTextY = height * 0.75;
  roomCodeTextY2 = height * 0.80;

  //Limit text size so it doesn't become too large!
  textSize(min(width * 0.08, 80));
  textSize(min(width * 0.05, 50));

  // Make sure all elements are shown correctly after resizing
  hearts.forEach(h => h.show());
  cards.forEach(c => c.show());
}


function redrawBackground() {
  background(0); // Clear canvas to prevent flickering
  image(backgroundImage, 0, 0, width, height);
}

let fullscreenActivated = false;

function mousePressed() {
  if (!fullscreenActivated && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
    fullscreenActivated = true; // Mark as activated

    setTimeout(() => {
      windowResized(); //Recalculate positions after fullscreen is applied
    }, 300);
  }
}