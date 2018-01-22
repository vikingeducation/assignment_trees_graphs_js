let edgeList = require("./edgeList.js");
let LinkedList = require("./LinkedList");

class adjList {
  constructor(input = []) {
    this.list = [];
    input.forEach(edge => {
      if (!this.list[edge[0].id]) {
        this.list[edge[0].id] = new LinkedList();
        this.list[edge[0].id].addFirstNode(`${edge[1].name}(${edge[2]})`);
      } else {
        this.list[edge[0].id].appendNode(`${edge[1].name}(${edge[2]})`);
      }
    });
  }

  printAdjList() {
    console.log(JSON.stringify(this.list, null, 2));
  }
}

let testList = new adjList(edgeList);
testList.printAdjList();
