/*
Check Balanced : Given a binary tree check if it is a binary search tree. A recursive approach to a preorder depth first search might be useful.

*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function CheckBalanced(root){
    var isBST = true;
    function recursiveDFS(root){
        if(!root){
            return true;
        }

        if(root.left&&(root.left.val > root.val) || root.right&&(root.right.val < root.val)){
            return false;
        } 
        
        return recursiveDFS(root.left) && recursiveDFS(root.right);
    }

    console.log(recursiveDFS(root))

    recursiveDFS(root)
    return isBST;
}

//First pass find the minimum element, subsequent passes of the binary tree check to see if the diffirence from a leaf node to the minimum sub-tree is greater than 1.
let root = new Node(3);
root.left = new Node(0);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(4);

// Time Complexity : O(n)
// Space Complexity : O(1)

CheckBalanced(root)