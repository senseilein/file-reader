const fs = require('fs');

let myText = fs.readFileSync("./bookText.txt").toString();

let wordBySpace = myText.split(" ");
//console.log(wordBySpace);

let counter = 0;
for(i = 0; i < wordBySpace.length; i++){
  if(wordBySpace[i].toLowerCase() === "and" ){
    counter++;
  }
}

console.log(counter);
