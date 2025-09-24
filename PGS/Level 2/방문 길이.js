function solution(dirs) {
  const move = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] };
  let current = [0, 0];
  const moveSet = new Set();

  for (const dir of dirs) {
    const nextX = current[0] + move[dir][0];
    const nextY = current[1] + move[dir][1];

    if (nextX > 5 || nextX < -5 || nextY > 5 || nextY < -5) {
      continue;
    }

    moveSet.add(`${current[0]}${current[1]}${nextX}${nextY}`);
    moveSet.add(`${nextX}${nextY}${current[0]}${current[1]}`);

    current = [nextX, nextY];
  }
  return moveSet.size / 2;
}
