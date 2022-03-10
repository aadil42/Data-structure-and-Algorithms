// insert at first 
// print list


// insert at last
// reverse list
// find size


class Node {
    constructor(val, next, pre) {
        this.val = val;
        this.next = next;
        this.pre = pre;
    }
}

class circularDoublyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

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

    insertAtLast(data) {
        // get the last node 1->2->3->4
        let currunt = this.head;
        while(currunt && currunt.next !== this.head) {
            currunt = currunt.next;
        }

        currunt.next = new Node(data, this.head, currunt);
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
dcll.isnertAtFirst(3);
dcll.isnertAtFirst(3);
dcll.insertAtLast(4);
console.log(dcll.printList());

// dcll.isnertAtFirst(1);
// dcll.isnertAtFirst(3);
// dcll.isnertAtFirst(4);

