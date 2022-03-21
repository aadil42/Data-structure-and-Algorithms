// - Enqueue() – Add item to the queue from the REAR.
// - Dequeue() – Remove item from the queue from the FRONT.
// - isFull() – Check if queue is full or not.
// - isEmpty() – Check if queue empty or not.
// - count() – Get number of items in the queue.
// - peek() – return front elemenet in the queue(line).
// 1 2 3 4 5 6 7 8 9 10 

class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.size = 0;
        this.back = null;
    }
// null


    enqueue(data) {
        if(this.back) {
            this.back.next = new Node(data);
            this.back = this.back.next;
        } else {
            this.back = new Node(data);
            this.front = this.back;
        }
        // console.log(this.front);
    }

    dequeue() {
        if(this.front && !this.front.next) {
            this.front = this.front.next;
            this.back = this.front;
        } else {
            this.front = this.front.next;
        }
        
    }

    isFull() {
        if(this.front) {
            return true;
        } else {
            return false;
        }
    }

    isEmpty() {
        if(!this.front) {
            return true;
        } else {
            return false;
        }
    }

    count() {
        return this.size;
    }

    peek() {
        return this.front.val;
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

// - Enqueue() – Add item to the queue from the REAR.
// - Dequeue() – Remove item from the queue from the FRONT.
// - isFull() – Check if queue is full or not.
// - isEmpty() – Check if queue empty or not.
// - count() – Get number of items in the queue.
// - peek() – return front elemenet in the queue(line).

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.dequeue();
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(6);
// myQueue.dequeue();

console.log(myQueue.print());
// console.log(myQueue.peek());