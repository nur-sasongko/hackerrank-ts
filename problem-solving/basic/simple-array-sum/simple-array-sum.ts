function simpleArraySum(ar: number[]): number {
  return ar.reduce((a, b) => a + b, 0);
}

// set array of numbers
const ar = [1,2,3,10,11];

// call function
const result: number = simpleArraySum(ar);

console.log(result)