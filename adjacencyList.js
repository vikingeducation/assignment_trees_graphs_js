const EDGE_LIST = require('./edgeList.js')
const { Node, LinkedList } = require('./linkedList.js');

class AdjacencyList {
  constructor(edgeList){
    this.buckets = new Array(this.getLength(edgeList)+1)
    for (let i=0; i<this.buckets.length; i++) {
      this.buckets[i] = new LinkedList();
    }
    edgeList.forEach(edge=>{
      let x = edge[0].id;
      let y = edge[1].id;
      let w = edge[2];
      this.buckets[x].addNode(edge)
    })
  }
    getLength(edgeList) {
    let max = 0;
    edgeList.map(item => {
      if (item[0].id > max) {
        max = item[0].id;
      }
    });
    return max;
  }

  printAList() {
    this.buckets.forEach(list=> {
      list.printList();
    } )
  }

}

const test = new AdjacencyList(EDGE_LIST);
test.printAList();
