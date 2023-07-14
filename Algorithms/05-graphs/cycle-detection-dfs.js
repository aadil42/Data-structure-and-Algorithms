
const cycleDetect = (graph, src) => {

    const visited = new Set();
    let cycle = [];
    const dfs = (node, parent) => {
        visited.add(node);
        const neighbor = graph[node];
        for(let i = 0; i < neighbor.length; i++) {
            if(visited.has(neighbor[i]) && neighbor !== parent) {
                cycle[0] = node;
                cycle[1] = neighbor[i];
                return [node, neighbor];
            };
            dfs(neighbor[i], node);
        }

        return 'no cycle found';
    }
    return dfs(src, -1);
    // return cycle;
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

console.log(cycleDetect(graph, 1));