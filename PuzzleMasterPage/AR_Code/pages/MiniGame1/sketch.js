let bgImage;
};

function preload() {
  // Preload the background image and button images
  bgImage = loadImage('materials/images/MiniGame1_BackGround1.png');
}

function setup() {
  // Create a canvas the size of the window
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Set the background image
  background(bgImage);
}

function windowResized() {
  // Adjust the canvas size if the window is resized
  resizeCanvas(windowWidth, windowHeight);
}
