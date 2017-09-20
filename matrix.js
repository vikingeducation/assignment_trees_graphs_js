const EDGE_LIST = require("./edgeList.js");

const createNameTable = lists => {
  let hash = {};
  for (let i = 0; i < lists.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (!hash[lists[i][j].id]) {
        hash[lists[i][j].id] = lists[i][j].name;
      }
    }
  }
  return hash;
};

const nameTable = createNameTable(EDGE_LIST);

class AdjacencyMatrix {
  constructor(edgeList = EDGE_LIST) {
    this.matrix = [];
    this.initialize(edgeList);
  }
  initialize(edgeList) {
    for (let i = 0; i < edgeList.length; i++) {
      if (this.matrix[edgeList[i][0].id]) {
        this.matrix[edgeList[i][0].id][edgeList[i][1].id] = edgeList[i][2];
      } else {
        this.matrix[edgeList[i][0].id] = [];

        this.matrix[edgeList[i][0].id][edgeList[i][1].id] = edgeList[i][2];
      }
      if (this.matrix[edgeList[i][1].id]) {
        this.matrix[edgeList[i][1].id][edgeList[i][0].id] = edgeList[i][2];
      } else {
        this.matrix[edgeList[i][1].id] = [];
        this.matrix[edgeList[i][1].id][edgeList[i][0].id] = edgeList[i][2];
      }
    }
    for (let i = 0; i < this.matrix.length; i++) {
      if (!this.matrix[i]) {
        this.matrix[i] = Array(this.matrix.length).fill(null);
      } else {
        for (let j = 0; j < this.matrix.length; j++) {
          this.matrix[i][j] = this.matrix[i][j] ? this.matrix[i][j] : null;
        }
      }
    }
  }
  printMatrix() {
    console.log("------Matrix-----");
    let top = "         ";
    for (let i = 0; i < this.matrix.length; i++) {
      top +=
        nameTable[i.toString()] +
        " ".repeat(8 - nameTable[i.toString()].length);
    }
    console.log(top);
    let line = "";
    for (let i = 0; i < this.matrix.length; i++) {
      line += nameTable[i.toString()];
      line += " ".repeat(10 - line.length);
      for (let j = 0; j < this.matrix.length; j++) {
        if (!this.matrix[i][j]) {
          line += "X       ";
        } else {
          line += "" + this.matrix[i][j] + "      ";
        }
      }
      console.log(line);
      line = "";
    }
  }
  edgeWeight(id1, id2) {
    return this.matrix[id1][id2];
  }
  showStats() {
    console.log("Total vertices: ", this.matrix.length);
    let mostConnectedScores = [];
    let mostConnectedNames = [];
    let mostWeight = [];
    let count = 0;
    let weight = 0;
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix.length; j++) {
        if (this.matrix[i][j]) {
          count++;
          weight += this.matrix[i][j];
        }
      }
      mostConnectedScores.push(count);
      mostWeight.push(weight);
      mostConnectedNames.push({ name: nameTable[i.toString()], count, weight });
      count = 0;
      weight = 0;
    }
    mostConnectedScores.sort((a, b) => b - a);
    mostWeight.sort((a, b) => b - a);

    console.log("\nMost connected vertices: ");
    let counter = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < mostConnectedNames.length; j++) {
        if (mostConnectedNames[j].count === mostConnectedScores[i]) {
          console.log(
            mostConnectedNames[j].name +
              " with the degree: " +
              mostConnectedScores[i]
          );
          counter++;
          if (counter === 3) break;
        }
      }
      if (counter === 3) break;
    }

    console.log("\nStrongest connected vertices: ");
    counter = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < mostConnectedNames.length; j++) {
        if (mostConnectedNames[j].weight === mostWeight[i]) {
          console.log(
            mostConnectedNames[j].name +
              " with the edge weight: " +
              mostWeight[i]
          );
          counter++;
          if (counter === 3) break;
        }
      }
      if (counter === 3) break;
    }
  }
}

const am = new AdjacencyMatrix(EDGE_LIST);
// am.printMatrix();
// console.log(am.edgeWeight(0, 1));
am.showStats();
