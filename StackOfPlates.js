//Stack of Plates
/* Imagine a literal stack of plates, if the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack
when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this, SetOfStacks 
The SetOfStack object should be composed of several stacks, and a new stack should be created once the older one exceeds capacity.
.push and .pop should perform identically.
*/

//One possible solution to this problem would be to implement an array of arrays.
//The .push and .pop operations will be performed on the very last array in the list of arrays.

//If we perform a push operation and all arrays are full, then we create a new array, and push the element in it.
//If we perform a pop operation and the last array becomes empty, then we need to delete that array.

class customStack{
    //threshold set to 5 elements
    constructor(){
        this.threshold = 5;
        this.stack = [];
        this.currStack = [];
    }

    push(element){
        if(this.currStack.length<5){
            this.stack.pop();
        } else {
            this.currStack = []; //Arrays are mutable in JS so this works
        }
        this.currStack.push(element);
        this.stack.push(this.currStack)
        console.log(this.stack)
    }

    pop(){
        //perform .pop on the last array in the stack, if it becomes empty, then perform .pop on the entire stack, 
        let poppedElement = this.stack[this.stack.length-1].pop();
        if(this.stack[this.stack.length-1].length===0){
            this.stack.pop();
        }
        console.log(this.stack)
        return poppedElement;
    }
}

let newStack = new customStack();

newStack.push(5);
newStack.push(5);
newStack.push(5);
newStack.push(5);
newStack.push(5);
newStack.push(5);
newStack.push(6);
newStack.push(7);
newStack.push(8);
newStack.push(8);
newStack.push(9);


console.log(newStack.pop());
console.log(newStack.pop());


//The time and space complexity is typically O(1) for both push and pop operations,
//In this case, we just add a few conditional statements, but the push and pop functionality remains the hence:
//The time and space complexity is O(1).
