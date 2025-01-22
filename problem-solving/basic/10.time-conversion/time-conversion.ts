function timeConversion(s: string): string {
  const time = s.slice(0, 8);
  const period = s.slice(8, 10);
  let [hours, minutes, seconds] = time.split(':').map(Number);

  if (period === 'AM' && hours === 12) {
    hours = 0;
  } else if (period === 'PM' && hours < 12) {
    hours += 12;
  }

  return [hours, minutes, seconds].map((value) => value.toString().padStart(2, '0')).join(':');
}

function main() {
  const result = timeConversion('07:05:45PM');
  console.log(result);
}

main();