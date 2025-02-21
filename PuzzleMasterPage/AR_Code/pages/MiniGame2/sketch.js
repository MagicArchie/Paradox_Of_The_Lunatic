// Retrieve the stored DifficultySL value from localStorage
const DifficultySL = localStorage.getItem('DifficultySL');

// Retrieve the stored DifficultySL value from localStorage
const TotorialComplete_C  = localStorage.getItem('TotorialComplete_MiniGame2');
let TotorialComplete = false;

let backgroundImage1, backgroundImage2;

let StartBarrier = true;
let Totorial = true;

let typingSounds = [];

let OneUse = false;

let PlayBT_WH = 130;
let PlayBT_X;
let PlayBT_Y = 670;

let AnswerBT_WH = 150;
let AnswerBT_X;
let AnswerBT_Y = 820;

let AnswerBG_W = 10, AnswerBG_H = 900;
let AnswerBG_X = 10, AnswerBG_Y = 150;

let MinimizeBT_WH;
let MinimizeBT_X, MinimizeBT_Y;

let ConfirmBT_WH;
let ConfirmBT_X, ConfirmBT_Y;

let ResetBT_WH;
let ResetBT_X, ResetBT_Y;

let VictoryMsg_W, VictoryMsg_H, VictoryMsg_X, VictoryMsg_Y;

let BT_WH = 150;

let MusicCounter = 0;

let BTX1;
let BTX2;
let BTY1 = 50;
let BTY2 = 100;
let BTY3 = 150;
let BTY4 = 200;
let BTY5 = 250;
let BTY6 = 300;
let BTY7 = 350;
let BTY8 = 400;
let BTY9 = 450;
let BTY10 = 500;
let BTY11 = 550;
let BTY12 = 600;
let BTY13 = 650;
let BTY14 = 700;
let BTY15 = 750;

let B1 = 0;
let B2 = 0;
let B3 = 0;
let B4 = 0;
let B5 = 0;
let B6 = 0;
let B7 = 0;
let B8 = 0;
let B9 = 0;
let B10 = 0;
let B11 = 0;
let B12 = 0;
let B13 = 0;
let B14 = 0;
let B15 = 0;

let CBT, CBT2;

let RectVisible = false;

// Achivements 🥇

  //MiniGames 🕹
  //MiniGame-2:
  const AC_MG2_1 = localStorage.getItem('MG2_1');
  const AC_MG2_2 = localStorage.getItem('MG2_2');
  const AC_MG2_3 = localStorage.getItem('MG2_3');

  //MiniGames 🕹
  //MiniGame-2:
  let MG2_1 = false, MG2_2 = false, MG2_3 = false;

function preload() {
  BackgroundIMG = loadImage('materials/images/PuzzleMasterBG.png');
  
  backgroundMS = loadSound('materials/sounds/DarkPiano_Liar.mp3');
  BitMS = loadSound('materials/sounds/hihatversion4.mp3');
  Fbeat = loadSound('materials/sounds/CompleteBeat.mp3');
  
  typingSounds.push(loadSound('materials/sounds/Type1.mp3'));
  typingSounds.push(loadSound('materials/sounds/Type2.mp3'));
  typingSounds.push(loadSound('materials/sounds/Type3.mp3'));
  
  AC_SFX = loadSound('materials/sounds/AC_SFX.mp3');
  WrongSFX = loadSound('materials/sounds/WrongSFX.mp3');
  BoxChecked = loadSound('materials/sounds/BoxCheck.mp3');
  PlayPressed = loadSound('materials/sounds/PlayBT.mp3');
  BT_Press = loadSound('materials/sounds/BTPressed.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log("Canvas width:", width);
  console.log("Canvas height:", height);
  console.log("Window width:", windowWidth);
  console.log("Window height:", windowHeight);
  console.log("Display width:", displayWidth);
  console.log("Display height:", displayHeight);
  console.log("Pixel density:", pixelDensity());
  
  PlayBT_X = width / 2 - PlayBT_WH / 2;
  AnswerBT_X  = width / 2 - AnswerBT_WH / 2;
  
  BTX1 =  width / 2 - BT_WH / 2;
  CBT = width / 2 - BT_WH / 2;
  CBT2 = width / 5 - BT_WH / 2;
  
  PlayBT = createImg('materials/images/buttons/PlayBT.png', 'Play Button');
  PlayBT.size(PlayBT_WH, PlayBT_WH);
  PlayBT.position(PlayBT_X, PlayBT_Y);
  PlayBT.mousePressed(PlayBTPressed);
  //PlayBT.hide();
  
  AnswerBT = createImg('materials/images/buttons/AnswerBT.png', 'Answer Button');
  AnswerBT.size(AnswerBT_WH, AnswerBT_WH);
  AnswerBT.position(AnswerBT_X, AnswerBT_Y);
  AnswerBT.mousePressed(AnswerBTPressed);
  //AnswerBT.hide();
  
  AnswerBG = createImg('materials/images/AnswerBG.png', 'Answer Background');
  AnswerBG.size(AnswerBG_W, AnswerBG_H);
  AnswerBG.position(AnswerBG_X, AnswerBG_Y);
  AnswerBG.hide();
  
  //Animation Frames for Bars
  T1 = createImg('materials/images/animation/T1.png', 'T1');
  T1.size(width, height);
  T1.position(0, 0);
  T1.hide();
  
  T2 = createImg('materials/images/animation/T2.png', 'T2');
  T2.size(width, height);
  T2.position(0, 0);
  T2.hide();
  
  T3 = createImg('materials/images/animation/T3.png', 'T3');
  T3.size(width, height);
  T3.position(0, 0);
  T3.hide();
  
  T4 = createImg('materials/images/animation/T4.png', 'T4');
  T4.size(width, height);
  T4.position(0, 0);
  T4.hide();
  
  T5 = createImg('materials/images/animation/T5.png', 'T5');
  T5.size(width, height);
  T5.position(0, 0);
  T5.hide();
  
  T6 = createImg('materials/images/animation/T6.png', 'T6');
  T6.size(width, height);
  T6.position(0, 0);
  T6.hide();
  
  T7 = createImg('materials/images/animation/T7.png', 'T7');
  T7.size(width, height);
  T7.position(0, 0);
  T7.hide();
  
  T8 = createImg('materials/images/animation/T8.png', 'T8');
  T8.size(width, height);
  T8.position(0, 0);
  T8.hide();
  
  T9 = createImg('materials/images/animation/T9.png', 'T9');
  T9.size(width, height);
  T9.position(0, 0);
  T9.hide();
  
  T10 = createImg('materials/images/animation/T10.png', 'T10');
  T10.size(width, height);
  T10.position(0, 0);
  T10.hide();
  
  T11 = createImg('materials/images/animation/T11.png', 'T11');
  T11.size(width, height);
  T11.position(0, 0);
  T11.hide();
  
  T12 = createImg('materials/images/animation/T12.png', 'T12');
  T12.size(width, height);
  T12.position(0, 0);
  T12.hide();
  
  T13 = createImg('materials/images/animation/T13.png', 'T13');
  T13.size(width, height);
  T13.position(0, 0);
  T13.hide();
  
  T14 = createImg('materials/images/animation/T14.png', 'T14');
  T14.size(width, height);
  T14.position(0, 0);
  T14.hide();
  
  T15 = createImg('materials/images/animation/T15.png', 'T15');
  T15.size(width, height);
  T15.position(0, 0);
  T15.hide();
  
  //Final Guess BT
  BT1_1 = createImg('materials/images/buttons/GBT0.png', 'Answer 1');
  BT1_1.size(BT_WH, BT_WH);
  BT1_1.position(BTX1, BTY1);
  BT1_1.hide();
  BT1_1.mousePressed(BT1_1Pressed);
  
  BT1_2 = createImg('materials/images/buttons/GBT0.png', 'Answer 2');
  BT1_2.size(BT_WH, BT_WH);
  BT1_2.position(BTX1, BTY2);
  BT1_2.hide();
  BT1_2.mousePressed(BT1_2Pressed);
  
  BT1_3 = createImg('materials/images/buttons/GBT0.png', 'Answer 3');
  BT1_3.size(BT_WH, BT_WH);
  BT1_3.position(BTX1, BTY3);
  BT1_3.hide();
  BT1_3.mousePressed(BT1_3Pressed);
  
  BT1_4 = createImg('materials/images/buttons/GBT0.png', 'Answer 4');
  BT1_4.size(BT_WH, BT_WH);
  BT1_4.position(BTX1, BTY4);
  BT1_4.hide();
  BT1_4.mousePressed(BT1_4Pressed);
  
  BT1_5 = createImg('materials/images/buttons/GBT0.png', 'Answer 5');
  BT1_5.size(BT_WH, BT_WH);
  BT1_5.position(BTX1, BTY5);
  BT1_5.hide();
  BT1_5.mousePressed(BT1_5Pressed);
  
  BT1_6 = createImg('materials/images/buttons/GBT0.png', 'Answer 6');
  BT1_6.size(BT_WH, BT_WH);
  BT1_6.position(BTX1, BTY6);
  BT1_6.hide();
  BT1_6.mousePressed(BT1_6Pressed);
  
  BT1_7 = createImg('materials/images/buttons/GBT0.png', 'Answer 7');
  BT1_7.size(BT_WH, BT_WH);
  BT1_7.position(BTX1, BTY7);
  BT1_7.hide();
  BT1_7.mousePressed(BT1_7Pressed);
  
  BT1_8 = createImg('materials/images/buttons/GBT0.png', 'Answer 8');
  BT1_8.size(BT_WH, BT_WH);
  BT1_8.position(BTX1, BTY8);
  BT1_8.hide();
  BT1_8.mousePressed(BT1_8Pressed);
  
  BT1_9 = createImg('materials/images/buttons/GBT0.png', 'Answer 9');
  BT1_9.size(BT_WH, BT_WH);
  BT1_9.position(BTX1, BTY9);
  BT1_9.hide();
  BT1_9.mousePressed(BT1_9Pressed);
  
  BT1_10 = createImg('materials/images/buttons/GBT0.png', 'Answer 10');
  BT1_10.size(BT_WH, BT_WH);
  BT1_10.position(BTX1, BTY10);
  BT1_10.hide();
  BT1_10.mousePressed(BT1_10Pressed);
  
  BT1_11 = createImg('materials/images/buttons/GBT0.png', 'Answer 11');
  BT1_11.size(BT_WH, BT_WH);
  BT1_11.position(BTX1, BTY11);
  BT1_11.hide();
  BT1_11.mousePressed(BT1_11Pressed);
  
  BT1_12 = createImg('materials/images/buttons/GBT0.png', 'Answer 12');
  BT1_12.size(BT_WH, BT_WH);
  BT1_12.position(BTX1, BTY12);
  BT1_12.hide();
  BT1_12.mousePressed(BT1_12Pressed);
  
  BT1_13 = createImg('materials/images/buttons/GBT0.png', 'Answer 13');
  BT1_13.size(BT_WH, BT_WH);
  BT1_13.position(BTX1, BTY13);
  BT1_13.hide();
  BT1_13.mousePressed(BT1_13Pressed);
  
  BT1_14 = createImg('materials/images/buttons/GBT0.png', 'Answer 14');
  BT1_14.size(BT_WH, BT_WH);
  BT1_14.position(BTX1, BTY14);
  BT1_14.hide();
  BT1_14.mousePressed(BT1_14Pressed);
  
  BT1_15 = createImg('materials/images/buttons/GBT0.png', 'Answer 15');
  BT1_15.size(BT_WH, BT_WH);
  BT1_15.position(BTX1, BTY15);
  BT1_15.hide();
  BT1_15.mousePressed(BT1_15Pressed);
  
  BT2_1 = createImg('materials/images/buttons/GBT0.png', 'Answer 1');
  BT2_1.size(BT_WH, BT_WH);
  BT2_1.position(BTX2, BTY1);
  BT2_1.hide();
  BT2_1.mousePressed(BT2_1Pressed);
  
  BT2_2 = createImg('materials/images/buttons/GBT0.png', 'Answer 2');
  BT2_2.size(BT_WH, BT_WH);
  BT2_2.position(BTX2, BTY2);
  BT2_2.hide();
  BT2_2.mousePressed(BT2_2Pressed);
  
  BT2_3 = createImg('materials/images/buttons/GBT0.png', 'Answer 3');
  BT2_3.size(BT_WH, BT_WH);
  BT2_3.position(BTX2, BTY3);
  BT2_3.hide();
  BT2_3.mousePressed(BT2_3Pressed);
  
  BT2_4 = createImg('materials/images/buttons/GBT0.png', 'Answer 4');
  BT2_4.size(BT_WH, BT_WH);
  BT2_4.position(BTX2, BTY4);
  BT2_4.hide();
  BT2_4.mousePressed(BT2_4Pressed);
  
  BT2_5 = createImg('materials/images/buttons/GBT0.png', 'Answer 5');
  BT2_5.size(BT_WH, BT_WH);
  BT2_5.position(BTX2, BTY5);
  BT2_5.hide();
  BT2_5.mousePressed(BT2_5Pressed);
  
  BT2_6 = createImg('materials/images/buttons/GBT0.png', 'Answer 6');
  BT2_6.size(BT_WH, BT_WH);
  BT2_6.position(BTX2, BTY6);
  BT2_6.hide();
  BT2_6.mousePressed(BT2_6Pressed);
  
  BT2_7 = createImg('materials/images/buttons/GBT0.png', 'Answer 7');
  BT2_7.size(BT_WH, BT_WH);
  BT2_7.position(BTX2, BTY7);
  BT2_7.hide();
  BT2_7.mousePressed(BT2_7Pressed);
  
  BT2_8 = createImg('materials/images/buttons/GBT0.png', 'Answer 8');
  BT2_8.size(BT_WH, BT_WH);
  BT2_8.position(BTX2, BTY8);
  BT2_8.hide();
  BT2_8.mousePressed(BT2_8Pressed);
  
  BT2_9 = createImg('materials/images/buttons/GBT0.png', 'Answer 9');
  BT2_9.size(BT_WH, BT_WH);
  BT2_9.position(BTX2, BTY9);
  BT2_9.hide();
  BT2_9.mousePressed(BT2_9Pressed);
  
  BT2_10 = createImg('materials/images/buttons/GBT0.png', 'Answer 10');
  BT2_10.size(BT_WH, BT_WH);
  BT2_10.position(BTX2, BTY10);
  BT2_10.hide();
  BT2_10.mousePressed(BT2_10Pressed);
  
  BT2_11 = createImg('materials/images/buttons/GBT0.png', 'Answer 11');
  BT2_11.size(BT_WH, BT_WH);
  BT2_11.position(BTX2, BTY11);
  BT2_11.hide();
  BT2_11.mousePressed(BT2_11Pressed);
  
  BT2_12 = createImg('materials/images/buttons/GBT0.png', 'Answer 12');
  BT2_12.size(BT_WH, BT_WH);
  BT2_12.position(BTX2, BTY12);
  BT2_12.hide();
  BT2_12.mousePressed(BT2_12Pressed);
  
  BT2_13 = createImg('materials/images/buttons/GBT0.png', 'Answer 13');
  BT2_13.size(BT_WH, BT_WH);
  BT2_13.position(BTX2, BTY13);
  BT2_13.hide();
  BT2_13.mousePressed(BT2_13Pressed);
  
  BT2_14 = createImg('materials/images/buttons/GBT0.png', 'Answer 14');
  BT2_14.size(BT_WH, BT_WH);
  BT2_14.position(BTX2, BTY14);
  BT2_14.hide();
  BT2_14.mousePressed(BT2_14Pressed);
  
  BT2_15 = createImg('materials/images/buttons/GBT0.png', 'Answer 15');
  BT2_15.size(BT_WH, BT_WH);
  BT2_15.position(BTX2, BTY15);
  BT2_15.hide();
  BT2_15.mousePressed(BT2_15Pressed);
  
  ResetBT = createImg('materials/images/buttons/ResetBT.png', 'Reset Button');
  ResetBT.size(ResetBT_WH, ResetBT_WH);
  ResetBT.position(ResetBT_X, ResetBT_Y);
  ResetBT.hide();
  ResetBT.mousePressed(ResetPressed);
  
  MinimizeBT = createImg('materials/images/buttons/MinimizeBT.png', 'Minimize Button');
  MinimizeBT.size(MinimizeBT_WH, MinimizeBT_WH);
  MinimizeBT.position(MinimizeBT_X, MinimizeBT_Y);
  MinimizeBT.hide();
  MinimizeBT.mousePressed(MinimizePressed);
  
  ConfirmBT = createImg('materials/images/buttons/ConfirmBT.png', 'Confirm Button');
  ConfirmBT.size(ConfirmBT_WH, ConfirmBT_WH);
  ConfirmBT.position(ConfirmBT_X, ConfirmBT_Y);
  ConfirmBT.hide();
  ConfirmBT.mousePressed(ConfirmPressed);
  
  VictoryMsg = createImg('materials/images/VictoryMSG.png', 'Victory Message');
  VictoryMsg.size(VictoryMsg_W, VictoryMsg_H);
  VictoryMsg.position(VictoryMsg_X, VictoryMsg_Y);
  VictoryMsg.hide();
  
  // Check if the value exists
  if (DifficultySL) {
    console.log('Difficulty Level Selected:', DifficultySL);

    // You can use the value as needed
    if (DifficultySL == 1) {
        console.log('Crazy Difficulty selected.');
    } else if (DifficultySL == 2) {
        console.log('Insane Difficulty selected.');
    } else if (DifficultySL == 3) {
        console.log('Lunatic Difficulty selected.');
    }
  } else {
    console.log('No difficulty level selected.');
  }
  
  //Check for Achivements
  if (!OneUse) {
	  if (AC_MG2_1 !== null) {
		  MG2_1 = AC_MG2_1;
		  console.log("Achievement-(MG2_1): Tone Deaf");
	  }
	  if (AC_MG2_2 !== null) {
		  MG2_2 = AC_MG2_2;
		  console.log("Achievement-(MG2_2): Perfect Sync Achieved");
	  }
	  if (AC_MG2_3 !== null) {
		  MG2_3 = AC_MG2_3;
		  console.log("Achievement-(MG2_3): The DJ is Concerned");
	  }
	  
	  if (TotorialComplete_C !== null) {
		  TotorialComplete = TotorialComplete_C;
	  }
	  
	  OneUse = true;
  }

  // Play background music on loop
  backgroundMS.loop();
  backgroundMS.setVolume(0.4);
  
  windowResized();
}

function draw() {
  //fullscreen(true);
  if (displayHeight < 700) {
    image(BackgroundIMG, 0, 0, width, height);
  }else{
    image(BackgroundIMG, 0, 0, width, height);
  }
  
  textAlign(CENTER, CENTER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  // Update positions and sizes dynamically
  PlayBT_WH = width * 0.24;
  PlayBT_X = width / 2 - PlayBT_WH / 2;
  PlayBT_Y = height * 0.725; // Example: Adjust position based on new height

  AnswerBT_WH = width * 0.27;
  AnswerBT_X = width / 2 - AnswerBT_WH / 2;
  AnswerBT_Y = height * 0.85; // Adjusted position
  
  AnswerBG_W = width * 0.8;
  AnswerBG_H = height * 0.8;
  AnswerBG_X = width / 2 - AnswerBG_W / 2;
  AnswerBG_Y = height * 0.02;
	
  BT_WH = width * 0.095;
  BTX1 = width / 2 - BT_WH / 2 - (width/5);
  BTX2 = width / 2 - BT_WH / 2 + (width/5);
  BTY1 = height * 0.065; // Center in the new height
  BTY2 = height * 0.112;
  BTY3 = height * 0.159;
  BTY4 = height * 0.206;
  BTY5 = height * 0.253; 
  BTY6 = height * 0.300;
  BTY7 = height * 0.347;
  BTY8 = height * 0.394;
  BTY9 = height * 0.441;
  BTY10 = height * 0.488; 
  BTY11 = height * 0.535;
  BTY12 = height * 0.582;
  BTY13 = height * 0.629; 
  BTY14 = height * 0.676;
  BTY15 = height * 0.723;
  
  // Reposition the buttons
  PlayBT.position(PlayBT_X, PlayBT_Y);
  PlayBT.size(PlayBT_WH, PlayBT_WH);
  AnswerBT.position(AnswerBT_X, AnswerBT_Y);
  AnswerBT.size(AnswerBT_WH, AnswerBT_WH);
  
  AnswerBG.size(AnswerBG_W, AnswerBG_H); // Set size first
  AnswerBG.position(AnswerBG_X, AnswerBG_Y); // Then set position
  
  BT1_1.position(BTX1, BTY1);
  BT1_1.size(BT_WH, BT_WH);
  
  BT1_2.position(BTX1, BTY2);
  BT1_2.size(BT_WH, BT_WH);
  
  BT1_3.position(BTX1, BTY3);
  BT1_3.size(BT_WH, BT_WH);
  
  BT1_4.position(BTX1, BTY4);
  BT1_4.size(BT_WH, BT_WH);
  
  BT1_5.position(BTX1, BTY5);
  BT1_5.size(BT_WH, BT_WH);
  
  BT1_6.position(BTX1, BTY6);
  BT1_6.size(BT_WH, BT_WH);
  
  BT1_7.position(BTX1, BTY7);
  BT1_7.size(BT_WH, BT_WH);
  
  BT1_8.position(BTX1, BTY8);
  BT1_8.size(BT_WH, BT_WH);
  
  BT1_9.position(BTX1, BTY9);
  BT1_9.size(BT_WH, BT_WH);
  
  BT1_10.position(BTX1, BTY10);
  BT1_10.size(BT_WH, BT_WH);
  
  BT1_11.position(BTX1, BTY11);
  BT1_11.size(BT_WH, BT_WH);
  
  BT1_12.position(BTX1, BTY12);
  BT1_12.size(BT_WH, BT_WH);
  
  BT1_13.position(BTX1, BTY13);
  BT1_13.size(BT_WH, BT_WH);
  
  BT1_14.position(BTX1, BTY14);
  BT1_14.size(BT_WH, BT_WH);
  
  BT1_15.position(BTX1, BTY15);
  BT1_15.size(BT_WH, BT_WH);
  
  BT2_1.position(BTX2, BTY1);
  BT2_1.size(BT_WH, BT_WH);
  
  BT2_2.position(BTX2, BTY2);
  BT2_2.size(BT_WH, BT_WH);
  
  BT2_3.position(BTX2, BTY3);
  BT2_3.size(BT_WH, BT_WH);
  
  BT2_4.position(BTX2, BTY4);
  BT2_4.size(BT_WH, BT_WH);
  
  BT2_5.position(BTX2, BTY5);
  BT2_5.size(BT_WH, BT_WH);
  
  BT2_6.position(BTX2, BTY6);
  BT2_6.size(BT_WH, BT_WH);
  
  BT2_7.position(BTX2, BTY7);
  BT2_7.size(BT_WH, BT_WH);
  
  BT2_8.position(BTX2, BTY8);
  BT2_8.size(BT_WH, BT_WH);
  
  BT2_9.position(BTX2, BTY9);
  BT2_9.size(BT_WH, BT_WH);
  
  BT2_10.position(BTX2, BTY10);
  BT2_10.size(BT_WH, BT_WH);
  
  BT2_11.position(BTX2, BTY11);
  BT2_11.size(BT_WH, BT_WH);
  
  BT2_12.position(BTX2, BTY12);
  BT2_12.size(BT_WH, BT_WH);
  
  BT2_13.position(BTX2, BTY13);
  BT2_13.size(BT_WH, BT_WH);
  
  BT2_14.position(BTX2, BTY14);
  BT2_14.size(BT_WH, BT_WH);
  
  BT2_15.position(BTX2, BTY15);
  BT2_15.size(BT_WH, BT_WH);

  // Resize or reposition other elements if needed
  T1.size(width, height);
  T2.size(width, height);
  T3.size(width, height);
  T4.size(width, height);
  T5.size(width, height);
  T6.size(width, height);
  T7.size(width, height);
  T8.size(width, height);
  T9.size(width, height);
  T10.size(width, height);
  T11.size(width, height);
  T12.size(width, height);
  T13.size(width, height);
  T14.size(width, height);
  T15.size(width, height);  
  
  ResetBT_WH = width * 0.2;
  ResetBT_X = width / 2 - ResetBT_WH / 2;
  ResetBT_Y = height * 0.35;
  
  MinimizeBT_WH = width * 0.22;
  MinimizeBT_X = width / 2 - MinimizeBT_WH / 2;
  MinimizeBT_Y = height * 0.45;
  
  ConfirmBT_WH = width * 0.2;
  ConfirmBT_X = width / 2 - ConfirmBT_WH / 2;
  ConfirmBT_Y = height * 0.56;
  
  ResetBT.size(ResetBT_WH, ResetBT_WH);
  ResetBT.position(ResetBT_X, ResetBT_Y);
  
  MinimizeBT.size(MinimizeBT_WH, MinimizeBT_WH);
  MinimizeBT.position(MinimizeBT_X, MinimizeBT_Y);
  
  ConfirmBT.size(ConfirmBT_WH, ConfirmBT_WH);
  ConfirmBT.position(ConfirmBT_X, ConfirmBT_Y);
  
  VictoryMsg_W = width * 0.4;
  VictoryMsg_H = height * 0.12;
  VictoryMsg_X = width / 2 - VictoryMsg_W / 2;
  VictoryMsg_Y = height / 2.48 - VictoryMsg_H / 2;
  
  VictoryMsg.size(VictoryMsg_W, VictoryMsg_H);
  VictoryMsg.position(VictoryMsg_X, VictoryMsg_Y);
}

function ConfirmPressed() {
	BT_Press.setVolume(0.5);
	BT_Press.play();
	
	ConfirmBT.attribute("src", "materials/images/buttons/ConfirmBT_Pressed.png");
	setTimeout(function () {
		ConfirmBT.attribute("src", "materials/images/buttons/ConfirmBT.png");
	}, 300);
	
	if (B1 == 1 && B2 == 1 && B3 == 2 && B4 == 1 && B5 == 1 && B6 == 2 && B7 == 1 && B8 == 1 && B9 == 2 && B10 == 1 && B11 == 1 && B12 == 2 && B13 == 1 && B14 == 1 && B15 ==1) {
		//Victory
		console.log('Victory');
		
		setTimeout(function () { 
			localStorage.setItem('MiniGameN2', true);
			window.location.href = "../../../index.html";
		}, 25000);
		
		setTimeout(function () { 
		  AnswerBG.hide();
		  AnswerBT.show();
		  AnswerBT.mousePressed(null);
		  PlayBT.show();
		  PlayBT.mousePressed(null);
		  ConfirmBT.hide()
		  MinimizeBT.hide();
		  ResetBT.hide();
		  BT1_1.hide();
		  BT2_1.hide();
		  BT1_2.hide();
		  BT2_2.hide();
		  BT1_3.hide();
		  BT2_3.hide();
		  BT1_4.hide();
		  BT2_4.hide();
		  BT1_5.hide();
		  BT2_5.hide();
		  BT1_6.hide();
		  BT2_6.hide();
		  BT1_7.hide();
		  BT2_7.hide();
		  BT1_8.hide();
		  BT2_8.hide();
		  BT1_9.hide();
		  BT2_9.hide();
		  BT1_10.hide();
		  BT2_10.hide();
		  BT1_11.hide();
		  BT2_11.hide();
		  BT1_12.hide();
		  BT2_12.hide();
		  BT1_13.hide();
		  BT2_13.hide();
		  BT1_14.hide();
		  BT2_14.hide();
		  BT1_15.hide();
		  BT2_15.hide();
		  
		  if (DifficultySL == "3") {
			  //Achievement Storage - Perfect Sync Achieved
			  if (MG2_2 == false) {
				  console.log("Perfect Sync Achieved");
				  localStorage.setItem('MG2_2', true);
				  showAchievement("MG2_2");
				  MG2_2 = true;
			  }
		  }
		}, 1500);
		
		//Animation Section
		setTimeout(function () { 
		  setTimeout(function () {
			Fbeat.setVolume(0.4);
		    Fbeat.play();  
			  
			T1.show();
		  }, 1500);
		  setTimeout(function () {
			T2.show();
		  }, 2250);
		  setTimeout(function () {
			T3.show();
		  }, 3000);
		  setTimeout(function () {
			T4.show();
		  }, 3750);
		  setTimeout(function () {
			T5.show();
		  }, 4500);
		  setTimeout(function () {
			T6.show();
		  }, 5250);
		  setTimeout(function () {
			T7.show();
		  }, 6000);
		  setTimeout(function () {
			T8.show();
		  }, 6750);
		  setTimeout(function () {
			T9.show();
		  }, 7500);
		  setTimeout(function () {
			T10.show();
		  }, 8250);
		  setTimeout(function () {
			T11.show();
		  }, 9000);
		  setTimeout(function () {
			T12.show();
		  }, 9750);
		  setTimeout(function () {
			T13.show();
		  }, 10500);
		  setTimeout(function () {
			T14.show();
		  }, 11250);
		  setTimeout(function () { 
			T15.show();
		  }, 12000);
		  setTimeout(function () {
			VictoryMsg.show();
		  }, 12750);
			
		}, 1500);
		
	} else {
		//Diffeat
		console.log('Diffeat');
		
		setTimeout(function () { 
			WrongSFX.play();
			
			setTimeout(function () { 
				//Achievement Storage - The Logs Spoke Back
				if (MG2_1 == false) {
					console.log("Tone Deaf");
					localStorage.setItem('MG2_1', true);
					showAchievement("MG2_1");
					MG2_1 = true;
				}
			}, 5000);
		}, 500);
	}
}

function AnswerBTPressed() {
	if (StartBarrier == false) {
	  BT_Press.setVolume(0.5);
	  BT_Press.play();
	  
	  RectVisible = true;
	  
	  AnswerBT.attribute("src", "materials/images/buttons/AnswerBT_Pressed.png");
	  setTimeout(function () {
		AnswerBT.attribute("src", "materials/images/buttons/AnswerBT.png");
	  }, 300);
	  setTimeout(function () {
		ConfirmBT.show();
		ResetBT.show();
		PlayBT.hide();
		AnswerBT.hide();
		AnswerBG.show();
		MinimizeBT.show();
		BT1_1.show();
		BT2_1.show();
		BT1_2.show();
		BT2_2.show();
		BT1_3.show();
		BT2_3.show();
		BT1_4.show();
		BT2_4.show();
		BT1_5.show();
		BT2_5.show();
		BT1_6.show();
		BT2_6.show();
		BT1_7.show();
		BT2_7.show();
		BT1_8.show();
		BT2_8.show();
		BT1_9.show();
		BT2_9.show();
		BT1_10.show();
		BT2_10.show();
		BT1_11.show();
		BT2_11.show();
		BT1_12.show();
		BT2_12.show();
		BT1_13.show();
		BT2_13.show();
		BT1_14.show();
		BT2_14.show();
		BT1_15.show();
		BT2_15.show();
	  }, 600);
	}
}

function MinimizePressed() {
	BT_Press.setVolume(0.5);
	BT_Press.play();
	
	MinimizeBT.attribute("src", "materials/images/buttons/MinimizeBT_Pressed.png");
    setTimeout(function () {
	   MinimizeBT.attribute("src", "materials/images/buttons/MinimizeBT.png");
    }, 300);
	
	setTimeout(function () {
	  PlayBT.show();
	  ResetBT.hide();
	  AnswerBG.hide();
	  AnswerBT.show();
	  ConfirmBT.hide();
	  MinimizeBT.hide();
      BT1_1.hide();
	  BT2_1.hide();
	  BT1_2.hide();
	  BT2_2.hide();
	  BT1_3.hide();
	  BT2_3.hide();
	  BT1_4.hide();
	  BT2_4.hide();
	  BT1_5.hide();
	  BT2_5.hide();
	  BT1_6.hide();
	  BT2_6.hide();
	  BT1_7.hide();
	  BT2_7.hide();
	  BT1_8.hide();
	  BT2_8.hide();
	  BT1_9.hide();
	  BT2_9.hide();
	  BT1_10.hide();
	  BT2_10.hide();
	  BT1_11.hide();
	  BT2_11.hide();
	  BT1_12.hide();
	  BT2_12.hide();
	  BT1_13.hide();
	  BT2_13.hide();
	  BT1_14.hide();
	  BT2_14.hide();
	  BT1_15.hide();
	  BT2_15.hide();
	}, 600);
}

function ResetPressed(){
	BT_Press.setVolume(0.5);
	BT_Press.play();
	
	ResetBT.attribute("src", "materials/images/buttons/ResetBT_Pressed.png");
	setTimeout(function () {
		ResetBT.attribute("src", "materials/images/buttons/ResetBT.png");
	}, 300);
	
	setTimeout(function () {
		BT1_1.attribute("src", "materials/images/buttons/GBT0.png");
		BT2_1.attribute("src", "materials/images/buttons/GBT0.png");
		B1 = 0;
		BT1_2.attribute("src", "materials/images/buttons/GBT0.png");
		BT2_2.attribute("src", "materials/images/buttons/GBT0.png");
		B2 = 0;
		BT1_3.attribute("src", "materials/images/buttons/GBT0.png");
		BT2_3.attribute("src", "materials/images/buttons/GBT0.png");
		B3 = 0;
		BT1_4.attribute("src", "materials/images/buttons/GBT0.png");
		BT2_4.attribute("src", "materials/images/buttons/GBT0.png");
		B4 = 0;
		BT1_5.attribute("src", "materials/images/buttons/GBT0.png");
		BT2_5.attribute("src", "materials/images/buttons/GBT0.png");
		B5 = 0;
		BT1_6.attribute("src", "materials/images/buttons/GBT0.png");
		BT2_6.attribute("src", "materials/images/buttons/GBT0.png");
		B6 = 0;
		BT1_7.attribute("src", "materials/images/buttons/GBT0.png");
		BT2_7.attribute("src", "materials/images/buttons/GBT0.png");
		B7 = 0;
		BT1_8.attribute("src", "materials/images/buttons/GBT0.png");
		BT2_8.attribute("src", "materials/images/buttons/GBT0.png");
		B8 = 0;
		BT1_9.attribute("src", "materials/images/buttons/GBT0.png");
		BT2_9.attribute("src", "materials/images/buttons/GBT0.png");
		B9 = 0;
		BT1_10.attribute("src", "materials/images/buttons/GBT0.png");
		BT2_10.attribute("src", "materials/images/buttons/GBT0.png");
		B10 = 0;
		BT1_11.attribute("src", "materials/images/buttons/GBT0.png");
		BT2_11.attribute("src", "materials/images/buttons/GBT0.png");
		B11 = 0;
		BT1_12.attribute("src", "materials/images/buttons/GBT0.png");
		BT2_12.attribute("src", "materials/images/buttons/GBT0.png");
		B12 = 0;
		BT1_13.attribute("src", "materials/images/buttons/GBT0.png");
		BT2_13.attribute("src", "materials/images/buttons/GBT0.png");
		B13 = 0;
		BT1_14.attribute("src", "materials/images/buttons/GBT0.png");
		BT2_14.attribute("src", "materials/images/buttons/GBT0.png");
		B14 = 0;
		BT1_15.attribute("src", "materials/images/buttons/GBT0.png");
		BT2_15.attribute("src", "materials/images/buttons/GBT0.png");
		B15 = 0;
	}, 500);
}

function BT1_1Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT2_1.attribute("src", "materials/images/buttons/GBT0.png");
	BT1_1.attribute("src", "materials/images/buttons/BTC.png");
	B1 = 1;
}
	
function BT2_1Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT1_1.attribute("src", "materials/images/buttons/GBT0.png");
	BT2_1.attribute("src", "materials/images/buttons/BTC.png");
	B1 = 2;
}	

function BT1_2Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT2_2.attribute("src", "materials/images/buttons/GBT0.png");
	BT1_2.attribute("src", "materials/images/buttons/BTC.png");
	B2 = 1;
}
	
function BT2_2Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT1_2.attribute("src", "materials/images/buttons/GBT0.png");
	BT2_2.attribute("src", "materials/images/buttons/BTC.png");
	B2 = 2;
}

function BT1_3Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT2_3.attribute("src", "materials/images/buttons/GBT0.png");
	BT1_3.attribute("src", "materials/images/buttons/BTC.png");
	B3 = 1;
}
	
function BT2_3Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT1_3.attribute("src", "materials/images/buttons/GBT0.png");
	BT2_3.attribute("src", "materials/images/buttons/BTC.png");
	B3 = 2;
}		

function BT1_4Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT2_4.attribute("src", "materials/images/buttons/GBT0.png");
	BT1_4.attribute("src", "materials/images/buttons/BTC.png");
	B4 = 1;
}
	
function BT2_4Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT1_4.attribute("src", "materials/images/buttons/GBT0.png");
	BT2_4.attribute("src", "materials/images/buttons/BTC.png");
	B4 = 2;
}		

function BT1_5Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT2_5.attribute("src", "materials/images/buttons/GBT0.png");
	BT1_5.attribute("src", "materials/images/buttons/BTC.png");
	B5 = 1;
}
	
function BT2_5Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT1_5.attribute("src", "materials/images/buttons/GBT0.png");
	BT2_5.attribute("src", "materials/images/buttons/BTC.png");
	B5 = 2;
}	

function BT1_6Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT2_6.attribute("src", "materials/images/buttons/GBT0.png");
	BT1_6.attribute("src", "materials/images/buttons/BTC.png");
	B6 = 1;
}
	
function BT2_6Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT1_6.attribute("src", "materials/images/buttons/GBT0.png");
	BT2_6.attribute("src", "materials/images/buttons/BTC.png");
	B6 = 2;
}	

function BT1_7Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT2_7.attribute("src", "materials/images/buttons/GBT0.png");
	BT1_7.attribute("src", "materials/images/buttons/BTC.png");
	B7 = 1;
}
	
function BT2_7Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT1_7.attribute("src", "materials/images/buttons/GBT0.png");
	BT2_7.attribute("src", "materials/images/buttons/BTC.png");
	B7 = 2;
}	

function BT1_8Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT2_8.attribute("src", "materials/images/buttons/GBT0.png");
	BT1_8.attribute("src", "materials/images/buttons/BTC.png");
	B8 = 1;
}
	
function BT2_8Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT1_8.attribute("src", "materials/images/buttons/GBT0.png");
	BT2_8.attribute("src", "materials/images/buttons/BTC.png");
	B8 = 2;
}	

function BT1_9Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT2_9.attribute("src", "materials/images/buttons/GBT0.png");
	BT1_9.attribute("src", "materials/images/buttons/BTC.png");
	B9 = 1;
}
	
function BT2_9Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT1_9.attribute("src", "materials/images/buttons/GBT0.png");
	BT2_9.attribute("src", "materials/images/buttons/BTC.png");
	B9 = 2;
}	

function BT1_10Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT2_10.attribute("src", "materials/images/buttons/GBT0.png");
	BT1_10.attribute("src", "materials/images/buttons/BTC.png");
	B10 = 1;
}
	
function BT2_10Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT1_10.attribute("src", "materials/images/buttons/GBT0.png");
	BT2_10.attribute("src", "materials/images/buttons/BTC.png");
	B10 = 2;
}

function BT1_11Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT2_11.attribute("src", "materials/images/buttons/GBT0.png");
	BT1_11.attribute("src", "materials/images/buttons/BTC.png");
	B11 = 1;
}
	
function BT2_11Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT1_11.attribute("src", "materials/images/buttons/GBT0.png");
	BT2_11.attribute("src", "materials/images/buttons/BTC.png");
	B11 = 2;
}		

function BT1_12Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT2_12.attribute("src", "materials/images/buttons/GBT0.png");
	BT1_12.attribute("src", "materials/images/buttons/BTC.png");
	B12 = 1;
}
	
function BT2_12Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT1_12.attribute("src", "materials/images/buttons/GBT0.png");
	BT2_12.attribute("src", "materials/images/buttons/BTC.png");
	B12 = 2;
}	

function BT1_13Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT2_13.attribute("src", "materials/images/buttons/GBT0.png");
	BT1_13.attribute("src", "materials/images/buttons/BTC.png");
	B13 = 1;
}
	
function BT2_13Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT1_13.attribute("src", "materials/images/buttons/GBT0.png");
	BT2_13.attribute("src", "materials/images/buttons/BTC.png");
	B13 = 2;
}	

function BT1_14Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT2_14.attribute("src", "materials/images/buttons/GBT0.png");
	BT1_14.attribute("src", "materials/images/buttons/BTC.png");
	B14 = 1;
}
	
function BT2_14Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT1_14.attribute("src", "materials/images/buttons/GBT0.png");
	BT2_14.attribute("src", "materials/images/buttons/BTC.png");
	B14 = 2;
}	
						
function BT1_15Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT2_15.attribute("src", "materials/images/buttons/GBT0.png");
	BT1_15.attribute("src", "materials/images/buttons/BTC.png");
	B15 = 1;
}
	
function BT2_15Pressed(){
	BoxChecked.setVolume(0.9);
	BoxChecked.play();
	BT1_15.attribute("src", "materials/images/buttons/GBT0.png");
	BT2_15.attribute("src", "materials/images/buttons/BTC.png");
	B15 = 2;
}						

function PlayBTPressed() {
	if (StartBarrier == false) {
	  PlayPressed.setVolume(0.9);
	  PlayPressed.play();
	  
	  backgroundMS.setVolume(0.05);
	  
	  MusicCounter = MusicCounter + 1;

	  PlayBT.attribute("src", "materials/images/buttons/PlayBT_Pressed.png");
	  setTimeout(function () {
		PlayBT.attribute("src", "materials/images/buttons/PlayBT.png");
	  }, 500);
	  
	  //Animation Section
	  setTimeout(function () {
		BitMS.setVolume(0.4);
		BitMS.play();
	  }, 1500);
	  
	  setTimeout(function () {
		T1.show();
	  }, 1500);
	  setTimeout(function () {
		T1.hide();
		T2.show();
	  }, 2250);
	  setTimeout(function () {
		T2.hide();
		T3.show();
	  }, 3000);
	  setTimeout(function () {
		T3.hide();
		T4.show();
	  }, 3750);
	  setTimeout(function () {
		T4.hide();
		T5.show();
	  }, 4500);
	  setTimeout(function () {
		T5.hide();
		T6.show();
	  }, 5250);
	  setTimeout(function () {
		T6.hide();
		T7.show();
	  }, 6000);
	  setTimeout(function () {
		T7.hide();
		T8.show();
	  }, 6750);
	  setTimeout(function () {
		T8.hide();
		T9.show();
	  }, 7500);
	  setTimeout(function () {
		T9.hide();
		T10.show();
	  }, 8250);
	  setTimeout(function () {
		T10.hide();
		T11.show();
	  }, 9000);
	  setTimeout(function () {
		T11.hide();
		T12.show();
	  }, 9750);
	  setTimeout(function () {
		T12.hide();
		T13.show();
	  }, 10500);
	  setTimeout(function () {
		T13.hide();
		T14.show();
	  }, 11250);
	  setTimeout(function () {
		T14.hide();
		T15.show();
	  }, 12000);
	  setTimeout(function () {
		T15.hide();
		
	  }, 12750);
	  setTimeout(function () {
		backgroundMS.setVolume(0.4);  
		CheckMusicSpam();
	  }, 13750);
	}
}

function CheckMusicSpam() {
	if (MusicCounter >= 5) {
		//Achievement Storage - The DJ is Concerned
		if (MG2_3 == false) {
			console.log("The DJ is Concerned");
			localStorage.setItem('MG2_3', true);
			showAchievement("MG2_3");
			MG2_3 = true;
		}
	}
}

const characterDialogues = [
  "Ah… much better. Everything is back in order. No more unexpected surprises this time. Isn’t that wonderful?",
  "Now, onto something a little more elegant. This next puzzle is not about what is wrong no, no. This is about differences. A test of your ears, your perception, your ability to notice the subtle shifts where others might hear only repetition.",
  "You will each hear two versions of a musical piece, one for the Left and one for the Right. They are not incorrect just different. Your task? Discern where the variations lie.",
  "Once you detect a difference in a line, check the corresponding box in the game list Left or Right. There are fifteen lines to evaluate. No guesswork, no hesitation. Just listen, analyze, and mark your choice.",
  "And for those of you who prefer visual confirmation, how thoughtful of me to provide a little extra guidance. Look at the stars in the background they will glow Left or Right in sync with the differences in the melody. A… gentle nudge in the right direction."
];

let currentDialogueIndex = 0; // Track which dialogue to show
let currentText = ""; // The currently displayed text (animated)
let targetText = ""; // The full text for the current dialogue
let textIndex = 0; // Tracks the current character being displayed in the animation
let textAnimationInterval; // Holds the interval ID for text animation
let currentImageElement = null; // Track the currently visible image
let currentDialogueArray = characterDialogues;

// Function to play a random typing sound
function playRandomTypingSound() {
  const randomIndex = Math.floor(Math.random() * typingSounds.length);
  const sound = typingSounds[randomIndex];
  if (sound) {
    sound.setVolume(0.3); // Adjust volume as needed
    sound.play();
  }
}

// Create a function to show the character image and dialogue
function showCharacterDialogue() {
  // Create a container for the dialogue (if not already present)
  let dialogueContainer = document.getElementById("dialogue-container");
  if (!dialogueContainer) {
    dialogueContainer = document.createElement("div");
    dialogueContainer.id = "dialogue-container";
    dialogueContainer.style.position = "fixed";
    dialogueContainer.style.bottom = "20px";
    dialogueContainer.style.left = "50%";
    dialogueContainer.style.transform = "translateX(-50%)"; // Center horizontally
    dialogueContainer.style.display = "flex";
    dialogueContainer.style.flexDirection = "column"; // Stack character image and text box
    dialogueContainer.style.alignItems = "center"; // Center elements horizontally
    dialogueContainer.style.gap = "10px"; // Space between image and text box
    dialogueContainer.style.zIndex = "1000";
    document.body.appendChild(dialogueContainer);
  }

  // Create or update the character image
  let characterImage = document.getElementById("character-image");
  if (!characterImage) {
    characterImage = document.createElement("img");
    characterImage.id = "character-image";
    characterImage.src = "materials/images/TitBit/TitBitV1.png";
	characterImage.style.backgroundColor = "rgba(100, 100, 100, 0.2)"; // Semi-transparent box
    characterImage.style.position = "fixed";
    characterImage.style.top = "20px";
    characterImage.style.right = "20px";
    characterImage.style.width = "150px";
    characterImage.style.height = "auto";
    characterImage.style.borderRadius = "10px";
    characterImage.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    document.body.appendChild(characterImage);
  }

  // Create or update the dialogue rectangle
  let dialogueTextContainer = document.getElementById("dialogue-text-container");
  if (!dialogueTextContainer) {
    dialogueTextContainer = document.createElement("div");
    dialogueTextContainer.id = "dialogue-text-container";
    dialogueTextContainer.style.backgroundColor = "rgba(255, 255, 255, 0.8)"; // White with 80% opacity
    dialogueTextContainer.style.color = "#000000"; // Black text
    dialogueTextContainer.style.padding = "15px";
    dialogueTextContainer.style.borderRadius = "10px";
    dialogueTextContainer.style.width = "300px"; // Adjust width as needed
    dialogueTextContainer.style.fontFamily = "Arial, sans-serif";
    dialogueTextContainer.style.fontSize = "16px";
    dialogueTextContainer.style.lineHeight = "1.5";
    dialogueTextContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    dialogueTextContainer.style.textAlign = "center"; // Center text
    dialogueContainer.appendChild(dialogueTextContainer);
  }

  // Set the target text for the animation
  targetText = characterDialogues[currentDialogueIndex];
  currentText = ""; // Reset current text
  textIndex = 0; // Reset text index

  // Hide the currently visible image, if any
  if (currentImageElement) {
    currentImageElement.hide();
    currentImageElement = null;
  }

  // Determine which image to show and perform actions based on the current dialogue index
  switch (currentDialogueIndex) {
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    case 5:

      break;
    case 6:

      break;
    case 7:

      break;
    default:
      // No image for other dialogues
      currentImageElement = null;
  }

  // Start animating the text
  textAnimationInterval = setInterval(() => {
    if (textIndex < targetText.length) {
      const currentChar = targetText[textIndex];
      currentText += currentChar;
      dialogueTextContainer.innerText = currentText;

      // Play sound only for letters
      if (/[a-zA-Z]/.test(currentChar)) {
        playRandomTypingSound();
      }

      textIndex++;
    } else {
      clearInterval(textAnimationInterval);
    }
  }, 50); // Adjust speed of text animation

  // Move to the next dialogue for subsequent calls
  currentDialogueIndex++;
}

// Advance dialogue on click
function advanceDialogue() {
	console.log('advanced dialogue');
  if (textIndex === targetText.length) {
    if (currentDialogueIndex < characterDialogues.length) {
      showCharacterDialogue();
    } else {
      let dialogueContainer = document.getElementById("dialogue-container");
      if (dialogueContainer) {
        dialogueContainer.style.display = "none";
        StartBarrier = false;
		
	    // Hide the character image at the end of the tutorial
        let characterImage = document.getElementById("character-image");
        if (characterImage) {
          characterImage.style.display = "none"; // Hides the character image
        }
		
		console.log('Totorial Completed!');
		localStorage.setItem('TotorialComplete_MiniGame2', true);
      }
      window.removeEventListener("click", advanceDialogue);
    }
  }
}

function animateCharacter1() {
  const characterImage = document.getElementById("character-image");

  // Initial starting position (top-right corner)
  characterImage.style.position = "fixed";
  characterImage.style.top = "20px";
  characterImage.style.right = "20px";

  // Add transition for smooth movement
  characterImage.style.transition = "all 1s ease"; // Adjust duration as needed

  // Step 1: Move character out of the canvas to the right
  setTimeout(() => {
    characterImage.style.right = "-150px"; // Move fully out of canvas (width + padding)
  }, 0);

  // Step 2: Change to the bottom-right outside the canvas
  setTimeout(() => {
    characterImage.style.transition = "none"; // Disable transition for instant position change
    characterImage.style.top = ""; // Reset top property
    characterImage.style.right = "-150px"; // Stay outside canvas on the right
    characterImage.style.bottom = "130px"; // Move to bottom-right outside the canvas
  }, 1000); // Match the duration of Step 1

  // Step 3: Re-enter the canvas from the right side
  setTimeout(() => {
    characterImage.style.transition = "all 1s ease"; // Re-enable transition
    characterImage.style.right = "20px"; // Move into the canvas from the right
  }, 1100); // Slight delay after Step 2 for smooth animation
}

function animateCharacter2() {
  const characterImage = document.getElementById("character-image");

  // Initial position (bottom-right corner)
  characterImage.style.position = "fixed";
  characterImage.style.bottom = "130px";
  characterImage.style.right = "20px";

  // Add transition for smooth movement
  characterImage.style.transition = "all 1s ease"; // Adjust duration as needed

  // Step 1: Move character out of the canvas to the right
  setTimeout(() => {
    characterImage.style.right = "-150px"; // Move fully out of canvas (width + padding)
  }, 0);

  // Step 2: Change to the top-right outside the canvas
  setTimeout(() => {
    characterImage.style.transition = "none"; // Disable transition for instant position change
    characterImage.style.bottom = ""; // Reset bottom property
    characterImage.style.right = "-150px"; // Stay outside canvas on the right
    characterImage.style.top = "20px"; // Move to top-right outside the canvas
  }, 1000); // Match the duration of Step 1

  // Step 3: Re-enter the canvas from the right side
  setTimeout(() => {
    characterImage.style.transition = "all 1s ease"; // Re-enable transition
    characterImage.style.right = "20px"; // Move into the canvas from the right
  }, 1100); // Slight delay after Step 2 for smooth animation
}


let fullscreenActivated = false;

function mousePressed() {		
  if (Totorial && TotorialComplete == false) {
    Totorial = false;
    showCharacterDialogue();
    window.addEventListener("click", advanceDialogue);
  } else if (TotorialComplete == "true") {
	StartBarrier = false;  
  }
  if (StartBarrier) {
    //backgroundMusic.loop();
  }
  if (!fullscreenActivated && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
    fullscreenActivated = true; // Mark as activated
  }
}

function showAchievement(achievementCode) {
  // Ensure only one achievement is shown at a time
  let existingAchievement = document.getElementById("achievement-popup");
  if (existingAchievement) {
    existingAchievement.remove();
  }
  
  AC_SFX.setVolume(0.9);
  AC_SFX.play();
  
  // Create the achievement container
  let achievementContainer = document.createElement("div");
  achievementContainer.id = "achievement-popup";
  achievementContainer.style.position = "fixed";
  achievementContainer.style.top = `${window.innerHeight * 0.85}px`;
  achievementContainer.style.left = `${window.innerWidth * 0.95}px`;
  achievementContainer.style.width = "300px"; // Adjusted for wider images
  achievementContainer.style.height = "100px"; // Adjusted for banner format
  achievementContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  achievementContainer.style.borderRadius = "10px";
  achievementContainer.style.display = "flex";
  achievementContainer.style.justifyContent = "center";
  achievementContainer.style.alignItems = "center";
  achievementContainer.style.zIndex = "10000";
  achievementContainer.style.transition = "left 1s ease-in-out";

  // Create the achievement image
  let achievementImage = document.createElement("img");
  achievementImage.src = `materials/images/achievements/${achievementCode}.png`;
  achievementImage.style.width = "100%";
  achievementImage.style.height = "100%";
  //achievementImage.style.borderRadius = "10px";

  // Append elements
  achievementContainer.appendChild(achievementImage);
  document.body.appendChild(achievementContainer);

  // Animate the achievement popup
  setTimeout(() => {
    achievementContainer.style.left = `${window.innerWidth * 0.28}px`;
  }, 100);

  // Remove the achievement popup after 10 seconds
  setTimeout(() => {
    achievementContainer.remove();
  }, 10000);
}

function keyPressed() {
  // Check for the "`" key
  if (key === '`') {
    console.log("Backtick key pressed!");

    // Ask the user for a code
    const userCode = prompt("Enter a code:");

    // Check the entered code and redirect the user
    if (userCode === "SkipT") {
      console.log("Code SkipT entered.");
      localStorage.setItem('TotorialComplete_MiniGame2', true);
	  location.reload();
    } else if (userCode === "ResetT") {
      console.log("Code ResetT entered.");
      localStorage.removeItem('TotorialComplete_MiniGame2');
	  location.reload();
    } else if (userCode === "ClearAll") {
      console.log("Code ClearAll entered.");
      localStorage.clear();
	  location.reload();
    } else {
      console.log("Invalid code.");
    }
  }
}