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
    
    print() {
        console.log(this.root);
    }
}

const myBinary = new BST();
myBinary.insertNodeIteretively(10);
myBinary.insertNodeIteretively(2);
myBinary.insertNodeIteretively(14);
// myBinary.insertNodeIteretively(7);
myBinary.insertRecursivly(myBinary.root, 7);
myBinary.insertRecursivly(myBinary.root, 40);
// console.log(myBinary.root);

// myBinary.insertRecursivly(10);
// myBinary.insertRecursivly(3);
// myBinary.insertRecursivly(1);
myBinary.print();
