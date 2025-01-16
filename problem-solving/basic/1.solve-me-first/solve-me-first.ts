const solveMeFirst = (a: number, b: number): number | string => {
  if (1 <= a && b <= 1000) return a + b;
  return "1 <= a, b <= 1000";
};


function main() {
  let a = parseInt("5");
  let b = parseInt("2000");

  let res = solveMeFirst(a, b);

  console.log(res);
}

main();