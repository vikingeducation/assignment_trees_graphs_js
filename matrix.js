const EDGE_LIST = require("./edgeList");

class Matrix {
  constructor(list) {
    this.size = this.determineSize(list);
    this.matrix = this.buildMatrix(list);
  }

  determineSize(list) {
    let people = new Set();

    list.forEach(person => {
      people.add(person[0].id);
      people.add(person[1].id);
    });

    return people.size;
  }

  buildMatrix(list) {
    let matrix = [];

    for (let i = 0; i < this.size; i++) {
      let row = new Array(this.size - 1).fill(null);
      for (let j = 0; j < list.length; j++) {
        let fromPerson = list[j][0];
        let toPerson = list[j][1];

        if (fromPerson.id === i) {
          row[toPerson.id] = {
            person: toPerson,
            weight: list[j][2]
          }
        }
      }

      matrix[i] = row;
    }

    return matrix;
  }
}

let matrix = new Matrix(EDGE_LIST);