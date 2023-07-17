function plusMinus(arr: number[]): void {
  let positiveNum: number = 0;
  let negativeNum: number = 0;
  let zeroNum: number = 0;
  
  // for(let i: number = 0; i < arr.length; i++){
  //   if()
  // }

  arr.forEach((item: number) => {
    if(item > 0){
      positiveNum++;
      return;
    }
    else if(item < 0){
      negativeNum++;
      return;
    }

    zeroNum++;
  })

  // simply print out with console.log, because it's void
  console.log(positiveNum / arr.length)
  console.log(negativeNum / arr.length)
  console.log(zeroNum / arr.length)
}

const main = (): void => {
  const arr: number[] = [-4, 3, -9, 0, 4, 1];

  plusMinus(arr);
}

main();
