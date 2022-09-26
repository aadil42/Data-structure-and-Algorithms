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

    // this is for the min heap
    // push(data) {
    // this.queue.push(data);
    // let currunt_index = this.queue.length - 1;
    
    // while(currunt_index !== 0 && this.queue[currunt_index] < this.queue[this.getParent(currunt_index)]) {
    //     this.swap(currunt_index, this.getParent(currunt_index));
    //     currunt_index = this.getParent(currunt_index);
    // }
    // this.size++;
    // }
    // // this is for the min heap
    // pop() {
    //     this.swap(0, this.queue.length - 1);
    //     const popData = this.queue.pop();
    //     let i = 0;
    //     while(i < this.queue.length - 1) {
    //         let root = i;
    //         let left = this.getLeftChild(i);
    //         let right = this.getRightChild(i);
    //         if(this.queue[root] > this.queue[left]) {
    //             this.swap(root, this.getLeftChild(root));
    //             i = left;
    //         }
    //         if(this.queue[root] > this.queue[right]) {
    //             this.swap(root, this.getRightChild(root));
    //             i = right;
    //         }
    //         if(this.queue[root] < this.queue[left] && this.queue[root] < this.queue[right]) {
    //             break;
    //         }
    //         if(!this.queue[left] || !this.queue[right]) {
    //             break;
    //         }
    //     }

    //     return popData;
    // }

    // this is for the max heap
    push(data) {
        this.queue.push(data);
        let currunt_index = this.queue.length - 1;
        while(currunt_index !== 0 && this.queue[currunt_index] > this.queue[this.getParent(currunt_index)]) {
            this.swap(currunt_index, this.getParent(currunt_index));
            currunt_index = this.getParent(currunt_index);
        }
        this.size++;
    }

    // this is for the max heap
    pop() {
        this.swap(0, this.queue.length - 1);
        const popData = this.queue.pop();
        console.log(popData);
        let i = 0;
        while(i < this.queue.length - 1) {
            let root = i;
            let left = this.getLeftChild(i);
            let right = this.getRightChild(i);
            if(this.queue[root] < this.queue[left]) {
                this.swap(root, this.getLeftChild(root));
                i = left;
            }

            // now the root will have the value of left child.
            if(this.queue[root] < this.queue[right]) {
                this.swap(root, this.getRightChild(root));
                i = right;
            }
            if(this.queue[root] > this.queue[left] && this.queue[root] > this.queue[right]) {
                break;
            }
            if(!this.queue[left] || !this.queue[right]) {
                break;
            }
        }

        return popData;
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

myPriority.pus(100);
myPriority.pus(19);
myPriority.pus(3);
myPriority.pus(1);
myPriority.pus(36);
myPriority.pus(17);
myPriority.pus(2);
myPriority.pus(7);
myPriority.pus(25);

console.log(myPriority.queue);
myPriority.pop();
myPriority.pop();
myPriority.pop();
myPriority.pop();
myPriority.pop();
myPriority.pop();
myPriority.pop();
myPriority.pop();
myPriority.pop();
myPriority.pop();
// myPriority.pop();
console.log(myPriority.queue);




