// - Enqueue() – Add item to the queue from the REAR.
// - Dequeue() – Remove item from the queue from the FRONT.
// - isFull() – Check if queue is full or not.
// - isEmpty() – Check if queue empty or not.
// - count() – Get number of items in the queue.
// - peek() – return front elemenet in the queue(line).
// 1->2->3->4

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// class Circular_queue_linked_list {
//     constructor(size) {
//         this.size = size;
//         this.front = null;
//         this.rear = null;
//         this.counter = 0;
//     }
//     // 1->2->3->4  5
//     enqueue(data) {
//         if(this.isFull()) {
//             return;
//         } else if(this.empty()) {
//             this.front = new Node(data);
//             this.rear = this.front;
//             this.rear.next = this.front;
//             this.counter++;
//         } else {
//             const dataNode = new Node(data);
//             const temp = this.rear.next;
//             this.rear.next = dataNode;
//             this.rear = dataNode;
//             dataNode.next = temp; 
//             this.counter++;
//         }
//     }
//     dequeu() {
//         this.front = this.front.next;
//         this.counter--;
//     }
//     empty() {
//         if(this.counter === 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     isFull() {
//         if(this.counter === this.size) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     print() {
//         let output = '';
//         let currunt = this.front;
//         while(currunt.next !== this.front) {
//             output +=  currunt.val + '->';
//             currunt = currunt.next;
//         }
//         output += currunt.val + '->null';
//         // console.log(this.front);
//         return output;
//     }
// }

class Circular_queue_linked_list {
    constructor(size) {
        this.size = size;
        this.counter = 0;
        this.queue = this.front;

        // null->null->null->null
        this.front = new Node(null);
        let temp = this.front;
        let i = 1;
        while(i < this.size) {
            const temp1 = new Node(null);
            this.front.next = temp1;
            this.front = this.front.next;
            i++;
        }
        this.front.next = temp;
        this.front = temp;
        this.rear = temp;
    }
    //1->2->3->4
    enqueue(data) {
        
        if(this.isFull()) {
            return;
        } else if(this.empty()) {
            this.rear.val = data;
            this.rear = this.rear.next;
        } else {
            this.rear.val = data;
            this.rear = this.rear.next;
        }
    }
    dequeu() {
        if(this.front.val) {
            this.front.val = null;
            this.front = this.front.next;    
        }
    }

    empty() {
        if(this.front.val == null && this.rear.val == null) {
            return true;
        } else {
            return false;
        }
    }
    // 1->2->3
    isFull() {
        if(this.rear.val == null) {
            return false;
        } else {
            return true;
        }
    }

    print() {
        let output = '';
        let currunt = this.front;
        while(currunt.next !== this.front) {
            output +=  currunt.val + '->';
            currunt = currunt.next;
        }
        output += currunt.val + '->null';
        // console.log(this.front);
        return output;
    }
}
const myCircularQueue = new Circular_queue_linked_list(4);
myCircularQueue.enqueue(1);
myCircularQueue.enqueue(2);
myCircularQueue.enqueue(3);
myCircularQueue.dequeu();
myCircularQueue.dequeu();
myCircularQueue.dequeu();
myCircularQueue.dequeu();
myCircularQueue.dequeu();
myCircularQueue.enqueue(4);
myCircularQueue.dequeu();
myCircularQueue.enqueue(5);

console.log(myCircularQueue.print());