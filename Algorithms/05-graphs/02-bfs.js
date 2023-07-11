
// Time O(n) | Space O(n)
function bfs(graph, source) {

    let bfsQueue = new Queue();
    const visited = new Set();
    
    bfsQueue.enqueue(source);
    visited.add(source);
   
    while(bfsQueue.isFull()) {
       let curruntNode = bfsQueue.dequeue();
       curruntNode = graph.get(curruntNode);
   
       curruntNode && curruntNode.filter(node => !visited.has(node))
       .forEach(node => {
           // printing the node
           console.log(node);
           visited.add(node);
           bfsQueue.enqueue(node);
       });
    }
   }