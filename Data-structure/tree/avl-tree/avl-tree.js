
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class avlTree {

   constructor(data) {
       this.root = new Node(data);
       this.globleSpaceForPrinting = 5;
   } 

   height(root) {

    let maxHeight = 0;
    return goRecursive(root, 0);

    function goRecursive(root, curruntHeight) {
        if(!root) return 0;

        curruntHeight += 1;
        maxHeight = Math.max(maxHeight, curruntHeight);
        goRecursive(root.left, curruntHeight);
        goRecursive(root.right, curruntHeight);
        return maxHeight;
    }
   }

   rightRotate(root) {
    // console.log(root);
    let temp = root.left;
    let temp1 = temp.right;

    temp.right = root;
    root.left = temp1;
    console.log(temp)
    return temp;
   }

   leftRotate(root) {
    let temp = root.right;
    let temp1 = temp.left;

    temp.left = root;
    root.right = temp1;

    return temp;
   }

   getBalanceFactor(root) {
    if(!root) {
        return -1;
    } else {
        return this.height(root.left) - this.height(root.right);
    }
    }

    insertNode(root, data) {

        const that = this;        
        this.root = goRecursive(root, data);
        function goRecursive(root, data) {
            if(!root) {
                return new Node(data);
            } else if (data < root.val) {
                root.left = goRecursive(root.left, data);
            } else if (data > root.val) {
                root.right = goRecursive(root.right, data);
            } else {
                return 'can\'t insert duplicates';
            }
    
            const bf = that.getBalanceFactor(root);
            if(bf > 1 && data < root.left.val) {
                // dod right balance;
               return that.rightRotate(root);
            } else if (bf < -1 && data > root.right.val) {
               return  that.leftRotate(root);
                // do left balance;
            } else if (bf > 1 && data > root.left.val) {
                root.left = that.leftRotate(root.left);
               return that.rightRotate(root); 
                // do left rotate 
                // do  right rotate 
            } else if(bf < -1 && data < root.right.val) {
                root.right = that.rightRotate(root.right);
               return  that.leftRotate(root);
                // do right rotate
                // do left rotate;
            }
            return root;    
        }

        return this.root;
    }
    
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
}

const myAvl = new avlTree(60);
// console.log(myAvl.root);

myAvl.insertNode(myAvl.root,50);
myAvl.insertNode(myAvl.root,40);
myAvl.insertNode(myAvl.root,65);
myAvl.insertNode(myAvl.root,82);
myAvl.insertNode(myAvl.root,12);
myAvl.insertNode(myAvl.root,42);
myAvl.insertNode(myAvl.root,30);
myAvl.print2D(myAvl.root, 5);