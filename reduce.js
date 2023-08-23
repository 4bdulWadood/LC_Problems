/* The reduce function is a higher-order function available in JS it is used to
reduce an array of values into a single value. It iterates over the elements of the array 
and applies a given function to accumulate a single result. The result can be of any type, 
not just a number, allowing you to perform various kinds of reductions, such as summing
numbers, concatenating strings, or even constructing more complex objects.
*/

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator, currentValue)=> {
    console.log(currentValue)
    return accumulator + currentValue;
}, [0])

console.log(sum)


/*
    Given an array of Objects representing products with 'price' properties, calculate the total value of all
    products.
*/

const products = [
    { name: 'Product A', price: 10 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 15 }
];


var total = products.reduce((accumulatedPrice, {price: currPrice})=>{
    return accumulatedPrice + currPrice;
}, 0)


/*
    Flatten an Array:
    Given an array that contains sub-arrays, 'reduce' to flatten the array and remove
    the sub-arrays.
*/

const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = nestedArray.reduce((accumalator, currentArray)=> {
    return [...accumalator, ...currentArray]
}, [])


/* 
    Counting occurrences:
    Given an array of words, create an object that stores the frequency of each word:
    
*/

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
var map = {};
var frequencyCounter = words.reduce((accumulator, currVal)=>{
    !accumulator[currVal] ? accumulator[currVal] = 1 : accumulator[currVal] = accumulator[currVal]+1;
    return accumulator
}, {})

/*
    .reduce is ideal when you have some sort of iteration along with accumulation in your problem.
    Creating a hashmap is also very efficient with 
*/

console.log(frequencyCounter);
