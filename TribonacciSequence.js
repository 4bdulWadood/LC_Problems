/* 
Triple Step (Tribonacci Sequence):
A child is running up a staircase with n steps and can hp either 1 step, 2 steps, or 3 steps at a time, 
Implement a method to count how many possible ways the child can run up the stairs of lenght n.

Input : 4
Output : 7
Explanation: 
Below are the seven ways
1 step + 1 step + 1 step + 1 step
1 step + 2 step + 1 step
2 step + 1 step + 1 step
1 step + 2 step + 1 step
2 step + 2 step
3 step + 1 step
1 step + 3 step

Input : 3
Output : 4
Explanation: 
1 step + 1 step + 1 step
1 step + 2 step
2 step + 1 step
3 step

Recursive Approach
There are n stairs, and a person is allowed to jump to next stair, skip one stair or skip two stairs.
This problem is similar to a fibonacci type problem, as the total number of steps required at a step
is the summation of the steps required for three steps before that step.
(For this problem I am assuming permutations, so 2 step + 1 step is different from 1 step + 2 step)

O(n=6) = O(5) + O(4) + O(3) 
O(3) is also a base case:
    steps required for 3 steps are:
    1. 3 steps step
    2. 2 steps + 1 step
    3. 1 step + 2 step 
    4. 1 step + 1 step + 1 step

    For steps with n = 3, we have 4 different ways to climb them.

Initially a recursive implementation will be done, then memo object will be used to add Memoization and develop 
a Dynamic Programming Solution!

so there are n stairs, so if a person is standing at i-th stair. The person can move to i+1, i+2, i+3-th stair. 
Create a recursive function with:

For Example: 
for 3 steps :

Base Case for n = 1, n = 2, and n = 3 where the n represents number of steps that can be taken
The small calulation in this recursive function is the addition of the numbers

Memoization can be used to implement a Dynamic Programming based approach:
*/

//Function that calculates the number of ways to climb stairs of size N steps.
function NumberOfWays(n){
    if(n===1||n===2||n===3) {
        //2+1, 1+2, 3, 1+1+1, 4 ways for to take 3 steps, 2 ways (1+1, 2) to take 2 steps, and 1 way to take 1 step.
        if(n===3) return 4;
        return n;
    }

    return NumberOfWays(n-1) + NumberOfWays(n-2) + NumberOfWays(n-3);    
}

//Implementing a Memoization based approach using Memo Map object.
let Memo = new Map();
function NumberOfWaysDP(n){
    //Check if N has been allready calculated
    if(Memo.has(n)){
        return Memo.get(n);
    }

    if(n===1||n===2||n===3) {
        //2+1, 1+2, 3, 1+1+1, 4 ways for to take 3 steps, 2 ways (1+1, 2) to take 2 steps, and 1 way to take 1 step.
        if(n===3) return 4;
        return n;
    }

    //When a sub-tree is fully explored, its value is saved so that it need not be checked out or calculated if the same subtree is seen somewhere else in the tree.
    Memo.set(n, NumberOfWays(n-1) + NumberOfWays(n-2) + NumberOfWays(n-3))
    return Memo.get(n);
}

console.time(NumberOfWays(8));
console.timeEnd(NumberOfWays(8));

console.time(NumberOfWaysDP(8));
console.timeEnd(NumberOfWaysDP(8));

/*
Recursive Approach:
Some nodes are being visited many times, time complexity is O(3^n),
intuitively, the nodes that are at the lower end are being visited more than
the nodes at the upper end. For example, nodes 1,2 and 3 are the lowest level nodes, and they are 
in whatever path the algorithm takes at the bottom most level. So the deeper the tree the larger the 
time complexity. Since each level increases by 3 the total time complexity is 3^n.

During the traversal of the tree the memory stack stores all the previous recursive loops data, at
the worst case this height is O(log N), space complexity is O(log N)

Dynamic Programming Approach:
Each node is being at most once, since we are adding each visited node into the Memo Object.
the time complexity is O(n)

The space complexity is O(log N + log N) because along with Memory Stacks Space Complexity (Due to Recursion) there is space complexity of Creating the Memo Object. 
In a tribonacci tree that is being traversed in a pre-order way,  the elements on the tree on the left most side, will be added to the Memo Object,
in subsequent recursive iterations the Memo Object will just return the calculated values for those nodes.
Hence, the Memo Object only adds those left most nodes to it. The number of these nodes is given by log N.
*/
