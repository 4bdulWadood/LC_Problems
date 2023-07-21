

//The space complexity of creating an NxN matrix would be O(N^2)
//Swapping the Matrix in place would ensure a space complexity of O(1)

//The time complexity of iterating through an NxN matrix would be O(N^2/2)
//However, since we are only iterating through half of the matrix, only the one side of the diagonal, then we can divide the runtime by half.



function RotateMatrix(matrix){
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j <= i; j++){
            var save = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = save;
        }
    } 

    return matrix;
}


console.log(RotateMatrix([[255,254],[265, 264]]))