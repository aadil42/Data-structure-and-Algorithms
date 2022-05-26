class Node {

    constructor(name) {
        this.name =  name;
        this.list = new Map();
    }
}


class Graph{

    constructor() {
        this.graphList = new Map();
    }

    idExists(id) {
        if(this.graphList.has(id)) {
            return true;
        } else {
            return false;
        }
    }

    addNode(id, name) {
        if(this.idExists(id)) {
            return 'id already exists try a diffrent id';
        } else {
            this.graphList.set(id, new Node(name));
        }
    }

    deleteNode(id) {
        const neighbors = this.graphList.get(id).list;
        for(const [key, value] of neighbors) {
            this.graphList.get(key).list.delete(id);
            neighbors.delete(key);
        }
     }

     connectNode(id, id1, w) {
         const node1 = this.graphList.get(id);
         const node2 = this.graphList.get(id1);
         // connection an edge
         if(!node1.list.has(id1)) {
             node1.list.set(id1, w);
         }
         if(!node2.list.has(id)) {
             node2.list.set(id, w);
         }
     }
}

const myGraph = new Graph();
myGraph.addNode(1,'gujarat');
myGraph.addNode(2,'maharastra');
myGraph.addNode(3,'punjab');
myGraph.connectNode(1,2,100);
myGraph.connectNode(1,3,100);
myGraph.connectNode(2,1,100);
myGraph.connectNode(2,3,100);
myGraph.connectNode(3,1,100);
myGraph.connectNode(3,2,100);

console.log(myGraph.graphList.get(3));




