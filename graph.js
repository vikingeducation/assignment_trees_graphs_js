const EDGE_LIST = require("./edgeList");

class AdjacencyMatrix {
  constructor(EDGE_LIST) {
    this.matrix = new Array(this.getLength(EDGE_LIST)).fill(
      new Array(this.getLength(EDGE_LIST))
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

  populateMatrix(EDGE_LIST) {
    EDGE_LIST.map(connection => {
      console.log(connection);
      this.matrix[connection[0].id][connection[1].id] = connection[2];
    });
  }
}

const test = new AdjacencyMatrix(EDGE_LIST);

test.populateMatrix(EDGE_LIST);
