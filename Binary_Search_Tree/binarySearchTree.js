class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (currentNode) {}
    }
    console.log("root", this.root);
  }
}

const bst = new BinarySearchTree();

console.log("Before: isEmpty?", bst.isEmpty());
bst.insert(2);
console.log("After: isEmpty?", bst.isEmpty());
