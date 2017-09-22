const EDGE_LIST = require('./edgeList.js')

class AdjacencyMatrix {
  buildMatrix() {
    let matrix = [];
    let i = 20;
    while (i--) {
      let j = 20;
      let a = [];
      while (j--) {
        a.push(null);
      }
      matrix.push(a);
    }
    return matrix;
  }


  populateMatrix(edgeList) {
    const matrix = this.buildMatrix();
    edgeList.forEach(edge => {
      let x = edge[0].id;
      let y = edge[1].id;
      let w = edge[2];
      matrix[x][y] = w;
      matrix[y][x] = w;
    });
    this.matrix = matrix;
  }


  matrixToString() {
    let output = '';
    this.matrix.forEach(row => {
      row.forEach(item => {
        let str = item ? item.toString() : 'x';
        output += str.padEnd(6);
      });
      output += "\n";
    });
    return output;
  }

  edgeWeight(id1, id2) {
    return this.matrix[id1][id2];
  }
}

const test = new AdjacencyMatrix();
test.populateMatrix(EDGE_LIST);
console.log(test.matrixToString());
console.log(test.edgeWeight(1, 4));


