function solution(k, tangerine) {
  // 빈도 수 객체 만들기
  const countMap = {};
  for (const num of tangerine) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  // 객체를 배열로 변환
  const sorted = Object.entries(countMap).sort((a, b) => b[1] - a[1]);

  let count = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (k <= 0) break;
    k = k - sorted[i][1];
    count++;
  }

  return count;
}
