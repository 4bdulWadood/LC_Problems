/*
    Write a function to return all subsets of a set
    [1,2,3]

    Time Complexity : This is a balanced and perfect binary tree so the number of nodes will be 2^N, where N is the height of the tree and the length of the input array.
                        the time complexity to visit 2^N nodes will be O(2^N) , where N is the length of the input.

    Space Complexity : Since we are performing recursion the memory stack will hold data from previous recursive calls.
                       In the worst case the memory stack will hold data from N functions, the space complexity will be O(n), where N is the length of the input.

    Memoization cannot be used to make the algorithm more efficient as each subset being generated (each path in the binary tree to the bottom) is unique.

    
*/

var set = [1,2,3];
var powerSet = [[]];

function getSubsets(set, subset=[], depth=0){
        if(set.length===depth){
            powerSet.push(subset);
            return
        }
        getSubsets(set, subset, depth+1);
        getSubsets(set, [...subset, set[depth]], depth+1);
}
getSubsets(set)
console.log(powerSet)
