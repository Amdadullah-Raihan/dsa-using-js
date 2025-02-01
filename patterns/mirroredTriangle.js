const printMirroredTriangle = (n) => {
  for (let row = 1; row <= 2 * n - 1; row++) {
    let stars = row;
    if (row > n) {
      stars = 2 * n - row;
    }

    for (let col = 1; col <= stars; col++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

const n = 5;
printMirroredTriangle(n);
