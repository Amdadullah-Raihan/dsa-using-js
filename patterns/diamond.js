const printPyramid = (n) => {
  for (let row = 1; row <= n; row++) {
    // Print spaces
    for (let space = 1; space <= n - row; space++) {
      process.stdout.write(" ");
    }

    // Print stars
    for (let star = 1; star <= 2 * row - 1; star++) {
      process.stdout.write("*");
    }

    process.stdout.write("\n");
  }
};

const invertedPyramid = (n) => {
  for (let row = 1; row < n; row++) {
    // Start from row 1 to avoid duplicate middle row
    // Print spaces
    for (let space = 1; space <= row; space++) {
      process.stdout.write(" ");
    }

    // Print stars
    for (let star = 1; star <= 2 * (n - row) - 1; star++) {
      process.stdout.write("*");
    }

    process.stdout.write("\n");
  }
};

const printDiamond = (n) => {
  printPyramid(n);
  invertedPyramid(n);
};

// Example usage:
const n = 5;
printDiamond(n);
