var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var bool = false;

function MinimalTree(subArr, value) {
    var len = subArr.length;
    
    if (len <= 0) {
        return;
    }

    var midIndex = Math.floor(len / 2);
    
    if (subArr[midIndex] === value) {
        bool = true;
        return;
    }

    console.log(subArr[midIndex]);

    if (subArr[midIndex] > value) {
        MinimalTree(subArr.slice(0, midIndex), value);
    } else {
        MinimalTree(subArr.slice(midIndex + 1), value);
    }
}

MinimalTree(arr, 2);
console.log(bool);

//Space Complexity will be O(log N), as for each iteration of the for loop the input array is being halved.
//Time Complexity will be O(log N), since for each iteration the search space is being divided in half, which means
//The number of elements you need to search for is being divided in half. For Example: 16 nodes will take 4 divisions. hence log (N) time complexity.
