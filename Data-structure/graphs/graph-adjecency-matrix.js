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
        this.graphMatrix[id2][id1] = 1;
    }

    deleteNode(id, id1) {
        this.graphMatrix[id][id1] = 0;
        this.graphMatrix[id1][id] = 0;
        return 'deleted';
    }

    dfs(start) {
        const visited = new Set();
        const dfsArr = [];

        let goRecursive =  function(start) {
            dfsArr.push(start);
            visited.add(start);
            for (let i = 0; i < this.graphMatrix.length; i++) {
                if(!visited.has(i) && this.graphMatrix[start][i]) {
                    goRecursive(i);
                }
            }
        }
        goRecursive = goRecursive.bind(this);
        goRecursive(start);
        return dfsArr;
    }

    bfs(start) {
        const visited = new Set();
        const bfsArr = [];
        bfsArr.push(start);
        visited.add(start);

        for(let i = 0; i < this.graphMatrix.length; i++) {
            for(let j = 0; j < this.graphMatrix[0].length; j++) {
                if(!visited.has(j) && this.graphMatrix[i][j]) {
                    visited.add(j);
                    bfsArr.push(j);
                }
            }
        }

        return bfsArr;
    }
    showMatrix() {
        return this.graphMatrix;
    }
}

// addNode
// deleteNode


const myGraph = new Graph(5);
myGraph.addNode(0,2);
myGraph.addNode(0,1);
myGraph.addNode(1,3);
myGraph.addNode(2,3);
console.log(myGraph.showMatrix());
console.log(myGraph.bfs(0));
// console.log(myGraph.graphMatrix[0][0]);