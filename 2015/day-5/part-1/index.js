// todo: add code to read input from file (input.txt);
const INPUT = ["ugknbfddgicrmopn"];

const isStringNice = string => {
  // todo: write logic to find nice string
  let isNiceString = true;
  // rule 1: must have at least 3 vowels (a,e,i,o,u)
  // rule 2: must have one ltter appearing twice in a row
  // rule 3: No strings: ab, cd, pq or xy
  return isNiceString;
};

let niceStrings = 0;
INPUT.forEach(string => {
  if (isStringNice(string)) {
    niceStrings++;
  }
});

console.log("Number of nice strings is: ", niceStrings);
