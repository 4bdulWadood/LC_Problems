//Roblox Coding Challenge

var h = 5;

var arr = [1,2,3,4,5,6,7,8,9]

//Find the number of pairs with the same number of 1's 
//Need to use the Combinations formula to find the distinct pairs in N elements, where N elements have the same number of 1's in their binary representation
//Firstly iterate through each element in the arr, add the number of ones in their binary representation to a hashmap as the key, the value should be initialized to 1.
//If another element in the array has the same number of ones in their binary representation then increase the count of that number of ones map value by 1.

/*
    Use the combinations formula to calculate the distinct number of pairs in the for N elements with the same number of 1's.
    The formula for the combination is given as 
    N!/(R!*(N-R)!)

    Where R is the size of the grouping.
    R=2
    And N is the number of elements with the same number of 1's in their binary representation.
    N!/(2!*(N-2)), ITERATE THROUGH THE HASHMAP AND SUM FOR ALL N, WHERE N = VALUE OF AN ELEMENT IN THE HASHMAP.
*/

var map = new Map();

arr.forEach(element=>{
    var count = 0;
    val = element.toString(2).split("").forEach(element=>{
        element=="1"?count++:null
    });
    if(!map.has(count)){
        map.set(count, 1);
    }else{
        map.set(count, map.get(count)+1);
    }
})

//Hashmap has now been constructed
var pairCount = 0;

function calculateCombinations(n, k) {
    if (n < k) {
        return 0;
    }
    return factorial(n) / (factorial(k) * factorial(n - k));
}


function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

console.log(map)

map.forEach((value, key)=>{
    var combos = calculateCombinations(value, 2)
    pairCount+=combos;
})

console.log(pairCount)
