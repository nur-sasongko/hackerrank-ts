function plusMinus(arr) {
    var positiveNum = 0;
    var negativeNum = 0;
    var zeroNum = 0;
    // for(let i: number = 0; i < arr.length; i++){
    //   if()
    // }
    arr.forEach(function (item) {
        if (item > 0) {
            positiveNum++;
            return;
        }
        else if (item < 0) {
            negativeNum++;
            return;
        }
        zeroNum++;
    });
    // simply print out with console.log, because it's void
    console.log(positiveNum / arr.length);
    console.log(negativeNum / arr.length);
    console.log(zeroNum / arr.length);
}
var main = function () {
    var arr = [-4, 3, -9, 0, 4, 1];
    plusMinus(arr);
};
main();
