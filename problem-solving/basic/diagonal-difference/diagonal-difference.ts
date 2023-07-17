function diagonalDifference(arr: number[][]): number {
  let rightDiagonal: number = 0;
  let leftDiagonal: number = 0;

  for (let i = 0; i < arr.length; i++) {
    rightDiagonal += arr[i][i]
    leftDiagonal += arr[i][arr.length - 1 - i];
  }

  return Math.abs(rightDiagonal - leftDiagonal);
}

const main = (): void => {
  const arr: number[][] = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ]

  console.log(diagonalDifference(arr));
}

main();