
//BFS is optimal to find any path between two nodes 
//An adjacency-Matrix can be used to represent a directed graph.
//an Adjacency Matrix will be asymmetric in a directed unweighted graph.
//An Iterative implementation of a BFS.

//Time Complexity is O(V*E), where V is the number of Vertices and E is the number of edges.
//Space Complexity is O(n), where N represents the size of the array to hold the visited values.

const adjacencyMatrix = [
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];


function RouteBetweenNodes(matrix, start, dest){
    var bool;
    var queue = [start];
    var visited = new Set();
    var level = 0;

    while(queue.length > 0){
        var node = queue.shift();
        var neighbors = [];
        //Find children of node and add them to the neighbors array.
        //Iterate through the neighbors array and if they aren't in the hasVisited set then visit and add them to the hasVisited set. 
        console.log(matrix[node])
        var idx = matrix[node].indexOf(1)
        while(idx!=-1){
            neighbors.push(idx);
            idx = matrix[node].indexOf(1, idx+1)
        }

        console.log(neighbors)


        //Each time we explore the set of neighbors of a node, we are going in a level deeper.
        level++;

        neighbors.forEach((item, index)=>{
            if(!visited.has(item)){
                //Perform some operation and push neighbor onto the queue
                //Check if dest node is reached, and if it is then set some boolean to true;
                if(item == dest){
                    bool=true;
                } 
                visited.add(item)
                queue.push(item);
            }
        })
    }
    return bool;
}


console.log(RouteBetweenNodes(adjacencyMatrix, 7, 3));
  
//In the AdjacenyMatrix Above:
//1. Node 0 is connected to Node 1 and Node 3
//2. Node 2 is connected to Node 4 and Node 8
//3. Node 3 is connected to Node 2 and Node 6
//4. Node 4 is connected to Node 5 and Node 7
//5. Node 6 is connected to Node 7
//6. Node 8 is connected to Node 6



