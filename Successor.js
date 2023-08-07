/* 
Successor : Write an algorithm to find the "next" node (i.e. in-order successor) of a given node in a binary search tree. You may assume that each node has a link to its parent.
implement an In-Order Traversal, (Left to Right). To find the in-order successor, check the left node first, then return itself.

Space Complexity : O(N), 
Time Complexity : O(n), Visiting All Nodes

*/

var successor;

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function DFS(root, s){
    if(!root){
        return true;
    }
    
    if(root.left&&root.val === s){
        successor = root.left;
    }
    else if(root.val === s){
        successor = root;
    }



    return DFS(root.left, s) && DFS(root.right, s)
}

let root = new Node(3);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(7);
root.left.right = new Node(8);

DFS(root, 3);
console.log(successor)
