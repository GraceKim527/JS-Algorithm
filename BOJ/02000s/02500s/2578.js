const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().split("\n");

const matrix = input.slice(0, 5).map((v) => v.split(" ").map(Number));
const flat = input.slice(5).flatMap((v) => v.split(" ").map(Number));

let bingo = 0;
let count = 0;

while (true) {
  const num = flat[count];

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (matrix[i][j] === num) {
        matrix[i][j] = 0;
      }
    }
  }

  count++;

  const currentBingo = checkBingo(matrix);
  if (currentBingo >= 3) break;
}

function checkBingo(matrix) {
  let count = 0;

  for (let i = 0; i < 5; i++) {
    if (matrix[i].every((v) => v === 0)) count++;
    if (matrix.every((v) => v[i] === 0)) count++;
  }

  if (matrix.every((v, i) => v[i] === 0)) count++;
  if (matrix.every((v, i) => v[4 - i] === 0)) count++;

  return count;
}

console.log(count);
