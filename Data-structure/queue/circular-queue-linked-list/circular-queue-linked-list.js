/**
 * Time O(1) | Space O(1)
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    
    this.left = new ListNode();
    this.right = new ListNode();

    this.left.next = this.right;
    this.right.pre = this.left;
    this.current = null;
    this.limit = k;
    this.size = 0;
};

var ListNode = function(val, next = null, pre = null) {
  this.val = val;
  this.next = next;
  this.pre = pre;
}

/** 
 * Time O(1) | Space O(1)
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {

 if(!this.isFull()) {

     if(this.size === 0) {
         this.current = new ListNode(value,this.right, this.left);
         this.left.next = this.current;
         this.right.pre = this.current;
     } else {
         const temp = new ListNode(value, this.right, this.current);
         this.current.next = temp;
         this.right.pre = temp;
         this.current = this.current.next;
     }
     
     this.size++;
     return true;
 }

 return false;
};

/**
 * Time O(1) | Space O(1)
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
   if(!this.isEmpty()) {

       this.left.next = this.left.next.next;
       this.left.next.pre = this.left;
       this.size--;
       return true;
   }

   return false;
};

/**
 * Time O(1) | Space O(1)
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.left.next.val !== undefined ? this.left.next.val : -1;
};

/**
 * Time O(1) | Space O(1)
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    // console.log(this.right.pre);
    return this.right.pre.val !== undefined ? this.right.pre.val : -1;
};

/**
 * Time O(1) | Space O(1)
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.size ==  0 ? true : false;
};

/**
 * Time O(1) | Space O(1)
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
     return this.size >= this.limit ? true : false;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */