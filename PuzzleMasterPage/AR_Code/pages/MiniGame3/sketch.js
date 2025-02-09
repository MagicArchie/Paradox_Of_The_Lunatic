/**********************************************
 * Global Variables
 **********************************************/

// Retrieve the stored DifficultySL value from localStorage
const DifficultySL = localStorage.getItem('DifficultySL');

// Debug logs?
let AdminHelper = false;

// Optional custom font
let customFont;

let OneUse = false;
let OneUse2 = false;

// Single background image
let backgroundImage;
let ActiveCard = 0;

// Card dimensions for vertical layout
let CardWidth = 250;
let CardHeight = 480;

// Positions for the 2 rows (3 cards each)
let CardX1, CardX2, CardX3;
let CardY123 = 600;   // first row
let CardY456 = 1150;  // second row

// Arrays and game logic variables
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

// Hearts bigger, placed higher
const HEART_COUNT = 10;
let heartWidth = 70;
let heartHeight = 70;
let heartSpacing = 8;

let heartsRectX, heartsRectY;
let heartsRectW, heartsRectH;

/**********************************************
 * "You Lost" Screen
 **********************************************/
// Show "You lost!" for 3s, revert one round
let showLostMessage = false;
let lostMessageStartTime = 0;
let lostMessageDuration = 3000; // 3 seconds

/**********************************************
 * Preload
 **********************************************/
function preload() {
  // If using custom font: customFont = loadFont('materials/fonts/WitchMystery.otf');
  backgroundImage = loadImage('materials/images/BackGround.png');
  
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

/**********************************************
 * Setup
 **********************************************/
function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log("Canvas width:", width, "height:", height);

  // if using customFont globally: textFont(customFont);

  // Calculate X for 3 columns
  CardX1 = width / 2 - CardWidth / 2 - 270;
  CardX2 = width / 2 - CardWidth / 2;
  CardX3 = width / 2 - CardWidth / 2 + 270;

  initializeRound();
  createHearts(); // create hearts once initially

  messageStartTime = millis();

  // Check difficulty
  if (DifficultySL) {
    console.log('Difficulty Level Selected:', DifficultySL);
    if (DifficultySL == 1) console.log('Crazy Difficulty selected.');
    else if (DifficultySL == 2) console.log('Insane Difficulty selected.');
    else if (DifficultySL == 3) console.log('Lunatic Difficulty selected.');
  } else {
    console.log('No difficulty level selected.');
  }
  
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
    if (choice === 0) setV11Config();
    else setV21Config();
    round1BackChoice = currentBackImagePath;

    pickAndShuffleFronts();
    logFrontSelection();
    logAdminCardOrderIfEnabled();

  } else if (currentRound === 2) {
    if (round1BackChoice && round1BackChoice.includes('MemortBackCardV11')) setV21Config();
    else setV11Config();
    pickAndShuffleFronts();
    logFrontSelection();
    logAdminCardOrderIfEnabled();

  } else {
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
      if (!chosenV2.includes(c)) chosenV2.push(c);
    }
    cardImages = [...chosenV2, ...chosenV2];
    shuffleArray(cardImages);

    currentBackImagePath = 'materials/images/cards/V2/Card0.png';

    const friendlyFronts = chosenV2.map(f => f.split('/').pop()).join(', ');
    console.log(`Round ${currentRound}: Using V2 logic. Cards: ${friendlyFronts}`);

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
    if (!selectedFronts.includes(chosen)) selectedFronts.push(chosen);
  }
  cardImages = [...selectedFronts, ...selectedFronts];
  shuffleArray(cardImages);
}

function logFrontSelection() {
  const friendlyBack = currentBackImagePath.split('/').pop();
  const uniqueFronts = [...new Set(cardImages)];
  const friendlyFronts = uniqueFronts.map(f => f.split('/').pop()).join(', ');
  console.log(`Round ${currentRound}: Back = ${friendlyBack}, Cards: ${friendlyFronts}`);
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
 * Hearts
 **********************************************/
function createHearts() {
  hearts = [];
  heartsLost = 0;

  // Place hearts higher => let's say 200 px from bottom
  let totalWidth = HEART_COUNT * heartWidth + (HEART_COUNT - 1) * heartSpacing;
  let startX = (width - totalWidth) / 2;
  let y = height - heartHeight - 100;

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
 * Cards / Game Logic
 **********************************************/
function createAllCards() {
  cards = [];
  // 1st row
  cards.push(createCard(CardX1, CardY123, 0));
  cards.push(createCard(CardX2, CardY123, 1));
  cards.push(createCard(CardX3, CardY123, 2));
  // 2nd row
  cards.push(createCard(CardX1, CardY456, 3));
  cards.push(createCard(CardX2, CardY456, 4));
  cards.push(createCard(CardX3, CardY456, 5));

  // Hide them until round message is done
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
  if (isProcessing || showRoundMessage || showLostMessage || matchedCards.includes(index)) return;
  
  CardFlip1.play();  
  
  const frontImagePath = cardImages[index];
  card.attribute('src', frontImagePath);
  visibleCards.push({ card, index });

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

function loseOneHeart() {
	
	HeartLost.play();
	
  if (heartsLost < HEART_COUNT) {
    let indexToKill = (HEART_COUNT - 1) - heartsLost;
    hearts[indexToKill].attribute('src', 'materials/images/HealthBar/DeadHeart.png');
    heartsLost++;
  }
  if (heartsLost >= HEART_COUNT) {
    console.log("All hearts lost => wait 2s, then show lost message");
    isProcessing = true;
    setTimeout(() => {
      showLostMessage = true;
      lostMessageStartTime = millis();
    }, 2000);
  }
}

/**********************************************
 * Round Completion
 **********************************************/
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
        // do NOT reset hearts unless user loses
		
		RoundStart.play();
		
        cards.forEach(c => c.remove());
        cards = [];
        initializeRound();
      }
    }, 2000);
  }
}

/**********************************************
 * draw() / UI
 **********************************************/
function draw() {
  // if using customFont => textFont(customFont);

  // 1) "You lost" message
  if (showLostMessage) {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
	
	if (OneUse == false) {
		RoundLost.play();  
		OneUse = true;
	}
    
    textSize(min(width * 0.08, 80)); // ⬅ Limits max size to 80px
    text('YOU LOST!', width / 2, height / 2);

    hearts.forEach(h => h.hide());
    cards.forEach(c => c.hide());

    if (millis() - lostMessageStartTime >= lostMessageDuration) {
      showLostMessage = false;
      isProcessing = false;

      if (currentRound > 1) currentRound--;
      matchedCards = [];
      visibleCards = [];

      hearts.forEach(h => h.remove());
      hearts = [];
      createHearts();
      initializeRound();
    }
    return;
  }

  // 2) Round message
  if (showRoundMessage) {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);

	if (currentRound > TOTAL_ROUNDS) {
		textSize(min(width * 0.08, 70)); // ⬅ Reduced max size to 70px
		text('CONGRATULATIONS!', width / 2, height / 2 - 50);

		textSize(min(width * 0.06, 50)); // ⬅ Reduced max size to 50px
		text('You have completed all rounds!', width / 2, height / 2 + 20);

		textSize(min(width * 0.07, 55)); // ⬅ Reduced max size to 55px
		text('Code: X0X5', width / 2, height / 2 + 150);

		// Hide game elements when showing victory message
		cards.forEach(c => c.hide());
		hearts.forEach(h => h.hide());

      if (!victorySequenceStarted) {
        victorySequenceStarted = true;
        setTimeout(function() {
          localStorage.setItem('MiniGameN3', true);
          window.location.href = "../../../index.html";
        }, 5500);
      }
    } else {
      // The "Round X Completed!" and "Starting Round X..." messages
      textSize(min(width * 0.12, 100)); // ⬅ Max size 100px
      if (matchedCards.length === cardImages.length && currentRound <= TOTAL_ROUNDS) {
        text(`Round ${currentRound - 1} Completed!`, width / 2, height / 2 - 50);
        text(`Starting Round ${currentRound}...`, width / 2, height / 2 + 50);
      } else {
        text(`Round ${currentRound}`, width / 2, height / 2);
      }

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

    // Draw Round text (with max size limit)
    textAlign(CENTER, TOP);
    fill(255);

    textSize(min(width * 0.11, 95)); // ⬅ Max size 95px
    text(`Round ${currentRound}`, width / 2, roundTextY);

    // Draw Matches text (with max size limit)
    textSize(min(width * 0.08, 90)); // ⬅ Max size 90px
    let pairsMatched = matchedCards.length / 2;
    text(`Matches: ${pairsMatched}/3`, width / 2, matchesTextY);

    // Draw Room Code (Round 1 only)
    if (currentRound == 1) {
      textSize(min(width * 0.08, 90)); // ⬅ Max size 90px
      text(`Join Room Code:`, width / 2, roomCodeTextY);
      text(`00-00-03`, width / 2, roomCodeTextY2);
    }

    // Draw hearts rectangle
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

  // Adjust background
  image(backgroundImage, 0, 0, width, height);

  // Maintain proportional scaling of game elements
  let aspectRatio = width / height;
  let heartScale = aspectRatio > 1.5 ? 0.06 : 0.08;

  // Adjust card dimensions
  CardWidth = width * 0.26;
  CardHeight = height * 0.23;

  let cardSpacingX = width * 0.28;
  let cardSpacingY = height * 0.02;

  // Adjust card positions dynamically
  CardX1 = width / 2 - CardWidth / 2 - cardSpacingX;
  CardX2 = width / 2 - CardWidth / 2;
  CardX3 = width / 2 - CardWidth / 2 + cardSpacingX;
  
  CardY123 = height * 0.22;
  CardY456 = CardY123 + CardHeight + cardSpacingY;

  if (cards.length > 0) {
    cards[0].position(CardX1, CardY123);
    cards[1].position(CardX2, CardY123);
    cards[2].position(CardX3, CardY123);
    cards[3].position(CardX1, CardY456);
    cards[4].position(CardX2, CardY456);
    cards[5].position(CardX3, CardY456);

    cards.forEach(card => {
      card.size(CardWidth, CardHeight);
    });
  }

  // Adjust hearts dynamically
  heartWidth = width * heartScale;
  heartHeight = heartWidth;
  heartSpacing = width * 0.008;

  let totalHeartWidth = HEART_COUNT * heartWidth + (HEART_COUNT - 1) * heartSpacing;
  let startX = (width - totalHeartWidth) / 2;
  let y = height * 0.9;

  heartsRectX = startX - 10;
  heartsRectY = y - 10;
  heartsRectW = totalHeartWidth + 20;
  heartsRectH = heartHeight + 20;

  hearts.forEach((heart, i) => {
    let x = startX + i * (heartWidth + heartSpacing);
    heart.position(x, y);
    heart.size(heartWidth, heartHeight);
  });

  //Store text positions globally so they update dynamically!
  roundTextY = height * 0.07;
  matchesTextY = height * 0.13;
  roomCodeTextY = height * 0.75;
  roomCodeTextY2 = height * 0.80;

  //Limit text size so it doesn't become huge!
  textSize(min(width * 0.08, 80));
  textSize(min(width * 0.05, 50));

  // Make sure all elements are shown correctly after resizing
  hearts.forEach(h => h.show());
  cards.forEach(c => c.show());
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