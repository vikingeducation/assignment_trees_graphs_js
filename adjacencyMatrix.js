const edgeList = require("./edgeList");

class AdjacencyMatrix {
  constructor(personArray) {
    let highId = this.findHighId(personArray);
    this.name = [];
    this.matrix = new Array(highId + 1)
      .fill(null)
      .map(() => new Array(highId + 1).fill(null));

    this.insertWeights(personArray);
    console.log(this.matrix);
  }

  findHighId(personArray) {
    let id = 0;

    personArray.forEach(edge => {
      edge.forEach(person => {
        id = person.id > id ? person.id : id;
      });
    });
    return id;
  }

  insertWeights(personArray) {
    personArray.forEach(edge => {
      this.name[edge[0].id] = edge[0].name;
      this.name[edge[1].id] = edge[1].name;
      this.matrix[edge[0].id][edge[1].id] = edge[2];
    });
  }
  printMatrix() {
    process.stdout.write("\t");
    this.name.forEach(name => process.stdout.write(`\t${name}`));
    console.log("");
    this.matrix.forEach((arr, index) => {
      process.stdout.write(`${this.name[index]}\t`);
      arr.forEach(element => {
        if (!element) {
          process.stdout.write(`\tX`);
          return;
        }
        process.stdout.write(`\t${element}`);
      });
      console.log("");
    });
  }

  edgeWeight(from, to) {
    return this.matrix[from][to];
  }
}

new AdjacencyMatrix(edgeList);

const test = () => {
  const matrix = new AdjacencyMatrix(edgeList);
  console.log("edgeWieght(1,10), = ", matrix.edgeWeight(1, 10));
  matrix.printMatrix();
};
test();
