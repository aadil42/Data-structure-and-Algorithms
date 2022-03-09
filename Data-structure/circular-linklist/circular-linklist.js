// insert at last 
// reverse list
// print list

// insert at first

// insert at position
//  delete at first
// delete at last
//delete at position
//update list
// count list size


class Node {
   constructor(val, next) {
      this.val = val;
      this.next = next;
   }
}

class circularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    insertAtFirstNode(data) {
        this.head = new Node(data);
        this.head.next = this.head;
    }
    insertAtLast(data) {

        if(!this.head) {
            this.insertAtFirstNode(data);
            return;
        }
        let currunt = this.head;

        while(currunt.next !== this.head) {
            currunt =  currunt.next;
        } 
        currunt.next = new Node(data);
        currunt.next.next = this.head;
        this.size++;
    }

    // 2->3 2->1->3->4
    insertAtFirst(data) {
    //getting the last node 
    let currunt = this.head;
    while(currunt && currunt.next !== this.head) {
        currunt = currunt.next;
    }
    this.head = new Node(data, this.head);
    if(currunt) {
        currunt.next = this.head;
    } else {
        this.head.next = this.head;
    }
    }
    printList() {
        let output = '';
        let currunt = this.head;

        // this is for the first node only.
        output += currunt.val + "->";
        currunt = currunt.next;

        while(currunt !== this.head) {
            console.log(currunt.val);
            output += currunt.val + '->';
            currunt = currunt.next;
        }

        return output;
    }
    // reverse list
    reverseCList() {
        let currunt = this.head;
        let pre = null;
        while(currunt.next !== this.head) {
            const temp = currunt.next;
            currunt.next = pre;
            pre = currunt;
            currunt = temp;
        }
        // main code for circular 
        let temp = currunt.next;
        currunt.next = pre;
        temp.next = currunt;
        // changing the ref of head node
        this.head  = currunt;
    }
}

const cll = new circularLinkedList();

cll.insertAtFirst(6);
cll.insertAtFirst(3);
cll.insertAtFirst(1);
// cll.insertAtLast(2);
// cll.insertAtLast(3);
// cll.insertAtLast(4);
// cll.insertAtLast(5);
// cll.insertAtFirst(6);
// cll.reverseCList();
console.log(cll.printList());
