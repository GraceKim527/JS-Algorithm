const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const n = +input[0];
  const map = input.slice(1, n + 1);
  const playMap = [];
  for (let i = n + 1; i < input.length; i += 1) {
    const line = [];
    for (let j = 0; j < input[i].length; j += 1) {
      line.push(input[i][j]);
    }
    playMap.push(line);
  }
  solution(n, map, playMap);
});

function solution(n, map, playMap) {
  let isBomb = false;
  for (let i = 0; i < playMap.length; i += 1) {
    for (let j = 0; j < playMap[i].length; j += 1) {
      if (playMap[i][j] === "x" && map[i][j] === "*") {
        isBomb = true;
      }
      if (playMap[i][j] === "x" && map[i][j] !== "*") {
        playMap[i][j] = bombCheck(n, i, j, map);
      }
    }
  }

  for (let i = 0; i < playMap.length; i += 1) {
    let str = "";
    for (let j = 0; j < playMap[i].length; j += 1) {
      if (isBomb) {
        str += map[i][j] === "*" ? "*" : playMap[i][j];
      } else {
        str += playMap[i][j];
      }
    }
    console.log(str);
  }
}

function bombCheck(n, x, y, map) {
  const count =
    up(map, x, y) +
    down(map, x, y, n) +
    left(map, x, y) +
    right(map, x, y, n) +
    leftUp(map, x, y) +
    leftDown(map, x, y, n) +
    rightUp(map, x, y, n) +
    rightDown(map, x, y, n);
  return count;
}

function up(map, x, y) {
  if (y > 0) {
    return map[x][y - 1] === "*" ? 1 : 0;
  }
  return 0;
}
function down(map, x, y, n) {
  if (y < n - 1) {
    return map[x][y + 1] === "*" ? 1 : 0;
  }
  return 0;
}
function left(map, x, y) {
  if (x > 0) {
    return map[x - 1][y] === "*" ? 1 : 0;
  }
  return 0;
}
function right(map, x, y, n) {
  if (x < n - 1) {
    return map[x + 1][y] === "*" ? 1 : 0;
  }
  return 0;
}
function leftUp(map, x, y) {
  if (x > 0 && y > 0) {
    return map[x - 1][y - 1] === "*" ? 1 : 0;
  }
  return 0;
}
function leftDown(map, x, y, n) {
  if (x > 0 && y < n - 1) {
    return map[x - 1][y + 1] === "*" ? 1 : 0;
  }
  return 0;
}
function rightUp(map, x, y, n) {
  if (x < n - 1 && y > 0) {
    return map[x + 1][y - 1] === "*" ? 1 : 0;
  }
  return 0;
}
function rightDown(map, x, y, n) {
  if (x < n - 1 && y < n - 1) {
    return map[x + 1][y + 1] === "*" ? 1 : 0;
  }
  return 0;
}
