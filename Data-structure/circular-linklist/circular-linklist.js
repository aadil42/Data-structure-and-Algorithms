// insert at first
// insert at last 
// insert at position
//  delete at first
// delete at last
//delete at position
// reverse list
//update list
// print list
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
}

const cll = new circularLinkedList();

cll.insertAtLast(2);
cll.insertAtLast(3);
cll.insertAtLast(4);
cll.insertAtLast(5);
console.log(cll.printList());
