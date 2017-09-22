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

  // printNode(node){
  //   return `${this.}`
  // }
  addPeopleArray() {
    this.personArray.forEach(edge => {
      if (!this.adList[edge[0].id]) {
        this.adList[edge[0].id] = new LinkedList();
        this.name[edge[0].id] = edge[0].name;
      }
      this.adList[edge[0].id].addNode({
        to: edge[1].id,
        person: edge[1],
        weight: edge[2]
      });
    });
  }
  edgeWeight(from, to) {
    const fromList = this.adList[from];
    const { node } = fromList.search({ to: to });
    return node.data.weight;
  }
  printAdjList() {
    this.name.forEach(name => {
      console.log(`from: ${name}\t`);
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
  console.log("adjList = ", adjList);
  console.log("edgeWeight 2<->10 is = ", adjList.edgeWeight(2, 10));
  adjList.printAdjList();
};

test();
