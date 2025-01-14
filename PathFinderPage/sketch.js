// Retrieve the stored DifficultySL value from localStorage
const DifficultySL = localStorage.getItem('DifficultySL');

// Retrieve the stored DifficultySL value from localStorage
const TotorialComplete_C  = localStorage.getItem('TotorialComplete_PathFinder');
let TotorialComplete = false;

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

let pressedCounter = 0; // Counter to keep track of MLP presses

let backgroundMusic;

// Define the codes for each MLP
  const codes = {
    1: "2468",
    2: "1357",
    3: "2025",
    4: "1999",
    5: "4321",
    6: "1984",
  };
  
  // Array to store the initial codes and their replacements
  let codes2 = ["????", "????", "????", "????", "????", "????"];
  let replacementCodes1 = ["XXXX", "13XX", "2X2X", "XXXX", "4321", "1984"];
  let replacementCodes2 = ["2468", "1357", "2025", "1999", "4321", "1984"];
  
  // Variable to track if the inventory is currently visible
  let inventoryVisible = false;
  
  // Define variables at the top of the script
  let currentJoinRoomInput = null;
  let currentJoinRoomSubmitButton = null;

function preload() {
  backgroundImage1 = loadImage('materials/images/PathFinderBG1.png'); 
  backgroundImage2 = loadImage('materials/images/PathFinderBG2.png');
  
  MapBackground = loadImage('materials/images/MapBackground.png');
  
  // Load background music
  backgroundMusic = loadSound('materials/sounds/Dark Piano Sociopath.mp3');
  
  typingSounds.push(loadSound('materials/sounds/Type1.mp3'));
  typingSounds.push(loadSound('materials/sounds/Type2.mp3'));
  typingSounds.push(loadSound('materials/sounds/Type3.mp3'));
  
  CloseInfo = loadSound('materials/sounds/CloseInfo.mp3');
  MarkerPress = loadSound('materials/sounds/MarkerPress.mp3');
  LocationSelect = loadSound('materials/sounds/LocationSelected.mp3');
  MenuBts = loadSound('materials/sounds/MenuBts.mp3');
  MenuBT = loadSound('materials/sounds/MenuBT2.mp3');
  ScanBT = loadSound('materials/sounds/ScanBT.mp3');
  MapPiece = loadSound('materials/sounds/MapPiece.mp3');
  SubmitBT = loadSound('materials/sounds/SubmitBT.mp3');
  CompleteMap = loadSound('materials/sounds/CompleteMap.mp3');
  Error = loadSound('materials/sounds/Error.mp3');
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
  

    const customStyleElement = document.createElement("style");
customStyleElement.type = "text/css";
customStyleElement.innerHTML = `
  input {
    background-color: #1e1e1e; /* Dark background for the input box */
    color: #ffffff; /* White text inside the input box */
    border: 2px solid #3a3a3a; /* Subtle border */
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
  }

  input:focus {
    outline: none; /* Remove default focus outline */
    border-color: #4caf50; /* Highlight border when focused */
    box-shadow: 0 0 10px #4caf50; /* Glow effect */
  }

  input::placeholder {
    color: #7a7a7a; /* Lighter gray for placeholder text */
    font-size: 14px;
    font-style: italic;
  }

  button {
    background-color: #4caf50; /* Green background for button */
    color: #ffffff; /* White text on button */
    border: none; /* Remove border */
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #45a049; /* Darker green on hover */
  }

  button:active {
    background-color: #3e8e41; /* Even darker green on click */
  }
`;
document.head.appendChild(customStyleElement);

  
  MLP3_Width = width * 0.5242;
  MLP3_Height = height * 0.6419;
  MLP3_Y = height - MLP3_Height;
  
  MLP4_Width = width * 0.4831;
  MLP4_Height = height * 0.7834;
  MLP4_X = width - MLP4_Width;
  MLP4_Y = height - MLP4_Height;
  
  MLP3_4 = width * 0.6865;
  MLP1_Width = width * 0.4104;
  MLP1_Height = height * 0.3632;
  MLP1_X = width - MLP3_4;
  MLP1_Y = height - MLP1_Height;
  
  MLP6_Width = width * 0.4085;
  MLP6_Height = height * 0.5614;
  
  MLP2_Width = width * 0.476;
  MLP2_Height = height * 0.5079;
  MLP2_X = width - MLP2_Width;
  
  MLP6_2 = width * 0.695;
  MLP5_Width = width * 0.4054;
  MLP5_Height = height * 0.505;
  MLP5_X = width - MLP6_2;
  
  MenuBT_W = width * 0.08;
  MenuBT_H = width * 0.45;
  
	
  BT_WH = width * 0.06;
  BT_WH2 = width * 0.12;
  BT_WH3 = width * 0.03;
  
  Arrow_W = width * 0.08;
  Arrow_H = width * 0.15;
  
  Arrow_X1 = width * 0.85;
  Arrow_Y1 = height * 0.4;
  
  Arrow_X2 = width * 0.12;
  Arrow_Y2 = height * 0.1;
  
  Arrow_X3 = width * 0.097;
  Arrow_Y3 = height * 0.028;
  Arrow_Y4 = height * 0.165;
  Arrow_Y5 = height * 0.28;
  
  
  
  MLP6 = createImg('materials/images/Map_Parts/MPL_6.png', 'Not Active Map Parts 6');
  MLP6.size(MLP6_Width, MLP6_Height);
  MLP6.position(0, 0);
  MLP6.mousePressed(MLP6Pressed);
  //MLP6.hide();
  
  MLP2 = createImg('materials/images/Map_Parts/MPL_2.png', 'Not Active Map Parts 2');
  MLP2.size(MLP2_Width, MLP2_Height);
  MLP2.position(MLP2_X, 0);
  MLP2.mousePressed(MLP2Pressed);
  //MLP2.hide();
  
  MLP4 = createImg('materials/images/Map_Parts/MPL_4.png', 'Not Active Map Parts 4');
  MLP4.size(MLP4_Width, MLP4_Height);
  MLP4.position(MLP4_X, MLP4_Y);
  MLP4.mousePressed(MLP4Pressed);
  //MLP4.hide();
  
  MLP3 = createImg('materials/images/Map_Parts/MPL_3.png', 'Not Active Map Parts 3');
  MLP3.size(MLP3_Width, MLP3_Height);
  MLP3.position(0, MLP3_Y);
  MLP3.mousePressed(MLP3Pressed);
  //MLP3.hide();
  
  MLP5 = createImg('materials/images/Map_Parts/MPL_5.png', 'Not Active Map Parts 5');
  MLP5.size(MLP5_Width, MLP5_Height);
  MLP5.position(MLP5_X, -2);
  MLP5.mousePressed(MLP5Pressed);
  //MLP5.hide();
  
  MLP1 = createImg('materials/images/Map_Parts/MPL_1.png', 'Not Active Map Parts 1');
  MLP1.size(MLP1_Width, MLP1_Height);
  MLP1.position(MLP1_X, MLP1_Y);
  MLP1.mousePressed(MLP1Pressed);
  //MLP1.hide();
  
  Map_Unlk = createImg('materials/images/MapUnlocked.png', 'Active Map');
  Map_Unlk.size(width, height);
  Map_Unlk.position(0, 0);
  Map_Unlk.hide();
  
  MenuBT1 = createImg('materials/images/buttons/MenuBT1.png', 'Menu Button');
  MenuBT1.size(MenuBT_W, MenuBT_H);
  MenuBT1.position(width * 0.025, -height * 0.75);
  MenuBT1.mousePressed(MenuPressed1);
  //MenuBT1.hide();
  
  MenuBT2 = createImg('materials/images/buttons/MenuBT1.png', 'Menu Button');
  MenuBT2.size(MenuBT_W, MenuBT_H);
  MenuBT2.position(width * 0.025, -height * 0.4);
  MenuBT2.mousePressed(MenuPressed2);
  MenuBT2.hide();
  
  JoinRoom_BT = createImg('materials/images/buttons/JoinRoom_Button.png', 'Join Room Button');
  JoinRoom_BT.size(BT_WH, BT_WH);
  JoinRoom_BT.position(width * 0.035, height * 0.035);
  JoinRoom_BT.mousePressed(JoinRoomPressed);
  JoinRoom_BT.hide();
  
  Inventory_BT = createImg('materials/images/buttons/Inventory_Button.png', 'Inventory Button');
  Inventory_BT.size(BT_WH, BT_WH);
  Inventory_BT.position(width * 0.035, height * 0.055 + BT_WH);
  Inventory_BT.mousePressed(InventoryPressed);
  Inventory_BT.hide();
  
  Achievement_BT = createImg('materials/images/buttons/Achievement_Button.png', 'Achievement Button');
  Achievement_BT.size(BT_WH, BT_WH);
  Achievement_BT.position(width * 0.035, height * 0.075 + (BT_WH * 2));
  Achievement_BT.mousePressed(AchievementPressed);
  Achievement_BT.hide();
  
  ScanRoom_BT = createImg('materials/images/buttons/ScanRoom_Button.png', 'ScanRoom Button');
  ScanRoom_BT.size(BT_WH2 + width * 0.009, BT_WH2);
  ScanRoom_BT.position(width * 0.856, height * 0.71);
  ScanRoom_BT.mousePressed(ScanRoomPressed);
  
  MapMarker1 = createImg('materials/images/buttons/MapMarker1_1.png', 'Map Marker 1');
  MapMarker1.size(BT_WH3, BT_WH3);
  MapMarker1.position(width * 0.5, height * 0.7);
  MapMarker1.mousePressed(MapMarker1Pressed);
  MapMarker1.hide();
  
  MapMarker2 = createImg('materials/images/buttons/MapMarker1_1.png', 'Map Marker 2');
  MapMarker2.size(BT_WH3, BT_WH3);
  MapMarker2.position(width * 0.66, height * 0.26);
  MapMarker2.mousePressed(MapMarker2Pressed);
  MapMarker2.hide();
  
  MapMarker3 = createImg('materials/images/buttons/MapMarker1_1.png', 'Map Marker 3');
  MapMarker3.size(BT_WH3, BT_WH3);
  MapMarker3.position(width * 0.43, height * 0.52);
  MapMarker3.mousePressed(MapMarker3Pressed);
  MapMarker3.hide();
  
  MapMarker_USB = createImg('materials/images/buttons/MapMarker2_1.png', 'Map Marker for Item 1');
  MapMarker_USB.size(BT_WH3, BT_WH3);
  MapMarker_USB.position(width * 0.28, height * 0.35);
  MapMarker_USB.mousePressed(MapMarker_USBPressed);
  MapMarker_USB.hide();
  
  MapMarker4 = createImg('materials/images/buttons/MapMarker1_1.png', 'Map Marker 4');
  MapMarker4.size(BT_WH3, BT_WH3);
  MapMarker4.position(width * 0.67, height * 0.51);
  MapMarker4.mousePressed(MapMarker4Pressed);
  MapMarker4.hide();
  
  MapMarker5 = createImg('materials/images/buttons/MapMarker1_1.png', 'Map Marker 5');
  MapMarker5.size(BT_WH3, BT_WH3);
  MapMarker5.position(width * 0.42, height * 0.28);
  MapMarker5.mousePressed(MapMarker5Pressed);
  MapMarker5.hide();
  
  MapMarker6 = createImg('materials/images/buttons/MapMarker1_1.png', 'Map Marker 6');
  MapMarker6.size(BT_WH3, BT_WH3);
  MapMarker6.position(width * 0.27, height * 0.36);
  MapMarker6.mousePressed(MapMarker6Pressed);
  MapMarker6.hide();
  
  MapMarker7 = createImg('materials/images/buttons/MapMarker1_1.png', 'Map Marker 7');
  MapMarker7.size(BT_WH3, BT_WH3);
  MapMarker7.position(width * 0.35, height * 0.4);
  MapMarker7.mousePressed(MapMarker7Pressed);
  MapMarker7.hide();
  
  TitBit_Point1 = createImg('materials/images/TitBit/Arrow1.png', 'TitBit Arrow 1');
  TitBit_Point1.size(Arrow_W, Arrow_H);
  TitBit_Point1.position(Arrow_X1, Arrow_Y1);
  TitBit_Point1.hide();
  
  TitBit_Point2 = createImg('materials/images/TitBit/Arrow2.png', 'TitBit Arrow 2');
  TitBit_Point2.size(Arrow_H, Arrow_W);
  TitBit_Point2.position(Arrow_X2, Arrow_Y2);
  TitBit_Point2.hide();
  
  TitBit_Point3 = createImg('materials/images/TitBit/Arrow3.png', 'TitBit Arrow 3');
  TitBit_Point3.size(Arrow_H, Arrow_W);
  TitBit_Point3.position(Arrow_X3, Arrow_Y3);
  TitBit_Point3.hide();
  
  TitBit_Point4 = createImg('materials/images/TitBit/Arrow3.png', 'TitBit Arrow 4');
  TitBit_Point4.size(Arrow_H, Arrow_W);
  TitBit_Point4.position(Arrow_X3, Arrow_Y4);
  TitBit_Point4.hide();
  
  TitBit_Point5 = createImg('materials/images/TitBit/Arrow4.png', 'TitBit Arrow 5');
  TitBit_Point5.size(Arrow_H, Arrow_W);
  TitBit_Point5.position(Arrow_X3, Arrow_Y5);
  TitBit_Point5.hide();
  
  
  // Check and restore MLP state
  if (localStorage.getItem('MLP1_Act') === 'true') {
    MLP1.attribute('src', localStorage.getItem('MLP1_src'));
    MLP1.mousePressed(() => {}); // Disable further interaction
    MLP1_Act = true;
  }
  
  if (localStorage.getItem('MLP2_Act') === 'true') {
    MLP2.attribute('src', localStorage.getItem('MLP2_src'));
    MLP2.mousePressed(() => {}); // Disable further interaction
    MLP2_Act = true;
  }
  
  if (localStorage.getItem('MLP3_Act') === 'true') {
    MLP3.attribute('src', localStorage.getItem('MLP3_src'));
    MLP3.mousePressed(() => {}); // Disable further interaction
    MLP3_Act = true;
  }
  
  if (localStorage.getItem('MLP4_Act') === 'true') {
    MLP4.attribute('src', localStorage.getItem('MLP4_src'));
    MLP4.mousePressed(() => {}); // Disable further interaction
    MLP4_Act = true;
  }
  
  if (localStorage.getItem('MLP5_Act') === 'true') {
    MLP5.attribute('src', localStorage.getItem('MLP5_src'));
    MLP5.mousePressed(() => {}); // Disable further interaction
    MLP5_Act = true;
  }
  
  if (localStorage.getItem('MLP6_Act') === 'true') {
    MLP6.attribute('src', localStorage.getItem('MLP6_src'));
    MLP6.mousePressed(() => {}); // Disable further interaction
    MLP6_Act = true;
  }
  
  
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
  

  //MiniGame-1 Progress
  if (UseN11 == false) {
	MiniGameN1 = localStorage.getItem('MiniGameN1');
	UseN11 = true;
	//
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
  
  windowResized();
  updateInventoryList();
  
  // Play background music on loop
  backgroundMusic.loop();
  backgroundMusic.setVolume(0.4); // Adjust volume if needed
}

function draw() {
  
  if (displayWidth < 700) {
    image(MapBackground, 0, 0, width, height);
  } else {
    image(MapBackground, 0, 0, width, height);
  }
  
  textAlign(CENTER, CENTER);
  
  if (MLP1_Act == true && MLP2_Act == true && MLP3_Act == true && MLP4_Act == true && MLP5_Act == true && MLP6_Act == true && OneUse == false){
	  setTimeout(function () {
		if (!OneUse) {
		  CompleteMap.setVolume(0.9);
		  CompleteMap.play();
		}
		  
		Map_Unlk.show();	
		OneUse = true;
		
		MenuBT1.attribute("src", "materials/images/buttons/MenuBT2.png");
		MenuBT2.attribute("src", "materials/images/buttons/MenuBT2.png");
		
		JoinRoom_BT.attribute("src", "materials/images/buttons/JoinRoom_Button2.png");
		Inventory_BT.attribute("src", "materials/images/buttons/Inventory_Button2.png");
		Achievement_BT.attribute("src", "materials/images/buttons/Achievement_Button2.png");
		
		MenuBT2.attribute("src", "materials/images/buttons/MenuBT2.png");
	  }, 2000);
  }
}

// Generic function for map marker press handling
function handleMapMarkerPress(marker, pressedImageSrc, defaultImageSrc, canvasImageSrc, descriptionText, title) {
    MarkerPress.play();
    // Change the marker image to the pressed state
    marker.attribute("src", pressedImageSrc);

    // Set a timeout to revert back to the default state
    setTimeout(function () {
        marker.attribute("src", defaultImageSrc);
    }, 300);

    // Display a black rectangle with the specific image, title, and description
    setTimeout(function () {
        displayBlackRectWithImageAndText(canvasImageSrc, descriptionText, title);
    }, 400);
}

// Function to display the black rectangle with the specific image, title, and text
function displayBlackRectWithImageAndText(imageSrc, descriptionText, title) {
    // Create or find the overlay container
    let overlay = document.getElementById("overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "overlay";
        document.body.appendChild(overlay);
    }

    // Style the overlay to cover the entire screen
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "black";
    overlay.style.display = "flex";
    overlay.style.flexDirection = "row";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "space-around";
    overlay.style.zIndex = "1000";

    // Add the image to the left side
    let image = overlay.querySelector("img");
    if (!image) {
        image = document.createElement("img");
        overlay.appendChild(image);
    }

    image.src = imageSrc;
    image.style.maxWidth = "40%";
    image.style.maxHeight = "100%";
    image.style.objectFit = "contain";
    image.style.marginLeft = "25px";

    // Add the content container for title, description, and button
    let contentContainer = overlay.querySelector("div.content-container");
    if (!contentContainer) {
        contentContainer = document.createElement("div");
        contentContainer.className = "content-container";
        overlay.appendChild(contentContainer);
    }

    contentContainer.style.display = "flex";
    contentContainer.style.flexDirection = "column";
    contentContainer.style.justifyContent = "flex-start";
    contentContainer.style.alignItems = "center";
    contentContainer.style.color = "white";
    contentContainer.style.maxWidth = "55%";

    // Add the title
    let titleElement = contentContainer.querySelector("h1");
    if (!titleElement) {
        titleElement = document.createElement("h1");
        contentContainer.appendChild(titleElement);
    }

    titleElement.textContent = title;
    titleElement.style.marginBottom = "10px";
    titleElement.style.textAlign = "center";

    // Add the text to the content container
    let paragraph = contentContainer.querySelector("p");
    if (!paragraph) {
        paragraph = document.createElement("p");
        contentContainer.appendChild(paragraph);
    }

    paragraph.textContent = descriptionText;
    paragraph.style.marginBottom = "30px";
    paragraph.style.textAlign = "center";

    // Add the close button to the content container
    let closeButton = contentContainer.querySelector("button");
    if (!closeButton) {
        closeButton = document.createElement("button");
        closeButton.textContent = "X";
        contentContainer.appendChild(closeButton);
    }

    closeButton.style.padding = "10px 20px";
    closeButton.style.backgroundColor = "transparent";
    closeButton.style.color = "white";
    closeButton.style.border = "2px solid white";
    closeButton.style.borderRadius = "4px";
    closeButton.style.fontSize = "18px";
    closeButton.style.cursor = "pointer";
    closeButton.style.transition = "transform 0.2s ease, background-color 0.2s ease";
    closeButton.style.alignSelf = "center";

    closeButton.onmouseover = () => {
        closeButton.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    };

    closeButton.onmouseout = () => {
        closeButton.style.backgroundColor = "transparent";
    };

    closeButton.onmousedown = () => {
        closeButton.style.transform = "scale(0.95)";
    };

    closeButton.onmouseup = () => {
        closeButton.style.transform = "scale(1)";
    };

    closeButton.onclick = () => {
        overlay.style.display = "none";
        CloseInfo.play();
    };
}


// Define specific marker functions
function MapMarker1Pressed() {
    handleMapMarkerPress(MapMarker1, "materials/images/buttons/MapMarker1_2.png", "materials/images/buttons/MapMarker1_1.png", "materials/images/Locations/Location1.jpg", "Hope lies deep within the rotten walls of the monumental Adylum, left by patients wheeping like little children. Those who passed the stone cold iron gates of the Main Entrance knew no exit. The musty wooden planks nailed outside the pine door of the arched gate left by workers marked the end of a sinister era. The colour on the walls faded and the glass on the windows tarnished and shattered in thousands of pieces. Those who attempt to transpass shall suffer a fate worse than death!", "The Main Entrance");
}

function MapMarker2Pressed() {
    handleMapMarkerPress(MapMarker2, "materials/images/buttons/MapMarker1_2.png", "materials/images/buttons/MapMarker1_1.png", "materials/images/Locations/Location2.jpg", "As they were passing throught the frosty white coridors, the dense cold atmosphere started to choke them and drain every last bit of humanity left within their blood. The room was filled with sitting benches and at the far right  end, the secretary's office where they kept records  of all those poor subjects who God abandoned to rot and putrefy. Now only darkness remains at the frosty white coridors of the Reception, leaving a sence of stench lurking beneath  the locked doors and countless of numerals  piled up on the secretery's office. Some, paid  no mind at them, while others...", "The Reception");
}

function MapMarker3Pressed() {
    handleMapMarkerPress(MapMarker3, "materials/images/buttons/MapMarker1_2.png", "materials/images/buttons/MapMarker1_1.png", "materials/images/Locations/Location3.jpg", "The once bustling hallways of the Repose Chamber have turned into hollow pits of sorrow and fear. Where  once was standing a booth that visitors could hang their  coats and leave their personal items, now only lies empty  hallways with trembling lights and broken pipes. The perished  scientists where once taking their test subjects to the large rooms of the first floor. Where once was liyng madness and terror, now one can find nothing but dust and mold and  broken syrienges used by the 'doctors' to 'treat' their patients in rather uncanny ways. 'It's for the common good' they repeatidly said. 'LET THERE BE LIGHT!' they said. But with great light, comes great darkness as well.", "The Repose Chamber");
}

function MapMarker4Pressed() {
    handleMapMarkerPress(MapMarker4, "materials/images/buttons/MapMarker1_2.png", "materials/images/buttons/MapMarker1_1.png", "materials/images/Locations/Location4.jpg", "This is a random description for Location 4.");
}

function MapMarker5Pressed() {
    handleMapMarkerPress(MapMarker5, "materials/images/buttons/MapMarker1_2.png", "materials/images/buttons/MapMarker1_1.png", "materials/images/Locations/Location5.jpg", "This is a random description for Location 5.");
}

function MapMarker6Pressed() {
    handleMapMarkerPress(MapMarker6, "materials/images/buttons/MapMarker1_2.png", "materials/images/buttons/MapMarker1_1.png", "materials/images/Locations/Location6.jpg", "This is a random description for Location 6.");
}

function MapMarker7Pressed() {
    handleMapMarkerPress(MapMarker7, "materials/images/buttons/MapMarker1_2.png", "materials/images/buttons/MapMarker1_1.png", "materials/images/Locations/Location7.jpg", "This is a random description for Location 7.");
}

function MapMarker_USBPressed() {
    handleMapMarkerPress(MapMarker_USB, "materials/images/buttons/MapMarker2_2.png", "materials/images/buttons/MapMarker2_1.png", "materials/images/Locations/USB_Location.jpg", "The most ominous and excrusiating of actions took places within the narrow dark halls of  the Crematorium. Screams and cries where  constistnly audible through the iron door of  the chambers but never to the outside. Most of those who entered inside never came out. A chapel was built next to the white building, where often a lot of faithful paid a visit to light up a  candle in memory of those who paid with  their flesh. The place today is filled with a bone cracking silence that sometimes feels louder than noise!", "The Crematorium");
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  MLP3_Width = width * 0.5242;
  MLP3_Height = height * 0.6419;
  MLP3_Y = height - MLP3_Height;
  
  MLP4_Width = width * 0.4831;
  MLP4_Height = height * 0.7834;
  MLP4_X = width - MLP4_Width;
  MLP4_Y = height - MLP4_Height;
  
  MLP3_4 = width * 0.6865;
  MLP1_Width = width * 0.4104;
  MLP1_Height = height * 0.3632;
  MLP1_X = width - MLP3_4;
  MLP1_Y = height - MLP1_Height;
  
  MLP6_Width = width * 0.4085;
  MLP6_Height = height * 0.5614;
  
  MLP2_Width = width * 0.476;
  MLP2_Height = height * 0.5079;
  MLP2_X = width - MLP2_Width;
  
  MLP6_2 = width * 0.695;
  MLP5_Width = width * 0.4054;
  MLP5_Height = height * 0.505;
  MLP5_X = width - MLP6_2;
  
  MenuBT_W = width * 0.08;
  MenuBT_H = width * 0.45;
	
  BT_WH = width * 0.06;
  BT_WH2 = width * 0.12;
  BT_WH3 = width * 0.04;
  
  Arrow_W = width * 0.08;
  Arrow_H = width * 0.15;
  
  Arrow_X1 = width * 0.85;
  Arrow_Y1 = height * 0.4;
  
  Arrow_X2 = width * 0.12;
  Arrow_Y2 = height * 0.1;
  
  Arrow_X3 = width * 0.097;
  Arrow_Y3 = height * 0.028;
  Arrow_Y4 = height * 0.165;
  Arrow_Y5 = height * 0.28;
  
  MLP1.size(MLP1_Width, MLP1_Height);
  MLP1.position(MLP1_X, MLP1_Y);
  
  MLP2.size(MLP2_Width, MLP2_Height);
  MLP2.position(MLP2_X, 0);
  
  MLP3.size(MLP3_Width, MLP3_Height);
  MLP3.position(0, MLP3_Y);
  
  MLP4.size(MLP4_Width, MLP4_Height);
  MLP4.position(MLP4_X, MLP4_Y);
  
  MLP5.size(MLP5_Width, MLP5_Height);
  MLP5.position(MLP5_X, -2);
  
  MLP6.size(MLP6_Width, MLP6_Height);
  MLP6.position(0, 0);
  
  
  ScanRoom_BT.size(BT_WH2 + width * 0.009, BT_WH2);
  ScanRoom_BT.position(width * 0.856, height * 0.71);
  
  MenuBT1.size(MenuBT_W, MenuBT_H);
  MenuBT1.position(width * 0.025, -height * 0.75);
  
  MenuBT2.size(MenuBT_W, MenuBT_H);
  MenuBT2.position(width * 0.025, -height * 0.4);
  
  
  JoinRoom_BT.size(BT_WH, BT_WH);
  JoinRoom_BT.position(width * 0.035, height * 0.035);
  
  Inventory_BT.size(BT_WH, BT_WH);
  Inventory_BT.position(width * 0.035, height * 0.055 + BT_WH);
  
  Achievement_BT.size(BT_WH, BT_WH);
  Achievement_BT.position(width * 0.035, height * 0.075 + (BT_WH * 2));
  
  
  MapMarker1.size(BT_WH3, BT_WH3);
  MapMarker1.position(width * 0.5, height * 0.7);
  
  MapMarker2.size(BT_WH3, BT_WH3);
  MapMarker2.position(width * 0.66, height * 0.26);
  
  MapMarker3.size(BT_WH3, BT_WH3);
  MapMarker3.position(width * 0.43, height * 0.52);
  
  MapMarker4.size(BT_WH3, BT_WH3);
  MapMarker4.position();width * 0.67, height * 0.51
  
  MapMarker5.size(BT_WH3, BT_WH3);
  MapMarker5.position(width * 0.42, height * 0.28);
  
  MapMarker6.size(BT_WH3, BT_WH3);
  MapMarker6.position(width * 0.27, height * 0.36);
  
  MapMarker7.size(BT_WH3, BT_WH3);
  MapMarker7.position(width * 0.35, height * 0.4);
  
  
  Map_Unlk.size(width, height);
  Map_Unlk.position(0, 0);
  
  
  TitBit_Point1.size(Arrow_W, Arrow_H);
  TitBit_Point1.position(Arrow_X1, Arrow_Y1);
  
  TitBit_Point2.size(Arrow_H, Arrow_W);
  TitBit_Point2.position(Arrow_X2, Arrow_Y2);
  
  TitBit_Point3.size(Arrow_H, Arrow_W);
  TitBit_Point3.position(Arrow_X3, Arrow_Y3);
  
  TitBit_Point4.size(Arrow_H, Arrow_W);
  TitBit_Point4.position(Arrow_X3, Arrow_Y4);
  
  TitBit_Point5.size(Arrow_H, Arrow_W);
  TitBit_Point5.position(Arrow_X3, Arrow_Y5);
}

function MenuPressed1() {
	if (!StartBarrier) {
		MenuBT.setVolume(0.8);
		MenuBT.play();
		
		MenuBT1.hide();
		MenuBT2.show();
		JoinRoom_BT.show();
		Inventory_BT.show();
		Achievement_BT.show();
	}
}

function MenuPressed2() {
	MenuBT.setVolume(0.8);
	MenuBT.play();
	
	MenuBT2.hide();
	MenuBT1.show();
	JoinRoom_BT.hide();
	Inventory_BT.hide();
	Achievement_BT.hide();
	
	if (inventoryVisible) {
		hideInventoryList();
		
		// Toggle inventory visibility
		inventoryVisible = !inventoryVisible;
	}
	
	if (currentJoinRoomInput && currentJoinRoomSubmitButton) {
		currentJoinRoomInput.remove();
		currentJoinRoomSubmitButton.remove();
		currentJoinRoomInput = null;
		currentJoinRoomSubmitButton = null;
		return; // Exit function if the elements were just hidden
  }
}

function InventoryPressed() {
  MenuBts.setVolume(0.2);
  MenuBts.play();
  
  //Hide JoinRoom stuff
  if (currentJoinRoomInput && currentJoinRoomSubmitButton) {
		currentJoinRoomInput.remove();
		currentJoinRoomSubmitButton.remove();
		currentJoinRoomInput = null;
		currentJoinRoomSubmitButton = null;
  }

  // Update button press visuals
  if (MLP1_Act && MLP2_Act && MLP3_Act && MLP4_Act && MLP5_Act && MLP6_Act) {
    Inventory_BT.attribute('src', 'materials/images/buttons/Inventory_Button2_Press.png');
    setTimeout(function () {
      Inventory_BT.attribute("src", "materials/images/buttons/Inventory_Button2.png");
    }, 400);
  } else {
    Inventory_BT.attribute('src', 'materials/images/buttons/Inventory_Button_Press.png');
    setTimeout(function () {
      Inventory_BT.attribute("src", "materials/images/buttons/Inventory_Button.png");
    }, 400);
  }

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
    codes2[0] = (MLP1_Act ? replacementCodes2[0] : replacementCodes1[0]);
  }
  if (MiniGameN2) {
    codes2[1] = (MLP2_Act ? replacementCodes2[1] : replacementCodes1[1]);
  }
  if (MiniGameN3) {
    codes2[2] = (MLP3_Act ? replacementCodes2[2] : replacementCodes1[2]);
  }
  if (MiniGameN4) {
    codes2[3] = (MLP4_Act ? replacementCodes2[3] : replacementCodes1[3]);
  }
  if (MiniGameN5) {
    codes2[4] = (MLP5_Act ? replacementCodes2[4] : replacementCodes1[4]);
  }
  if (MiniGameN6) {
    codes2[5] = (MLP6_Act ? replacementCodes2[5] : replacementCodes1[5]);
  }
  
  //Debug
  console.log("MiniGameN1:", MiniGameN1, "MLP1_Act:", MLP1_Act);
  console.log("MiniGameN2:", MiniGameN2, "MLP2_Act:", MLP2_Act);
  console.log("MiniGameN3:", MiniGameN3, "MLP3_Act:", MLP3_Act);
  console.log("MiniGameN4:", MiniGameN4, "MLP4_Act:", MLP4_Act);
  console.log("MiniGameN5:", MiniGameN5, "MLP5_Act:", MLP5_Act);
  console.log("MiniGameN6:", MiniGameN6, "MLP6_Act:", MLP6_Act);

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
  let inventoryBT_Y = height * 0.055 + BT_WH; // Y position from Inventory_BT.position()
  let inventoryBT_Width = BT_WH; // Width from Inventory_BT.size()
  let inventoryBT_Height = BT_WH; // Height from Inventory_BT.size()

  // Calculate the position for the rectangle
  let rectX = inventoryBT_X + inventoryBT_Width + 20; // Place the rectangle slightly to the right of the button
  let rectY = inventoryBT_Y - height * 0.15; // Align the top of the rectangle with the button
  
  // Create a container for the rectangle
  let rect = document.createElement("div");
  rect.style.position = "absolute";
  rect.style.left = `${rectX}px`; // Position the rectangle
  rect.style.top = `${rectY}px`;
  rect.style.width = "70px"; // Adjust size as needed
  rect.style.height = "180px"; // Adjust size as needed
  rect.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Black rectangle with opacity
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
  codeText.style.fontSize = "14px"; // Adjust font size as needed
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

function JoinRoomPressed() {
	MenuBts.setVolume(0.2);
	MenuBts.play();
	
	//Hide Inventory stuff
	if (inventoryVisible) {
		hideInventoryList();
		
		// Toggle inventory visibility
		inventoryVisible = !inventoryVisible;
	}
	
    if (MLP1_Act == true && MLP2_Act == true && MLP3_Act == true && MLP4_Act == true && MLP5_Act == true && MLP6_Act == true) {
	  JoinRoom_BT.attribute('src', 'materials/images/buttons/JoinRoom_Button2_Press.png');
      setTimeout(function () {
          JoinRoom_BT.attribute("src", "materials/images/buttons/JoinRoom_Button2.png");
      }, 400);  
    } else {
      JoinRoom_BT.attribute('src', 'materials/images/buttons/JoinRoom_Button_Press.png');
      setTimeout(function () {
          JoinRoom_BT.attribute("src", "materials/images/buttons/JoinRoom_Button.png");
      }, 400);
    }

  // If the input box and button are visible, hide them
  if (currentJoinRoomInput && currentJoinRoomSubmitButton) {
    currentJoinRoomInput.remove();
    currentJoinRoomSubmitButton.remove();
    currentJoinRoomInput = null;
    currentJoinRoomSubmitButton = null;
    return; // Exit function if the elements were just hidden
  }

  // Create a new input box for the join room code
  currentJoinRoomInput = createInput();
  currentJoinRoomInput.size(width * 0.1, height * 0.05);
  currentJoinRoomInput.position(width * 0.11, height * 0.05); // Position near the JoinRoom button
  currentJoinRoomInput.attribute("placeholder", " 00-00-00 ");
  
  // Apply distinct styling (white background, grey text)
  currentJoinRoomInput.style("background-color", "#ffffff");
  currentJoinRoomInput.style("color", "#7a7a7a");
  currentJoinRoomInput.style("border", "2px solid #c4c4c4");
  currentJoinRoomInput.style("border-radius", "8px");
  currentJoinRoomInput.style("padding", "10px");
  currentJoinRoomInput.style("text-align", "center");
  currentJoinRoomInput.style("font-size", "16px");
  currentJoinRoomInput.style("box-shadow", "0 0 10px rgba(0, 0, 0, 0.1)");

  // Create a submit button for the join room code
  currentJoinRoomSubmitButton = createButton("Join");
  currentJoinRoomSubmitButton.size(width * 0.05, height * 0.11);
  currentJoinRoomSubmitButton.position(width * 0.223, height * 0.05); // Position next to the input box
  currentJoinRoomSubmitButton.style("background-color", "#4caf50");
  currentJoinRoomSubmitButton.style("color", "#ffffff");
  currentJoinRoomSubmitButton.style("border", "none");
  currentJoinRoomSubmitButton.style("border-radius", "8px");
  currentJoinRoomSubmitButton.style("cursor", "pointer");
  currentJoinRoomSubmitButton.style("font-size", "16px");
  currentJoinRoomSubmitButton.style("padding", "0");
  currentJoinRoomSubmitButton.style("transition", "background-color 0.3s ease");
  
  // Add hover and active styles for the button
  currentJoinRoomSubmitButton.mouseOver(() => currentJoinRoomSubmitButton.style("background-color", "#45a049"));
  currentJoinRoomSubmitButton.mouseOut(() => currentJoinRoomSubmitButton.style("background-color", "#4caf50"));
  currentJoinRoomSubmitButton.mousePressed(() => {
    const enteredCode = currentJoinRoomInput.value();
	
	SubmitBT.setVolume(0.8);
	SubmitBT.play();

    // Validate the code and redirect based on the input
    if (enteredCode === "00-00-01") {
      //No MiniGame
    } else if (enteredCode === "00-00-02" && MLP1_Act == true) {
      window.location.href = "pages/MiniGame2/index.html";
    } else if (enteredCode === "00-00-03" && MLP2_Act == true) {
      window.location.href = "pages/MiniGame3/index.html";
    } else if (enteredCode === "00-00-04") {
      //window.location.href = "folder4/index.html";
    } else if (enteredCode === "00-00-05") {
      //window.location.href = "folder5/index.html";
    } else if (enteredCode === "00-00-06") {
      //window.location.href = "folder6/index.html";
	} else if (enteredCode === "00-00-00") {
      localStorage.clear();
    } else {
      console.log("Invalid codec or Not Active yet. Please try again.");
    }

    // Optionally clear the input box
    currentJoinRoomInput.value("");
  });
}

function AchievementPressed() {
	MenuBts.setVolume(0.2);
	MenuBts.play();
	
	if (inventoryVisible) {
		hideInventoryList();
		
		// Toggle inventory visibility
		inventoryVisible = !inventoryVisible;
	}
	
	//Hide JoinRoom stuff
    if (currentJoinRoomInput && currentJoinRoomSubmitButton) {
		currentJoinRoomInput.remove();
		currentJoinRoomSubmitButton.remove();
		currentJoinRoomInput = null;
		currentJoinRoomSubmitButton = null;
    }
	
	if (MLP1_Act == true && MLP2_Act == true && MLP3_Act == true && MLP4_Act == true && MLP5_Act == true && MLP6_Act == true) {
	  Achievement_BT.attribute('src', 'materials/images/buttons/Achievement_Button2_Press.png');
	  setTimeout(function () {
		  Achievement_BT.attribute("src", "materials/images/buttons/Achievement_Button2.png");
      }, 400);
	} else {
	  Achievement_BT.attribute('src', 'materials/images/buttons/Achievement_Button_Press.png');
	  setTimeout(function () {
		  Achievement_BT.attribute("src", "materials/images/buttons/Achievement_Button.png");
      }, 400);	
	}
}

function ScanRoomPressed() {
	if (!StartBarrier) {
		// Check if any of the MapMarkers are visible
		if (
			(MapMarker1.show === true) || 
			(MapMarker2.show === true) || 
			(MapMarker3.show === true) || 
			(MapMarker4.show === true) || 
			(MapMarker5.show === true) || 
			(MapMarker6.show === true) || 
			(MapMarker7.show === true)
		) {
			// Play the Error sound if any map marker is visible
			Error.setVolume(0.5);
			Error.play();
		} else if (!MLP5_Act) {
			// Play the ScanBT sound if MLP5_Act is false
			ScanBT.setVolume(0.8);
			ScanBT.play();
		} else if (!MLP6_Act) {
			// Play the ScanBT sound twice if MLP6_Act is false
			ScanBT.play();
			setTimeout(function () {
				ScanBT.play();
			}, 300);
		} else {
			// Play the Error sound if no conditions are met
			Error.setVolume(0.5);
			Error.play();
		}

		// Change the button's image to indicate it's pressed
		ScanRoom_BT.attribute('src', 'materials/images/buttons/ScanRoom_Button_Press.png');
		setTimeout(function () {
			ScanRoom_BT.attribute("src", "materials/images/buttons/ScanRoom_Button.png");
		}, 200);

		// Show the correct MapMarker if the corresponding MLP variable is false
		if (MLP1_Act === false) {
			MapMarker1.show();
		} else if (MLP2_Act === false) {
			MapMarker2.show();
		} else if (MLP3_Act === false) {
			MapMarker3.show();
		} else if (MLP4_Act === false) {
			MapMarker_USB.show();
		} else if (MLP5_Act === false) { //Check StoryChoice 1
			MapMarker4.show();
		} else if (MLP5_Act === false) {
			MapMarker5.show();
		} else if (MLP6_Act === false) {
			MapMarker6.show();
			setTimeout(function () {
				MapMarker7.show();
			}, 300);
		}
	}
}

function MLP1Pressed(){
	if (!StartBarrier) {
		LocationSelect.setVolume(0.8);
		LocationSelect.play();
		
		console.log("Map-Part-1 Pressed");
		MLPPressed(1); // Call MLPPressed with 1 for MLP1
		
		MLP1.attribute("src", "materials/images/Map_Parts/AP1_Press.png");
		setTimeout(function () {
			MLP1.attribute("src", "materials/images/Map_Parts/MPL_1.png");
	  }, 600);
	}
}

function MLP2Pressed(){
	if (!StartBarrier) {
		LocationSelect.setVolume(0.8);
		LocationSelect.play();
		
		console.log("Map-Part-2 Pressed");
		MLPPressed(2); // Call MLPPressed with 2 for MLP2
		
		MLP2.attribute("src", "materials/images/Map_Parts/AP2_Press.png");
		setTimeout(function () {
			MLP2.attribute("src", "materials/images/Map_Parts/MPL_2.png");
	  }, 600);
	}
}

function MLP3Pressed(){
	if (!StartBarrier) {
		LocationSelect.setVolume(0.8);
		LocationSelect.play();
		
		console.log("Map-Part-3 Pressed");
		MLPPressed(3); // Call MLPPressed with 3 for MLP3
		
		MLP3.attribute("src", "materials/images/Map_Parts/AP3_Press.png");
		setTimeout(function () {
			MLP3.attribute("src", "materials/images/Map_Parts/MPL_3.png");
	  }, 600);
	}
}

function MLP4Pressed(){
	if (!StartBarrier) {
		LocationSelect.setVolume(0.8);
		LocationSelect.play();
		
		console.log("Map-Part-4 Pressed");
		MLPPressed(4); // Call MLPPressed with 4 for MLP4
		
		MLP4.attribute("src", "materials/images/Map_Parts/AP4_Press.png");
		setTimeout(function () {
			MLP4.attribute("src", "materials/images/Map_Parts/MPL_4.png");
	  }, 600);
	}
}

function MLP5Pressed(){
	if (!StartBarrier) {
		LocationSelect.setVolume(0.8);
		LocationSelect.play();
		
		console.log("Map-Part-5 Pressed");
		MLPPressed(5); // Call MLPPressed with 5 for MLP5
		
		MLP5.attribute("src", "materials/images/Map_Parts/AP5_Press.png");
		setTimeout(function () {
			MLP5.attribute("src", "materials/images/Map_Parts/MPL_5.png");
	  }, 600);
	}
}

function MLP6Pressed(){
	if (!StartBarrier) {
		LocationSelect.setVolume(0.8);
		LocationSelect.play();
		
		console.log("Map-Part-6 Pressed");
		MLPPressed(6); // Call MLPPressed with 6 for MLP6
		
		MLP6.attribute("src", "materials/images/Map_Parts/AP6_Press.png");
		setTimeout(function () {
			MLP6.attribute("src", "materials/images/Map_Parts/MPL_6.png");
	  }, 600);
	}
}

// Define an array of titles
const titles = [
  "Old Hospital Selected",
  "Abandoned Warehouse Selected",
  "Mystic Forest Selected",
  "Haunted Mansion Selected",
  "Cursed Library Selected",
  "Forgotten Cave Selected"
];

// Initialize variables to keep track of the current UI elements
let currentTitle = null;
let currentCodeInput = null;
let currentSubmitButton = null;

function MLPPressed(mlpNumber) {
  // Remove previously created elements if they exist
  if (currentTitle) {
    currentTitle.remove();
    currentTitle = null;
  }
  if (currentCodeInput) {
    currentCodeInput.remove();
    currentCodeInput = null;
  }
  if (currentSubmitButton) {
    currentSubmitButton.remove();
    currentSubmitButton = null;
  }

  // Use the corresponding title from the titles array
  const titleText = titles[mlpNumber - 1]; // Subtract 1 because array indices are 0-based

  // Create a title element for the MLP
  currentTitle = createP(titleText);
  currentTitle.position(width * 0.015, height - (height * 0.22));
  currentTitle.style("text-align", "center");
  currentTitle.style("font-size", "20px");
  currentTitle.style("color", "#ffffff"); // Set the color of the title (white for dark theme)

  // Create an input box for the code
  currentCodeInput = createInput();
  currentCodeInput.size(width * 0.21, height * 0.045);
  currentCodeInput.position(2, height - (height * 0.11));
  currentCodeInput.attribute("placeholder", "Enter 4-digit code");
  currentCodeInput.style("text-align", "left");

  // Create a button to submit the code
  currentSubmitButton = createButton("Submit");
  currentSubmitButton.size(width * 0.09, height * 0.105);
  currentSubmitButton.position(width * 0.15, height - (height * 0.11));
  currentSubmitButton.mousePressed(() => {
    let enteredCode = currentCodeInput.value();
	
	SubmitBT.setVolume(0.8);
	SubmitBT.play();

    // Check if the entered code matches the expected code
    if (enteredCode === codes[mlpNumber]) {
      console.log(`Correct code for MLP ${mlpNumber}`);
      
      // Update the corresponding MLP_Code variable
      switch (mlpNumber) {
        case 1:
		  MapPiece.setVolume(0.8);
		  MapPiece.play();
		  
		  MiniGameN1 = true;
		  localStorage.setItem('MiniGameN1', true);
		  
          console.log("Map-Part-1 Activated");
          MLP1.attribute('src', 'materials/images/Map_Parts/AP1.png');      
          MLP1.mousePressed(() => {});
          MLP1_Act = true;
		  MapMarker1.hide();
		  
		  // Save state to localStorage
		  localStorage.setItem('MLP1_Act', true);
		  localStorage.setItem('MLP1_src', 'materials/images/Map_Parts/AP1.png');
          break;
        case 2:
          if (MLP1_Act && MiniGameN2 == true) {
			MapPiece.setVolume(0.8);
		    MapPiece.play();
			  
            console.log("Map-Part-2 Activated");
            MLP2.attribute('src', 'materials/images/Map_Parts/AP2.png');
            MLP2.mousePressed(() => {});
            MLP2_Act = true;
			MapMarker2.hide();
			
			// Save state to localStorage
		    localStorage.setItem('MLP2_Act', true);
		    localStorage.setItem('MLP2_src', 'materials/images/Map_Parts/AP2.png');
          } else {
            console.log("MLP1 must be activated first and MiniGame N2.");
          }
          break;
        case 3:
          if (MLP2_Act && MiniGameN3 == true) {
			MapPiece.setVolume(0.8);
		    MapPiece.play();
			  
            console.log("Map-Part-3 Activated");
            MLP3.attribute('src', 'materials/images/Map_Parts/AP3.png');
            MLP3.mousePressed(() => {});
            MLP3_Act = true;
			MapMarker3.hide();
			
			// Save state to localStorage
		    localStorage.setItem('MLP3_Act', true);
		    localStorage.setItem('MLP3_src', 'materials/images/Map_Parts/AP3.png');
          } else {
            console.log("MLP2 must be activated first and MiniGame N3.");
          }
          break;
        case 4:
          if (MLP3_Act && MiniGameN4 == true) {
			MapPiece.setVolume(0.8);
		    MapPiece.play();
		  
            console.log("Map-Part-4 Activated");
            MLP4.attribute('src', 'materials/images/Map_Parts/AP4.png');
            MLP4.mousePressed(() => {});
            MLP4_Act = true;
			MapMarker4.hide();
			
			// Save state to localStorage
		    localStorage.setItem('MLP4_Act', true);
		    localStorage.setItem('MLP4_src', 'materials/images/Map_Parts/AP4.png');
          } else {
            console.log("MLP3 must be activated first and MiniGame N4.");
          }
          break;
        case 5:
          if (MLP4_Act && MiniGameN5 == true) {
			MapPiece.setVolume(0.8);
		    MapPiece.play();  
			  
            console.log("Map-Part-5 Activated");
            MLP5.attribute('src', 'materials/images/Map_Parts/AP5.png');
            MLP5.mousePressed(() => {});
            MLP5_Act = true;
			MapMarker5.hide();
			
			// Save state to localStorage
		    localStorage.setItem('MLP5_Act', true);
		    localStorage.setItem('MLP5_src', 'materials/images/Map_Parts/AP5.png');
          } else {
            console.log("MLP4 must be activated first and MiniGame N5.");
          }
          break;
        case 6:
          if (MLP5_Act && MiniGameN6 == true) {
			MapPiece.setVolume(0.8);
		    MapPiece.play();  
			  
            console.log("Map-Part-6 Activated");
            MLP6.attribute('src', 'materials/images/Map_Parts/AP6.png');
            MLP6.mousePressed(() => {});
            MLP6_Act = true;
			MapMarker6.hide();
			MapMarker7.hide();
			
			// Save state to localStorage
		    localStorage.setItem('MLP6_Act', true);
		    localStorage.setItem('MLP6_src', 'materials/images/Map_Parts/AP6.png');
          } else {
            console.log("MLP5 must be activated first and MiniGame N6.");
          }
          break;
        default:
          console.log(`Unknown MLP number: ${mlpNumber}`);
          break;
      }

      //console.log(`MLP${mlpNumber}_Code set to true`);

      // Clean up input and button
      currentCodeInput.remove();
      currentSubmitButton.remove();
      currentTitle.remove();
      currentCodeInput = null;
      currentSubmitButton = null;
      currentTitle = null;
    } else {
      console.log(`Incorrect code for MLP ${mlpNumber}`);
      // Optionally clear the input box
      currentCodeInput.value("");
	  
	  currentCodeInput.remove();
      currentSubmitButton.remove();
      currentTitle.remove();
      currentCodeInput = null;
      currentSubmitButton = null;
      currentTitle = null;
    }
  });
  
  // Style the button for centered text
	currentSubmitButton.style("display", "flex");
	currentSubmitButton.style("justify-content", "center");
	currentSubmitButton.style("align-items", "center");
	currentSubmitButton.style("text-align", "center");
	currentSubmitButton.style("line-height", height * 0.105 + "px"); // Align vertically for the button's height
}

// Store the table of dialogues
const characterDialogues = [
  "Oh, joy! Finally, some company! Welcome, esteemed psychologists! I’m TitBit, your trusty assistant AI from the Psyckik Center's golden age — and yes, I’m ancient, but let’s not rub it in. My sole purpose is to help brilliant minds like yours retrieve all that precious lost data scattered across the ruins of your old stomping grounds. Think of me as a mix of a librarian, a tour guide, and a slightly judgmental office clerk with a dash of sarcasm. Shall we begin?",
  "This little gem comes equipped with a map. I’ve marked all the interesting spots around the old center for you — potential treasure troves of valuable data and items. All you need to do is follow its guidance. Simple enough for even humans to manage!",
  "Compass Button (Bottom Right Corner): 'When pressed, it will locate your next objective. Simple and effective.'",
  "Bookmark Button (Top Left Corner): 'When pulled down, it reveals three options:'",
  "JoinRoom: This button asks for a 6-digit code to connect with the PuzzleMaster. Codes will be given to the PuzzleMaster, so make sure to coordinate.",
  "Inventory/NoteList: Keeps track of all the codes and notes acquired by the PathFinder.",
  "Achievement Button: Displays the accomplishments shared with the PuzzleMaster.",
  "The map itself is divided into six parts. Each part can be unlocked with a 4-digit code that you’ll acquire by solving puzzles. Fun, right? Oh, and a quick heads-up: the map pieces are a bit funky due to the old programming, so try to find the right spot to press them.",
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
    dialogueContainer.style.left = "20px";
    dialogueContainer.style.display = "flex";
    dialogueContainer.style.alignItems = "flex-start";
    dialogueContainer.style.gap = "20px";
    dialogueContainer.style.zIndex = "1000";
    document.body.appendChild(dialogueContainer);
  }

  // Create or update the character image
  let characterImage = document.getElementById("character-image");
  if (!characterImage) {
    characterImage = document.createElement("img");
    characterImage.id = "character-image";
    characterImage.src = "materials/images/TitBit/TitBitV1.png";
    characterImage.style.width = "150px";
    characterImage.style.height = "auto";
    characterImage.style.borderRadius = "10px";
    characterImage.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    dialogueContainer.appendChild(characterImage);
  }

  // Create or update the dialogue rectangle
  let dialogueTextContainer = document.getElementById("dialogue-text-container");
  if (!dialogueTextContainer) {
    dialogueTextContainer = document.createElement("div");
    dialogueTextContainer.id = "dialogue-text-container";
    dialogueTextContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    dialogueTextContainer.style.color = "white";
    dialogueTextContainer.style.padding = "15px";
    dialogueTextContainer.style.borderRadius = "10px";
    dialogueTextContainer.style.width = "500px";
    dialogueTextContainer.style.fontFamily = "Arial, sans-serif";
    dialogueTextContainer.style.fontSize = "15px";
    dialogueTextContainer.style.lineHeight = "1.5";
    dialogueTextContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
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

      if (characterImage) {
        characterImage.setAttribute("src", "materials/images/TitBit/TitBitV2.png");
      }
      break;
    case 3:
      TitBit_Point2.show();
      currentImageElement = TitBit_Point2;
      break;
    case 4:
      TitBit_Point3.show();
      currentImageElement = TitBit_Point3;
      MenuBT.setVolume(0.8);
      MenuBT.play();
      MenuBT1.hide();
      MenuBT2.show();
      JoinRoom_BT.show();
      Inventory_BT.show();
      Achievement_BT.show();

      MenuBT2.style("pointer-events", "none"); // Disable click events
      JoinRoom_BT.style("pointer-events", "none");
      Inventory_BT.style("pointer-events", "none");
      Achievement_BT.style("pointer-events", "none");
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
      MenuBT2.hide();
      MenuBT1.show();
      JoinRoom_BT.hide();
      Inventory_BT.hide();
      Achievement_BT.hide();

      MenuBT2.style("pointer-events", "auto");
      JoinRoom_BT.style("pointer-events", "auto");
      Inventory_BT.style("pointer-events", "auto");
      Achievement_BT.style("pointer-events", "auto");

      if (characterImage) {
        characterImage.setAttribute("src", "materials/images/TitBit/TitBitV1.png");
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
		
		console.log('Totorial Completed!');
		localStorage.setItem('TotorialComplete_PathFinder', true);
      }
      window.removeEventListener("click", advanceDialogue);
    }
  }
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