const miniMaxSum = (arr: number[]): void => {
  let sortedArr = arr.sort((a, b) => a - b);
  let minSum = sortedArr
    .slice(0, arr.length - 1)
    .reduce((sum, num) => sum + num, 0);
  let maxSum = sortedArr.slice(1).reduce((sum, num) => sum + num, 0);

  console.log(minSum, maxSum); // 10, 14
};

const main = (): void => {
  const arr: number[] = [1, 2, 3, 4, 5];

  miniMaxSum(arr);
}

main();