const printSquare = (n) => {
  process.stdout.write("Square: \n");

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

const n = 5;
printSquare(n);
