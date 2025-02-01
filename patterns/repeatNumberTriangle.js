const printRepeatNumberTriangle = (n) => {
  process.stdout.write("Repeat Number Triangle: \n");

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      process.stdout.write(`${row}`);
    }
    process.stdout.write("\n");
  }
};

const n = 5;
printRepeatNumberTriangle(n);
