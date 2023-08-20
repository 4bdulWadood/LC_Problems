/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    /*
        An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

        The Set object in JS is implemented using a hashtable, however, we also need to consider for recurring characters which is why we must use a map where the key value is a character in the string and the value is the number of time the character occurs in the string.
        1. Iterate through the strs array and create hashmaps for each element
        2. Compare the current element in the iteration with all the other elements using the hashmap,
            if a match is found then push onto the stack.
        3. After each iteration for an element, Push the stack onto the resultant stack.

      But... this solution seems tedious (N^3 time complexity and Array of Maps etc)
      A more efficient solution would be to sort each element in the strs array and create a map with that.
      For each element whose sorted version allready exists in the hashmap as a key, push it to the map. For a string whose sorted version doesn't exist in the map, sort it create an entry in the hashmap with the key being the sorted string.

        List out the map.values() this should be the answer

        Beats 93.6% of users with JS in Runtime and 86.50% of users with JavaScript in Memory!!!

        Time Complexity is O(n) for the creation of the Map, worst-case time complexity of sorting is O(n^2), since we are sorting every element the time complexity will be O(n^2*N) where N is the average length of the strings and N is the length of the strings Array
        Space Complexity : O(n + m) N is the size of the map, and M is the length of the str array.
    */
    var map = new Map();
    strs.forEach(str=>{
        const sortedString = str.split('').sort().join('');
        if(map.has(sortedString)){
            map.set(sortedString, [...map.get(sortedString), str])
        } else {
            map.set(sortedString, [str]);
        }
    })

    return [...map.values()];
};
