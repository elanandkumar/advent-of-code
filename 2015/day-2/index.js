// https://adventofcode.com/2015
// solution
// 1. get the input from input.txt
// 2. convert it to array
// 3. process each array
// 4. sum the output of each array to get total number of square feet.


const fs = require('fs');

const getDimensionsArray = (filePath, callback) => {
	console.log(filePath);
	fs.readFile(filePath, (err, data) => {
		if(err) {
			console.log('Unknown error occurred!', err);
			return;
		}
		const dimensions = data.toString();
		const dimensionsArray = dimensions.split('\n');
		if(callback) {
			callback(dimensionsArray);
			return;
		}
		console.log('callback is expected...');
	});
}

const getSurfaceArea = (boxSize) => {
	const boxArr = boxSize.split('x');
	const d1 = boxArr[0]*boxArr[1];
	const d2 = boxArr[1]*boxArr[2];
	const d3 = boxArr[2]*boxArr[0];
	const slackSize = Math.min(d1, d2, d3);
	const surfaceArea = (2 * (d1 + d2 + d3)) + slackSize;
	return surfaceArea;
}

const getRibbonLength = (boxSize) => {
	const boxArr = boxSize.split('x');
	const sortedBoxArr = boxArr.sort((a, b) => a - b);
	const s1 = sortedBoxArr[0];
	const s2 = sortedBoxArr[1];
	const s3 = sortedBoxArr[2];
	const ribbonLengthForWrap = (2*s1) + (2*s2);
	const ribbonLengthForBow = s1 * s2 * s3;
	return ribbonLengthForBow + ribbonLengthForWrap;
}

// get dimensionsArra
getDimensionsArray('./input.txt', (dimensions) => {
	const result = dimensions.reduce((acc, currentValue) => {
		const currentSurfaceArea = getSurfaceArea(currentValue);
		const ribbonLength = getRibbonLength(currentValue);
		acc.surfaceArea += currentSurfaceArea;
		acc.ribbonLength += ribbonLength;
		return acc;
	}, {surfaceArea: 0, ribbonLength: 0});
	console.log('Total square feet of wrapping paper needed: ', result.surfaceArea);
	console.log('Total ribbon length required: ', result.ribbonLength);
});







