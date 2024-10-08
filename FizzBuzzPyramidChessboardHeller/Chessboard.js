const size = 8;
let checkerboard = "";

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    checkerboard += (row + col) % 2 === 0 ? "#" : " ";
  }
  checkerboard += "\n";
}

console.log(checkerboard);
