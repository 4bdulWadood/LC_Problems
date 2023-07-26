//Queue via Stacks
/* Implement a MyQueue class which implements a queue using two stacks. */
/* In JS enqueue and push are similar in functionality but associated with different data structures
   The question asks how to perform enqueue and dequeue functionality using two stacks and the push and pop operations.
   .enqueue is the same as .push functionally so that doesn't require a change, 
   .dequeue requires performing .pop onall elements on the stack, and pushing them into stack 2. When .Pop is performed on Stack 2, the first element of stack 1 is obtained.
   Once that element has been removed from the stack, clear stack 1, and perform .pop on stack 2 to move all elements back to Stack 1, to retain the order of the stack 1.
   This is how .dequeue is performed.
*/

class MyQueue{
    //threshold set to 5 elements
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }

    //Space Complexity O(1), Time Complexity O(1)
    enqueue(element){
        this.stack1.push(element);
    }

    //Space Complexity O(1), Time Complexity O(n)
    dequeue(){
        this.stack2 = this.stack1.reverse();
        var dequeueValue = this.stack1.pop();
        this.stack1.reverse();
        return dequeueValue
    }

    print(){
        console.log(this.stack1)
    }
}

let newQueue = new MyQueue();
newQueue.enqueue(6);
newQueue.enqueue(7);
newQueue.enqueue(8);
newQueue.print();
newQueue.dequeue();
newQueue.print();
newQueue.dequeue();
newQueue.print();
newQueue.dequeue();
newQueue.print();
