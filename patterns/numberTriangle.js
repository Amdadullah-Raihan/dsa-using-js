const printNumberTriangle = (n) => {
  process.stdout.write("Number Triangle: \n");

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      process.stdout.write(`${col}`);
    }
    process.stdout.write("\n");
  }
};

const n = 5;
printNumberTriangle(n);
