function solution(s) {
  let count = 0;

  const isValid = (str) => {
    const stack = [];
    for (let ch of str) {
      if (["(", "[", "{"].includes(ch)) {
        stack.push(ch);
      } else {
        const last = stack.pop();
        if (
          (ch === ")" && last !== "(") ||
          (ch === "]" && last !== "[") ||
          (ch === "}" && last !== "{")
        ) {
          return false;
        }
      }
    }

    return stack.length === 0;
  };

  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValid(rotated)) {
      count++;
    }
  }

  return count;
}
