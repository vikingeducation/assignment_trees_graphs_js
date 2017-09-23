class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }

  toString() {
    return JSON.stringify(this.data);
  }
}

class LinkedList {
  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }
  add(data) {
    const newNode = new Node(data, this.head);
    this.tail = this.tail ? this.tail : newNode;
    this.head = newNode;
    this.length++;
  }
  find(index) {
    let current = this.head;
    let i = 0;
    while (i < index && current.next) {
      current = current.next;
      i++;
    }
    return i === index ? current : null;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  insert(data, index) {
    let current = this.head;
    let i = 0;
    while (i < index - 1 && current.next) {
      current = current.next;
      i++;
    }
    if (i === index - 1) {
      const newNode = new Node(data, current.next);
      current.next = newNode;
    }
    this.length++;
  }
  append(data) {
    const newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  reverse() {
    this.tail = this.head;
    let current = this.head;
    let next;
    let prev;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
  remove(index) {
    let current = this.head;
    let i = 0;
    while (i < index - 1 && current.next) {
      current = current.next;
      i++;
    }
    if (i === index - 1) {
      current.next = current.next.next;
    }
    this.length--;
  }
  toString() {
    let str = "",
      node = this.head;
    while (node && node.data) {
      str += node.toString() + "\n";
      node = node.next;
    }
    return str;
  }
}

module.exports = LinkedList;
