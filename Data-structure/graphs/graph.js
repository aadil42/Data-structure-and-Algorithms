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
        if(this.graphList.had(id)) {
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
}

// const myGraph = new Graph();
// myGraph.addNode(1,'gujarat');
// myGraph.addNode(2,'maharastra');
// myGraph.addNode(3,'punjab');




