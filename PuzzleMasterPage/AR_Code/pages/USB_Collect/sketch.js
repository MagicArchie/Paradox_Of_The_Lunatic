// Retrieve the stored DifficultySL value from localStorage
const DifficultySL = localStorage.getItem('DifficultySL');

let backgroundImage1, backgroundImage2;
let BT_H;
let BT_W1, BT_W2;

function preload() {
  
  BackgroundIMG = loadImage('materials/images/ItemBackground.png');
  
  //backgroundMS = loadSound('materials/sounds/horrorBGM.mp3');
  //BT_Press = loadSound('materials/sounds/.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  BT_H = height * 0.05;
  
  BT_W1 = width * 0.3;
  BT_W2 = width * 0.4;
  
  ChoiceBT1 = createImg('materials/images/buttons/Choice1_BT.png', 'Select Choice 1');
  ChoiceBT1.size(BT_W1, BT_H);
  ChoiceBT1.position(width / 2 - BT_W1 / 2, height * 0.78);
  ChoiceBT1.mousePressed(Choice1);
  //ChoiceBT1.hide();
  
  ChoiceBT2 = createImg('materials/images/buttons/Choice2_BT.png', 'Select Choice 2');
  ChoiceBT2.size(BT_W2, BT_H);
  ChoiceBT2.position(width / 2 - BT_W2 / 2, height * 0.845);
  ChoiceBT2.mousePressed(Choice2);
  //ChoiceBT2.hide();
  
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

  //...
  
  //backgroundMS.loop();
  
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
}

function Choice1() {
	localStorage.setItem('Choice1', true);
	ChoiceBT1.attribute("src", "materials/images/buttons/Choice1_BT_Pressed.png");
	setTimeout(function () {
		ChoiceBT1.attribute("src", "materials/images/buttons/Choice1_BT.png");
    }, 400);
	setTimeout(function () {
		window.location.href = "../../../index.html";
    }, 500);
}

function Choice2() {
	localStorage.setItem('Choice2', true);
	ChoiceBT2.attribute("src", "materials/images/buttons/Choice2_BT_Pressed.png");
	setTimeout(function () {
		ChoiceBT2.attribute("src", "materials/images/buttons/Choice2_BT.png");
    }, 400);
	setTimeout(function () {
		//Ending 1
		console.log("Ending 1")
		showEndingScreen();
    }, 500);
}

function showEndingScreen() {
    // Create a black rectangle
    const blackRect = document.createElement('div');
    blackRect.style.position = 'fixed';
    blackRect.style.top = '0';
    blackRect.style.left = '0';
    blackRect.style.width = '100%';
    blackRect.style.height = '100%';
    blackRect.style.backgroundColor = 'black';
    blackRect.style.display = 'flex';
    blackRect.style.justifyContent = 'center';
    blackRect.style.alignItems = 'center';
    blackRect.style.zIndex = '1000'; // Ensure it overlays other elements

    // Create the text element
    const textElement = document.createElement('div');
    textElement.textContent = 'Ending 1';
    textElement.style.color = 'white';
    textElement.style.fontSize = '8rem';
    textElement.style.fontFamily = 'Arial, sans-serif';

    // Append the text to the rectangle
    blackRect.appendChild(textElement);

    // Append the rectangle to the body
    document.body.appendChild(blackRect);
}
