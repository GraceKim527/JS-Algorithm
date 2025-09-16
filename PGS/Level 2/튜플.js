function solution(s) {
  const memo = {};
  let tmp = "";

  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === "}") {
      const len = tmp.split(",").length;
      memo[len] = memo[len] || JSON.parse(tmp + "]");
    } else if (s[i] === "{") {
      tmp = "[";
    } else {
      tmp += s[i];
    }
  }

  const keys = Object.keys(memo).sort((a, b) => Number(a) - Number(b));
  const answer = [];

  for (const key of keys) {
    memo[key].forEach((x) => {
      if (answer.includes(x) === false) {
        answer.push(x);
      }
    });
  }

  return answer;
}
