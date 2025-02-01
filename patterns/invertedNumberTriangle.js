const printInvertedNumberTriangle = (n) => {
  process.stdout.write("Inverted Number Triangle: \n");

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n + 1 - row; col++) {
      process.stdout.write(`${col}`);
    }
    process.stdout.write("\n");
  }
};

const n = 5;
printInvertedNumberTriangle(n);
