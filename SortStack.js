//Sort Stack
/* Write a program to sort a stack such that the smallest items are on the top, you can use an
addtional temporary stack, but you may not copy the elements into any other data structure (such as an array)
The stack supports the following operations: push, pop, peek, and isEmpty.

Approach:
We can divide the stack into two, using an additional stack, the first stack will have elements greater 
than N (N is the element being inserted), and the second stack will have elements less than N.
N can be placed on Stack 1, and elements from Stack 2 can be placed back on stack 1. We don't have to worry about elements in Stack 2 being 
put back in the wrong order because Stack is LIFO data strucutre.

Edge Cases to Consider: 
Stack 1 is of size 1 or 0:
    Case of size 0:
        Just perform .push
    Case of size 1: 
        Compare and either place element either after or before the existing element in the stack
    Else:
        Execute the algorithm above
*/



class SortStack{
    
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }

    push(element){
        if(this.stack1.length === 0){
            this.stack1.push(element);
            return this.stack1;
        }

        if(this.stack1.length === 1){
            if(this.stack1[0]<element){
                var save = this.stack1.pop();
                this.stack1.push(element);
                this.stack1.push(save);
            }else{
                this.stack1.push(element)
            }
            return this.stack1;;
        }

        /*
            We can divide the stack into two, using an additional stack, the first stack will have elements greater 
            than N (N is the element being inserted), and the second stack will have elements less than N.
            N can be placed on Stack 1, and elements from Stack 2 can be placed back on stack 1. We don't have to worry about elements in Stack 2 being 
            put back in the wrong order because Stack is LIFO data strucutre.
        */

        while (this.stack1[this.stack1.length - 1] < element) {
            this.stack2.push(this.stack1.pop());
        }

        this.stack1.push(element);

        while(this.stack2.length>0){
            this.stack1.push(this.stack2.pop())
        }

        console.log(this.stack1)
        //Worst Case time complexity is O(N). Worst Case Space Complexity is O(N), where N is the size of both stack1 and stack2.
    }

    pop(){
        this.stack1.pop();
    }

}

let newQueue = new SortStack();
console.log(newQueue.push(5));
console.log(newQueue.push(8));
console.log(newQueue.push(9));
console.log(newQueue.push(9));
console.log(newQueue.push(10));
console.log(newQueue.push(9));
console.log(newQueue.push(9));
console.log(newQueue.push(100));
console.log(newQueue.push(7));
