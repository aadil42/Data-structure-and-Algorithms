// insert at start
// insert at end
// insert at position
// delete at start
// delete at end
// delete at index
// display list
// make list

class node{

    constructor(data, next, pre) {
        this.data = data;
        this.next = next ? next : null;
        this.pre = pre ? pre : null;
    }
}

class doublLinkList {
    constructor() {
        this.head = null;
        // this.next = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirst(data) {
        this.head = new node(data, this.head, null);
        let currunt = this.head;
        if (this.head.next) {
            this.head.next.pre = this.head;
        } else {
            this.head.pre = null;
        }
        // updating tail node;
        while(currunt.next) {
            currunt = currunt.next;
        }
        this.tail = currunt;
        this.size++;
    }  
    // insert at the end
    insertLast(data) {
        let currunt = this.head;
        if(!currunt) {
            this.head = new node(data, null, null);
            this.tail = this.head;
        } else {
            while(currunt.next) {
                currunt = currunt.next
            }
            currunt.next = new node(data, null, currunt);
            this.tail = currunt.next;
        }
        
        this.size++;
    }
    // print list from the end 
    printList() {
        let list = '';
        let currunt = this.head;
        while(currunt) {
            list += currunt.data + '->';
            currunt = currunt.next;
        }
        return list;
    }
    // print reverse 
    printReverrse() {
       let list = '';
       let currunt = this.tail;
       while(currunt) {
        list += currunt.data + '->';
        currunt = currunt.pre;
       }
       return list;
    }
}


const myll = new doublLinkList();
myll.insertLast(100);
myll.insertLast(200);
myll.insertLast(300);
myll.insertFirst(400);
myll.insertFirst(500);
console.log(myll.printList());
console.log(myll.printReverrse());