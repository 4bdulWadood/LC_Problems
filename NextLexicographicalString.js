/*
    Name: find next permutation of string
    Type: Lexicographical Permutation

    You are given a string of lowercase letters. Your task is to find the lexicographically next
    greater permutation of the given string. If no such permutation exists, return the string
    in its lexicographically smallest form.

    Input: abdc
    Output: acbd

    Similar to finding the next lexigraphical permutation in a numerical array problem,
    only difference is characters used here. Maybe characters can be compared using ASCII values?
*/

/*
    Name: find next permutation of string
    Type: Lexicographical Permutation

    You are given a string of lowercase letters. Your task is to find the lexicographically next
    greater permutation of the given string. If no such permutation exists, return the string
    in its lexicographically smallest form.

    Input: abdc
    Output: acbd

    Similar to finding the next lexigraphical permutation in a numerical array problem,
    only difference is characters used here. Maybe characters can be compared using ASCII values?

    The time complexity of this algorithm is O(N)
    The space complexity of this algorithm is O(N)

    */


var str = "helloguy";
var save;
//Find index to swap
for(var p = str.length-1; p >= 0; p--){
    if(str[p]<str[p+1]){
        save = p;
        break;
    }
}


//Find the next index to swap the element at index with. This element will be the element that is
//greater than the element at index but only just greater, it will be less than all the other elements to the right of the element at index.
var diff;
var min = Infinity;

for(var p = save+1; p < str.length; p++){
    diff = str[p].charCodeAt(0) - str[save].charCodeAt(0);
    if(diff < min){
        min=p;
    }
}

//Strings are immutable in JS so you cannot manually swap characters by assignment.
//You can convert strings to array then do the swapping and then convert the array back to a string.
/*
var arr = str.split("");

var s = arr[save];
arr[save] = arr[min];
arr[min] = s;

str = arr.join("");

Instead of Converting the string to a mutable data type and performing the swapping, we can use the .slice method to 
recreate a new string without increasing the space complexity by creating a new array object.
*/

var temp = str[save];

str = str.slice(0, save) + str[min] + str.slice(save+1, min) + str[save] +  str.slice(min+1, str.length);

var preStr = str.split("").slice(0, save+1).join("");
var postStr = str.split("").slice(save+1, p+1).reverse().join("");

console.log(preStr+postStr);
