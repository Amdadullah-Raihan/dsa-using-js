const printConcentricNumberSquare = (n) => {
  for (let row = 1; row <= 2 * n -1; row++) {
    for (let col = 1; col <= 2 * n -1; col++) {
      const top = row - 1;
      const left = col - 1;
      const bottom = 2 * n - 1 - row;
      const right = 2 * n - 1 - col;
      process.stdout.write(`${n - Math.min(top, bottom, left, right)}`);
    }
    process.stdout.write("\n");
  }
};

const n = 5;
printConcentricNumberSquare(5);
