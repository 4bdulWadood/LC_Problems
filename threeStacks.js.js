//The most straightward way to implement a stack of stacks, is using an array of arrays. we can either remove a certain element or remove the entire stack using this approach.

class ThreeStacks {
    constructor(){
        this.stacks = [[],[],[]]; //Declare an array of arrays.
    }

    push(stackNum, value){
        this.stacks[stackNum].push(value);
    }

    //O(1) Constant Time

    pop(stackNum){
        if(this.isEmpty(stackNum)){
            console.log(`Stack ${stackNum} is empty. Cannot pop.`);
            return;
        }
        return this.stacks[stackNum].pop();
    }

    pop(){
        return this.stacks.pop();
    }


    //O(1) Constant Time

    peek(stackNum) {
        if (this.isEmpty(stackNum)) {
        console.log(`Stack ${stackNum} is empty.`);
        return;
        }
        return this.stacks[stackNum][this.stacks[stackNum].length - 1];
    }

    //O(1) Constant Time

    isEmpty(stackNum){
        return this.stacks[stackNum] === 0;
    }
}

const threeStacks = new ThreeStacks();


//All operations, push, pop, peek are Constant Time
threeStacks.push(0, 5);
threeStacks.push(1, 10);
threeStacks.push(2, 15);


console.log(threeStacks.pop()); //Displays the last stack in the stack.
