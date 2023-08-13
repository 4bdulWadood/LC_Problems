/*
Time Complexity is O(n+m) where n and m represent the length of num1 and num2.
Space Complexity is O(n + m) where n and m represent the length of num1 and num2.
*/

var multiply = function(num1, num2) {
    var prod = 0;
    num1.split("").forEach((num,index)=>{
        var semiProd = 0;
        if(num==='0'){
            semiProd = Math.pow(10, num1.length-index-1);
            prod+=semiProd*0;
        }

        if(num==='1'){
            semiProd = Math.pow(10, num1.length-index-1);
            prod+=semiProd*1;
        }
        
        if(num==='2'){
            semiProd = Math.pow(10, num1.length-index-1);
            prod+=semiProd*2;
        }

        if(num==='3'){
            semiProd = Math.pow(10, num1.length-index-1);
            prod+=semiProd*3;
        }

        if(num==='4'){
            semiProd = Math.pow(10, num1.length-index-1);
            prod+=semiProd*4;
        }

        if(num==='5'){
            semiProd = Math.pow(10, num1.length-index-1);
            prod+=semiProd*5;
        }

        if(num==='6'){
            semiProd = Math.pow(10, num1.length-index-1);
            prod+=semiProd*6;
        }

        if(num==='7'){
            semiProd = Math.pow(10, num1.length-index-1);
            prod+=semiProd*7;
        }

        if(num==='8'){
            semiProd = Math.pow(10, num1.length-index-1);
            prod+=semiProd*8;
        }

        if(num==='9'){
            semiProd = Math.pow(10, num1.length-index-1);
            prod+=semiProd*9;
        }
    })

    var prod1 = prod;
    prod = 0;
    num2.split("").forEach((num,index)=>{
        var semiProd = 0;
        if(num==='0'){
            semiProd = Math.pow(10, num2.length-index-1);
            prod+=semiProd*0;
        }

        if(num==='1'){
            semiProd = Math.pow(10, num2.length-index-1);
            prod+=semiProd*1;
        }
        
        if(num==='2'){
            semiProd = Math.pow(10, num2.length-index-1);
            prod+=semiProd*2;
        }

        if(num==='3'){
            semiProd = Math.pow(10, num2.length-index-1);
            prod+=semiProd*3;
        }

        if(num==='4'){
            semiProd = Math.pow(10, num2.length-index-1);
            prod+=semiProd*4;
        }

        if(num==='5'){
            semiProd = Math.pow(10, num2.length-index-1);
            prod+=semiProd*5;
        }

        if(num==='6'){
            semiProd = Math.pow(10, num2.length-index-1);
            prod+=semiProd*6;
        }

        if(num==='7'){
            semiProd = Math.pow(10, num2.length-index-1);
            prod+=semiProd*7;
        }

        if(num==='8'){
            semiProd = Math.pow(10, num2.length-index-1);
            prod+=semiProd*8;
        }

        if(num==='9'){
            semiProd = Math.pow(10, num2.length-index-1);
            prod+=semiProd*9;
        }
    })

    console.log(prod*prod1)
};

multiply("1", "4")

