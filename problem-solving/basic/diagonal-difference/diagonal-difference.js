function diagonalDifference(arr) {
    var rightDiagonal = 0;
    var leftDiagonal = 0;
    for (var i = 0; i < arr.length; i++) {
        rightDiagonal += arr[i][i];
        leftDiagonal += arr[i][arr.length - 1 - i];
    }
    return Math.abs(rightDiagonal - leftDiagonal);
}
var main = function () {
    var arr = [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
    ];
    console.log(diagonalDifference(arr));
};
main();
