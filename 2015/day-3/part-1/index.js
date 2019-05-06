// north ^
// south v
// east >
// west <
const fs = require('fs');

const INPUT = fs.readFileSync('./input.txt').toString().trim().split('');

const getHouseCount = () => {
  const positions = new Set();
  // add starting position
  positions.add('0x0');
  INPUT.reduce((currentPos, direction) => {
    let newPos = {};
    if(direction === '^'){
      newPos = {x: currentPos.x, y: currentPos.y + 1};
    }
    if(direction === '>'){
      newPos = {x: currentPos.x+1, y: currentPos.y};
    }
    if(direction === 'v'){
      newPos = {x: currentPos.x, y: currentPos.y - 1};
    }
    if(direction === '<'){
      newPos = {x: currentPos.x-1, y: currentPos.y};
    }
    positions.add(`${newPos.x}x${newPos.y}`);
    return newPos;
  }, {x:0, y:0});
  return positions.size;
}

console.log(getHouseCount());
