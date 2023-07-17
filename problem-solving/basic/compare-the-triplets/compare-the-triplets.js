function compareTriplets(a, b) {
    var alicePoints = 0;
    var bobPoints = 0;
    a.forEach(function (item, i) {
        if (item > b[i]) {
            alicePoints++;
            return;
        }
        else if (item < b[i]) {
            bobPoints++;
            return;
        }
    });
    return [alicePoints, bobPoints];
}
var main = function () {
    var a = [17, 28, 30];
    var b = [99, 16, 8];
    console.log(compareTriplets(a, b));
};
main();
