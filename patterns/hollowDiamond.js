const hollowDiamon = (n) => {
  //Upper half
  let spaces = 0;
  for (let row = 1; row <= n; row++) {
    //Upper left-stars
    for (let col = 1; col <= n - (row - 1); col++) {
      process.stdout.write("*");
    }

    //Upper spaces
    for (let col = 1; col <= spaces; col++) {
      process.stdout.write(" ");
    }

    //Upper right-starts
    for (let col = 1; col <= n - (row - 1); col++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
    spaces = spaces + 2;
  }

  spaces = 2 * n - 2;
  //Bottom half
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      process.stdout.write("*");
    }

    //Upper spaces
    for (let col = 1; col <= spaces; col++) {
      process.stdout.write(" ");
    }

    //Upper right-starts
    for (let col = 1; col <= row; col++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
    spaces = spaces - 2;
  }
};

const n = 5;
hollowDiamon(n);
