const printButterfly = (n) => {
  let spaces = 2 * n - 2;
  for (let row = 1; row <= 2 * n - 1; row++) {
    let cols = row <= n ? row : 2 * n - row;

    for (let col = 1; col <= cols; col++) {
      process.stdout.write("*");
    }
    for (let space = 1; space <= spaces; space++) {
      process.stdout.write(" ");
    }
    for (let col = 1; col <= cols; col++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");

    spaces = row < n ? spaces - 2 : spaces + 2;
  }
};

const n = 5;
printButterfly(n);
