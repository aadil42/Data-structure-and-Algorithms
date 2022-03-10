// insert at first 
// insert at last
// print list
// reverse list
// find size


class Node {
    constructor(val, next, pre) {
        this.val = val;
        this.next = next;
        this.pre = pre;

        // this.val ? val : null;
        // this.next ? next : null;
        // this.pre ? pre : null;    
    }
}

class circularDoublyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // null<-1->null
    // insertAtFirstNode
    incrementSize() {
        this.size++;
    }

    insertInitialNode(data) {
        this.head = new Node(data, null, null);
        this.head.next = this.head;
        this.head.pre = this.head;
        this.incrementSize();
    }
    
    isnertAtFirst(data) {
       if(this.size == 0) return this.insertInitialNode(data);
    

       let currunt = this.head;

        // get the tail node;
       while(currunt && currunt.next !== this.head) {
           currunt = currunt.next;
       }
       this.head = new Node(data, this.head, currunt);
       currunt.next = this.head;
       console.log(this.head);
       this.incrementSize();    
    }

    printList() {
        let currunt = this.head;
        let output = '';
        while(currunt.next !== this.head) {
            output += currunt.val + '->';
            currunt = currunt.next;
        }
        if(currunt.next == this.head) {
            output += currunt.val + '->';
        }
        return output;
    }
}


const dcll = new circularDoublyLinkList();

dcll.isnertAtFirst(2);
// dcll.isnertAtFirst(3);
// dcll.isnertAtFirst(3);
// dcll.isnertAtFirst(3);
// dcll.isnertAtFirst(3);
// dcll.isnertAtFirst(3);
// dcll.isnertAtFirst(3);
console.log(dcll.printList());

// dcll.isnertAtFirst(1);
// dcll.isnertAtFirst(3);
// dcll.isnertAtFirst(4);

