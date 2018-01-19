let edgeList = require('./edgeList.js');

class adjMatrix {
  constructor(list){
    this.matrix = [];
    list.map(edge => {
      this.matrix[edge[0].id] = this.matrix[edge[0].id] || [];
      this.matrix[edge[0].id][edge[1].id] = edge[2]
    });
    this.matrix.forEach((row, index) => {
      row.forEach((cell, cellNum) => {
        if(typeof this.matrix[index][cellNum] === 'undefined'){
          this.matrix[index][cellNum] = 'nil'
        }
      })
    })
  }
}

const testMatrix = new adjMatrix(edgeList);

// console.log(testMatrix);

let print = JSON.stringify(testMatrix.matrix, function (key, value) {return (value === undefined) ? "nil" : value});

console.log(JSON.parse(print))
