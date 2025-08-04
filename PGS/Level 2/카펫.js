function solution(brown, yellow) {
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) {
      const h = i;
      const w = yellow / i;

      const totalW = w + 2;
      const totalH = h + 2;

      const total = totalW * totalH;
      const yellowArea = w * h;
      const brownArea = total - yellowArea;

      if (brownArea === brown) {
        return [totalW, totalH];
      }
    }
  }
}
