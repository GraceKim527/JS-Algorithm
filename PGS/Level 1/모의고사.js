function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const count = [0, 0, 0];

  for (const [index, answer] of answers.entries()) {
    if (first[index % first.length] === answer) {
      count[0]++;
    }
    if (second[index % second.length] === answer) {
      count[1]++;
    }
    if (third[index % third.length] === answer) {
      count[2]++;
    }
  }

  const max = Math.max(...count);
  const result = [];

  for (const [index, value] of count.entries()) {
    if (value === max) {
      result.push(index + 1);
    }
  }

  return result;
}
