//1. ### Insert a Node(Iterative Approach)
// 2. ### Insert a Node(Recursive Approach)
// 3. ### Insert a Node(Level Order Insertion)
// 4. ### Print 2D
// 5. ### Height of tree
// 6. ### Sum of all Nodes in the Tree
// 7. ### Total Number of Nodes in the Tree
// 8. ### Maximum Value in the Binary Tree
// 9. ### Print Level Order/Breadth First Search (using queue)
// 10. ### Print Level Order/Breadth First Search (using Recursion)
// 11. ### Print Given Level of the Tree
// 12. ### Sum of values at level K
// 13. ### Print Pre-Order Traversal (NODE, LEFT, RIGHT)
// 14. ### Print In-Order Traversal (LEFT, NODE, RIGHT)
// 15. ### Print Post-Order Traversal (LEFT, RIGHT, NODE)
// 16. ### Print all Paths from Root to Leaf Nodes
// 17. ### Search in Binary Search Tree (Iterative Approach)
// 18. ### Search in Binary Search Tree (Recursive Approach)
// 19. ### Diameter of Binary Tree (O(n^2) Approach)
// 20. ### Diameter of Binary Tree (O(n) Approach)
// 21. ### Delete a Node
// 22. ### Construct BT from Pre-Order and In-Order
// 23. ### Construct BT from Post-Order and In-Order
// 24. ### Construct BST from In-Order
// 25. ### Construct BST from Pre-Order
// 26. ### Construct BST from Post-Order
// 27. ### Check if the Binary Tree is Balanced

// queue class

class QNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class Queue {
    constructor(size) {
        this.front = null;
        this.size = size;
        this.count = 0;
        this.back = null;
    }

    enqueue(data) {
        
        if(this.isFull()) return;
        
        if(this.back) {
            this.back.next = new QNode(data);
            this.back = this.back.next;
        } else {
            this.back = new QNode(data);
            this.front = this.back;
        }
        this.count++;
    }

    dequeue() {
        if(this.front && !this.front.next) {
            const dequeueNode = this.front;
            this.front = this.front.next;
            this.back = this.front;
            this.count--;
            return dequeueNode;
        } else {
            const dequeueNode = this.front;
            this.front = this.front.next;
            this.count--;
            return dequeueNode;
        }
    }
    reverseQueue() {
        const stack = [];
        while(this.front) {
            stack.push(this.front.val);
            this.front = this.front.next;
        }
        // setting everyting to 0 and null;
        this.front = null;
        this.back = null;
        this.count = 0;
        // pushing on to the queue in reverse
        while(stack.length) {
           
            this.enqueue(stack.pop());
        }
    }
    isFull() {
        if(this.count < this.size) {
            return false;  
        } else {
            return true;
        }
    }

    isEmpty() {

        if(this.count <= 0) {
            return true;
        } else {
            return false;
        }
    }

    count1() {
        return this.count;
    }

    peek() {
        return this.front.val;
    }

    print() {
        let currunt = this.front;
        let linkedStr = '';
        while(currunt) {
            linkedStr += currunt.val + "->" ; 
            currunt = currunt.next;
        }
        return linkedStr + 'null';
    }
}





class Node {
    constructor(val, right = null, left = null) {
        this.val = val;
        this.right = right;
        this.left = left;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.globleSpaceForPrinting = 5;
        this.maxHeight = Number.MIN_SAFE_INTEGER;
        this.totalSumOfNodes = 0;
        this.totalNumOfNode = 0;
        this.maxValue = Number.MIN_SAFE_INTEGER;
        this.preOrderTraversalStr = '';
        this.postOrderTraversalStr = '';
        this.inOrderTraversalStr = '';
    }

    insertNodeIteretively(data) {
        if(!this.root) {
            this.root = new  Node(data);
        } else {
            let temp = this.root;
            while(temp) {
                if(data <= temp.val) {
                    if(data == temp.val) {
                        return 'duplicates are not allowed';
                    }

                    if(!temp.left) {
                        temp.left = new Node(data);
                        break;
                    } else {
                        temp = temp.left;
                    }
                } else if(data >= temp.val) {
                    if(data == temp.val) {
                        return 'duplicates are  not allowed';
                    } 
                    
                    if(!temp.right) {
                        temp.right = new Node(data);
                        break;
                    } else {
                        temp = temp.right;
                    }
                }
            }
        }
    }
    // need to pass the root in this function
    insertRecursivly(root, data, RL = null) {
        // i have to do this rl stuff because the null is passed by value and not reference where we need the reference 
        if(RL) {
            if(RL == 'left') {
                root.left = new Node(data);
            } else if(RL == 'right') {
                root.right = new Node(data);
            }
            // root  = new Node(data);            
            return;
        } else {
            // console.log(data, root.val);
            if(data < root.val) {
                // console.log('left');
                if(root.left == null) {
                    console.log('stopping left');
                    this.insertRecursivly(root, data, 'left');
                } else {
                    this.insertRecursivly(root.left, data);
                }

            } else if(data > root.val) {
                // console.log('right');
                if(root.right == null) {
                    console.log('stopping right');
                    this.insertRecursivly(root, data, 'right');
                } else {
                    this.insertRecursivly(root.right, data);
                }
            } else {
                return 'no duplicates are allowed';
            }
        }
    }

    // levelOrderInsertion it will make binary tree and not binary search tree.
    levelOrderInsert(data) {
        const queue = new Queue(Number. MAX_VALUE);
        if(!this.root) {
            this.root = new Node(data);
            return;
        } else {
            const queue = new Queue(Number. MAX_VALUE);

            queue.enqueue(this.root);
            while(true) {
                const currunt = queue.dequeue().val;
                if(!currunt.left) {
                    currunt.left = new Node(data);
                    return;
                }
                if(!currunt.right) {
                    currunt.right = new Node(data);
                    return;
                }
                queue.enqueue(currunt.left);
                queue.enqueue(currunt.right);
            }
        }
    }

    //  just focus on the "space" variable and how it's changing with each recursive call. nothing complicated besides that.
    print2D(root, space) {
       
        if(!root) {
            return;
        }
        space = this.globleSpaceForPrinting + space;
        this.print2D(root.right, space);

        let curruntSpace = '';
        for(let i = this.globleSpaceForPrinting; i < space; i++) {
            curruntSpace += " ";
        }

        console.log(curruntSpace + root.val + '\n');
        this.print2D(root.left, space);
    }
    // 
    printLevelOrder(root) {
        const queue = new Queue(Number.MAX_VALUE);

        if(!root) return null;
        let output = "";
        queue.enqueue(root);
        while(!queue.isEmpty()) {
            const curruntNode = queue.dequeue().val;
            output += curruntNode.val + '->';
            if(curruntNode.left) {
                queue.enqueue(curruntNode.left);
            }
            if(curruntNode.right) {
                queue.enqueue(curruntNode.right);
            }
        }
        return output;
    }
    printLevelOrderRecursivly(root) {

      // calculating height of the tree  
      const height = this.heightOfTree(root, 0);
      let output = '';

    //   calling print1 for each level
      for(let i = 0; i < height + 1; i++) {
          print1(root, i);
      }

      function print1(root, level) {
          if(level == 0) {
              if(root) {
                output += root.val + ' ';
              }
            return;
          } else {
              if(root) {
                print1(root.left, level - 1);
                print1(root.right, level - 1);  
              }
          }
      }

      return output;
    }
    preOrderTraversal(root) {
        if(!root) return;
        this.preOrderTraversalStr += root.val + " ";
        this.preOrderTraversal(root.left);
        this.preOrderTraversal(root.right);

        return this.preOrderTraversalStr;
    }
    postOrderTraversal(root) {
        if(!root) return;
        this.postOrderTraversal(root.left);
        this.postOrderTraversal(root.right);
        this.postOrderTraversalStr += root.val + " ";

        return this.postOrderTraversalStr;
    }
    inOrderTraversal(root) {
        if(!root) return;
        this.inOrderTraversal(root.left);
        this.inOrderTraversalStr += root.val + " ";
        this.inOrderTraversal(root.right);

        return this.inOrderTraversalStr;
    }

    printAllRootToLeaf(root) {
        // start from here.
       
        const allPath = [];
        goRecursive(root, []);
        function goRecursive(root, curruntArr) {
            if(!root) return;
            curruntArr.push(root.val);
            goRecursive(root.left, curruntArr);
            goRecursive(root.right, curruntArr);
            const newArr = curruntArr.slice();
            if(!root.left && !root.right) {
                allPath.push(newArr);
            }
            curruntArr.pop();
        }

        return allPath;
    }
    printSpecificLevel(root, level) {
          
          let output = "";
          print1(root, level - 1);

          function print1(root, level) {
              if(level == 0) {
                  if(root) {
                    output += root.val + ' ';
                  }
                return;
              } else {
                  if(root) {
                    print1(root.left, level - 1);
                    print1(root.right, level - 1);  
                  }
              }
          }
          return output; 
    }


    // its basically an inorder traversal
    heightOfTree(root, curruntHeight) {

        if(!root) return;

        curruntHeight += 1;
        this.maxHeight = Math.max(this.maxHeight, curruntHeight);
        this.heightOfTree(root.left, curruntHeight);
        this.heightOfTree(root.right, curruntHeight);

        return this.maxHeight - 1;
    }

    // it's basically an inorder traversal
    sumOfAllNodes(root) {
        if(!root) return;

        this.totalSumOfNodes += root.val;
        this.sumOfAllNodes(root.left);
        this.sumOfAllNodes(root.right);

        return this.totalSumOfNodes;
    }   

    // just modifed the printLevelorderRecusivly. 
    sumOfNodesAtEachLevel(root) {
      // calculating height of the tree  
      const height = this.heightOfTree(root, 0);

    //   calling print1 for each level
      const outputArr = [];
      for(let i = 0; i < height + 1; i++) {
          outputArr.push(print1(root, i, 0));
      }

      
      function print1(root, level, curruntSum) {
          if(level == 0) {
              if(root) {
                curruntSum += root.val;
              }
            return curruntSum;
          } else {
              if(root) {
                curruntSum =  print1(root.left, level - 1, curruntSum);
                curruntSum =  print1(root.right, level - 1, curruntSum);  
              }
          }

          return curruntSum;
      }

      return outputArr;
    }

    searchIterativly(root, target) {

        let temp = root;

        while(temp) {
            if(temp.val === target) {
                return `Yes ${temp.val} exists in the tree`;
            } else if(target > temp.val) {
                temp = temp.right;
            } else {
                temp = temp.left;
            }
        }
        return `No ${target} doesn't exists in the tree`;
    }

    searchRecursively(root, target) {


        let temp = root;
        return goRecursive(temp, target);

        function goRecursive(temp, target) {
            if(!temp) return `No ${target} doesn't exists`;
            if(temp.val === target) return `Yes ${target} does exists`;

            let result;
            if(target > temp.val) {
              result  =  goRecursive(temp.right, target);
            } else {
               result = goRecursive(temp.left, target);
            }

            return result;
        }
    }
    totalNodes(root) {
        if(!root) return;

        this.totalNumOfNode += 1;
        this.totalNodes(root.left);
        this.totalNodes(root.right);
        
        return this.totalNumOfNode;
    }

    maxValueInTree(root) {
        if(!root) return;
        this.maxValue = Math.max(this.maxValue, root.val);
        this.maxValueInTree(root.left);
        this.maxValueInTree(root.right);

        return this.maxValue;
    }


    printNormal() {
        console.log(this.root);
    }
}

const myBinary = new BST();

myBinary.insertNodeIteretively(10);
myBinary.insertNodeIteretively(2);
myBinary.insertNodeIteretively(14);
myBinary.insertNodeIteretively(1);
myBinary.insertNodeIteretively(7);
myBinary.insertNodeIteretively(40);
myBinary.insertNodeIteretively(3);

console.log(myBinary.searchRecursively(myBinary.root, 55));
