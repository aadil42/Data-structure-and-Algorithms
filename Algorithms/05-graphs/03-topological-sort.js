/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var topologicalSortDFS = function(graph) {
    const result = [];
    const visited = new Set();
    const dfs = (node) => {
        if(visited.has(node)) return;
        visited.add(node);
        const neighbor = graph[node];
        for(let i = 0; i < neighbor.length; i++) {
            dfs(neighbor[i]);
        }
        result.push(node);
     }
    for(let i = 0; i < graph.length; i++) {
        dfs(i);
    }
    return result;
 };  

const graph = [[1,2],[2,3],[5],[5],[5],[],[]];
console.log(topologicalSort(graph));

/**
 * 
 * Kahn's Algorithm for Topological sort using BFS
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var topologicalSortBFS = function(edges) {
    
    const createGraph = () => {
        const graph = {};

        for(let i = 0; i < edges.length; i++) {
            const from = edges[i][0];
            const to = edges[i][1];

            if(!graph[from]) {
                graph[from] = [];
            }
            graph[from].push(to);
        }

        return graph;
    }

    const graph = createGraph();
    const indegrees = {};

    // populating indegrees.
    for(const key in graph) {
        const neighbors = graph[key];
        for(let i = 0; i < neighbors.length;  i++) {
            const node = neighbors[i]; 
            indegrees[node] = (indegrees[node] && indegrees[node] + 1) || 1; 
        }
    }
    // populate indegress with 0 edges reaching nodes
    for(const key in graph) {
        if(!indegrees[key]) {
            indegrees[key] = 0;
        }
    }

    const q = new Queue();// queue might not be defined.

    // add all the nodes which has 0 indegree
    for(let node in indegrees) {
        if(indegrees[node] === 0) {
            node = +node; // convert to integer
            q.enqueue(node);
        }
    }

    const TopologicalOrder = [];
    while(!q.isEmpty()) {
        const size = q.size();

        for(let i = 0; i < size; i++) {

            const node = q.dequeue();
            TopologicalOrder.push(node);
            const neighbors = graph[node];
            if(!neighbors) continue;

            for(let j = 0; j < neighbors.length; j++) {
                const nextNode = neighbors[j];
                indegrees[nextNode] -= 1;
                
                if(indegrees[nextNode] === 0) {
                    q.enqueue(nextNode);
                }
            }
        }
    }

    // console.log(hash);
    // there was a cycle.
    for(const key in indegrees) {
        if(indegrees[key] > 0) return -1;
    }

    return TopologicalOrder;
};