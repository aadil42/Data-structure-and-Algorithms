// is empety
// is full
// get first elemetn
// get last 
// add first 
// add last 
// remove first 
// remove last 
// print queue


// 1 2 3 4 
class Circular_dequeuing {
    constructor(size) {
        this.front = -1;
        this.rear = -1;
        this.count = 0;
        this.queue = [];
        this.size = size;
    }

    isEmpty() {
        if(this.front == -1 && this.rear == -1) {
            return true;
        } else {
            return false;
        }
    }

    isFull() {
        if((this.rear + 1) % this.size == this.front) {
            return true;
        } else {
            return false;
        }
    }

    getFirstElement() {
        if(!this.isEmpty()) {
            return this.queue[this.front];
        } else {
            return 'queue is empty';
        }
    }    

    getLastElemetn() {
        if(!this.isEmpty()) {
            return this.queue[this.rear];
        } else {
            return 'queue is empty';
        }
    }
    // 1 0 0 0 
    addLast(data) {
        if(this.isFull()) {
            return 'queue is full';
        } else if(this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
            this.queue[this.rear] = data;
            this.count++;
        } else {
            this.rear = (this.rear + 1) % this.size;
            this.queue[this.rear] = data;
            this.count++;
        }
    }

    print() {
        return this.queue;
    }
}


const myqueue = new Circular_dequeuing(4);
myqueue.addLast(1);
myqueue.addLast(2);
myqueue.addLast(3);
myqueue.addLast(4);

console.log(myqueue.getLastElemetn());