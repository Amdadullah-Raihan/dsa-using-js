const printInvertedTriangle = (n) => {
  process.stdout.write("Inverted Triangle: \n");

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n + 1 - row; col++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

const n = 5;
printInvertedTriangle(n);
