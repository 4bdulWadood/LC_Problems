
var longestSubarray = function(nums) {
    /*
        Brute Force Approach:
        Assuming the subarray is not contigous to get the size of the longest non-empty subarray perform these steps:
            1. Iterate through the array and if a 0 is detected then run findLongestSubarray algorithm on that array minus the 0. 
            2. Do this for all the 0s, and keep updating the max based on the size of the findLongestSubarray functions return value.
            
        Time Complexity should be O(n^2), trying to find a better solution...

        Assuming Consecutive 0's are allowed...
        There might be a way to solve this problem in O(n) time complexity...
        Step 1: Iterate through the array.
        Step 2: For each 1 followed by a 0, increment some value in a hashmap with key as the index of that 1 for subsequent 1's keep increment that keys value, for each 0:
            1. If it does not have another 0 after it, do not add it to the hashmap.
            2. if it has another 0 after it, add its index to the hashmap.

        Step 3: Find the maximum between two consecutive entries in the hashmap.
        Map data structure preserves order...
    */

    if(nums.length === 1) return 0;

    var saveIndex;
    var map = new Map();
    nums.forEach((element, index)=>{
        if(( nums[index-1]==0 || !nums[index-1] ) && element == 1){
            map.set(index, 1);
            saveIndex = index;
        } else if(element == 1){
            map.set(saveIndex, map.get(saveIndex)+1);
        } else if(element === 0 && nums[index+1]==0){
            map.set(index, 0);
        }
    })

    //Find the maximum some of two consecutive elements in the map. That is the answer.

    var arr = [];
    map.forEach((value, key)=>{
        arr.push(value);
    });

    var max = -1;
    arr.forEach((val, index)=>{
        max<(val+arr[index+1])?max=(val+arr[index+1]):null;
    })

    if(max==-1){
        if(map.get(0)){
            return map.get(0)-1;
        } else {
            return map.get(1)
        }
    }
    return max;
};
