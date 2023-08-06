/*
Check Balanced : Given a binary tree check if it is balanced using a function. 
Balanced Tree : The difference between the lowest and highest subtree is at most 1.

Time Complexity : O(n), since each node is only being visited once.
Space Complexity : O(1), no new data is created, only one boolean.
*/

class Node {
    constructor(left = null, right = null, val){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function CheckBalanced(root){
    var isBalanced = true;
    //Intuitively, I think a Depth First Search would be the better option.
    //Implementing a rescursive approach to preorder depth first search.
    
    function recursiveDFS(root){
        if(!root){
            return 0;
        }
    
        const leftHeight = recursiveDFS(root.left);
        const rightHeight = recursiveDFS(root.right);

        if(Math.abs(leftHeight - rightHeight) > 1){
            isBalanced = false;
        }

        return Math.max(leftHeight, rightHeight) + 1;
    }

    recursiveDFS(root)
    console.log(isBalanced)
}

//First pass find the minimum element, subsequent passes of the binary tree check to see if the diffirence from a leaf node to the minimum sub-tree is greater than 1.
let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
CheckBalanced(root)