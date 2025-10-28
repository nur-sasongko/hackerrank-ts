/**
 * simple-array-sum.ts
 *
 * Simple example that demonstrates summing all numbers in an array using TypeScript.
 *
 * Notes:
 * - Uses Array.prototype.reduce with an initial accumulator value of 0 so:
 *   - The function safely returns 0 for an empty array.
 *   - Avoids the "Reduce of empty array with no initial value" runtime error.
 * - Written in TypeScript for explicit parameter and return types.
 *
 * Example:
 *  const ar = [1, 2, 3, 10, 11];
 *  console.log(simpleArraySum(ar)); // 27
 */

/**
 * Calculate the sum of all numbers in the given array.
 *
 * @param ar - An array of numbers to sum.
 * @returns The total sum of all elements. Returns 0 for an empty array.
 */
function simpleArraySum(ar: number[]): number {
  // The `0` below is the initial value for the accumulator in reduce.
  // Without an initial value, reduce would use the first array element as the accumulator
  // and start iterating from the second element, which throws on an empty array.
  return ar.reduce((acc: number, cur: number) => acc + cur, 0);
}

/**
 * Example entry point that demonstrates usage of simpleArraySum.
 */
function main(): void {
  const ar = [1, 2, 3, 10, 11];
  const result = simpleArraySum(ar);
  console.log(result); // Expected output: 27
}

main();
