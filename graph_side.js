const EDGE_LIST = require("./edgeList");

class AdjacencyMatrix {
  constructor(EDGE_LIST) {
    this.matrix = new Array(this.getLength(EDGE_LIST)+1).fill(
      new Array(this.getLength(EDGE_LIST)+1)
    );
    // this.populateMatrix = this.populateMatrix.bind(this)
    // this.getLength = this.getLength.bind(this)
//    this.populateMatrix(EDGE_LIST);
  }
  getLength(array) {
    let max = 0;
    array.map(item => {
      if (item[0].id > max) {
        max = item[0].id;
      }
    });
    return max;
  }

  populateMatrix(EDGE_LIST) {
    let listLength = this.getLength(EDGE_LIST)
    for (let i=1; i<=listLength; i++) {
        this.matrix[i][i] = null
    }
    EDGE_LIST.forEach((edge)=> {
    let x = edge[0].id;
    let y = edge[1].id;
    this.matrix[x][y] = edge[2];
    this.matrix[y][x] = edge[2];
    });
  }
}

const test = new AdjacencyMatrix(EDGE_LIST);
test.populateMatrix(EDGE_LIST);
console.log(test.matrix)
