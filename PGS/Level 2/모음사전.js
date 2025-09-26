function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const lengths = [781, 156, 31, 6, 1];

  let result = word.length;

  for (let i = 0; i < word.length; i++) {
    const index = vowels.indexOf(word[i]);
    result += lengths[i] * index;
  }

  return result;
}
