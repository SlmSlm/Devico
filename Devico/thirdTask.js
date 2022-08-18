const diagonalOrder = (n) => {
  const result = [];

  // create a empty arrays and filled all with 0
  for (let i = 0; i < n; i++) {
    result.push(Array(n).fill(0));
  }

  for (let i = 0; i < result.length; i++) {
    const innerArray = result[i];
    let set = false;

    for (let j = 0; j < innerArray.length; j++) {
      // if flag active then set 1
      if (set) {
        innerArray[j] = 1;
      }

      if (i === j || i === n - j - 1) {
        innerArray[j] = 2;

        // activate set flag between 2
        if (i !== Math.floor(n / 2)) {
          set = !set;
        }
      }
    }
  }

  return result;
};

console.log(diagonalOrder(5));
