function staircase(n) {
    for (var i = 0; i < n; i++) {
        var line = '';
        for (var j = 0; j < n; j++) {
            if (j < n - (i + 1)) {
                line += ' ';
                continue;
            }
            line += '#';
        }
        console.log(line);
    }
}
var main = function () {
    staircase(4);
};
main();
