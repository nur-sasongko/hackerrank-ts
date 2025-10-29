// 12 - Number Line Jumps

// # Personal Solved by Alone
// function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
//   let k1 = x1;
//   let k2 = x2;

//   if (0 <= x1 && 0 <= x2 && x1 <= 10000 && x2 <= 10000) {
//     for (let i = 0; i <= 10000; i++) {
//       k1 += v1;
//       k2 += v2;

//       if (k1 === k2) {
//         return "YES";
//       }
//     }

//     return "NO";
//   }

//   return "NO";
// }

// # Enhanced Solution by Claude Sonnet 4.0
function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  // Edge case: If both kangaroos have the same velocity
  if (v1 === v2) {
    // They will meet only if they start at the same position
    return x1 === x2 ? "YES" : "NO";
  }

  // Check if they can meet mathematically
  // At meeting point: x1 + v1*t = x2 + v2*t
  // Solving for t: t = (x2 - x1) / (v1 - v2)

  const numerator = x2 - x1;
  const denominator = v1 - v2;

  // If denominator is 0, we already handled this case above
  if (denominator === 0) {
    return "NO";
  }

  // For them to meet:
  // 1. t must be non-negative (can't meet in the past)
  // 2. t must be a whole number (they jump at integer time intervals)

  // Check if t would be negative
  if (
    (numerator > 0 && denominator < 0) ||
    (numerator < 0 && denominator > 0)
  ) {
    return "NO";
  }

  // Check if t is a non-negative integer
  if (numerator % denominator === 0 && numerator / denominator >= 0) {
    return "YES";
  }

  return "NO";
}

// # Alternative Enhanced Solution
// function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
//   // If velocities are equal, they meet only if they start at the same position
//   if (v1 === v2) {
//     return x1 === x2 ? "YES" : "NO";
//   }

//   // Calculate the time when they would meet
//   // x1 + v1*t = x2 + v2*t
//   // t = (x2 - x1) / (v1 - v2)

//   const timeDifference = x2 - x1;
//   const velocityDifference = v1 - v2;

//   // They can meet if:
//   // 1. The time is non-negative
//   // 2. The time is a whole number
//   return timeDifference % velocityDifference === 0 &&
//     timeDifference / velocityDifference >= 0
//     ? "YES"
//     : "NO";
// }

// Test the enhanced function
console.log(kangaroo(0, 3, 4, 2)); // "YES" - they meet at position 12 after 4 jumps
console.log(kangaroo(0, 2, 5, 3)); // "NO" - kangaroo 2 is faster and ahead
console.log(kangaroo(0, 2, 0, 2)); // "YES" - same position, same speed
console.log(kangaroo(1, 2, 3, 2)); // "NO" - same speed, different positions
