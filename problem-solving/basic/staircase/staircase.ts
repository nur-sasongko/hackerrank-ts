function staircase(n: number): void {
  for(let i: number = 0; i < n; i++){
    let line = '';
    for(let j: number = 0; j < n; j++){
      if(j < n - (i + 1)){
        line += '-';
        continue
      }
      line += '#'
    }
    console.log(line)
  }
}

const main = () => {
  staircase(4)
}

main();