// push  done
// pop done
// getParent done
// getLeftChild done
// getRightChild done
// swap done
// peek  done
// print done

class PriorityQueue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    push(data) {
        this.queue.push(data);
        let currunt_index = this.queue.length -1;
        while(this.queue[currunt_index] > this.queue[this.getParent(currunt_index)]) {
            const parentIn = this.getParent(currunt_index);
            this.swap(parentIn, currunt_index);
            currunt_index = parentIn;
        }
        this.size++;
    }

    pop() {
        this.swap(0, this.queue.length -1);
        this.queue.pop();
        let currunt_index = 0;
        while((currunt_index < this.size - 1) && 
               this.queue[currunt_index] < this.queue[this.getLeftChild(currunt_index)] ||
               this.queue[currunt_index] < this.queue[this.getRightChild(currunt_index)] 
        )  {
            let appropriateIndex;
            if(this.queue[this.getLeftChild(currunt_index)] > this.queue[this.getRightChild(currunt_index)]) {
                appropriateIndex = this.getLeftChild(currunt_index);
            } else {
                appropriateIndex = this.getRightChild(currunt_index);
            }
            console.log(appropriateIndex);
           if(this.queue[currunt_index] < this.queue[appropriateIndex]) {
               this.swap(currunt_index, appropriateIndex);
               currunt_index = appropriateIndex;
           } else {
               break;
           }
        } 

    }
    getLeftChild(index) {
        return (index * 2) + 1;
    }
    getRightChild(index) {
        return (index * 2) + 2;
    }
    swap(parentIn, currunt_index) {
        const temp = this.queue[currunt_index];
        this.queue[currunt_index] = this.queue[parentIn];
        this.queue[parentIn] = temp;
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

myPriority.push(84);
myPriority.push(33);
myPriority.push(29);
myPriority.push(10);
myPriority.push(13);
myPriority.push(87);
console.log(myPriority.queue);
myPriority.pop();
myPriority.pop();
myPriority.pop();
myPriority.pop();
myPriority.pop();
myPriority.pop();
console.log(myPriority.queue);

