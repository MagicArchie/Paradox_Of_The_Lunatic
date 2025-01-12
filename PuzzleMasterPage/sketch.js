// Retrieve the stored DifficultySL value from localStorage
const DifficultySL = localStorage.getItem('DifficultySL');

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
let OneUse = false;

let Arrow_X1, Arrow_X2, Arrow_X3;
let Arrow_Y1, Arrow_Y2, Arrow_Y3, Arrow_Y4, Arrow_Y5;
let Arrow_W;
let Arrow_H;

let typingSounds = [];

// Array to store the initial codes and their replacements
let codes2 = ["????", "????", "????", "????", "????", "????"];
let replacementCodes1 = ["2468", "XX57", "X0X5", "XXXX", "4321", "1984"];
let replacementCodes2 = ["2468", "1357", "2025", "1999", "4321", "1984"];

// Variable to track if the inventory is currently visible
let inventoryVisible = false;

let backgroundMusic;

let MenuBTs_WH; 

function preload() {
  backgroundImage1 = loadImage('materials/images/PuzzleMasterBG.png');
  backgroundImage2 = loadImage('materials/images/PuzzleMasterBG.png');
  
  MenuBts = loadSound('materials/sounds/MenuBts.wav');
  MenuBT = loadSound('materials/sounds/MenuBT2.mp3');
  
  // Load background music
  backgroundMusic = loadSound('materials/sounds/Dark Piano Sociopath.mp3');
  
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
  }
  if (MiniGameN6 == null) {
	  MiniGameN6 = false;    
  }
  
  
  //backgroundMS.loop();
  
  updateInventoryList();
  
  windowResized();
  
  // Play background music on loop
  backgroundMusic.loop();
  backgroundMusic.setVolume(0.4); // Adjust volume if needed
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

function MenuBar1_Pressed() {
	if (!StartBarrier) {
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

function Scan_Pressed() {
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

function Help_Pressed() {
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

function Inventory_Pressed() {
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
  }
  
  //Debug
  console.log("MiniGameN1:", MiniGameN1);
  console.log("MiniGameN2:", MiniGameN2);
  console.log("MiniGameN3:", MiniGameN3);
  console.log("MiniGameN4:", MiniGameN4);
  console.log("MiniGameN5:", MiniGameN5);
  console.log("MiniGameN6:", MiniGameN6);

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


// Store the table of dialogues
const characterDialogues = [
  "Oh, joy! Finally, some company! Welcome, esteemed psychologists! I’m TitBit, your trusty assistant AI from the Psyckik Center's golden age — and yes, I’m ancient, but let’s not rub it in. My sole purpose is to help brilliant minds like yours retrieve all that precious lost data scattered across the ruins of your old stomping grounds. Think of me as a mix of a librarian, a tour guide, and a slightly judgmental office clerk with a dash of sarcasm. Shall we begin?",
  "The PuzzleMaster isn’t just a fancy scanner; it’s a key to unlock the ancient mechanisms and puzzles scattered through the building. You know, those quirky systems psychologists love using because apparently filing cabinets weren’t creative enough. Oh, and bonus! PuzzleMaster also doubles as my physical interface. You can call me for help through it anytime you want. Don’t worry, I’ll try not to sound too smug when solving things for you.",
  "Bookmark Button (Top Left Corner): 'When pulled down, it reveals four options:'",
  "Scanner Button: 'Activates a scanner to connect the user to the puzzle system at the map’s location after receiving the correct input.'",
  "Inventory/NoteList: 'Same as the PathFinder’s, it tracks all collected codes and notes.'",
  "Help Button: 'Press this when you’re stuck or just want to hear my lovely voice. I’ll assist you as needed.'",
  "Achievement List: 'Displays shared accomplishments, just like the PathFinder.'",
  "Oh, and did I mention? I share my screen with the PuzzleMaster, so everything I see is displayed there. Convenient, isn’t it?",
  "So, to recap: PathFinder keeps you on the right track, PuzzleMaster helps you poke around and unlock stuff, and I… well, I’ll be here, doing what I do best: assisting and offering my colorful commentary. Let’s retrieve that data and revive some old memories! Or at least avoid collapsing floors. Ready to get started?"
];


let currentDialogueIndex = 0; // Track which dialogue to show
let currentText = ""; // The currently displayed text (animated)
let targetText = ""; // The full text for the current dialogue
let textIndex = 0; // Tracks the current character being displayed in the animation
let textAnimationInterval; // Holds the interval ID for text animation
let currentImageElement = null; // Track the currently visible image

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
    characterImage.src = "materials/images/TitBit/TitBit.png";
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
        characterImage.setAttribute("src", "materials/images/TitBit/TitBit_Point.png");
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
        characterImage.setAttribute("src", "materials/images/TitBit/TitBit.png");
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