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
/// detecting cycle with bfs.

class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class Queue {
    constructor(size) {
        this.front = null;
        this.size = size;
        this.count = 0;
        this.back = null;
    }

    enqueue(data) {
        
        if(this.isFull()) return;
        
        if(this.back) {
            this.back.next = new Node(data);
            this.back = this.back.next;
        } else {
            this.back = new Node(data);
            this.front = this.back;
        }
        this.count++;
    }

    dequeue() {
       
        let toBeReturn;
        if(this.front && !this.front.next) {
            toBeReturn = this.front;
            this.front = this.front.next;
            this.back = this.front;
        } else {
            toBeReturn = this.front;
            if(this.front) {
                this.front = this.front.next;
            }
        }
        this.count--;

        return toBeReturn ? toBeReturn.val : null; 
    }
    reverseQueue() {
        const stack = [];
        while(this.front) {
            stack.push(this.front.val);
            this.front = this.front.next;
        }
        // setting everyting to 0 and null;
        this.front = null;
        this.back = null;
        this.count = 0;
        // pushing on to the queue in reverse
        while(stack.length) {
           
            this.enqueue(stack.pop());
        }
    }
    isFull() {
        if(this.count < this.size) {
            return false;  
        } else {
            return true;
        }
    }

    isEmpty() {

        if(this.count <= 0) {
            return true;
        } else {
            return false;
        }
    }

    count1() {
        return this.count;
    }

    peek() {
        return this.front ? this.front.val : null;
        // return this.front.val;
    }

    print() {
        let currunt = this.front;
        let linkedStr = '';
        while(currunt) {
            linkedStr += currunt.val + "->" ; 
            currunt = currunt.next;
        }
        return linkedStr + 'null';
    }
}


const cycleDetectBFS = (graph, src) => {

    const visited = new  Set();
    const queue = new Queue(Number.MAX_SAFE_INTEGER);
    queue.enqueue([src, -1]);

    while(!queue.isEmpty()) {
        const [node, parent] = queue.dequeue(); 
        const neighbor = graph[node];
        visited.add(node);
        for(let i = 0; i < neighbor.length; i++) {
            if(visited.has(neighbor[i]) && neighbor[i] !== parent) {
                // return the cycle
                return [node, neighbor[i]];
            }
            if(!visited.has(neighbor[i])) queue.enqueue([neighbor[i], node]);
        }
    }

    return 'no cycle found.';
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

/// ALL VALUES OF THE NODES IN THE GRAPH MUST BE UNIQUE.
// console.log(cycleDetectDFS(graph, 1));
console.log(cycleDetectBFS(graph, 1));