'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
  const N = parseInt(readLine(), 10);

  const range = (start, end) => {
    let arr = [];
    for (var i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  };

  if (N % 2 === 0) {
    // N is even and inclusive 2-5 = Not Weird
    if (range(2, 5).includes(N)) {
      console.log('Not Weird');
    }
    // N is even and inclusive 6-20 = Weird
    if (range(6, 20).includes(N)) {
      console.log('Weird');
    }
    // N is even and > 20 = Not Weird
    if (N > 20) {
      console.log('Not Weird');
    }
  } else {
    // N is odd = Weird
    console.log('Weird');
  }
}

main();
