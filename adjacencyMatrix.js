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
    this.edges = personArray.length;
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
  showStats() {
    //total number of vertices and edges
    console.log(`number of vertices ${this.matrix.length}`);
    const edges = this.matrix.reduce((edgeCount, arr) => {
      return (
        edgeCount +
        arr.reduce((edges, element) => {
          if (!element) return edges;
          return edges + 1;
        }, 0)
      );
    }, 0);
    console.log(`number of edges ${edges}`);
    // console.log("actual edges = ", this.edges);

    //most connected
    let degrees = this.matrix.map((arr, index) => {
      return {
        name: this.name[index],
        degree: arr.reduce((edges, element) => {
          if (!element) return edges;
          return edges + 1;
        }, 0)
      };
    });
    let sorted = degrees.sort((a, b) => b.degree - a.degree);
    console.log(
      `Top three most connected ${sorted[0].name}(${sorted[0]
        .degree}), ${sorted[1].name}(${sorted[1].degree}), ${sorted[2]
        .name}(${sorted[2].degree})`
    );
    //strongest 3 connections
    let weights = this.matrix.map((arr, index) => {
      return {
        name: this.name[index],
        weight: arr.reduce((sum, element) => {
          if (!element) return sum;
          return sum + element;
        }, 0)
      };
    });
    sorted = weights.sort((a, b) => b.weight - a.weight);
    console.log(
      `Top three heaviest connectorsss....people.. ${sorted[0].name}(${sorted[0]
        .weight}), ${sorted[1].name}(${sorted[1].weight}), ${sorted[2]
        .name}(${sorted[2].weight})`
    );
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
  matrix.showStats();
};
test();
