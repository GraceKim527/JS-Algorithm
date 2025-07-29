function solution(n) {
  let answer = 0;

  for (let l = 1; (l * (l - 1)) / 2 < n; l++) {
    if ((n - (l * (l - 1)) / 2) % l === 0) {
      answer++;
    }
  }

  return answer;
}
