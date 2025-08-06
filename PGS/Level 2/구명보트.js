function solution(people, limit) {
  let peopleSort = people.sort((a, b) => a - b); // 오름차순 정렬
  let count = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (peopleSort[left] + peopleSort[right] <= limit) {
      left++;
      right--;
    } else {
      right--;
    }
    count++;
  }

  return count;
}
