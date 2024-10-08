
function createPyramid(levels) {
    let pyramid = '';
  
    for (let i = 1; i <= levels; i++) {
      
      let spaces = ' '.repeat(levels - i);
      
      
      let hashes = '#'.repeat(1 * i - 1);
      
      
      pyramid += spaces + hashes + '\n';
    }
  
    return pyramid;
  }
  
  
  const numberOfLevels = 8;
  const pyramid = createPyramid(numberOfLevels);
  console.log(pyramid);
