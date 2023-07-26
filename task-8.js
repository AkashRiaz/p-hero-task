const findSecondSmallest=(arr)=> {
    if (arr.length < 2) {
      return 'Array must have at least two elements'
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      return 'There is no second smallest element in the array.'
    }
  
    return secondSmallest;
  }
  
  const array = [5,3, 9, 0, 5, 6,1];
  const secondSmallest = findSecondSmallest(array);
  console.log( secondSmallest);