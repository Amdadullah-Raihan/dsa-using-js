const printPyramid = (n) => {
  process.stdout.write("Pyramid: \n");

  for (let row = 1; row <= n; row++) {
    // Print spaces
    for (let space = 1; space <= 2 * n - row - 1; space++) {
      process.stdout.write(`${" "}`);
    }

    // Print stars
    for (let star = 1; star <= 2 * row - 1; star++) {
      process.stdout.write("*");
    }

    process.stdout.write("\n");
  }
};

const n = 5;
printPyramid(n);
