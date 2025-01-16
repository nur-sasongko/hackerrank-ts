function simpleArraySum(ar) {
    return ar.reduce(function (a, b) { return a + b; }, 0);
}
function main() {
    var ar = [1, 2, 3, 10, 11];
    var result = simpleArraySum(ar);
    console.log(result);
}
main();
