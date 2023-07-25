//Min Stack
//How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element?
//Push, Pop, and Min should all operate in O(1) time complexity.

class CustomStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        // Adding to the end of the stack
        this.stack.push(val);

        // Updating the minStack with the smallest element
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop() {
        if (this.minStack[this.minStack.length - 1] === this.stack[this.stack.length - 1]) {
            this.minStack.pop();
        }
        return this.stack.pop();
    }

    min() {
        // The smallest element will be at the top of the minStack.
        return this.minStack[this.minStack.length - 1];
    }
}


var customStack = new CustomStack();

customStack.push(7);
customStack.push(9);
customStack.push(12);
customStack.push(1);
customStack.push(12);

console.log(customStack.min());
console.log(customStack.min());
console.log(customStack.min());

console.log(customStack.pop())


