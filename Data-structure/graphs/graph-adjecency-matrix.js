class Graph {
    constructor(n) {
        this.graphMatrix = [];
        for(let i = 0; i < n; i++) {
            let row = [];
            for(let j = 0; j < n; j++) {
                row.push(0);
            }
            this.graphMatrix.push(row);
        }
    }
    
    addNode(id1, id2) {
        // don't allow self loop
        if(id1 === id2) return 'self looping is not allowed';
        // check if we are out of bound
        if(id1 > this.graphMatrix.length || id2 > this.graphMatrix.length) return 'outof bound';
        // we only have to check one node because it's bidirectional
        if(this.graphMatrix[id1][id2]) return 'this edge is already connected';

        // add the edge
        this.graphMatrix[id1][id2] = 1;
    }
    showMatrix() {
        return this.graphMatrix;
    }
}

// addNode
// updateNode
// deleteNode


const myGraph = new Graph(5);
myGraph.addNode(1,2);
myGraph.addNode(0,2);
myGraph.addNode(0,1);
myGraph.addNode(1,3);
myGraph.addNode(2,3);
console.log(myGraph.showMatrix());
// console.log(myGraph.graphMatrix[0][0]);