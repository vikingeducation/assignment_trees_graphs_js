const EDGE_LIST = require('./edgeList.js')
const { Node, LinkedList } = require('./linkedList.js');

class AdjacencyList {
  constructor(edgeList){
    this.buckets = new Array(this.getLength(edgeList)+1)
    for (let i=0; i<this.buckets.length; i++) {
      this.buckets[i] = new LinkedList();
    }
    edgeList.forEach(edge=>{
      let x = edge[0].id;
      let y = edge[1].id;
      let w = edge[2];
      this.buckets[x].addNode(edge)
    })
  }
    getLength(edgeList) {
    let max = 0;
    edgeList.map(item => {
      if (item[0].id > max) {
        max = item[0].id;
      }
    });
    return max;
  }

  // buildMatrix() {
  //   let matrix = [];
  //   let i = 20;
  //   while (i--) {
  //     let j = 20;
  //     let a = [];
  //     while (j--) {
  //       a.push(null);
  //     }
  //     matrix.push(a);
  //   }
  //   return matrix;
  // }

  // populateMatrix(edgeList) {
  //   const matrix = this.buildMatrix();
  //   edgeList.forEach(edge => {
  //     let x = edge[0].id;
  //     let y = edge[1].id;
  //     let w = edge[2];
  //     matrix[x][y] = w;
  //     matrix[y][x] = w;
  //   });
  //   this.matrix = matrix;
  // }


  // matrixToString() {
  //   let output = '';
  //   this.matrix.forEach(row => {
  //     row.forEach(item => {
  //       let str = item ? item.toString() : 'x';
  //       output += str.padEnd(6);
  //     });
  //     output += "\n";
  //   });
  //   return output;
  // }

  // edgeWeight(id1, id2) {
  //   return this.matrix[id1][id2];
  // }
}

const test = new AdjacencyList(EDGE_LIST);
console.log(test);
