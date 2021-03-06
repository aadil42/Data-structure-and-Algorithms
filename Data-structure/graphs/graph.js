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
    showGraph() {
        return this.graphList;
    }
    addNode(id, name) {
        if(this.idExists(id)) {
            return 'id already exists try a diffrent id';
        } else {
            this.graphList.set(id, new Node(name));
        }
    }
    updateNode(id, name) {
        if(this.graphList.has(id)) { 
            const node = this.graphList.get(id);
            node.name = name;
        } else {
            return false;
        }
    }
    deleteNode(id) {
        const neighbors = this.graphList.get(id).list;
        for(const [key, value] of neighbors) {
            this.graphList.get(key).list.delete(id);
            neighbors.delete(key);
        }
        this.graphList.delete(id);
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
     updateConnection(id, id1, w) {
        const node1 = this.graphList.get(id);
        const node2 = this.graphList.get(id1);
        // connection an edge
        if(this.graphList.has(id) && this.graphList.has(id1)) {
            const first = this.graphList.get(id);
            const second = this.graphList.get(id1);
            first.list.set(id1, w);
            second.list.set(id, w);
        } else {
            return 'enter valid id';
        }
     }
    deleteConnection(id, id1) {
       const first = this.graphList.get(id);
       const second = this.graphList.get(id1);

       first.list.delete(id1);
       second.list.delete(id);
    }   
    
    getAllNeigbor(id) {
        const node = this.graphList.get(id);
        const neigbor = [];
        if(node) {
            for(const [key, value] of node.list) {
                neigbor.push(this.graphList.get(key).name);
            }
        }
        return node ? neigbor: 'no neigbor';
    }

    dfs() {
        const dfsStack = [];
        const explored = new Set();
        const [initialStart] = this.graphList.keys();
        dfsStack.push(initialStart);
        explored.add(initialStart);

        const dfsArr = [];
        while(dfsStack.length) {
            const node = dfsStack.pop();
            dfsArr.push(this.graphList.get(node).name);

            const nodeList = [...this.graphList.get(node).list.keys()];

            nodeList.filter((element) => {
               return !explored.has(element);
            }).forEach((element) => {
                dfsStack.push(element);
                explored.add(element);
            });
        }

        return dfsArr;
    }

    bfs() {
        const bfsStack = [];
        const explored = new Set();
        const [initialStart] = this.graphList.keys();
        bfsStack.push(initialStart);
        explored.add(initialStart);

        
        const bfsArr = [];
        bfsArr.push(this.graphList.get(initialStart).name);
        while(bfsStack.length) {
            const node = bfsStack.pop();

            const nodeList = [...this.graphList.get(node).list.keys()];

            nodeList.filter((element) => {
               return !explored.has(element);
            }).forEach((element) => {
                bfsArr.push(this.graphList.get(element).name);
                bfsStack.push(element);
                explored.add(element);
            });
        }
        return bfsArr;   
    }
}

const myGraph = new Graph();
myGraph.addNode(1,'gujarat');
myGraph.addNode(2,'maharastra');
myGraph.addNode(3,'punjab');
myGraph.addNode(4,'kerela');
myGraph.addNode(5,'sikkim');
myGraph.addNode(6,'hydrabad');
myGraph.addNode(7,'dilli');
myGraph.addNode(8,'karnataka');
myGraph.connectNode(1,2,100);
myGraph.connectNode(2,3,100);
myGraph.connectNode(3,4,100);
myGraph.connectNode(4,5,100);
myGraph.connectNode(4,6,100);
myGraph.connectNode(4,7,100);
myGraph.connectNode(7,8,100);

console.log(myGraph.bfs());
// console.log(myGraph.showGraph());



