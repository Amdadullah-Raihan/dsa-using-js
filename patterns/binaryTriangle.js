const printBinaryTriangle = (n) => {
  for (let row = 1; row <= n; row++) {
    let startWith;
    if (row % 2 == 0) {
      startWith = 0;
    } else {
      startWith = 1;
    }

    for (let col = 1; col <= row; col++) {
      process.stdout.write(`${startWith}`);
      startWith = 1 - startWith; // Toggle startwith 1-0=1, 1-1=0
    }
    process.stdout.write("\n");
  }
};

const n = 5;
printBinaryTriangle(n);
