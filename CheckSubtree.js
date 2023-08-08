/* 
CheckSubtree:
T1 and T2 are 2 very large binary trees, with T1 much bigger than T2. Create an Algorithm to determien if T2 is a subtree of T1.
A tree T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of N is identical
to T2. That is, if you cut off the tree at node n, the two  trees would be identical.

For Each node of T1, check if it belongs to node T2.  
Need to find a Node N in the Tree 1 which is the same as the root node of Tree 2.

Assuming there is no size limit on the smaller tree (t2 can be from 1 to n nodes, where N is the number of nodes in T1)
Assuming values node values in both trees are non-repeating.

Implement a Depth First Search because a Breadth First Search might consist of elements that are not descendents of root N (that aren't part of the subtree T2 anyways).
This makes the dfs algorithm more efficient.

Steps :
1. Iterate through the larger binary tree (T1)
2. If the larger binary tree that matches T2's root is found then perform DFS to make sure it is a subtree.

The problem now becomes about traversing both Binary Trees at the same time.

The time complexity of this algorithm is O(N + M) in the worst case. Because since each node is unique, only one match will be found between two trees, and
the DFS algorithm will be called to check if that matching node leads to a matching subtree. N is the size of the larger tree and M is the size of the Smaller Tree.

The Space Complexity of this Algorithm is O(Log N), where N is the Number of elements in the larger subtree.

tip: When visiualizing, start with simple examples!
*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function CheckSubtree(root1, root2){
    function CheckMatch(root1, root2){
        if(!root1 && !root2){
            return true;
        }

        if(!root1 || !root2){
            return false;
        }

        if(root1.val !== root2.val){
            return false; 
        }

        return CheckMatch(root1.right, root2.right) && CheckMatch(root1.left, root2.left);
    }

    //Provided two subtrees the CheckMatch function checks if they match.
    //Run the CheckMatch Function when matching nodes have been found in T2 and T1.

    function Result(root1, root2){
        if(!root1){
            return false;
        }

        if(root1.val === root2.val){
             return CheckMatch(root1, root2);
        }

        return Result(root1.left, root2) || Result(root2.right, root2);
    }

    return Result(root1, root2);
}

let root1 = new Node(3);
root1.left = new Node(0);
root1.right = new Node(5);

let root2 = new Node(3);
root2.left = new Node(0);
root2.right = new Node(5);

console.log(root2, root1)
console.log(CheckSubtree(root1, root2));


