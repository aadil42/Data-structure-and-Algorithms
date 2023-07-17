// n = number of nodes in the graph.
// Time O(n) | Space O(n)
const cycleDetectDFS = (graph, src) => {

    const visited = new Set();
    const dfs = (node, parent) => {
        visited.add(node);
        const neighbor = graph[node];
        for(let i = 0; i < neighbor.length; i++) {
            if(visited.has(neighbor[i]) && neighbor[i] !== parent) {
                return [node, neighbor[i]];
            };
            if(!visited.has(neighbor[i])) dfs(neighbor[i], node);
        }
        return 'no cycle found';
    }
    return dfs(src, -1);
}


const graph = {
    '1': [3,5],
    '3': [1,4,6],
    '5': [1,4,7],
    '4': [5,3],
    '6': [3],
    '7': [8,5],
    '8': [7]
}

console.log(cycleDetectDFS(graph, 1));