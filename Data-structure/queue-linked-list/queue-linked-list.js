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
    constructor(size) {
        this.front = null;
        this.size = size;
        this.count = 0;
        this.back = null;
    }
// null


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
        if(this.front && !this.front.next) {
            this.front = this.front.next;
            this.back = this.front;
        } else {
            this.front = this.front.next;
        }
        this.count--;
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
        // if(!this.front) {
        //     return true;
        // } else {
        //     return false;
        // }
    }

    count1() {
        return this.count;
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


const myQueue = new Queue(5);
myQueue.enqueue(1);
// myQueue.dequeue();
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.dequeue()
myQueue.dequeue()
myQueue.enqueue(6);
myQueue.enqueue(6);
myQueue.enqueue(6);
myQueue.enqueue(6);
console.log(myQueue.count1());
console.log(myQueue.print());

