// push 
// pop
// getParent
// getLeftChild
// getRightChild
// swap
// compare
// peek
// print

class PriorityQueue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    push(data) {
        this.queue.push(data);
        let currunt_index = this.queue.length -1;
        while(this.queue[currunt_index] < this.queue[this.getParent(currunt_index)]) {
            const parentIn = this.getParent(currunt_index);
            this.swap(parentIn, currunt_index);
            currunt_index = parentIn;
        }
        this.size++;
    }
    swap(parentIn, currunt_index) {
        const temp = this.queue[currunt_index];
        this.queue[currunt_index] = this.queue[parentIn];
        this.queue[parentIn] = temp;
    }
    getParent(index) {
        return Math.ceil((index - 2)/2);
    }

    print() {
        return this.queue;
    }
}


const myPriority = new PriorityQueue();
myPriority.push(1);
myPriority.push(2);
myPriority.push(3);
myPriority.push(4);
myPriority.push(2);
myPriority.push(2);

console.log(myPriority.print());
