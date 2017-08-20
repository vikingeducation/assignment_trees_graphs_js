const EDGE_LIST = require("./edgeList");

class Matrix {
  constructor(list) {
    this.size = this.determineSize(list);
    this.people = this.buildPersonList(list);
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

  buildPersonList(list) {
    let people = [];

    for (let i = 0; i < this.size; i++) {
      let personAtIndex;

      for (let j = 0; j < list.length; j++) {
        let fromPerson = list[j][0];
        let toPerson = list[j][1];

        if (fromPerson.id === i) {
          personAtIndex = fromPerson;
          break;
        }

        if (toPerson.id === i) {
          personAtIndex = toPerson;
          break;
        }
      }

      people[i] = personAtIndex;
    }

    return people;
  }

  buildMatrix(list) {
    let matrix = [];

    for (let i = 0; i < this.size; i++) {
      let row = new Array(this.size).fill(null);

      for (let j = 0; j < list.length; j++) {
        let fromPerson = list[j][0];
        let toPerson = list[j][1];

        if (fromPerson.id === i) {
          row[toPerson.id] = {
            person: toPerson,
            weight: list[j][2]
          };
        }
      }

      matrix[i] = row;
    }

    return matrix;
  }

  printMatrix() {
    let headerString = "\t";
    const MAX_NAME_SIZE = 7;

    for (let i = 0; i < this.people.length; i++) {
      headerString += `${this.people[i].name.slice(0, MAX_NAME_SIZE)}\t`;
    }

    console.log(headerString);

    for (let i = 0; i < this.matrix.length; i++) {
      let rowString = `${this.people[i].name.slice(0, MAX_NAME_SIZE)}\t`;

      let row = this.matrix[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j] === null) {
          rowString += "x\t";
        } else {
          rowString += `${row[j].weight}\t`;
        }
      }

      console.log(rowString);
    }
  }

  edgeWeight(fromId, toId) {
    let weight = this.matrix[fromId][toId].weight;
    console.log(weight);
  }
}

let matrix = new Matrix(EDGE_LIST);

matrix.printMatrix();

console.log("\n\n\n\n");

matrix.edgeWeight(1, 10);
matrix.edgeWeight(5, 3);
