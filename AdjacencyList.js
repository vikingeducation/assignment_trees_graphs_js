let LinkedList = require("./node.js");
let edgeList = require("./edgeList.js");

class AdjacencyList {
  constructor(edgeList) {
    this.edgeList = edgeList;
    this.uniqueIDs;
    this.adjList = [];
  }
  _uniqueIDsHelper() {
    this.uniqueIDs = [];
    for (let i = 0, len = this.edgeList.length; i < len; i++) {
      let edge = this.edgeList[i];

      if (!this.uniqueIDs.includes(edge[0].id)) this.uniqueIDs.push(edge[0].id);
      if (!this.uniqueIDs.includes(edge[1].id)) this.uniqueIDs.push(edge[1].id);
    }
  }
  convertEdgeList() {
    this.edgeList.forEach(edge, index => {
      if (!this.adjList[index]) {
        this.adjList[index] = new LinkedList();
      } else {
        this.adjList[index].appendNode();
      }
    });
  }
}

const al = new AdjacencyList(edgeList);
