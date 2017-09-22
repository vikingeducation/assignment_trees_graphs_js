const EDGE_LIST = require("./edgeList");

class AdjacencyMatrix {
  constructor(EDGE_LIST) {
    this.matrix = new Array(this.getLength(EDGE_LIST) + 1).fill(
      new Array(this.getLength(EDGE_LIST) + 1)
    );
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

  populateMatrix(array) {
    console.log(this.matrix);
    array.forEach((connection, index) => {
      this.matrix[connection[0].id][connection[1].id] = connection[2];

      console.log(this.matrix);
    });
  }
}

const test = new AdjacencyMatrix(EDGE_LIST);

test.populateMatrix(EDGE_LIST);
// console.log(test.matrix);
