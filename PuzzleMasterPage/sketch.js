// Retrieve the stored DifficultySL value from localStorage
const DifficultySL = localStorage.getItem('DifficultySL');

const Choice1 = localStorage.getItem('Choice1');
const Choice2 = localStorage.getItem('Choice2');

let backgroundImage1, backgroundImage2;

let MiniGameN1 = false;
let MiniGameN2 = false;
let MiniGameN3 = false;
let MiniGameN4 = false;
let MiniGameN5 = false;
let MiniGameN6 = false;

let UseN1 = false;
let UseN11 = false;
let UseN2 = false;
let UseN22 = false;
let UseN3 = false;
let UseN33 = false;
let UseN4 = false;
let UseN44 = false;
let UseN5 = false;
let UseN55 = false;
let UseN6 = false;
let UseN66 = false;

let MLP1_Act = false;
let MLP2_Act = false;
let MLP3_Act = false;
let MLP4_Act = false;
let MLP5_Act = false;
let MLP6_Act = false;
let OneUse = false;

// Array to store the initial codes and their replacements
let codes2 = ["????", "????", "????", "????", "????", "????"];
let replacementCodes1 = ["2468", "XX57", "X0X5", "XXXX", "4321", "1984"];
let replacementCodes2 = ["2468", "1357", "2025", "1999", "4321", "1984"];

// Variable to track if the inventory is currently visible
let inventoryVisible = false;

const MenuBTs_WH = 160; 

function preload() {
  backgroundImage1 = loadImage('materials/images/PuzzleMasterBG.png');
  backgroundImage2 = loadImage('materials/images/PuzzleMasterBG.png');
  
  MenuBts = loadSound('materials/sounds/MenuBts.wav');
  MenuBT = loadSound('materials/sounds/MenuBT2.mp3');
  
  //Background Music
  //backgroundMS = loadSound('materials/sounds/horrorBGM.mp3');
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
  MenuBar1.size(width, 200);
  MenuBar1.position(-width * 0.7, height * 0.018);
  MenuBar1.mousePressed(MenuBar1_Pressed);
  
  MenuBar2 = createImg('materials/images/buttons/MenuBT2.png', 'Scan-Button');
  MenuBar2.size(width, 200);
  MenuBar2.position(-width * 0.14, height * 0.018);
  MenuBar2.mousePressed(MenuBar2_Pressed);
  MenuBar2.hide();
  
  ScanBT = createImg('materials/images/buttons/ScanAR_Button.png', 'Scan-Button');
  ScanBT.size(MenuBTs_WH, MenuBTs_WH);
  ScanBT.position(width * 0.05, height * 0.028);
  ScanBT.mousePressed(Scan_Pressed);
  ScanBT.hide();
  
  HelpBT = createImg('materials/images/buttons/Hint_Button.png', 'Scan-Button');
  HelpBT.size(MenuBTs_WH, MenuBTs_WH);
  HelpBT.position(width * 0.25, height * 0.028);
  HelpBT.mousePressed(Help_Pressed);
  HelpBT.hide();
  
  InventoryBT = createImg('materials/images/buttons/Inventory_Button.png', 'Scan-Button');
  InventoryBT.size(MenuBTs_WH, MenuBTs_WH);
  InventoryBT.position(width * 0.45, height * 0.028);
  InventoryBT.mousePressed(Inventory_Pressed);
  InventoryBT.hide();
  
  AchievementBT = createImg('materials/images/buttons/Achievement_Button.png', 'Scan-Button');
  AchievementBT.size(MenuBTs_WH, MenuBTs_WH);
  AchievementBT.position(width * 0.65, height * 0.028);
  AchievementBT.mousePressed(Achievement_Pressed);
  AchievementBT.hide();

  
  //MiniGame-1 Progress
  if (UseN11 == false) {
	MiniGameN1 = localStorage.getItem('MiniGameN1');
	UseN11 = true;
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
}

function MenuBar1_Pressed() {
	MenuBT.setVolume(0.8);
	MenuBT.play();
	
	MenuBar1.hide();
	MenuBar2.show();
	ScanBT.show();
	HelpBT.show();
	InventoryBT.show();
	AchievementBT.show();
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
}

function Scan_Pressed() {
	MenuBts.setVolume(0.2);
	MenuBts.play();
	
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
  let rectX = inventoryBT_X + inventoryBT_Width + width * 0.22; // Place the rectangle slightly to the right of the button
  let rectY = inventoryBT_Y - height * 0.015; // Align the top of the rectangle with the button
  
  // Create a container for the rectangle
  let rect = document.createElement("div");
  rect.style.position = "absolute";
  rect.style.left = `${rectX}px`; // Position the rectangle
  rect.style.top = `${rectY}px`;
  rect.style.width = "200px"; // Adjust size as needed
  rect.style.height = "400px"; // Adjust size as needed
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
  codeText.style.fontSize = "35px"; // Adjust font size as needed
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
	
	AchievementBT.attribute('src', 'materials/images/buttons/Achievement_Button_Press.png');
	setTimeout(function () {
		AchievementBT.attribute("src", "materials/images/buttons/Achievement_Button.png");
    }, 400);
}

let fullscreenActivated = false;

function mousePressed() {
  if (!fullscreenActivated && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
    fullscreenActivated = true; // Mark as activated
  }
}