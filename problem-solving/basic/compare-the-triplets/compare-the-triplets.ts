function compareTriplets(a: number[], b: number[]): number[] {
  let alicePoints = 0;
  let bobPoints = 0;

  a.forEach((item: number, i : number) => {
    if(item > b[i]){
      alicePoints++;
      return
    }
    else if (item < b[i]){
      bobPoints++;
      return
    }
  });

  return [alicePoints, bobPoints];
}

const main = () : void => {
  let a: number[] = [17, 28, 30];
  let b: number[] = [99, 16, 8];

  console.log(compareTriplets(a, b));
}

main();