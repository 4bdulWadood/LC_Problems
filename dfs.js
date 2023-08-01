function dfs(graph, startNode){
    const visited = new Set();
    const stack = [startNode];

    //This in - particular is in-order traversal
    while(stack.length > 0){
        const currentNode = stack.pop();
        if(!visited.has(currentNode)){
            visited.add(currentNode);
            console.log(currentNode);

            // Add Unvisited Neighbouring Nodes to the Stack
            for (const neighbor of graph[currentNode]){
                if(!visited.has(neighbor)){
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Example Graph in the Form of an Adjacency List
const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F", "G"],
    D: ["B"],
    E: ["B"],
    F: ["C"],
    G: ["C"]
}

//Starting node for DFS traversal
const startNode = 'A';

console.log("DFS Traversal");
dfs(graph, startNode);


//Performing a Depth First Search
//Create a SET to track visited nodes
//Create a stack to manage nodes.

//Begin from a node
//"Visit" all its neighbors if it hasn't been visited. before.
//Push the node onto the stack, pull it and run this algorithm on it again.

//Observation:
//In a Binary Tree the condition to check if a node has been visited is not applicable.
