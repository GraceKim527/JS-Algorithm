function isEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

function solution(want, number, discount) {
  const fruits = {};

  for (let i = 0; i < want.length; i++) {
    fruits[want[i]] = number[i];
  }

  const sum = number.reduce((acc, cur) => acc + cur, 0);
  const maxCount = discount.length - sum;

  let result = 0;
  for (let i = 0; i <= maxCount; i++) {
    let slicedArr = discount.slice(i, i + sum);
    let count = {};

    for (const char of slicedArr) {
      count[char] = (count[char] || 0) + 1;
    }

    if (isEqual(count, fruits)) {
      result++;
    }
  }
  return result;
}
