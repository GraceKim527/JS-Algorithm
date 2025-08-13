const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().split("\n");

const switchCount = input[0];
const switchStatus = input[1].split(" ").map(Number);
const studentCount = input[2];

for (let i = 0; i < studentCount; i++) {
  const [gender, number] = input[i + 3].split(" ").map(Number);

  // 성별이 남자일 때
  if (gender === 1) {
    for (let j = number - 1; j < switchCount; j += number) {
      switchStatus[j] = switchStatus[j] === 0 ? 1 : 0;
    }
    // 성별이 여자일 때
  } else {
    for (let j = 0; j < switchCount; j++) {
      if (switchStatus[number - 1 - j] === switchStatus[number - 1 + j]) {
        switchStatus[number - 1 - j] =
          switchStatus[number - 1 - j] === 0 ? 1 : 0;
        switchStatus[number - 1 + j] =
          switchStatus[number - 1 + j] === 0 ? 1 : 0;
      } else {
        switchStatus[number - 1] = switchStatus[number - 1] === 0 ? 1 : 0;
        break;
      }
    }
  }
}

for (let i = 0; i < switchStatus.length; i += 20) {
  console.log(switchStatus.slice(i, i + 20).join(" "));
}
