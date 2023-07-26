const findMostFrequentElement = (arr) => {
  const frequencyMap = arr.reduce((count, element) => {
    count[element] = (count[element] || 0) + 1;
    return count;
  }, {});

  let mostFrequentElement;
  let highestFrequency = 0;

  for (let element in frequencyMap) {
    if (frequencyMap[element] > highestFrequency) {
      mostFrequentElement = element;
      highestFrequency = frequencyMap[element];
    }
  }
  return mostFrequentElement;
};

const result = findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]);

console.log(parseInt(result));
