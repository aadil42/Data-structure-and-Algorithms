// - Enqueue() â€“ Add item to the queue from the REAR.
// - Dequeue() â€“ Remove item from the queue from the FRONT.
// - isFull() â€“ Check if queue is full or not.
// - isEmpty() â€“ Check if queue empty or not.
// - count() â€“ Get number of items in the queue.
// - peek() â€“ return front elemenet in the queue(line).
// 1 2 3 4 5 6 7 8 9 10


class Stack {
    constructor(){
        this.stack = [];
    }
    
    isEmpty(){
        return this.stack.length === 0 ? true : false;
    }
    push(data) {
        return this.stack.push(data);
    }
    pop(){
        return this.stack.pop();
    }
}

class Queue {
    constructor() {
        this.stackA = new Stack();
        this.stackB = new Stack();
        // [2,3,4,5,6]
        // [1,2,3,4] []
    }

    enqueu(data) {
        this.stackA.push(data);
    }

    dequeue() {
        if(this.stackB.isEmpty()) {
            while(!this.stackA.isEmpty()) {
                this.stackB.push(this.stackA.pop());
            }
        }
        this.stackB.pop();
    }

    peek() {
        if(this.stackB.isEmpty()) {
            return this.stackA.stack[0];
        } else {
            return this.stackB.stack[this.stackB.stack.length - 1];
        }
    }

    isEmpty() {
        if(this.stackA.isEmpty() && this.stackB.isEmpty()) {
            return true;
        } else {
            return false;
        }
    }

    isFull() {
        if(this.stackA.isEmpty() && this.stackB.isEmpty()) {
            return false;
        } else {
            return true;
        }
    }
}

// 3,10,101,52,4
const myQueue = new Queue();
myQueue.enqueu(1);
myQueue.dequeue();
myQueue.dequeue();
myQueue.enqueu(2);
myQueue.enqueu(3);
myQueue.enqueu(10);
myQueue.enqueu(101);
myQueue.dequeue();
myQueue.enqueu(52);
myQueue.enqueu(4);
myQueue.dequeue();
console.log(myQueue.peek());

