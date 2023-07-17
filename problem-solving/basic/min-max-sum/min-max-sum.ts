function miniMaxSum(arr: number[]): void {
  let minSum: number = 0;
  let maxSum: number = 0;

  for (let i: number = 0; i < arr.length; i++) {
    let total: number = 0;
    for (let j: number = 0; j < arr.length; j++) {
      if (i == j) {
        continue
      }
      total += arr[j]
    }
    if (i == 0) minSum = total
    if (total < minSum) minSum = total;
    if (total > maxSum) maxSum = total;
  }

  console.log(minSum, maxSum) // 10, 14
}

// best practices and simple
const miniMaxSumEnhanced = (arr: number[]): void => {
  let sortedArr = arr.sort((a, b) => a - b);
  let minSum = sortedArr.slice(0, arr.length - 1).reduce((sum, num) => sum + num, 0);
  let maxSum = sortedArr.slice(1).reduce((sum, num) => sum + num, 0);

  console.log(minSum, maxSum) // 10, 14
}

const main = (): void => {
  const arr: number[] = [1, 2, 3, 4, 5];

  miniMaxSum(arr);
  miniMaxSumEnhanced(arr);
}

main();