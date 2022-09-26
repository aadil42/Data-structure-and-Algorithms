// push  done
// pop done
// getParent done
// getLeftChild done
// getRightChild done
// swap done
// peek  done
// print done

// this is a max heap
class PriorityQueue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

   
    // this is for the  max heap
    poll() {
        this.swap(0, this.queue.length - 1);
        const popped = this.queue.pop();
        console.log(popped);
        this.maxBubbleDownBalance(0);
    }

    // this will bubble down to the max heap
    maxBubbleDownBalance(index) {
        if(this.queue[index] > this.queue[this.getLeftChild(index)] &&
            this.queue[index] > this.queue[this.getRightChild(index)]) return;
            
         if(this.queue[index] < this.queue[this.getLeftChild(index)]) {
            this.swap(index, this.getLeftChild(index));
            this.maxBubbleDownBalance(this.getLeftChild(index));
         }   

         if(this.queue[index] < this.queue[this.getRightChild(index)]) {
            this.swap(index, this.getRightChild(index));
            this.maxBubbleDownBalance(this.getRightChild(index));
         }
    }

    // this will bubble up to the max tree.
    maxBuubbleUpBalance(index) {

        if(index <= 0) return;
        if(this.queue[index] < this.queue[this.getParent(index)]) return;

        if(this.queue[index] > this.queue[this.getParent(index)]) {
            this.swap(index, this.getParent(index));
            this.maxBuubbleUpBalance(this.getParent(index));
        }
    }

    
    // this is for max heap 
    add(val) {
        this.queue.push(val);
        this.maxBuubbleUpBalance(this.queue.length - 1);
    }

    getLeftChild(index) {
        return (index * 2) + 1;
    }
    getRightChild(index) {
        return (index * 2) + 2;
    }
    swap(topNode, bottomNode) {
        const temp = this.queue[topNode];
        this.queue[topNode] = this.queue[bottomNode];
        this.queue[bottomNode] = temp; 
    }
    getParent(index) {
        return Math.ceil((index - 2)/2);
    }
    peek() {
        return this.queue[0];
    }
    print() {
        return this.queue;
    }
}



const myPriority = new PriorityQueue();

myPriority.add(100);
myPriority.add(19);
myPriority.add(3);
myPriority.add(1);
myPriority.add(36);
myPriority.add(17);
myPriority.add(2);
myPriority.add(7);
myPriority.add(25);

console.log(myPriority.queue);
myPriority.poll();
myPriority.poll();
myPriority.poll();
myPriority.poll();
myPriority.poll();
myPriority.poll();
myPriority.poll();
myPriority.poll();
myPriority.poll();
// myPriority.pop();
// myPriority.pop();
// myPriority.pop();
console.log(myPriority.queue);




