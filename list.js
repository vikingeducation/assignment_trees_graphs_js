const EDGE_LIST = require("./edgeList.js");
const LinkedList = require("./LinkedList.js");

const createNameTable = lists => {
  let hash = {};
  for (let i = 0; i < lists.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (!hash[lists[i][j].id]) {
        hash[lists[i][j].id] = lists[i][j].name;
      }
    }
  }
  return hash;
};

const nameTable = createNameTable(EDGE_LIST);

class AdjacencyList {
  constructor(edgeList = EDGE_LIST) {
    this.adjList = [];
    this.initialize(edgeList);
  }
  initialize(edgeList) {
    for (let i = 0; i < edgeList.length; i++) {
      if (this.adjList[edgeList[i][0].id]) {
        this.adjList[edgeList[i][0].id].addNode({
          id: edgeList[i][1].id,
          weight: edgeList[i][2]
        });
      } else {
        this.adjList[edgeList[i][0].id] = new LinkedList();
        this.adjList[edgeList[i][0].id].addNode({
          id: edgeList[i][1].id,
          weight: edgeList[i][2]
        });
      }
      if (this.adjList[edgeList[i][1].id]) {
        this.adjList[edgeList[i][1].id].addNode({
          id: edgeList[i][0].id,
          weight: edgeList[i][2]
        });
      } else {
        this.adjList[edgeList[i][1].id] = new LinkedList();
        this.adjList[edgeList[i][1].id].addNode({
          id: edgeList[i][0].id,
          weight: edgeList[i][2]
        });
      }
    }
  }
  printAdjList() {
    let string = "";
    for (let i = 0; i < this.adjList.length; i++) {
      string += nameTable[i.toString()];
      string += " ".repeat(10 - string.length);
      let currentNode = this.adjList[i] ? this.adjList[i].headNode : null;
      if (!currentNode) string += "X";
      while (currentNode) {
        string +=
          nameTable[currentNode.data.id.toString()] +
          "(" +
          currentNode.data.weight +
          "), ";
        currentNode = currentNode.next;
      }
      console.log(string);
      string = "";
    }
  }
  edgeWeight(id1, id2) {
    let targetList = this.adjList[id1];
    if (!targetList) return "Doesn't exist";
    let currentNode = targetList.headNode;
    while (currentNode) {
      if (currentNode.data.id === id2) {
        return currentNode.data.weight;
        break;
      }
      currentNode = currentNode.next;
    }
    return "Doesn't exist";
  }
  showStats() {
    console.log("Total vertices: " + this.adjList.length);

    let mostConnectedScores = [];
    let mostConnectedNames = [];
    let mostWeight = [];
    let count = 0;
    let weight = 0;
    for (let i = 0; i < this.adjList.length; i++) {
      let currentNode = this.adjList[i].headNode;
      while (currentNode) {
        count++;
        weight += currentNode.data.weight;
        currentNode = currentNode.next;
      }
      mostConnectedScores.push(count);
      mostWeight.push(weight);
      mostConnectedNames.push({ name: nameTable[i.toString()], count, weight });
      count = 0;
      weight = 0;
    }
    mostConnectedScores.sort((a, b) => b - a);
    mostWeight.sort((a, b) => b - a);

    console.log("\nMost connected vertices: ");
    let counter = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < mostConnectedNames.length; j++) {
        if (mostConnectedNames[j].count === mostConnectedScores[i]) {
          console.log(
            mostConnectedNames[j].name +
              " with the degree: " +
              mostConnectedScores[i]
          );
          counter++;
          if (counter === 3) break;
        }
      }
      if (counter === 3) break;
    }

    console.log("\nStrongest connected vertices: ");
    counter = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < mostConnectedNames.length; j++) {
        if (mostConnectedNames[j].weight === mostWeight[i]) {
          console.log(
            mostConnectedNames[j].name +
              " with the edge weight: " +
              mostWeight[i]
          );
          counter++;
          if (counter === 3) break;
        }
      }
      if (counter === 3) break;
    }
  }
}

const al = new AdjacencyList(EDGE_LIST);
// al.printAdjList();
// console.log(al.edgeWeight(0, 1));
al.showStats();
