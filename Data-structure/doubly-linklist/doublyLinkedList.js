// insert at start
// insert at end
// print list
// print reverse list

// insert at position
// delete at start
// delete at end
// delete at index


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
        this.tail = null;
        this.size = 0;
    }
    // inserts node at the first position
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
    // insert at one based position;
    insertAt1Based(data, pos) {
        console.log(pos, this.size);

        if(pos > this.size || pos <= 0) return 'please provide valid position';

        if(pos == 1) return this.insertFirst(data);

        // insert somewhere between
        let currunt = this.head;
        let count = 1;
        while(count < (pos - 1)) {
            currunt = currunt.next;
            count++;
        } 
        const temp = currunt.next;
        currunt.next = new node(data, temp, currunt);
        temp.pre = currunt.next;
    }
    // print the list
    printList() {
        let list = '';
        let currunt = this.head;
        while(currunt) {
            list += currunt.data + '->';
            currunt = currunt.next;
        }
        return list;
    }
    // print list in reverse 
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
myll.insertLast(400);
myll.insertLast(500);
myll.insertAt1Based(555, 1);
console.log(myll.printList());
console.log(myll.printReverrse());