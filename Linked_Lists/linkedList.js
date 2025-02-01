class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
      console.log(currentNode);
    }
  }

  insert(data, index) {
    if (index < 0 || index > this.countNodes()) {
      return;
    }

    if (index === 0) {
      this.addNodeAtBeginning(data);
    } else {
      const newNode = new Node(data);
      let currentNode = this.head;
      let currentIndex = 0;
      while (currentNode.next && currentIndex < index - 1) {
        currentNode = currentNode.next;
        currentIndex++;
      }

      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  search(key) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data.includes(key)) {
        console.log("Match Found: " + currentNode.data);
        return;
      }
      currentNode = currentNode.next;
    }
  }

  countNodes() {
    let currentNode = this.head;
    let nodeCount = 0;
    while (currentNode) {
      nodeCount++;
      currentNode = currentNode.next;
    }

    console.log("nodeCounts", nodeCount);
  }

  addNodeAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  deleteNodeByValue(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === value) {
      }
      currentNode = currentNode.next;
    }
  }

  findIndex(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode.next) {
      if (currentNode.data === value) return index;
      index++;
      currentNode = currentNode.next;
    }
  }
}

const myList = new LinkedList();

myList.append("data 1");
myList.append("data 2");
myList.append("data 3");
myList.search("4");
myList.countNodes();
myList.addNodeAtBeginning("data 0");
myList.deleteNodeByValue("data 1");
const idx = myList.findIndex("data 1");
console.log("index of data 1:", idx);
myList.insert("inserted data", 2);
myList.print();
