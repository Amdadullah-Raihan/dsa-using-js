const printSquare = (n) => {
  process.stdout.write("Print Square: \n");

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

const printTriangle = (n) => {
  process.stdout.write("Print Triangle: \n");

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

const n = 5;
printSquare(n);
printTriangle(n);
