/* 
Paths With Sum:
You are given a binary tree in which each node contains an integer value (which might be positive or negative), Design an algorithm to count the number of 
paths that sum to a given value. The path must does not need to start or end at the root or a leaf, but it must go downwards.

Since we are concerned about paths going from top to bottom DFS seems to be the most intuitive choice.s

Running DFS on the tree for each node, and when performing the DFS on each node, check if the summation
has reached the value, if it has then consider it a path (increment some variable), and move to subsequent recursive iterations in that loop.

Steps:
1. Perform DFS on the given binary tree.
2. For each node perform another DFS, one that finds all paths with sum that equal to a certain value where the root node is the one of those nodes we are 
going through in the original binary tree.

Time Complexity : O(n^2), where N represents the number of nodes in the tree.
Space Complexity : O(log N + log N), one log N for each of the DFS being conducted. During the Depth First Search data from previous recursive loops that haven't finished execution is stored in memory.
*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var res = 0;

function PathsWithSum(root, val){
    var nodePaths = 0;
    var nodeSum = 0;
    function DFS2(root, val){
        if(!root){
            return;
        }

        nodeSum+=root.val;

        if(nodeSum === val){
            nodePaths += 1;
        }

        DFS2(root.left, val)

        if(root.left) {nodeSum -= root.left.val;}

        DFS2(root.right, val);

        if(root.right) {nodeSum -= root.right.val;}
    }


    function DFS1(root, val){
        if(!root){
            return;
        }

        DFS2(root, val)
        res += nodePaths;
        nodePaths=0;
        nodeSum = 0;
        DFS1(root.left, val)
        DFS1(root.right, val);
    }

    DFS1(root,val)
}

let root1 = new Node(3);
root1.left = new Node(0);
root1.right = new Node(5);
root1.left.right = new Node(5);
root1.left.left = new Node(5);
PathsWithSum(root1, 5);
console.log(res);


