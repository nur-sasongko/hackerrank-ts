function miniMaxSum(arr) {
    var minSum = 0;
    var maxSum = 0;
    for (var i = 0; i < arr.length; i++) {
        var total = 0;
        for (var j = 0; j < arr.length; j++) {
            if (i == j) {
                continue;
            }
            total += arr[j];
        }
        if (i == 0)
            minSum = total;
        if (total < minSum)
            minSum = total;
        if (total > maxSum)
            maxSum = total;
    }
    console.log(minSum, maxSum);
}
// best practices and simple
var miniMaxSumEnhanced = function (arr) {
    var sortedArr = arr.sort(function (a, b) { return a - b; });
    var minSum = sortedArr.slice(0, arr.length - 1).reduce(function (sum, num) { return sum + num; }, 0);
    var maxSum = sortedArr.slice(1).reduce(function (sum, num) { return sum + num; }, 0);
    console.log(minSum, maxSum);
};
var main = function () {
    var arr = [1, 2, 3, 4, 5];
    miniMaxSum(arr);
    miniMaxSumEnhanced(arr);
};
main();
