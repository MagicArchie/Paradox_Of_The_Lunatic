//New Section 1
//Code for Role Selection
let roleSelected = 0; // 0 = No Roll Selected, 1 = Pathfinder Role, 2 = PuzzleMaster Role

let buttonDiameterPathfinder = 250;
let buttonDiameterPUzzleMaster = 250;

let buttonX1;
let buttonY1;
let buttonX2;
let buttonY2;

//Code for Difficulty Selection
let difficultySelected = 0; // 0 = No Difficulty Selected, 1 = Easy Difficulty, 2 = Medium Difficulty, 3 = Hard Difficulty

let buttonDiameterDifficulty = 140;

let buttonX3;
let buttonY3;
let buttonX4;
let buttonY4;
let buttonX5;
let buttonY5;

//Code for Play Button
let buttonDiameterPlayW = 300;
let buttonDiameterPlayH = 100;

let buttonX6;
let buttonY6;

let OneUse = 0;
let showMessage = false;
let message = "";

let boxWidth;
let boxHeight;

function preload() {
  backgroundImage1 = loadImage('materials/images/Background5.png'); 
  backgroundImage2 = loadImage('materials/images/Background6.png');
  
  //New Section 2
  //Code for Role Selection
  //Load Button Images
  PathfinderIMG = loadImage('materials/images/buttons/Pathfinder BT1.png'); 
  PuzzleMasterIMG = loadImage('materials/images/buttons/PuzzleMaster BT1.png');
  
  PathfinderIMG_Press = loadImage('materials/images/buttons/Pathfinder BT2.png'); 
  PuzzleMasterIMG_Press = loadImage('materials/images/buttons/PuzzleMaster BT2.png');
  
  PathfinderIMG_Active = loadImage('materials/images/buttons/Pathfinder BT3.png'); 
  PuzzleMasterIMG_Active = loadImage('materials/images/buttons/PuzzleMaster BT3.png');
  
  //Load Button Sound
  RoleButtonPress = loadSound('materials/sounds/RoleBT.wav');
  
  //Code for Difficulty Selection
  //Load Button Images
  CrazyIMG = loadImage('materials/images/buttons/BT Crazy.png'); 
  InsaneIMG = loadImage('materials/images/buttons/BT Insane.png'); 
  LunaticIMG = loadImage('materials/images/buttons/BT Lunatic.png'); 
  
  CrazyIMG_Press = loadImage('materials/images/buttons/Press Crazy.png'); 
  InsaneIMG_Press = loadImage('materials/images/buttons/Press Insane.png'); 
  LunaticIMG_Press = loadImage('materials/images/buttons/Press Lunatic.png'); 
  
  CrazyIMG_Active = loadImage('materials/images/buttons/Pressed Crazy.png'); 
  InsaneIMG_Active = loadImage('materials/images/buttons/Pressed Insane.png'); 
  LunaticIMG_Active = loadImage('materials/images/buttons/Pressed Lunatic.png'); 
  
  //Difficulty Button Sound
  DifficultyButtonPress = loadSound('materials/sounds/ButtonPress.wav');
  
  //Code for Play Button
  //Load Button Image
  PlayIMG = loadImage('materials/images/buttons/Not Active Play.png'); 
  PlayIMG_Press = loadImage('materials/images/buttons/Active Play.png'); 
  PlayIMG_Active = loadImage('materials/images/buttons/Press Play.png'); 
  PlayIMG_ActivePress = loadImage('materials/images/buttons/Pressed Play.png'); 
  PlayIMG_NotActivePress = loadImage('materials/images/buttons/Press Not Active.png'); 
  
  //Play Button Sound
  PlayButtonPress = loadSound('materials/sounds/PlayBT2.wav');
  PlayButtonError = loadSound('materials/sounds/PlayBT1.wav');
  
  //Background Music
  backgroundMS = loadSound('materials/sounds/horrorBGM.mp3');
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

  //New Section 3
  //Code for Role Selection
  //Create Roll Buttons
  //Pathfinder Button
  if (!windowResized){
    buttonX1 = width / 2 - buttonDiameterPathfinder / 2 - 150;
    buttonY1 = height / 2 - buttonDiameterPathfinder / 2;

    buttonX2 = width / 2 - buttonDiameterPUzzleMaster / 2 + 150;
    buttonY2 = height / 2 - buttonDiameterPUzzleMaster / 2;
  }
  
  PathfinderBT = createImg('materials/images/buttons/Pathfinder BT1.png', 'Choose Pathfinder Roll');
  PathfinderBT.size(buttonDiameterPathfinder, buttonDiameterPathfinder);
  PathfinderBT.position(buttonX1, buttonY1);
  PathfinderBT.mousePressed(pathfinderSelected);
  
  //PuzzleMaster Button
  PuzzleMasterBT = createImg('materials/images/buttons/PuzzleMaster BT1.png', 'Choose PuzzleMaster Roll');
  PuzzleMasterBT.size(buttonDiameterPUzzleMaster, buttonDiameterPUzzleMaster);
  PuzzleMasterBT.position(buttonX2, buttonY2);
  PuzzleMasterBT.mousePressed(puzzlemasterSelected);
  
  
  //Code for Difficulty Selection
  //Create Difficulty Buttons
  //Crazy Button
  if (!windowResized){
    buttonX3 = width / 2 - buttonDiameterDifficulty / 2 - 175;
    buttonY3 = height / 2 - buttonDiameterDifficulty / 2 + 360;

    buttonX4 = width / 2 - buttonDiameterDifficulty / 2;
    buttonY4 = height / 2 - buttonDiameterDifficulty / 2 + 360;

    buttonX5 = width / 2 - buttonDiameterDifficulty / 2 + 175;
    buttonY5 = height / 2 - buttonDiameterDifficulty / 2 + 360;
  }
  
  CrazyBT = createImg('materials/images/buttons/BT Crazy.png', 'Choose Easy Difficulty');
  CrazyBT.size(buttonDiameterDifficulty, buttonDiameterDifficulty);
  CrazyBT.position(buttonX3, buttonY3);
  CrazyBT.mousePressed(crazySelected);
  
  //Insane Button
  InsaneBT = createImg('materials/images/buttons/BT Insane.png', 'Choose Medium Difficulty');
  InsaneBT.size(buttonDiameterDifficulty, buttonDiameterDifficulty);
  InsaneBT.position(buttonX4, buttonY4);
  InsaneBT.mousePressed(insaneSelected);
  
  //Lunatic Button
  LunaticBT = createImg('materials/images/buttons/BT Lunatic.png', 'Choose Hard Difficulty');
  LunaticBT.size(buttonDiameterDifficulty, buttonDiameterDifficulty);
  LunaticBT.position(buttonX5, buttonY5);
  LunaticBT.mousePressed(lunaticSelected);
  
  //Code for Play Button
  //Create play Button
  if (!windowResized){
    buttonX6 = width / 2 - buttonDiameterPlayW / 2;
    buttonY6 = height / 2 - buttonDiameterPlayH / 2 + 470;
  }

  PlayBT = createImg('materials/images/buttons/Not Active Play.png', 'Start Game');
  PlayBT.size(buttonDiameterPlayW, buttonDiameterPlayH);
  PlayBT.position(buttonX6, buttonY6);
  PlayBT.mousePressed(playPressed);
  
  backgroundMS.loop();
  
  //idk but it works 
  windowResized();
  windowResized();
}

function draw() {
  //fullscreen(true);
  if (displayHeight < 700) {
    image(backgroundImage2, 0, 0, width, height);
  }else{
    image(backgroundImage1, 0, 0, width, height);
  }
  
  textAlign(CENTER, CENTER);
  
  //Activate Play Button
  if (difficultySelected!=0 && roleSelected!=0 && OneUse ==0){
      PlayBT.attribute('src', 'materials/images/buttons/Active Play.png');
      OneUse = 1;
  }
  
  // Display error message if needed
  if (showMessage) {
    drawMessage(message);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  if (displayHeight >= 700){
    buttonX1 = width / 2 - buttonDiameterPathfinder / 2 - width/4.1;
    buttonY1 = height / 2 - buttonDiameterPathfinder / 2 + height/18;
    buttonX2 = width / 2 - buttonDiameterPUzzleMaster / 2 + width/4.1;
    buttonY2 = height / 2 - buttonDiameterPUzzleMaster / 2 + height/18;

    buttonX3 = width / 2 - buttonDiameterDifficulty / 2 - width/3.5;
    buttonY3 = height / 2 - buttonDiameterDifficulty / 2 + height/3.75;
    buttonX4 = width / 2 - buttonDiameterDifficulty / 2;
    buttonY4 = height / 2 - buttonDiameterDifficulty / 2 + height/3.75;
    buttonX5 = width / 2 - buttonDiameterDifficulty / 2 + width/3.5;
    buttonY5 = height / 2 - buttonDiameterDifficulty / 2 + height/3.75;
  } else {
    buttonX1 = width / 2 - buttonDiameterPathfinder / 2 - width/4.1;
    buttonY1 = height / 2 - buttonDiameterPathfinder / 2 + height/18;
    buttonX2 = width / 2 - buttonDiameterPUzzleMaster / 2 + width/4.1;
    buttonY2 = height / 2 - buttonDiameterPUzzleMaster / 2 + height/18;

    buttonX3 = width / 2 - buttonDiameterDifficulty / 2 - width/3.5;
    buttonY3 = height / 2 - buttonDiameterDifficulty / 2 + height/3.4;
    buttonX4 = width / 2 - buttonDiameterDifficulty / 2;
    buttonY4 = height / 2 - buttonDiameterDifficulty / 2 + height/3.4;
    buttonX5 = width / 2 - buttonDiameterDifficulty / 2 + width/3.5;
    buttonY5 = height / 2 - buttonDiameterDifficulty / 2 + height/3.4;
  }
  
  if (displayHeight >= 700){
    buttonX6 = width / 2 - buttonDiameterPlayW / 2;
    buttonY6 = height / 2 - buttonDiameterPlayH / 2 + height/2.62;
  } else {
    buttonX6 = width / 2 - buttonDiameterPlayW / 2;
    buttonY6 = height / 2 - buttonDiameterPlayH / 2 + height/2.4;
  }
  
  if (displayHeight >= 700){
    buttonDiameterPathfinder = width/2.5;
    buttonDiameterPUzzleMaster = width/2.5;

    buttonDiameterDifficulty = width/4;
    
    buttonDiameterPlayW = width/2;
    buttonDiameterPlayH = width/6;
  } else {
    buttonDiameterPathfinder = width/2.85;
    buttonDiameterPUzzleMaster = width/2.85;

    buttonDiameterDifficulty = width/4.3;
    
    buttonDiameterPlayW = width/2.2;
    buttonDiameterPlayH = width/6.6;
  }
  

  PathfinderBT.position(buttonX1, buttonY1);
  PuzzleMasterBT.position(buttonX2, buttonY2);
  PathfinderBT.size(buttonDiameterPathfinder, buttonDiameterPathfinder);
  PuzzleMasterBT.size(buttonDiameterPUzzleMaster, buttonDiameterPUzzleMaster);
  
  CrazyBT.position(buttonX3, buttonY3);
  InsaneBT.position(buttonX4, buttonY4);
  LunaticBT.position(buttonX5, buttonY5);
  CrazyBT.size(buttonDiameterDifficulty, buttonDiameterDifficulty);
  InsaneBT.size(buttonDiameterDifficulty, buttonDiameterDifficulty);
  LunaticBT.size(buttonDiameterDifficulty, buttonDiameterDifficulty);
  
  PlayBT.position(buttonX6, buttonY6);
  PlayBT.size(buttonDiameterPlayW, buttonDiameterPlayH);
}

//New Section 4
//Code for Role Selection
//Create Functions for Roll Selection
function pathfinderSelected() {
  PuzzleMasterBT.attribute('src', 'materials/images/buttons/PuzzleMaster BT1.png');
  PathfinderBT.attribute('src', 'materials/images/buttons/Pathfinder BT2.png');
  RoleButtonPress.setVolume(0.5);
  RoleButtonPress.play();
  
  setTimeout(function () {
    PathfinderBT.attribute('src', 'materials/images/buttons/Pathfinder BT3.png');
  }, 700);
  roleSelected = 1;
  
  console.log(`Pathfinder Button clicked! Role selected: ${roleSelected}`);
}

function puzzlemasterSelected() {
  PathfinderBT.attribute('src', 'materials/images/buttons/Pathfinder BT1.png');
  PuzzleMasterBT.attribute('src', 'materials/images/buttons/PuzzleMaster BT2.png');
  RoleButtonPress.setVolume(0.5);
  RoleButtonPress.play();
  
  setTimeout(function () {
    PuzzleMasterBT.attribute('src', 'materials/images/buttons/PuzzleMaster BT3.png');
  }, 700);
  roleSelected = 2;
  
  console.log(`PuzzleMaster Button clicked! Role selected: ${roleSelected}`);
}

//Code for Difficulty Selection
//Create Functions for Difficulty Selection
function crazySelected() {
  InsaneBT.attribute('src', 'materials/images/buttons/BT Insane.png');
  LunaticBT.attribute('src', 'materials/images/buttons/BT Lunatic.png');
  CrazyBT.attribute('src', 'materials/images/buttons/Press Crazy.png');
  DifficultyButtonPress.setVolume(0.5);
  DifficultyButtonPress.play();
  
  setTimeout(function () {
    CrazyBT.attribute('src', 'materials/images/buttons/Pressed Crazy.png');
  }, 400);
  difficultySelected = 1;
  
  console.log(`Crazy Button clicked! Difficulty selected: ${roleSelected}`);
}

function insaneSelected() {
  CrazyBT.attribute('src', 'materials/images/buttons/BT Crazy.png');
  LunaticBT.attribute('src', 'materials/images/buttons/BT Lunatic.png');
  InsaneBT.attribute('src', 'materials/images/buttons/Press Insane.png');
  DifficultyButtonPress.setVolume(0.5);
  DifficultyButtonPress.play();
  
  setTimeout(function () {
    InsaneBT.attribute('src', 'materials/images/buttons/Pressed Insane.png');
  }, 400);
  difficultySelected = 2;
  
  console.log(`Insane Button clicked! Difficulty selected: ${roleSelected}`);
}

function lunaticSelected() {
  CrazyBT.attribute('src', 'materials/images/buttons/BT Crazy.png');
  InsaneBT.attribute('src', 'materials/images/buttons/BT Insane.png');
  LunaticBT.attribute('src', 'materials/images/buttons/Press Lunatic.png');
  DifficultyButtonPress.setVolume(0.5);
  DifficultyButtonPress.play();
  
  setTimeout(function () {
    LunaticBT.attribute('src', 'materials/images/buttons/Pressed Lunatic.png');
  }, 400);
  difficultySelected = 3;
  
  console.log(`Lunatic Button clicked! Difficulty selected: ${roleSelected}`);
}

//Code for Play Button
//Create Functions for Game Start
function playPressed(){
  showMessage = false; // Reset the message flag
  message = ""; // Clear previous message
  
  if (roleSelected==0 || difficultySelected==0){
    
    PlayBT.attribute('src', 'materials/images/buttons/Press Not Active.png');
    setTimeout(function () {
      PlayBT.attribute('src', 'materials/images/buttons/Not Active Play.png');
    }, 350);
    
    if (roleSelected==0){
      //No Role Selected
      PlayButtonError.setVolume(0.5);
      PlayButtonError.play();
      
      message += "Please select a role.\n";
    }
    if (difficultySelected==0){
      //No Difficulty Selected
      PlayButtonError.setVolume(0.5);
      PlayButtonError.play();
      
      message += "Please select a difficulty.";
    }
    
    // Trigger message display
    showMessage = true;
    return; // Stop further execution
    
  }else{
    //Start Game
    PlayBT.attribute('src', 'materials/images/buttons/Press Play.png');
    PlayButtonPress.setVolume(0.5);
    PlayButtonPress.play();
    
    if (difficultySelected==1){
      DifficultySL = 1;
      localStorage.setItem('DifficultySL', DifficultySL); //Set Coocie for Crazy Difficulty
    } else if (difficultySelected==2){
      DifficultySL = 2;
      localStorage.setItem('DifficultySL', DifficultySL); //Set Coocie for Insane Difficulty
    } else if (difficultySelected==3){
      DifficultySL = 3;
      localStorage.setItem('DifficultySL', DifficultySL); //Set Coocie for Lunatic Difficulty
    }
    
    setTimeout(function () {
      PlayBT.attribute('src', 'materials/images/buttons/Pressed Play.png');
    }, 200);
    if (roleSelected==1){
      setTimeout(function () {
        window.location.href = "PathFinderPage/index.html"; //Sent to Pathfinder Page
      }, 700); 
    }else if (roleSelected==2){
      setTimeout(function () {
        window.location.href = "PuzzleMasterPage/index.html"; //Sent to PuzzleMaster Page
      }, 700);
    }
    
  }
}

// Function to draw the error message
function drawMessage(msg) {
  fill(0, 0, 0, 200);
  
  if (displayHeight >= 700){
    boxWidth = width/2.1;
    boxHeight = height/14;
    rect(width / 2 - boxWidth / 2, height / 2.68 - boxHeight / 2, boxWidth, boxHeight, 20);
    textSize(width/28);
  } else {
    boxWidth = width/2.5;
    boxHeight = height/15;
    rect(width / 2 - boxWidth / 2, height / 2.75 - boxHeight / 2, boxWidth, boxHeight, 20);
    textSize(width/34);
  }
  
  textStyle(BOLD)
  fill(190);
  
  if (displayHeight >= 700){
    text(msg, width / 2, height / 2.7);
  } else {
    text(msg, width / 2, height / 2.75);
  }
  
  setTimeout(function () {
    showMessage = false;
  }, 3500);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}