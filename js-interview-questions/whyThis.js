function exampleFuction() {
  console.log(this);
}

// exampleFuction();

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const node = new Node(10);
