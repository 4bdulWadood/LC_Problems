/* 
Robot in a Grid:
Imagine a robot sitting on the upper left corner of grid with R ROWS and C COLUMNS. The robot 
can only move in two directions right and down, but certail cells are "off limits" such that
the robot cannot step on them. Design an Algorithm to find a path for the robot from the top 
left to the bottom right.

Intuitively, the problem can be thought of as going from top-left to bottom-right.
on a smaller level the problem is still about going right and down. 
this problem can be thought of as a way to find one path down in a tree.
a Recursive implementation of Depth First Search should suffice. Each child node
can be a path to take (Either left or right), when an obstacle is met then the recursive loop
simply returns; and the other route is taken. When the path reaches bottom right, the (N,N) coordinate in a square matrix
then we have found a path.


Time Complexity : Only one path is required to be found. Big O is for the worst case. The worst case for an N*N Matrix is that all N*N slots will be checked.
                  Hence the time complexity will be O(N^2)

Space Complexity : Since this is a recursive implementation the memory stack will hold data from the previous nodes, in the worst case all N*N Nodes will be stored
                   Hence the space complexity will be O(N^2)

*/

let maze = [
    [' ','X','X','X','X'],[' ',' ',' ','X','X'],['X','X',' ','X','X'],['X','X',' ','X','X']
]

function RobotTraverse(x,y){
    try {
    if(maze[y][x] === 'X'){
        return;
    } else if(maze[y][x] === ' '){
        maze[y][x] = 'O';
    } 
    }
    catch(error){
        console.log("End Reached")
    }

    console.log(maze)

    if(maze.length>x)  RobotTraverse(x+1, y);
    if(maze[0].length>y)  RobotTraverse(x, y+1);
}


RobotTraverse(0,0);

console.log(maze)
