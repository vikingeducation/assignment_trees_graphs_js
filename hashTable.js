const { LinkedList, Node } = require("./linkedList.js");

class HashTable {
  constructor(size = 26, tuner = 50) {
    this.buckets = new Array(size).fill(null);
    this.tuner = tuner;
    this.balanceCurr = 0;
  }

  hash(word) {
    return parseInt(word, 36) % this.buckets.length;
  }

  getCount() {
    let count = 0;
    this.buckets.forEach(linkedList => {
      count += linkedList && linkedList.length ? linkedList.length : 0;
    });
    return count;
  }

  calcBalance() {
    this.balanceCurr = this.getCount() / this.buckets.length;
  }

  rebalance() {
    //todo: avoid generating new HashTable
    let newHash = new HashTable(Math.ceil(this.getCount() / this.tuner));

    this.buckets.forEach((linkedList, index) => {
      if (linkedList) {
        for (let i = 0; i < linkedList.length; i++) {
          newHash.insert(linkedList.findNode(i));
        }
      }
    });
    this.buckets = newHash.buckets;
  }

  balance(tuner = 0) {
    this.tuner = tuner ? tuner : this.tuner;
    this.rebalance();
  }

  insert(data) {
    let index = this.hash(data.word);
    if (!this.buckets[index]) this.buckets[index] = new LinkedList();
    this.buckets[index].addNode(data);

    this.calcBalance();
  }

  renderList() {
    let count;
    this.buckets.forEach((linkedList, index) => {
      count = linkedList ? linkedList.length : 0;
      console.log(`index: ${index}, count: ${count}`);
    });
  }

  define(word) {
    const index = this.hash(word);
    const { node, count } = this.buckets[index].search(word);
    console.log(`Took ${count} steps`);
    return node ? node.definition : "not found";
  }
}
module.exports = HashTable