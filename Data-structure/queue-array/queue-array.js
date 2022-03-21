// - Enqueue() – Add item to the queue from the REAR.
// - Dequeue() – Remove item from the queue from the FRONT.
// - isFull() – Check if queue is full or not.
// - isEmpty() – Check if queue empty or not.
// - count() – Get number of items in the queue.
// - peek() – return front elemenet in the queue(line).
// 1 2 3 4 5 6 7 8 9 10 


class Queue {
    constructor(size) {
        this.queue = [];
        this.front = 0;
        this.size = size;
    }

    enqueue(data) {
        if(this.size > this.count()) {
            this.queue.push(data);
            return this.queue;    
        }
    }

    dequeue() {
       this.front++;
    }

    isEmpty() {
        if(this.front > this.queue.length - 1) {
            return true;
        } else {
            return false;
        }
    }
    
    count() {
        return this.queue.length - this.front;
    }

    peek()  {
        return this.queue[this.front] ? this.queue[this.front] : 'nothing is in the queue';
    }

    isFull() {
        if(this.front < this.queue.length - 1) {
            return true;
        }else {
            return false;
        }
    }
}


const myQueue = new Queue(5);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
// myQueue.dequeue();
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(6);
// myQueue.dequeue();
// myQueue.dequeue();

console.log(myQueue.count());