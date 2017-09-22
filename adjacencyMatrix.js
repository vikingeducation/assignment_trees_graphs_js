const edgeList = require("./edgeList");

class AdjacencyMatrix {
  constructor(personArray) {
    let highId = this.findHighId(personArray);
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
      this.matrix[edge[0].id][edge[1].id] = edge[2];
    });
  }
}

new AdjacencyMatrix(edgeList);
