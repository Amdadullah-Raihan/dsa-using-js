class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode; //add node to head
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode; // add node to the end of the list
    }
  }
}

const list = new LinkList();

list.append("1");
list.append("2");
list.append("3");
