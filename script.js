const fs = require('fs');

let text = fs.readFileSync("./bookText.txt").toString();
let wordBySpace = text.split(" ");
//let str = 'and';
let counter = 0;

//Basic way
/*
for(let i = 0; i < wordBySpace.length; i++){
  if(wordBySpace[i].toLowerCase() === 'and'){
    counter++;
  }
  console.log(counter);
*/

// in a function to make it reusable
const wordCount = arrayOfWords => {
  let counter = 0;
  for(let i = 0; i < arrayOfWords.length; i++){
    if(arrayOfWords[i].toLowerCase() === 'and'){
      counter++;
    }
}
  return counter;
}
console.log(wordCount(wordBySpace));


