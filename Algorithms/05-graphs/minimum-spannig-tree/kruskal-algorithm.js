const getTotalNodes = (edges) => {
    const graph = {};
    for(let i = 0; i < edges.length; i++) {
        const [n1, n2] = edges[i];

        if(graph[n1]) {
            graph[n1] = [...graph[n1], n2];
        } else {
            graph[n1] = [n2];
        }

        if(graph[n2]) {
            graph[n2] = [...graph[n2], n1];
        } else {
            graph[n2] = [n1];
        }
    }
    return Object.keys(graph).length;
}

const find = (n, parent) => {
    while(parent[n] !== n) {
        n = parent[n];
    }
    return n;
}

const unionF = (n1, n2, rank, parent) => {
    n1 = find(n1, parent);
    n2 = find(n2, parent);

    if(n1 === n2) return false;
    if(rank[n1] > rank[n2]) {
        rank[n1] += rank[n2];
        parent[n2] = n1;
    } else {
        rank[n2] += rank[n1];
        parent[n1] = n2;
    }
    return true;
}

const kruskalMST = (edges) => {

    const nodes = getTotalNodes(edges);
    const filterredEdges = [];

    edges = edges.sort((n1, n2) => n1[2] - n2[2]);


    const rank = new Array(nodes + 1).fill(1);
    const parent = [];
    for(let i = 1; i < nodes + 1; i++) {
        parent[i] = i;
    }

    for(let i = 0; i < edges.length; i++) {
        const [n1, n2] = edges[i];
        if(filterredEdges.length === nodes - 1) return filterredEdges;
        if(unionF(n1, n2, rank, parent)) filterredEdges.push(edges[i]);
    }
    return filterredEdges;
}

// the value should be between 1-n. and you must not skip number between 1-n.
const edges = [
    [1,2,1],
    [1,3,3],
    [3,4,8],
    [3,2,2],
    [2,5,4],
    [2,4,6],
    [4,5,3]
];
console.log(kruskalMST(edges));