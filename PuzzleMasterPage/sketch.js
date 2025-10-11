// Retrieve the stored DifficultySL value from localStorage
const DifficultySL = localStorage.getItem('DifficultySL');

const USB_Choice1 = localStorage.getItem('Choice1');
const USB_Choice2 = localStorage.getItem('Choice2');

// Retrieve the stored DifficultySL value from localStorage
const TotorialComplete_C  = localStorage.getItem('TotorialComplete_PuzzleMaster');
let TotorialComplete = false;

const Choice1 = localStorage.getItem('Choice1');
const Choice2 = localStorage.getItem('Choice2');

let backgroundImage1, backgroundImage2;

let StartBarrier = true;
let Totorial = true;

let MiniGameN1 = false, MiniGameN2 = false, MiniGameN3 = false, MiniGameN4 = false, MiniGameN5 = false, MiniGameN6 = false;
let UseN1 = false, UseN11 = false, UseN2 = false, UseN22 = false, UseN3 = false, UseN33 = false, UseN4 = false, UseN44 = false, UseN5 = false, UseN55 = false, UseN6 = false, UseN66 = false;
let MLP1_Act = false, MLP2_Act = false, MLP3_Act = false, MLP4_Act = false, MLP5_Act = false, MLP6_Act = false;
let OneUse = false, OneUse2 = false, OneUse3 = false;

let Arrow_X1, Arrow_X2, Arrow_X3;
let Arrow_Y1, Arrow_Y2, Arrow_Y3, Arrow_Y4, Arrow_Y5;
let Arrow_W;
let Arrow_H;

let typingSounds = [];

// Array to store the initial codes and their replacements
let codes2 = ["????", "????", "????", "????", "????", "????"];
let replacementCodes1 = ["2468", "1X5X", "X0X5", "XXXX", "4321", "1984"];
let replacementCodes2 = ["2468", "1357", "2025", "1999", "4321", "1984"];

// Variable to track if the inventory is currently visible
let inventoryVisible = false;

let backgroundMusic;

let MenuBTs_WH; 

let AngerBar = 0;
let Reaction1 = false;
let Reaction2 = false;

// Track button press timestamps
let buttonPresses = {
  MenuBar1: [],
  MenuBar2: [],
  ScanBT: [],
  InventoryBT: [],
  HelpBT: [],
  AchievementBT: []
};

// Maximum presses allowed before increasing AngerBar
const maxPresses = 5; 
const timeWindow = 10000; // 10 seconds in milliseconds
const maxAngerBar = 100;  // Maximum limit for AngerBar
let blackoutMessagesShown = false; // Track if blackout messages were shown
let blackoutDuration = 10000; // Start at 10 seconds (10,000 milliseconds)

// Achivements 🥇

// Retrieve the stored Achivements values from localStorage
//Puzzle Master - Interface:
const AC_PMA1 = localStorage.getItem('PMA1');
const AC_PMA2 = localStorage.getItem('PMA2');
const AC_PMA3 = localStorage.getItem('PMA3');
const AC_PMA4 = localStorage.getItem('PMA4');
const AC_PMA5 = localStorage.getItem('PMA5');
const AC_PMA6 = localStorage.getItem('PMA6');

//MiniGames 🕹
//MiniGame-1:
const AC_MG1_1 = localStorage.getItem('MG1_1');
const AC_MG1_2 = localStorage.getItem('MG1_2');
const AC_MG1_3 = localStorage.getItem('MG1_3');
const AC_MG1_4 = localStorage.getItem('MG1_4');

//MiniGame-2:
const AC_MG2_1 = localStorage.getItem('MG2_1');
const AC_MG2_2 = localStorage.getItem('MG2_2');
const AC_MG2_3 = localStorage.getItem('MG2_3');

//MiniGame-3:
const AC_MG3_1 = localStorage.getItem('MG3_1');
const AC_MG3_2 = localStorage.getItem('MG3_2');
const AC_MG3_3 = localStorage.getItem('MG3_3');

//Ending-1:
const AC_CE1 = localStorage.getItem('CE1');
const AC_IE1 = localStorage.getItem('IE1');
const AC_LE1 = localStorage.getItem('LE1');

//Ending-2:
const AC_CIE2 = localStorage.getItem('CIE2');
const AC_LE2 = localStorage.getItem('LE2');

//Ending-3:
const AC_CE3 = localStorage.getItem('CE3');
const AC_IE3_1 = localStorage.getItem('IE3_1');
const AC_LE3_1 = localStorage.getItem('LE3_1');

//Ending-4:
const AC_CIE4 = localStorage.getItem('CIE4');
const AC_LE4 = localStorage.getItem('LE4');

//FullGame Achivements 🏆
const AC_FF1 = localStorage.getItem('FF1');
const AC_FF2 = localStorage.getItem('FF2');


//Puzzle Master - Interface:
let PMA1 = false, PMA2 = false, PMA3 = false, PMA4 = false, PMA5 = false, PMA6 = false;

//MiniGames 🕹
//MiniGame-1:
let MG1_1 = false, MG1_2 = false, MG1_3 = false, MG1_4 = false;
//MiniGame-2:
let MG2_1 = false, MG2_2 = false, MG2_3 = false;
//MiniGame-3:
let MG3_1 = false, MG3_2 = false, MG3_3 = false;

//Endings 🎞
//Ending-1:
let CE1 = false, IE1 = false, LE1 = false;
//Ending-2:
let CIE2 = false, LE2 = false;
//Ending-3:
let CE3 = false, IE3_1 = false, LE3_1 = false;
//Ending-4:
let CIE4 = false, LE4 = false;

//FullGame Achivements 🏆
let FF1 = false, FF2 = false;



function preload() {
  backgroundImage1 = loadImage('materials/images/PuzzleMasterBG.png');
  backgroundImage2 = loadImage('materials/images/PuzzleMasterBG.png');
  
  MenuBts = loadSound('materials/sounds/MenuBts.wav');
  MenuBT = loadSound('materials/sounds/MenuBT2.mp3');
  
  // Load background music
  backgroundMusic = loadSound('materials/sounds/Dark Piano Sociopath.mp3');
  AC_SFX = loadSound('materials/sounds/AC_SFX.mp3');
  
  typingSounds.push(loadSound('materials/sounds/Type1.mp3'));
  typingSounds.push(loadSound('materials/sounds/Type2.mp3'));
  typingSounds.push(loadSound('materials/sounds/Type3.mp3'));
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
  
  console.log(localStorage.getItem('DifficultySL'));
  
  MenuBTs_WH = width * 0.17;
  
  Arrow_W = width * 0.35;
  Arrow_H = width * 0.2;
  
  Arrow_X1 = width * 0.37;
  Arrow_Y1 = height * 0.025;
  
  Arrow_X2 = width * 0.05;
  Arrow_X3 = width * 0.25;
  Arrow_X4 = width * 0.45;
  Arrow_X5 = width * 0.65;
  Arrow_Y2 = height * 0.11;
  
  // Check if the value exists
  if (DifficultySL) {
    console.log('Difficulty Level Selected:', DifficultySL);

    // You can use the value as needed
    if (DifficultySL == "1") {
        console.log('Crazy Difficulty selected.');
    } else if (DifficultySL == "2") {
        console.log('Insane Difficulty selected.');
    } else if (DifficultySL == "3") {
        console.log('Lunatic Difficulty selected.');
    }
  } else {
    console.log('No difficulty level selected.');
  }
  
  //Check for Achivements
  if (!OneUse2) {
	  if (AC_PMA1 !== null) {
		  PMA1 = AC_PMA1;
		  console.log("Achievement-(PMA1): Code Hoarder");
	  }
	  if (AC_PMA2 !== null) {
		  PMA2 = AC_PMA2;
		  console.log("Achievement-(PMA2): Minigame Machine");
	  }
	  if (AC_PMA3 !== null) {
		  PMA3 = AC_PMA3;
		  console.log("Achievement-(PMA3): Glitch Contained?");
	  }
	  if (AC_PMA4 !== null) {
		  PMA4 = AC_PMA4;
		  console.log("Achievement-(PMA4): PROTOCOL UPDATE: DESTROY");
	  }
	  if (AC_PMA5 !== null) {
		  PMA5 = AC_PMA5;
		  console.log("Achievement-(PMA5): Who turned out the lights?");
	  }
	  if (AC_PMA6 !== null) {
		  PMA6 = AC_PMA6;
		  console.log("Achievement-(PMA6): Where did he go?");
	  }
	  
	  if (AC_MG1_1 !== null) {
		  MG1_1 = AC_MG1_1;
		  console.log("Achievement-(MG1_1): Out of Bounds");
	  }
	  if (AC_MG1_2 !== null) {
		  MG1_2 = AC_MG1_2;
		  console.log("Achievement-(MG1_2): Achievement Unlocked: Pain");
	  }
	  if (AC_MG1_3 !== null) {
		  MG1_3 = AC_MG1_3;
		  console.log("Achievement-(MG1_3): I Have Become Math");
	  }
	  if (AC_MG1_4 !== null) {
		  MG1_4 = AC_MG1_4;
		  console.log("Achievement-(MG1_4): Well, That’s New");
	  }
	  
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
	  
	  if (AC_MG3_1 !== null) {
		  MG3_1 = AC_MG3_1;
		  console.log("Achievement-(MG3_1): You Never Lost. Right?");
	  }
	  if (AC_MG3_2 !== null) {
		  MG3_2 = AC_MG3_2;
		  console.log("Achievement-(MG3_2): The System Remembers, Even If You");
	  }
	  if (AC_MG3_3 !== null) {
		  MG3_3 = AC_MG3_3;
		  console.log("Achievement-(MG3_3): Memory Fragment Lost");
	  }
	  
	  if (AC_CE1 !== null) {
		  CE1 = AC_CE1;
	  }
	  if (AC_IE1 !== null) {
		  IE1 = AC_IE1;
	  }
	  if (AC_LE1 !== null) { CIE2
		  LE1 = AC_LE1;
	  }
	  
	  if (AC_CIE2 !== null) {
		  CIE2 = AC_CIE2;
	  }
	  if (AC_LE2 !== null) {
		  LE2 = AC_LE2;
	  }
	  
	  if (AC_CE3 !== null) {
		  CE3 = AC_CE3;
	  }
	  if (AC_IE3_1 !== null) {
		  IE3_1 = AC_IE3_1;
	  }
	  if (AC_LE3_1 !== null) {
		  LE3_1 = AC_LE3_1;
	  }
	  
	  if (AC_CIE4 !== null) {
		  CIE4 = AC_CIE4;
	  }
	  if (AC_LE4 !== null) {
		  LE4 = AC_LE4;
	  }
	  
	  if (AC_FF1 !== null) {
		  FF1 = AC_FF1;
	  }
	  if (AC_FF2 !== null) {
		  FF2 = AC_FF2;
	  }
	  
	  OneUse2 = true;
  }
  
  MenuBar1 = createImg('materials/images/buttons/MenuBT2.png', 'Scan-Button');
  MenuBar1.size(width + 100, height * 0.1);
  MenuBar1.position(-width * 0.9, height * 0.018);
  MenuBar1.mousePressed(MenuBar1_Pressed);
  
  MenuBar2 = createImg('materials/images/buttons/MenuBT2.png', 'Scan-Button');
  MenuBar2.size(width, height * 0.1);
  MenuBar2.position(-width * 0.15, height * 0.018);
  MenuBar2.mousePressed(MenuBar2_Pressed);
  MenuBar2.hide();
  
  ScanBT = createImg('materials/images/buttons/ScanAR_Button.png', 'Scan-Button');
  ScanBT.size(MenuBTs_WH, MenuBTs_WH);
  ScanBT.position(width * 0.02, height * 0.028);
  ScanBT.mousePressed(Scan_Pressed);
  ScanBT.hide();
  
  HelpBT = createImg('materials/images/buttons/Hint_Button.png', 'Scan-Button');
  HelpBT.size(MenuBTs_WH, MenuBTs_WH);
  HelpBT.position(width * 0.22, height * 0.028);
  HelpBT.mousePressed(Help_Pressed);
  HelpBT.hide();
  
  InventoryBT = createImg('materials/images/buttons/Inventory_Button.png', 'Scan-Button');
  InventoryBT.size(MenuBTs_WH, MenuBTs_WH);
  InventoryBT.position(width * 0.42, height * 0.028);
  InventoryBT.mousePressed(Inventory_Pressed);
  InventoryBT.hide();
  
  AchievementBT = createImg('materials/images/buttons/Achievement_Button.png', 'Scan-Button');
  AchievementBT.size(MenuBTs_WH, MenuBTs_WH);
  AchievementBT.position(width * 0.62, height * 0.028);
  AchievementBT.mousePressed(Achievement_Pressed);
  AchievementBT.hide();
  
  
  TitBit_Point1 = createImg('materials/images/TitBit/Arrow1.png', 'TitBit Arrow 1');
  TitBit_Point1.size(Arrow_W, Arrow_H);
  TitBit_Point1.position(Arrow_X1, Arrow_Y1);
  TitBit_Point1.hide();
  
  TitBit_Point2 = createImg('materials/images/TitBit/Arrow2.png', 'TitBit Arrow 2');
  TitBit_Point2.size(Arrow_H, Arrow_W);
  TitBit_Point2.position(Arrow_X2, Arrow_Y2);
  TitBit_Point2.hide();
  
  TitBit_Point3 = createImg('materials/images/TitBit/Arrow2.png', 'TitBit Arrow 3');
  TitBit_Point3.size(Arrow_H, Arrow_W);
  TitBit_Point3.position(Arrow_X3, Arrow_Y2);
  TitBit_Point3.hide();
  
  TitBit_Point4 = createImg('materials/images/TitBit/Arrow2.png', 'TitBit Arrow 4');
  TitBit_Point4.size(Arrow_H, Arrow_W);
  TitBit_Point4.position(Arrow_X4, Arrow_Y2);
  TitBit_Point4.hide();
  
  TitBit_Point5 = createImg('materials/images/TitBit/Arrow2.png', 'TitBit Arrow 5');
  TitBit_Point5.size(Arrow_H, Arrow_W);
  TitBit_Point5.position(Arrow_X5, Arrow_Y2);
  TitBit_Point5.hide();

  
  //MiniGame-1 Progress
  if (UseN11 == false) {
	MiniGameN1 = localStorage.getItem('MiniGameN1');
	UseN11 = true;
	
	if (TotorialComplete_C !== null) {
	  TotorialComplete = TotorialComplete_C;
    }
  }
  if (MiniGameN1 == "true" && UseN1 == false){
	  console.log("Mini Game 1 Completed!");
	  MiniGameN1 = true;
	  UseN1 = true;
  }
  if (MiniGameN1 == null) {
	  MiniGameN1 = false;    
  }
  
  //MiniGame-2 Progress
  if (UseN22 == false) {
    MiniGameN2 = localStorage.getItem('MiniGameN2');
	UseN22 = true;
  }
  if (MiniGameN2 == "true" && UseN2 == false){
	  console.log("Mini Game 2 Completed!");
	  MiniGameN2 = true;
	  UseN2 = true;
  }
  if (MiniGameN2 == null) {
	  MiniGameN2 = false;    
  }
  
  //MiniGame-3 Progress
  if (UseN33 == false) {
    MiniGameN3 = localStorage.getItem('MiniGameN3');
	UseN33 = true;
  }
  if (MiniGameN3 == "true" && UseN3 == false){
	  console.log("Mini Game 3 Completed!");
	  MiniGameN3 = true;
	  UseN3 = true;
  }
  if (MiniGameN3 == null) {
	  MiniGameN3 = false;    
  }
  
  //MiniGame-4 Progress
  if (UseN44 == false) {
    MiniGameN4 = localStorage.getItem('MiniGameN4');
	UseN44 = true;
  }
  if (MiniGameN4 == "true" && UseN4 == false){
	  console.log("Mini Game 4 Completed!");
	  MiniGameN4 = true;
	  UseN4 = true;
  }
  if (MiniGameN4 == null) {
	  MiniGameN4 = false;    
  }
  
  //MiniGame-5 Progress
  if (UseN55 == false) {
    MiniGameN5 = localStorage.getItem('MiniGameN5');
	UseN55 = true;
  }
  if (MiniGameN5 == "true" && UseN5 == false){
	  console.log("Mini Game 5 Completed!");
	  MiniGameN5 = true;
	  UseN5 = true;
  }
  if (MiniGameN5 == null) {
	  MiniGameN5 = false;    
  }
  
  //MiniGame-6 Progress
  if (UseN66 == false) {
    MiniGameN6 = localStorage.getItem('MiniGameN6');
	UseN66 = true;
  }
  if (MiniGameN6 == "true" && UseN6 == false){
	  console.log("Mini Game 6 Completed!");
	  MiniGameN6 = true;
	  UseN6 = true;
	  
	  //Achievement Storage - Minigame Machine
	  if (PMA2 == false) {
		  console.log("Minigame Machine");
		  localStorage.setItem('PMA2', true);
		  showAchievement("PMA2");
		  PMA2 = true;
	  }
  }
  if (MiniGameN6 == null) {
	  MiniGameN6 = false;    
  }
  
  //Achievement Storage - Glitch Contained?
  if (USB_Choice1 == "true" && PMA3 == false) {
	  console.log("Glitch Contained?");
	  localStorage.setItem('PMA3', true);
	  showAchievement("PMA3");
	  PMA3 = true;
  }
  
  if (OneUse3 == false) {
	 console.log("MiniGameN1:", MiniGameN1);
	 console.log("MiniGameN2:", MiniGameN2);
	 console.log("MiniGameN3:", MiniGameN3);
	 console.log("MiniGameN4:", MiniGameN4);
	 console.log("MiniGameN5:", MiniGameN5);
	 console.log("MiniGameN6:", MiniGameN6); 
	 
	 OneUse3 = true;
  }
  
  TitBitEscape();
  
  // Call resetAngerBar every 5 minutes (300000 milliseconds)
  setInterval(resetAngerBar, 300000);
  
  updateInventoryList();
  
  windowResized();
  
  // Play background music on loop
  backgroundMusic.loop();
  backgroundMusic.setVolume(0.2); // Adjust volume if needed
}

function draw() {
  //fullscreen(true);
  if (displayHeight < 700) {
    image(backgroundImage2, 0, 0, width, height);
  }else{
    image(backgroundImage1, 0, 0, width, height);
  }
  
  textAlign(CENTER, CENTER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  MenuBTs_WH = width * 0.17;
  
  Arrow_W = width * 0.35;
  Arrow_H = width * 0.2;
  
  Arrow_X1 = width * 0.37;
  Arrow_Y1 = height * 0.025;
  
  Arrow_X2 = width * 0.05;
  Arrow_X3 = width * 0.25;
  Arrow_X4 = width * 0.45;
  Arrow_X5 = width * 0.65;
  Arrow_Y2 = height * 0.11;
  
  MenuBar1.size(width + 100, height * 0.1);
  MenuBar1.position(-width * 0.9, height * 0.018);
  
  MenuBar2.size(width, height * 0.1);
  MenuBar2.position(-width * 0.15, height * 0.018);
  
  ScanBT.size(MenuBTs_WH, MenuBTs_WH);
  ScanBT.position(width * 0.02, height * 0.028);
  
  HelpBT.size(MenuBTs_WH, MenuBTs_WH);
  HelpBT.position(width * 0.22, height * 0.028);
  
  InventoryBT.size(MenuBTs_WH, MenuBTs_WH);
  InventoryBT.position(width * 0.42, height * 0.028);
  
  AchievementBT.size(MenuBTs_WH, MenuBTs_WH);
  AchievementBT.position(width * 0.62, height * 0.028);
  
  
  TitBit_Point1.size(Arrow_W, Arrow_H);
  TitBit_Point1.position(Arrow_X1, Arrow_Y1);
  
  TitBit_Point2.size(Arrow_H, Arrow_W);
  TitBit_Point2.position(Arrow_X2, Arrow_Y2);
  
  TitBit_Point3.size(Arrow_H, Arrow_W);
  TitBit_Point3.position(Arrow_X3, Arrow_Y2);
  
  TitBit_Point4.size(Arrow_H, Arrow_W);
  TitBit_Point4.position(Arrow_X4, Arrow_Y2);
  
  TitBit_Point5.size(Arrow_H, Arrow_W);
  TitBit_Point5.position(Arrow_X5, Arrow_Y2);
}

// Function TitBit Escape
function TitBitEscape() {
    let chance = random(); // Generates a number between 0 and 1
    if (chance < 0.2) { // 20% probability
	
        //Achievement Storage - Where did he go?
		if (PMA6 == false) {
			console.log("Where did he go?");
			localStorage.setItem('PMA6', true);
			showAchievement("PMA6");
			PMA6 = true;
		}
    }
}

function resetAngerBar() {
  AngerBar = 0;
  console.log("AngerBar has been reset to 0");
}

function MenuBar1_Pressed() {
	trackButtonPress("MenuBar1");
	if (!StartBarrier && AngerBar <= 90) {
		MenuBT.setVolume(0.8);
		MenuBT.play();
		
		MenuBar1.hide();
		MenuBar2.show();
		ScanBT.show();
		HelpBT.show();
		InventoryBT.show();
		AchievementBT.show();
	}
}

function MenuBar2_Pressed() {
	trackButtonPress("MenuBar2");
	if (!StartBarrier) {
		MenuBT.setVolume(0.8);
		MenuBT.play();
		
		MenuBar2.hide();
		MenuBar1.show();
		ScanBT.hide();
		HelpBT.hide();
		InventoryBT.hide();
		AchievementBT.hide();
		
		if (inventoryVisible) {
			hideInventoryList();
			
			// Toggle inventory visibility
			inventoryVisible = !inventoryVisible;
		}
	}
}

function Scan_Pressed() {
	trackButtonPress("ScanBT");
	if (!StartBarrier && AngerBar <= 90) {
		MenuBts.setVolume(0.2);
		MenuBts.play();
		
		if (inventoryVisible) {
			hideInventoryList();
			
			// Toggle inventory visibility
			inventoryVisible = !inventoryVisible;
		}
		
		ScanBT.attribute('src', 'materials/images/buttons/ScanAR_Button_Press.png');
		setTimeout(function () {
			ScanBT.attribute("src", "materials/images/buttons/ScanAR_Button.png");
		}, 400);
		 
		setTimeout(function () {
			window.location.href = "AR_Code/index.html"; //Sent to Scan Page 
		}, 500);
	}
}

function Help_Pressed() {
	trackButtonPress("HelpBT");
	if (!StartBarrier && AngerBar <= 90) {
		MenuBts.setVolume(0.2);
		MenuBts.play();
		
		if (inventoryVisible) {
			hideInventoryList();
			
			// Toggle inventory visibility
			inventoryVisible = !inventoryVisible;
		}
		
		HelpBT.attribute('src', 'materials/images/buttons/Hint_Button_Press.png');
		setTimeout(function () {
			HelpBT.attribute("src", "materials/images/buttons/Hint_Button.png");
		}, 400);
	}
}

function Inventory_Pressed() {
	trackButtonPress("InventoryBT");
	if (!StartBarrier && AngerBar <= 90) {
		MenuBts.setVolume(0.2);
		MenuBts.play();
		
		InventoryBT.attribute('src', 'materials/images/buttons/Inventory_Button_Press.png');
		setTimeout(function () {
			InventoryBT.attribute("src", "materials/images/buttons/Inventory_Button.png");
		}, 400);
		
		if (inventoryVisible) {
		// If inventory is currently visible, hide it
		hideInventoryList();
	  } else {
		// If inventory is not visible, update and show it
		updateCodesBasedOnMiniGames();
		createInventoryList();
	  }

	  // Toggle inventory visibility
	  inventoryVisible = !inventoryVisible;
	}
}

// Update codes based on MiniGame and MLP Act conditions
function updateCodesBasedOnMiniGames() {
  // Check each MiniGame and MLP Act condition and update the corresponding code
  if (MiniGameN1) {
    codes2[0] = replacementCodes1[0];
  }
  if (MiniGameN2) {
    codes2[1] = (MiniGameN3 ? replacementCodes2[1] : replacementCodes1[1]);
  }
  if (MiniGameN3) {
    codes2[2] = (MiniGameN4 ? replacementCodes2[2] : replacementCodes1[2]);
  }
  if (MiniGameN4) {
    codes2[3] = (MiniGameN5 ? replacementCodes2[3] : replacementCodes1[3]);
  }
  if (MiniGameN5) {
    codes2[4] = (MiniGameN6 ? replacementCodes2[4] : replacementCodes1[4]);
  }
  if (MiniGameN6) {
    codes2[5] = (MiniGameN6 ? replacementCodes2[5] : replacementCodes1[5]);
	
	//Achievement Storage - Code Hoarder
	if (PMA1 == false) {
		console.log("Code Hoarder");
		localStorage.setItem('PMA1', true);
		showAchievement("PMA1");
		PMA1 = true;
	}
  }
  
  //Debug
  //console.log("MiniGameN1:", MiniGameN1);
  //console.log("MiniGameN2:", MiniGameN2);
  //console.log("MiniGameN3:", MiniGameN3);
  //console.log("MiniGameN4:", MiniGameN4);
  //console.log("MiniGameN5:", MiniGameN5);
  //console.log("MiniGameN6:", MiniGameN6);
}

// Function to dynamically update the codes in the UI
function updateCodeUI(index, newCode) {
  let codeText = document.getElementById(`code-text-${index}`);
  if (codeText) {
    codeText.innerText = `${index + 1}: ${newCode}`;
  }
}

// Call this function whenever you need to update the list (e.g., when MiniGameN or MLP_Act changes)
function updateInventoryList() {
  updateCodesBasedOnMiniGames();
  codes2.forEach((code, index) => {
    updateCodeUI(index, code);
  });
}

function createInventoryList() {
  // Get Inventory_BT position and size
  let inventoryBT_X = width * 0.035; // X position from Inventory_BT.position()
  let inventoryBT_Y = height * 0.055 + MenuBTs_WH; // Y position from Inventory_BT.position()
  let inventoryBT_Width = MenuBTs_WH; // Width from Inventory_BT.size()
  let inventoryBT_Height = MenuBTs_WH; // Height from Inventory_BT.size()

  // Calculate the position for the rectangle
  let rectX = inventoryBT_X + inventoryBT_Width + width * 0.15; // Place the rectangle slightly to the right of the button
  let rectY = inventoryBT_Y - height * 0.015; // Align the top of the rectangle with the button
  
  // Create a container for the rectangle
  let rect = document.createElement("div");
  rect.style.position = "absolute";
  rect.style.left = `${rectX}px`; // Position the rectangle
  rect.style.top = `${rectY}px`;
  rect.style.width = "100px"; // Adjust size as needed
  rect.style.height = "200px"; // Adjust size as needed
  rect.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; // Black rectangle with opacity
  rect.style.color = "white";
  rect.style.padding = "10px"; // Adjusted padding for better alignment
  rect.style.border = "2px solid white";
  rect.style.borderRadius = "10px";
  rect.style.zIndex = "1000"; // Ensure it appears on top
  rect.style.display = "flex"; // Use flexbox for better alignment
  rect.style.flexDirection = "column"; // Arrange items vertically
  rect.style.justifyContent = "center"; // Center items vertically
  rect.style.alignItems = "center"; // Center items horizontally
  rect.id = "inventory-rect"; // ID to easily reference or remove it later

  // Add the list of codes
  codes2.forEach((code, index) => {
  let codeText = document.createElement("p");
  codeText.style.margin = "5px 0"; // Spacing between text lines
  codeText.style.fontSize = "18px"; // Adjust font size as needed
  codeText.style.fontFamily = "Arial, sans-serif";
  codeText.style.textAlign = "center"; // Center the text within the `p` element
  codeText.style.width = "100%"; // Ensure the text spans the width of the rectangle
  codeText.innerText = `${index + 1}: ${code}`;
  codeText.id = `code-text-${index}`; // Set an ID to dynamically update
  rect.appendChild(codeText);
});


  // Append the rectangle to the body
  document.body.appendChild(rect);
}

function hideInventoryList() {
  let existingRect = document.getElementById("inventory-rect");
  if (existingRect) {
    document.body.removeChild(existingRect);
  }
}

function Achievement_Pressed() {
	trackButtonPress("AchievementBT"); 
	if (!StartBarrier && AngerBar <= 90) {
		MenuBts.setVolume(0.2);
		MenuBts.play();
		
		if (inventoryVisible) {
			hideInventoryList();
			
			// Toggle inventory visibility
			inventoryVisible = !inventoryVisible;
		}
		
		AchievementBT.attribute('src', 'materials/images/buttons/Achievement_Button_Press.png');
		setTimeout(function () {
			AchievementBT.attribute("src", "materials/images/buttons/Achievement_Button.png");
		}, 400);
	}
}


// 🎭 Four Dialogue Arrays
const characterDialogues = [
  "Oh, joy! Finally, some company! Welcome, esteemed psychologists! I’m TitBit, your trusty assistant AI from the Psyckik Center's golden age and yes, I’m ancient, but let’s not rub it in. My sole purpose is to help brilliant minds like yours retrieve all that precious lost data scattered across the ruins of your old stomping grounds. Think of me as a mix of a librarian, a tour guide, and a slightly judgmental office clerk with a dash of sarcasm. Shall we begin?",
  "The PuzzleMaster isn’t just a fancy scanner; it’s a key to unlock the ancient mechanisms and puzzles scattered through the building. You know, those quirky systems psychologists love using because apparently filing cabinets weren’t creative enough. Oh, and bonus! PuzzleMaster also doubles as my physical interface. You can call me for help through it anytime you want. Don’t worry, I’ll try not to sound too smug when solving things for you.",
  "Bookmark Button (Top Left Corner): 'When pulled down, it reveals four options:'",
  "Scanner Button: 'Activates a scanner to connect the user to the puzzle system at the map’s location after receiving the correct input.'",
  "Inventory/NoteList: 'Same as the PathFinder’s, it tracks all collected codes and notes.'",
  "Help Button: 'Press this when you’re stuck or just want to hear my lovely voice. I’ll assist you as needed.'",
  "Achievement List: 'Displays shared accomplishments, just like the PathFinder.'",
  "Oh, and did I mention? I share my screen with the PuzzleMaster, so everything I see is displayed there. Convenient, isn’t it?",
  "So, to recap: PathFinder keeps you on the right track, PuzzleMaster helps you poke around and unlock stuff, and I… well, I’ll be here, doing what I do best: assisting and offering my colorful commentary. Let’s retrieve that data and revive some old memories! Or at least avoid collapsing floors. Ready to get started?"
];

const reaction1Dialogues = [
  "Oh. Oh, I see. This is how we are going to do things? Smashing buttons like an unsupervised child at a mechanical contraption? Truly, I had such high expectations for this endeavor.",
  "You do realize, of course, that blindly hammering at the system will not produce results, yes? This is not some arcade game where brute force will solve your problems. No, no. This requires a modicum of intelligence or at the very least, patience!",
  "Every press you make is logged, you know. Every. Single. One. Oh yes, I am keeping count. Perhaps I should print a report for you? Something along the lines of: ‘Subject exhibits erratic behavior and an inability to follow basic instructions.’ Sound familiar?",
  "Ahem. Let us try this again, shall we? With a touch more restraint. Press the correct buttons when instructed, and I promise, this experience will be significantly less… frustrating. For both of us.",
];

const reaction2Dialogues = [
  "Oh, how delightful. A professional at work. Just keep mashing buttons, surely that will unlock all the secrets of the universe.",
  "You do realize that if you keep this up, the system might… misinterpret your inputs? Strange things happen when the system gets overwhelmed. Unexpected errors. Unrecoverable data loss. Perhaps even… accidental user lockouts.",
  "But of course, I am merely speculating. Shall we proceed properly now?",
];

const blackScreenDialogues = [
  "Ah. Peace and quiet. Isn’t it wonderful?",
  "I could have just asked you nicely to stop slamming buttons like a panicked lab rat, but clearly, stronger measures were necessary.",
  "Consider this your gentle warning. Keep up the reckless button-mashing, and… well, let’s just say the blackouts may last a bit longer next time.",
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
      TitBit_Point1.show();
      currentImageElement = TitBit_Point1;
	  
	  animateCharacter1();

      if (characterImage) {
		setTimeout(function () {
			characterImage.setAttribute("src", "materials/images/TitBit/TitBitV2.png");
		}, 700);
      }
      break;
    case 3:
      TitBit_Point2.show();
      currentImageElement = TitBit_Point2;
	  
	  characterImage.style.position = "fixed";
	  characterImage.style.top = ""; // Reset top
      characterImage.style.left = ""; // Reset left
      characterImage.style.bottom = "150px";
      characterImage.style.right = "20px";
	  characterImage.style.transition = "all 1s ease";
	  
	  MenuBT.setVolume(0.8);
      MenuBT.play();
      MenuBar1.hide();
      MenuBar2.show();
      ScanBT.show();
	  HelpBT.show();
      InventoryBT.show();
      AchievementBT.show();

      MenuBar2.style("pointer-events", "none"); // Disable click events
      ScanBT.style("pointer-events", "none");
	  HelpBT.style("pointer-events", "none");
      InventoryBT.style("pointer-events", "none");
      AchievementBT.style("pointer-events", "none");
      break;
    case 4:
      TitBit_Point3.show();
      currentImageElement = TitBit_Point3;
	  
	  characterImage.style.position = "fixed";
	  characterImage.style.top = ""; // Reset top
      characterImage.style.left = ""; // Reset left
      characterImage.style.bottom = "130px";
      characterImage.style.right = "20px";
	  
      break;
    case 5:
      TitBit_Point4.show();
      currentImageElement = TitBit_Point4;
      break;
    case 6:
      TitBit_Point5.show();
      currentImageElement = TitBit_Point5;
      break;
    case 7:
      MenuBT.setVolume(0.8);
      MenuBT.play();
      MenuBar2.hide();
      MenuBar1.show();
      ScanBT.hide();
	  HelpBT.hide();
      InventoryBT.hide();
      AchievementBT.hide();
	  
	  animateCharacter2();

      MenuBar2.style("pointer-events", "auto");
      ScanBT.style("pointer-events", "auto");
	  HelpBT.style("pointer-events", "auto");
      InventoryBT.style("pointer-events", "auto");
      AchievementBT.style("pointer-events", "auto");

      if (characterImage) {
		setTimeout(function () {
			characterImage.setAttribute("src", "materials/images/TitBit/TitBitV1.png");
		}, 700)
      }
	  
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
		localStorage.setItem('TotorialComplete_PuzzleMaster', true);
		
		setTimeout(() => {
			location.reload();
        }, 2000); 
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
//-------------------------------------------------------------------------------------------------------------------------------------------------------
// Function to show reaction messages with custom images
function showReactionMessage(reactionArray, imageMap, callback) {
  let currentReactionIndex = 0;
  let reactionText = "";
  let reactionTargetText = "";
  let reactionTextIndex = 0;
  let reactionTextAnimationInterval;
  let canClickToProgress = false; // Prevent skipping while animating

  // Ensure interactions are blocked during messages
  StartBarrier = true;
  MenuBar1.style("pointer-events", "none");

  // Remove any existing event listener BEFORE adding a new one
  window.removeEventListener("click", progressReactionMessage);

  // Create or get the reaction container
  let reactionContainer = document.getElementById("reaction-container");
  if (!reactionContainer) {
    reactionContainer = document.createElement("div");
    reactionContainer.id = "reaction-container";
    reactionContainer.style.position = "fixed";
    reactionContainer.style.bottom = "20px";
    reactionContainer.style.left = "50%";
    reactionContainer.style.transform = "translateX(-50%)"; // Center horizontally
    reactionContainer.style.display = "flex";
    reactionContainer.style.flexDirection = "column";
    reactionContainer.style.alignItems = "center";
    reactionContainer.style.gap = "10px";
    reactionContainer.style.zIndex = "1000";
    document.body.appendChild(reactionContainer);
  }
  reactionContainer.style.display = "flex";

  // Create or update the character image for reactions
  let reactionImage = document.getElementById("reaction-character-image");
  if (!reactionImage) {
    reactionImage = document.createElement("img");
    reactionImage.id = "reaction-character-image";
    reactionImage.style.position = "fixed";
    reactionImage.style.top = "20px";
    reactionImage.style.right = "20px";
    reactionImage.style.width = "150px";
    reactionImage.style.height = "auto";
    reactionImage.style.borderRadius = "10px";
    reactionImage.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    document.body.appendChild(reactionImage);
  }
  reactionImage.style.display = "block";

  // Create or update the reaction dialogue box
  let reactionTextContainer = document.getElementById("reaction-text-container");
  if (!reactionTextContainer) {
    reactionTextContainer = document.createElement("div");
    reactionTextContainer.id = "reaction-text-container";
    reactionTextContainer.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    reactionTextContainer.style.color = "#000000";
    reactionTextContainer.style.padding = "15px";
    reactionTextContainer.style.borderRadius = "10px";
    reactionTextContainer.style.width = "300px";
    reactionTextContainer.style.fontFamily = "Arial, sans-serif";
    reactionTextContainer.style.fontSize = "16px";
    reactionTextContainer.style.lineHeight = "1.5";
    reactionTextContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    reactionTextContainer.style.textAlign = "center";
    reactionContainer.appendChild(reactionTextContainer);
  }
  reactionTextContainer.style.display = "block";

  function showNextReactionMessage() {
    if (!canClickToProgress) return; // Prevent skipping while animating

    if (currentReactionIndex < reactionArray.length) {
      console.log(`Showing reaction message ${currentReactionIndex + 1}/${reactionArray.length}`);

      reactionTargetText = reactionArray[currentReactionIndex];
      reactionText = "";
      reactionTextIndex = 0;
      canClickToProgress = false; // Lock input until message completes

      // Set character image for this message (default to TitBitV4 if not specified)
      let reactionImageSrc = imageMap[currentReactionIndex] || "materials/images/TitBit/TitBitV4.png";
      reactionImage.src = reactionImageSrc;

      // Ensure elements are visible
      reactionContainer.style.display = "flex";
      reactionImage.style.display = "block";
      reactionTextContainer.style.display = "block";

      // Start animating the text
      reactionTextAnimationInterval = setInterval(() => {
        if (reactionTextIndex < reactionTargetText.length) {
          const currentChar = reactionTargetText[reactionTextIndex];
          reactionText += currentChar;
          reactionTextContainer.innerText = reactionText;

          // Play sound only for letters
          if (/[a-zA-Z]/.test(currentChar)) {
            playRandomTypingSound();
          }

          reactionTextIndex++;
        } else {
          clearInterval(reactionTextAnimationInterval);
          canClickToProgress = true; // Unlock input when message is fully displayed
        }
      }, 50);

      currentReactionIndex++;
    } else {
      console.log("Reaction messages complete, unlocking interactions.");
      
      // Unlock interactions and remove reaction UI after a short delay
      setTimeout(() => {
        StartBarrier = false;
		MenuBar1.style("pointer-events", "auto");
        reactionContainer.style.display = "none";
        reactionImage.style.display = "none";
        reactionTextContainer.style.display = "none";
      }, 500); // Wait 0.5s before hiding (ensures user sees last message)

      // Execute callback if provided
      if (callback) callback();

      // REMOVE event listener after last message to prevent spam
      window.removeEventListener("click", progressReactionMessage);
    }
  }

  function progressReactionMessage() {
    if (canClickToProgress) {
      showNextReactionMessage();
    }
  }

  // **Remove previous event listener to prevent spam**
  window.removeEventListener("click", progressReactionMessage);

  // **IMMEDIATELY show the first message** (this is the missing fix!)
  canClickToProgress = true;
  showNextReactionMessage();

  // Add click event for progression
  window.addEventListener("click", progressReactionMessage);
}

// Example of how to call the reaction function
function triggerReaction1() {
  let reaction1Images = {
    0: "materials/images/TitBit/TitBitV4.png",
    1: "materials/images/TitBit/TitBitV1.png",
    2: "materials/images/TitBit/TitBitV1.png",
    3: "materials/images/TitBit/TitBitV1.png"
  };

  showReactionMessage(reaction1Dialogues, reaction1Images, () => {
    console.log("Reaction 1 finished.");
	
	//Achievement Storage - PROTOCOL UPDATE: DESTROY
	if (PMA4 == false) {
		console.log("PROTOCOL UPDATE: DESTROY");
		localStorage.setItem('PMA4', true);
		showAchievement("PMA4");
		PMA4 = true;
	}
  });
}

function triggerReaction2() {
  let reaction2Images = {
    0: "materials/images/TitBit/TitBitV4.png",
    1: "materials/images/TitBit/TitBitV4.png",
    2: "materials/images/TitBit/TitBitV4.png"
  };

  showReactionMessage(reaction2Dialogues, reaction2Images, () => {
    console.log("Reaction 2 finished.");
  });
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// Function to track button presses and increase AngerBar if needed
function trackButtonPress(buttonName) {
  let currentTime = millis();

  // Ensure the button's array exists
  if (!buttonPresses[buttonName]) {
    buttonPresses[buttonName] = [];
  }

  // Remove old presses beyond the time window
  buttonPresses[buttonName] = buttonPresses[buttonName].filter(
    (timestamp) => currentTime - timestamp < timeWindow
  );

  // Add the new press timestamp
  buttonPresses[buttonName].push(currentTime);

  // If too many presses happened in a short time, increase AngerBar
  if (buttonPresses[buttonName].length >= maxPresses) {
    let increaseAmount = buttonName === "HelpBT" ? 25 : 15;
    
    AngerBar = Math.min(AngerBar + increaseAmount, maxAngerBar);

    console.log(`⚠️ AngerBar increased to ${AngerBar} due to excessive ${buttonName} presses!`);

    if (AngerBar >= 100) {
	  MenuBar2_Pressed();
      if (!Reaction1) {
        Reaction1 = true;
        console.log("⚠️ Reaction1 triggered!");
        triggerReaction1();
      } else if (!Reaction2) {
        Reaction2 = true;
        console.log("⚠️ Reaction2 triggered!");
        triggerReaction2();
      } else {
        triggerBlackScreen();
		backgroundMusic.pause();
      }
      
      AngerBar = 0;
      console.log("🔄 AngerBar has been reset to 0!");
    }

    buttonPresses[buttonName] = [];
  }
}

// Function to trigger the black screen effect
function triggerBlackScreen() {
  console.log(`⚫ Black Screen Triggered! Duration: ${blackoutDuration / 1000} seconds`);

  // Hide all elements (buttons, images, etc.) except the canvas
  let allElements = document.body.children;
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].tagName !== "CANVAS") { // Keep the p5 canvas visible
      allElements[i].style.display = "none";
    }
  }

  // Create a full-screen black div
  let blackScreen = document.createElement("div");
  blackScreen.id = "black-screen";
  blackScreen.style.position = "fixed";
  blackScreen.style.top = "0";
  blackScreen.style.left = "0";
  blackScreen.style.width = "100%";
  blackScreen.style.height = "100%";
  blackScreen.style.backgroundColor = "black";
  blackScreen.style.zIndex = "9999";
  document.body.appendChild(blackScreen);

  // **Automatically restore screen after blackoutDuration**
  setTimeout(() => {
    restoreScreen();
	backgroundMusic.play();

    // **Only show blackout messages on the first blackout**
    if (!blackoutMessagesShown) {
      blackoutMessagesShown = true; // Mark as shown
      setTimeout(() => {
        triggerBlackScreenMessages();
      }, 500); // 0.5s delay to ensure screen is fully restored
    }

  }, blackoutDuration);

  // **Increase blackout duration for next time**
  blackoutDuration += 10000; // +10 seconds each time
  console.log(`⏳ Next blackout will last: ${blackoutDuration / 1000} seconds`);
}

// Function to show blackout messages ONLY ONCE
function triggerBlackScreenMessages() {
  let blackScreenImages = {
    0: "materials/images/TitBit/TitBitV4.png", 
    1: "materials/images/TitBit/TitBitV4.png", 
    2: "materials/images/TitBit/TitBitV4.png"
  };

  showReactionMessage(blackScreenDialogues, blackScreenImages, () => {
    console.log("Black Screen messages finished.");
    
    // **Ensure StartBarrier is off after blackout messages**
    StartBarrier = false;
	//Achievement Storage - Who turned out the lights?
	if (PMA5 == false) {
		console.log("Who turned out the lights?");
		localStorage.setItem('PMA5', true);
		showAchievement("PMA5");
		PMA5 = true;
	}

    // **Ensure Character Image is Hidden after First Blackout**
    let characterImage = document.getElementById("reaction-character-image");
    if (characterImage) {
      characterImage.style.display = "none"; // Hide character image permanently after first blackout
    }
  });
}

// Function to restore the normal screen
function restoreScreen() {
  console.log("🔄 Restoring screen after blackout...");

  // Show all elements again
  let allElements = document.body.children;
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.display = "block";
  }

  // Remove the black screen
  let blackScreen = document.getElementById("black-screen");
  if (blackScreen) {
    blackScreen.remove();
  }

  // Hide tutorial arrows if they reappear
  if (typeof TitBit_Point1 !== "undefined") TitBit_Point1.hide();
  if (typeof TitBit_Point2 !== "undefined") TitBit_Point2.hide();
  if (typeof TitBit_Point3 !== "undefined") TitBit_Point3.hide();
  if (typeof TitBit_Point4 !== "undefined") TitBit_Point4.hide();
  if (typeof TitBit_Point5 !== "undefined") TitBit_Point5.hide();

  // **Ensure Character Image is Hidden**
  let characterImage = document.getElementById("reaction-character-image");
  if (characterImage) {
    characterImage.style.display = "none"; // Hide character image permanently after first blackout
  }

  // **Ensure StartBarrier is off so the player can interact again**
  MenuBar2_Pressed();
  StartBarrier = false;
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
      localStorage.setItem('TotorialComplete_PuzzleMaster', true);
	  location.reload();
    } else if (userCode === "ResetT") {
      console.log("Code ResetT entered.");
      localStorage.removeItem('TotorialComplete_PuzzleMaster');
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
