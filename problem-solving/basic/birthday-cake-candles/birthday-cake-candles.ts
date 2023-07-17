function birthdayCakeCandles(candles: number[]): number {

  if (candles.length < 1) {
    return 0;
  }

  else if (candles.length == 1) {
    return 1;
  }

  const maxHeight = Math.max(...candles);
  const count = candles.filter((height) => height === maxHeight).length;
  return count;
}

const main = (): void => {
  const arr: number[] = [-4, 3, -9, 0, 4, 1, 4, 16, 16];

  console.log(birthdayCakeCandles(arr));
}

main();
