function setup() {
  createCanvas(400, 400); // Set the size of canvas
  noStroke(); // Disable drawing the stroke
}

function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill(150); // Fill in with black color
  rect(100, 100,  50, 5); // draw shapes
  rect(100, 50,  50, 5);
  rect(100, 50,  5, 55); 
  rect(145, 50,  5, 55);
  triangle(150, 50, 125, 10, 100, 50);
  rect(110, 70,  10, 10);
  rect(130, 70,  10, 10);
  pop();
}

function draw() {
  drawObject(0, 0, 1);
  drawObject(0, 200, 1);
}
 