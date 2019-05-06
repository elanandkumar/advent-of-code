const fs = require('fs');

const INPUT = fs.readFileSync('./input.txt').toString().trim().split('');

const santaPositions = INPUT.filter((item, index) => index % 2 === 0);
const robotPositions = INPUT.filter((item, index) => index % 2 === 1);

const getCoveredHouse = (directions) => {
  let positions = ['0x0'];
  directions.reduce((currentPos, direction) => {
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
    positions.push(`${newPos.x}x${newPos.y}`);
    return newPos;
  }, {x:0, y:0});
  return positions;
}

const getNumberOfHouses = () => {
  const houseCoveredBySanta = getCoveredHouse(santaPositions);
  const houseCoveredByRobot = getCoveredHouse(robotPositions);
  const totalHouse = new Set(houseCoveredBySanta.concat(houseCoveredByRobot));
  return totalHouse.size;
}

const result = getNumberOfHouses();
console.log('House covered: ', result);
