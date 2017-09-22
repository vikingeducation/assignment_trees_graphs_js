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

  display() {
    this.matrix.forEach(row => console.log(JSON.stringify(row)));
    // console.log(JSON.stringify(this.matrix, null, 2));
  }
}

const EDGE_LIST = require("./_edgeList");

const adjacent = new AdjacencyMatrix(EDGE_LIST);
// adjacent.add(1, 2, 23);
// adjacent.add(4, 2, 23);
adjacent.display();

const printEdgeList = () => {
  let lines = [" -- Edge List -- "];
  EDGE_LIST.forEach(e => {
    lines.push(`${e[0].name} <-${e[2]}-> ${e[1].name}`);
  });
  console.log(lines.join("\n"));
};

// Uncomment the fillowing to display your edge list
// printEdgeList();

module.exports = EDGE_LIST;
