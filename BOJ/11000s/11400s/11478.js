const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

let set = new Set([]);

for (let i = 1; i <= input.length; i++) {
  for (let j = 0; j < input.length - i + 1; j++) {
    set.add(input.slice(j, j + i));
  }
}

console.log(set.size);
