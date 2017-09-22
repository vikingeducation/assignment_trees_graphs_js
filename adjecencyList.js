const edgeList = require("./edgeList");
const LinkedList = require("./linkedList");

const printNode = node => {
  process.stdout.write(`${node.data.person.name} (${node.data.person.id})`);
};

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
        this.adList[edge[0].id] = new LinkedList(null, printNode);
        this.name[edge[0].id] = edge[0].name;
        this.name[edge[1].id] = edge[1].name;
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
    this.name.forEach((name, index) => {
      process.stdout.write(`from: ${name}`);
      if (this.adList[index]) {
        process.stdout.write("\t=>\t");
        this.adList[index].printList();
      } else {
        process.stdout.write("\n");
      }
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
  const adjList = new AdjacencyList(edgeList, printNode);
  console.log("adjList = ", adjList);
  console.log("edgeWeight 2<->10 is = ", adjList.edgeWeight(2, 10));
  adjList.printAdjList();
};

test();
