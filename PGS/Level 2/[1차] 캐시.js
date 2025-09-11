function getRunTimeWithLRU(page_list, memory_size, runtime_info) {
  const { HIT, MISS } = runtime_info;
  let memory = [];
  let leastUsedList = [];
  let runTime = 0;

  for (const pageRaw of page_list) {
    const page = pageRaw.toLowerCase();
    if (leastUsedList.includes(page)) {
      const page_index = leastUsedList.indexOf(page);
      leastUsedList.splice(page_index, 1);
    }
    leastUsedList.push(page);

    if (memory.includes(page)) runTime += HIT;
    else {
      if (memory.length === memory_size) {
        const lru_page = leastUsedList.shift();
        const lru_page_index = memory.indexOf(lru_page);

        memory.splice(lru_page_index, 1, page);
      } else memory.push(page);
      runTime += MISS;
    }
  }
  return runTime;
}

function solution(cacheSize, cities) {
  const RUNTIME_INFO = {
    HIT: 1,
    MISS: 5,
  };

  if (cacheSize === 0) {
    return cities.length * RUNTIME_INFO.MISS;
  }
  const answer = getRunTimeWithLRU(cities, cacheSize, RUNTIME_INFO);
  return answer;
}
