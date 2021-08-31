const fs = require('fs');

let text = fs.readFileSync("./bookText.txt").toString();
let wordBySpace = text.split(" ");
let str = 'and';
let c = 0;

for(let i = 0; i < wordBySpace.length; i++){
  if(wordBySpace[i].toLowerCase() === 'and'){
    c++;
  }
}


console.log(c);

