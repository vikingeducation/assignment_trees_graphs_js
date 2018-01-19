class AdjacencyMatrix {
  constructor(edgeList) {
    this.edgeList = edgeList;
    this.uniqueIDs;
    this.matrix;
  }

  _uniqueIDsHelper() {
    this.uniqueIDs = [];
    for (let i = 0, len = this.edgeList.length; i < len; i++) {
      let edge = this.edgeList[i];

      if (!this.uniqueIDs.includes(edge[0].id)) this.uniqueIDs.push(edge[0].id);
      if (!this.uniqueIDs.includes(edge[1].id)) this.uniqueIDs.push(edge[1].id);
    }
  }

  initMatrix() {
    this._uniqueIDsHelper();
    this.matrix = [];

    for (var i = 0, len = this.uniqueIDs.length; i < len; i++) {
      this.matrix.push([]);
      for (var j = 0, len = this.uniqueIDs.length; j < len; j++) {
        this.matrix[i].push(null); 
      }
    }
    console.log(this.matrix);
  }

  convertEdgeList() {
    for (var i = 0, len = this.edgeList; i < len; i++) {
      for (var j = 0, len = this.edgeList; j < len; j++) {
        // inner for-loop of shame
        this.edgeList.forEach(

        )
      }
    }
    this.edgeList;
  }


}

let edgeList = require('./edgeList.js');
const testMatrix = new AdjacencyMatrix(edgeList);
testMatrix.initMatrix();
