function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Directed Graphs Adjacency Matrix
var BFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
];

var arr = [];
function bfs(root){
    let queue = [root];

    while(queue.length > 0){
        var element = queue.shift();

        // Get neighbors of the element
        var neighbors = [];
        for (let i = 0; i < BFSGraph[element].length; i++) {
            if (BFSGraph[element][i] === 1) {
                neighbors.push(i);
            }
        }

        // Create a new LinkedList for neighbors of the current element and push them onto the queue.
        var LL = new ListNode(element); // Initialize the linked list with the current element
        var currentLLNode = LL;
        neighbors.forEach((neighbor) => {
            queue.push(neighbor);
            currentLLNode.next = new ListNode(neighbor);
            currentLLNode = currentLLNode.next;
        });

        arr.push(LL); // Push the entire linked list
    }
}

bfs(0);
console.log(arr);
