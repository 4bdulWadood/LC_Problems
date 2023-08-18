/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0){
      return 1  
    } 

    if(x==1||x==-1){
        if(n%2===0||x==1) return 1;
        return -1;
    }
    
    var res = x;
    for(var i = 1; i < Math.abs(n); i++){
        res=res*x
    }

    n<0?res = 1 / res:null
    return res
};



var myPow = function(x, n) {
    //This problem can also be solved recursively since there is recurrence relation 
    if(n===0) return 1;
    if(n===1) return x;

    if(x===1) return 1;
    if(x===-1) {
        if(n%2!=0){
            return -1;
        }
        return 0;
    }

    function recurse(x, n){
        if(n===0){
            return 1;
        }
        return x * recurse(x, Math.abs(n)-1)        
    }
    var ans = n<0?1/recurse(x,n):recurse(x,n)

    return ans
};



    //The recursion algorithm could be further made more efficient
    //By exploiting the property that pow(y, n/2)  * pow(y, n/2) = pow(y,n), we can further reduce the number of recursive calls. However, this property only applies for an even value of n. For example: 2^3 * 2^3 = 2^6, 6 is an even number, for odd cases you would multiply with the base value for example two with the product of the x^y * x^y to take into account the additional one that makes the exponent odd.

    //the time complexity will be O(log(n)), due to creating two branches on every recursive call.  

    //This algorithm beat 90% of users with JS on LeetCode!!!

var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;

    if (x === 1) return 1;
    if (x === -1) {
        if (n % 2 !== 0) {
            return -1;
        }
        return 1;
    }

    function recurse(x, n) {
        if (n === 0) {
            return 1;
        }
        if (n === 1) {
            return x;
        }
        
        const temp = recurse(x, Math.floor(n / 2));
        
        if (n % 2 === 0) {
            return temp * temp;
        } else {
            return x * temp * temp;
        }
    }
    
    if (n < 0) {
        return 1 / recurse(x, -n);
    } else {
        return recurse(x, n);
    }
};

