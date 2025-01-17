function birthdayCakeCandles(candles) {
    if (candles.length < 1) {
        return 0;
    }
    else if (candles.length == 1) {
        return 1;
    }
    var maxHeight = Math.max.apply(Math, candles);
    var count = candles.filter(function (height) { return height === maxHeight; }).length;
    return count;
}
var main = function () {
    var arr = [-4, 3, -9, 0, 4, 1, 4, 16, 16];
    console.log(birthdayCakeCandles(arr));
};
main();
