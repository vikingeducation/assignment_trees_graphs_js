const EDGE_LIST = require('./edgeList');

class AdjacencyMatrix {
  constructor(list) {
    this.data = [];
    this.people = [];

    for (var i = 0; i < list.length; i++) {
      const edge = list[i];
      const person1 = edge[0];
      const person2 = edge[1];
      const weight = edge[2];

      if (!this.people[person1.id]) this.people[person1.id] = person1.name;
      if (!this.people[person2.id]) this.people[person2.id] = person2.name;
      if (!this.data[person1.id]) this.data[person1.id] = [];
      if (!this.data[person2.id]) this.data[person2.id] = [];

      this.data[person1.id][person2.id] = weight;
      this.data[person2.id][person1.id] = weight;
    }
  }

  printMatrix() {
    console.log('   ', ...this.people);
    for (var i = 0; i < this.data.length; i++) {
      process.stdout.write(this.people[i]);
      for (var j = 0; j < this.data[i].length; j++) {
        if (!this.data[i][j]) {
          process.stdout.write('   X');
        } else {
          process.stdout.write('   ' + this.data[i][j].toString());
        }
      }
      process.stdout.write('\n');
    }
  }

  edgeWeight(id1, id2) {
    return this.data[id1][id2];
  }
}

const adjMatrix = new AdjacencyMatrix(EDGE_LIST);

adjMatrix.printMatrix();

console.log(adjMatrix.edgeWeight(8, 7)); // should be 9




