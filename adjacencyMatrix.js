let edgeList = require("./edgeList.js");

class adjMatrix {
  constructor(list) {
    this.matrix = [];
    list.map(edge => {
      this.matrix[edge[0].id] = this.matrix[edge[0].id] || [];
      this.matrix[edge[0].id][edge[1].id] = edge[2];
    });
    for (let i = 0; i < this.matrix.length; i++) {
      this.matrix[i] = this.matrix[i] || [];
      for (let j = 0; j < this.matrix.length; j++) {
        if (typeof this.matrix[i][j] === "undefined") {
          this.matrix[i][j] = " x ";
        } else {
          if (this.matrix[i][j].toString().length === 1) {
            this.matrix[i][j] = ` ${this.matrix[i][j]} `;
          }
          if (this.matrix[i][j].toString().length === 2) {
            this.matrix[i][j] = ` ${this.matrix[i][j]}`;
          }
        }
      }
    }
  }

  edgeWeight(row, column) {
    return Number(this.matrix[row][column]);
  }

  inspect() {
    let result = " ";
    for (let i = 0; i < this.matrix.length; i++) {
      if (i.toString().length === 1) {
        result += `   ${i}`;
      } else if (i.toString().length === 2) {
        result += `  ${i}`;
      } else {
        result += ` ${i}`;
      }
    }
    this.matrix.forEach((row, index) => {
      let indexString;
      if (index.toString().length === 1) {
        indexString = ` ${index}`;
      } else {
        indexString = `${index}`;
      }
      result += `\n${indexString}[` + row.toString() + "]";
    });
    return result;
  }
}

const testMatrix = new adjMatrix(edgeList);

console.log(testMatrix.inspect());

console.log(testMatrix.edgeWeight(1, 0));
