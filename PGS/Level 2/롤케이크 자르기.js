function solution(topping) {
  var answer = 0;

  const leftSet = new Set();
  const rightMap = new Map();

  for (const t of topping) {
    rightMap.set(t, (rightMap.get(t) || 0) + 1);
  }

  for (const t of topping) {
    leftSet.add(t);

    rightMap.set(t, rightMap.get(t) - 1);
    if (rightMap.get(t) === 0) {
      rightMap.delete(t);
    }

    if (leftSet.size === rightMap.size) {
      answer++;
    }
  }

  return answer;
}
