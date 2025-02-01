const invertedPyramid = (n) => {
  process.stdout.write("Inverted Pyramid: \n");

  for (let row = 1; row <= n; row++) {
    // Print spaces
    for (let space = 1; space <= row; space++) {
      process.stdout.write(`${" "}`);
    }

    // Print stars
    for (let star = 1; star <= 2 * n - (2 * row - 1); star++) {
      process.stdout.write("*");
    }

    process.stdout.write("\n");
  }
};

const n = 5;
invertedPyramid(n);
