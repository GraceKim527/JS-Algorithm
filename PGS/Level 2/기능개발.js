function solution(progresses, speeds) {
  var answer = [];
  let days = 1; // 날짜 수
  let count = 0; // 배포되는 기능 수

  while (progresses[0]) {
    let progress = 0; // 작업이 얼마나 되었는지
    progress = progresses[0] + speeds[0] * days;

    if (progress >= 100) {
      count++;
      progresses.shift();
      speeds.shift();
    } else {
      if (count > 0) {
        answer.push(count);
      }
      days++;
      count = 0;
    }
  }
  answer.push(count);

  return answer;
}
