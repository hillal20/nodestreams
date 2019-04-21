const fs = require("fs");
const file = fs.createWriteStream("./big.file");

for (let i = 0; i <= 1e6; i++) {
  file.write("hello i am hilal aissani from usa");
}

file.end();
