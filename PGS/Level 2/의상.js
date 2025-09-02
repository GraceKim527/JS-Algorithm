function solution(clothes) {
  let answer = 1;
  const hashMap = new Map();

  clothes.forEach((item) => {
    const [cloth, type] = item;
    if (!hashMap.has(type)) {
      hashMap.set(type, 1);
    } else {
      hashMap.set(type, hashMap.get(type) + 1);
    }
  });

  for (const [key, value] of hashMap) {
    answer *= value + 1;
  }

  return answer - 1;
}
