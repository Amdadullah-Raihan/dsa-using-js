const printSquare = (n) => {
  process.stdout.write("Square: \n");

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

const printTriangle = (n) => {
  process.stdout.write("Triangle: \n");

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

const printNumberTriangle = (n) => {
  process.stdout.write("Number Triangle: \n");

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      process.stdout.write(`${col}`);
    }
    process.stdout.write("\n");
  }
};

const printRepeatNumberTriangle = (n) => {
  process.stdout.write("Repeat Number Triangle: \n");

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      process.stdout.write(`${row}`);
    }
    process.stdout.write("\n");
  }
};

const printInvertedTriangle = (n) => {
  process.stdout.write("Inverted Triangle: \n");

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n + 1 - row; col++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

const printInvertedNumberTriangle = (n) => {
  process.stdout.write("Inverted Number Triangle: \n");

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n + 1 - row; col++) {
      process.stdout.write(`${col}`);
    }
    process.stdout.write("\n");
  }
};

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
// print(n);
printSquare(n);
printTriangle(n);
printNumberTriangle(n);
printRepeatNumberTriangle(n);
printInvertedTriangle(n);
printInvertedNumberTriangle(n);
printPyramid(n);
invertedPyramid(n);
