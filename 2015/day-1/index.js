// https://adventofcode.com/2015
// 1. Find the floor number
// 2. Find the character index (first character is index 1)...when santa enters basement for first time.

const fs = require('fs');

function getCurrentFloor(filePath, callback) {
  fs.readFile(filePath, (err, data) => {
    if(err) {
      console.log('Unknown error occurred!');
      return;
    }
    const directions = data.toString();
    const directionsArray = directions.split('');
    let basementCharPos = 0;
    let count
    const currentFloor = directionsArray.reduce((acc, currentValue, index) => {
      if(currentValue === "(") {
        acc += 1;
      } else if(currentValue === ")") {
        acc -= 1;
      }
      if(basementCharPos === 0 && acc === -1) {
        basementCharPos = index + 1;
      }
      return acc;
    }, 0);
    if(callback) {
      return callback(currentFloor, basementCharPos);
    }
    console.log('character position when Santa went to the basement for first time: ', basementCharPos);
    console.log('__current floor: ', currentFloor);
  });
}
// current floor Santa is on.
getCurrentFloor('./santa.txt', (currentFloor, basementCharPos) => {
  console.log('character position when Santa went to the basement for first time: ', basementCharPos);
  console.log('___current floor: ', currentFloor);
});
