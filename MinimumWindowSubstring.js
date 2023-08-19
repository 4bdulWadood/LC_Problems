/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    /*Since a window is mentioned in the question, an implementation with the sliding window technique can be considered for a solution.
    You can just add or remove to a str as you iterate through the input string.
    Add character at current index to the string, If all characters in string T can be found in the substring of S then push the substring onto a stack. After pushing find the next character that is in the string from the left and remove it iterate and remove subsequent characters till you find an element that belongs to the string t again. Repeat the process.
    
    Variables needed for the algorithm:
    str to keep track of the current window or substring.
    Need some function that will be O(n) to check if substring has all characters from string t.
    For easier character comparisons a set object can be used to represent chars in string t.

*/

    if (s.length < t.length) {
        return ""; // No possible solution if s is shorter than t
    }
    
    var stack = [];
    var set = new Set(t.split(""));
    var str = ""
    for(var o = 0; o < s.length; o++){
        str = str+s[o];
        var i = 0;
        for(var j = 0; j < str.length; j++){
            if(set.has(str[j])){
                console.log(str)
                i++;
            }
        }

        if(i===t.length){
            //All characters have been found for a substring.
            stack.push(str)

            //Remove the first character from this substring that is in the set and also remove subsequent characters, till you get to the second character that is in the set.
        var index = 0;
        var val = 0;
        for(var j = 0; j < str.length; j++){
            index++;
            if(set.has(str[j])){
                val++;
            }
            if(val===2){
                break;
            }
        }

        str = str.slice(index-1);
        }

    }


    return stack.length===0? "" :stack.pop();


        
};
