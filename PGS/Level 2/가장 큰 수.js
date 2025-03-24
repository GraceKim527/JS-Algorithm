function solution(numbers) {
  const strs = numbers.map(String);
  strs.sort((a, b) => b + a - (a + b));

  if (strs[0] === "0") return "0";
  return strs.join("");
}
