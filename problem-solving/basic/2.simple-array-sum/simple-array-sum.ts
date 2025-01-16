function simpleArraySum(ar: number[]): number {
  return ar.reduce((a, b) => a + b, 0);
}

function main () {
  const ar = [1,2,3,10,11];
  const result = simpleArraySum(ar);
  console.log(result);
}

main();