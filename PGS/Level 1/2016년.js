function solution(a, b) {
  const weekToDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const leapYearMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = b + 4;
  for (let i = 0; i < a - 1; ++i) {
    day += leapYearMonths[i];
  }
  return weekToDay[day % 7];
}
