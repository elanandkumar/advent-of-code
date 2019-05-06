const crypto = require('crypto');
/*
 * Part 1: Set NUMBER_OF_ZEROES to 5
 * Part 2: Set NUMBER_OF_ZEROES to 6
 */
const NUMBER_OF_ZEROES = 6;
const INPUT = 'bgvyzdsv';

const getMd5 = data => crypto.createHash('md5').update(data).digest('hex');

const isStartingWithZeroes = (value) => value.slice(0, NUMBER_OF_ZEROES) === String('').padEnd(NUMBER_OF_ZEROES, '0');

let counter = 0;
while(!isStartingWithZeroes(getMd5(`${INPUT}${counter}`))) {
  counter ++;
}

console.log('Answer is: ', counter);
