const Person = require("./Person");
class AdjacencyMatrix {
  constructor(input) {
    this.matrix = null;
    if (typeof input === "number") {
      this._buildMatrix(input);
    } else {
      const maxId = input.reduce((acc, edge) => {
        return Math.max(acc, edge[0].id, edge[1].id);
      }, 0);
      this._buildMatrix(maxId + 1);

      input.forEach(([left, right, weight]) => {
        this.add(left.id, right.id, weight);
      });
    }
  }

  _buildMatrix(input) {
    this.matrix = [...Array(input)].map(() => new Array(input));
  }

  add(leftId, rightId, weight) {
    this.matrix[leftId][rightId] = weight;
  }

  edgeWeight(left, right) {
    return this.matrix[left][right]
      ? this.matrix[left][right]
      : this.matrix[right][left];
  }

  display() {
    // Column Headers
    process.stdout.write("    ");
    for (let i = 0; i < this.matrix.length; i++) {
      process.stdout.write(`${i}`.padEnd(2));
    }
    process.stdout.write("\n");

    for (let i = 0; i < this.matrix.length; i++) {
      // Row headers
      process.stdout.write(`${i}: `.padEnd(4));

      for (let j = 0; j < this.matrix[i].length; j++) {
        process.stdout.write(
          !this.matrix[i][j] ? "--" : ("" + this.matrix[i][j]).padEnd(2)
        );
      }

      process.stdout.write("\n");
    }
  }
}

//     0 1 2 3 4 5 6 7 8 9 10111213141516171819
// 0:  ----------------------------------------
// 1:  9 --2 --11----------------------12------
// 2:  --------------16----7 ------1 ----------
// 3:  --------------------------------------16
// 4:  ----8 --------19------------11----11----
// 5:  ------9 ----12------12------------------
// 6:  ----------------------------------------
// 7:  ----------1 --------11----------------13
// 8:  9 ------------9 --------------1 20------
// 9:  ------------11--------------20--------12
// 10: ------19--------------------------------
// 11: --------------19------------------------
// 12: --------------------15----------7 164 --
// 13: ----------3 ----5 ------------17----12--
// 14: ------------------------10--------------
// 15: 18--------------------------------8 ----
// 16: ----1 --12------------10----------------
// 17: ----------17----------------9 ----------
// 18: ----------------------------9 --14------
// 19: ----5 ------------------5 7 --------3 --

const EDGE_LIST = require("./_edgeList");

const adjacent = new AdjacencyMatrix(EDGE_LIST);
// adjacent.add(1, 2, 23);
// adjacent.add(4, 2, 23);
// adjacent.display();
console.log(adjacent.edgeWeight(2, 10));
console.log(adjacent.edgeWeight(10, 2));
console.log(adjacent.edgeWeight(5, 10));
console.log(adjacent.edgeWeight(10, 5));

const printEdgeList = () => {
  let lines = [" -- Edge List -- "];
  EDGE_LIST.forEach(e => {
    lines.push(`${e[0].name} <-${e[2]}-> ${e[1].name}`);
  });
  console.log(lines.join("\n"));
};

module.exports = EDGE_LIST;
