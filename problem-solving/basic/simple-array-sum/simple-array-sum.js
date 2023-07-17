function simpleArraySum(ar) {
    return ar.reduce(function (a, b) { return a + b; }, 0);
}
// set array of numbers
var ar = [1, 2, 3, 10, 11];
// call function
var result = simpleArraySum(ar);
console.log(result);
