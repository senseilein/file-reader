const fs = require('fs');

fs.readFile('bookText.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  console.log(data.toString());
})