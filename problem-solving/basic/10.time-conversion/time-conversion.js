function timeConversion(s) {
    var time = s.slice(0, 8);
    var period = s.slice(8, 10);
    var _a = time.split(':').map(Number), hours = _a[0], minutes = _a[1], seconds = _a[2];
    if (period === 'AM' && hours === 12) {
        hours = 0;
    }
    else if (period === 'PM' && hours < 12) {
        hours += 12;
    }
    return [hours, minutes, seconds].map(function (value) { return value.toString().padStart(2, '0'); }).join(':');
}
function main() {
    var result = timeConversion('07:05:45PM');
    console.log(result);
}
main();
