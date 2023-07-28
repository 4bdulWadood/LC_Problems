var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
]

//The array at index 0 shows which nodes the node at index 0 is connected to.
//The output of the BFS function will be a list of key-value pairs where the key is the Element and the value is the distance from the root.
//Time Complexity is O(N^2), where N is the number of nodes.
//Space Complexity is O(V+E) where E is the number of edges and V is the number of vertices.

function bfs(graph, root){
    var nodesLen = {};
    for(var i = 0; i < graph.length; i++){
        nodesLen[i] = Infinity;
    }

    var queue = [root];
    var current;

    while(queue.length != 0){
        current = queue.shift();
        var curConnected = graph[current];

        var neighborIdx = [];
        var idx = curConnected.indexOf(1);

        while (idx != -1){
            neighborIdx.push(idx);
            idx = curConnected.indexOf(1, idx + 1);
        }

        for (var j = 0; j < neighborIdx.length; j++){
            if(nodesLen[neighborIdx[j]] == Infinity){
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
                queue.push(neighborIdx[j]);
            }
        }
    }
    return nodesLen;
}

console.log(bfs(exBFSGraph, 3));





let arr = [1,2,3,4,5,2]



console.log(arr.indexOf(2, 2));//Get the indexOf 2 after index 2. 
