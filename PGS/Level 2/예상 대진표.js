function solution(n, a, b) {
  var answer = 0;

  while (n) {
    if (b !== a) {
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
      answer++;
    } else break;
  }

  return answer;
}
