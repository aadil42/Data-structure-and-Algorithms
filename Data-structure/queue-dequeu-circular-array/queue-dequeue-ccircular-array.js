// is empety done
// is full done
// get first elemetn done
// get last  done
// add first  
// add last  done
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
    // 1 0 0 0
    addFirst(data) {
        if(this.isFull()) {
            return 'queue is full';
        } else if(this.isEmpty()) {
            this.rear = 0;
            this.front = 0;
            this.queue[this.front] = data;
            this.count++;
        } else if(this.front == 0){
            this.front = this.size - 1;
            this.queue[this.front] = data;
            this.count++;
        } else {
            this.front = this.front - 1;
            this.queue[this.front] = data;
            this.count++;
        }
    }  
    // r f    
    // 1 4 3 2
    
    // f     r
    // 1 2 3 4
    removeLast() {
        if(this.isEmpty()) {
            return 'queue is empty';
        } else if(this.rear == 0) {
            this.queue[this.rear] = null;
            this.rear = this.size - 1;
            this.count--;
        } else if(this.rear == this.front) {
            this.queue[this.rear] = null; 
            this.rear = -1;
            this.front = -1;
            this.count--;
        } else {
            this.queue[this.rear] = null;
            this.rear--;
            this.count--;
        }
    }
    print() {
        return this.queue;
    }
}

/// 5 4 3 2 
const myqueue = new Circular_dequeuing(4);
myqueue.addFirst(1); 
myqueue.addFirst(2);
myqueue.addFirst(3);
myqueue.addFirst(4);
myqueue.removeLast();
myqueue.addLast(5);
myqueue.removeLast();

console.log(myqueue.print());