// - Enqueue() – Add item to the queue from the REAR.
// - Dequeue() – Remove item from the queue from the FRONT.
// - isFull() – Check if queue is full or not.
// - isEmpty() – Check if queue empty or not.
// - count() – Get number of items in the queue.
// - peek() – return front elemenet in the queue(line).
// 1 2 3 4 5 6 7 8 9 10 
// []

class Queue {
    constructor(size) {
        this.queue = Array(size).fill(null);        
        this.front = -1;
        this.rear = -1;
        this.size = size;
    }

   enqueue(data) {

   if(this.isFull()) {
       return;
   } else if(this.isEmpty()) {
    this.rear++;
    this.front++;
    this.queue[this.rear % this.size] = data;
   } else {
    this.rear++;
    this.rear = this.rear % this.size;
    this.queue[this.rear] = data;
   }
   }

   dequeue() {
    if(this.isEmpty()) {
        return 'queue is empty';
    }
    
    this.front = this.front % this.size;
    this.queue[this.front] = null;
    this.front++;
   }

   isEmpty() {
       if(this.front == -1 && this.rear == -1) {
           return true;
       } else {
           return false;
       }
   }
   
   isFull() {
       let j = 0;
       // time complexity is n find out a better solution 
       while(j < this.queue.length) {
           if(this.queue[j] == null) {
               return false;
           } 
           j++;
       }
       return true;
   }

   print() {
       return this.queue;
   }
}


const myQueue = new Queue(4);
myQueue.enqueue(1);
myQueue.dequeue();
myQueue.enqueue(2);
myQueue.dequeue();
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.dequeue();
myQueue.enqueue(7);

console.log(myQueue.print());
