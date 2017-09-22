const edgeList = require("./edgeList");
const LinkedList = require("./linkedList");

class AdjacencyList {
  constructor(personArray) {
    this.personArray = personArray;
    let highId = this.findHighId(personArray);
    this.name = [];
    this.adList = new Array(highId + 1).fill(null);
    this.addPeopleArray();
  }

  addPeopleArray() {
    this.personArray.forEach(edge => {
      if (!this.adList[edge[0].id]) {
        this.adList[edge[0].id] = new LinkedList();
      }
      this.adList[edge[0].id].addNode({ to: edge[1], weight: edge[2] });
    });
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
}

const test = () => {
  const adjList = new AdjacencyList(edgeList);
};

test();
