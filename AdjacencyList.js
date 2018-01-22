let LinkedList = require("./LinkedList.js");
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
    this._uniqueIDsHelper();
    this.uniqueIDs.forEach(id => {
      if (!this.adjList[id]) {
        this.adjList[id] = new LinkedList();
      }
      this.edgeList.forEach(edge => {
        console.log("edge0.id: ", edge[0].id);
        console.log("this.adjList[id]: ", this.adjList[id]);

        if (edge[0].id === id) {
          this.adjList[id].addNode({
            [edge[1].name]: { id: edge[1].id, weight: edge[2] }
          });
        }
        if (edge[1].id === id) {
          this.adjList[id].addNode({
            [edge[0].name]: { id: edge[0].id, weight: edge[2] }
          });
        }
      });
    });
    console.log(JSON.stringify(this.adjList, null, 2));
  }

  printAdjList() {
    for (var i = 0, len = this.adjList.length; i < len; i++) {
      console.log(i + " :" + this.adjList[i].renderList());
    }
  }

  edgeWeight(from, to) {}
}

const al = new AdjacencyList(edgeList);
al.convertEdgeList();
al.printAdjList();
