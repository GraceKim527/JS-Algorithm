function solution(n) {
  var answer = 0;
  var n_count = n.toString(2).split("1").length - 1;
  var verse = n + 1;
  while (true) {
    if (verse.toString(2).split("1").length - 1 === n_count) {
      answer = verse;
      break;
    }

    verse++;
  }

  return answer;
}
