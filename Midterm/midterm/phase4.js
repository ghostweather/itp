function setup() {
  createCanvas(400, 400); // Set the size of canvas
  noStroke(); // Disable drawing the stroke
}

function drawObject (x, y, s) {
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
  background(220); // Clear the canvas 
  
  let cols = 5;      // columns
  let rows = 5;      // rows
  let spacing = 75;  // Spacing  between objects (x and y)
  
  for (let i = 0; i < cols; i++) {      // Loop over columns
    for (let j = 0; j < rows; j++) {    // Loop over rows
      let x = i * spacing;              // x-coordinate of the object
      let y = j * spacing;              // y-coordinate of the object
      let scaleFactor = 0.5;              // Can change to scale objects differently
      
      drawObject(x, y, scaleFactor);    // Draw the object at (x, y)
    }
  }
}