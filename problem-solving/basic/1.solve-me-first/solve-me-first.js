var solveMeFirst = function (a, b) {
    if (1 <= a && b <= 1000)
        return a + b;
    return "1 <= a, b <= 1000";
};

function main() {
    var a = parseInt("5");
    var b = parseInt("2000");
    var res = solveMeFirst(a, b);
    console.log(res);
}
main();
