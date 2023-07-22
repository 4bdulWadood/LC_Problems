class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
// linkedlist class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
 
    // adds an element at the end
    // of list
    add(element) {
        // creates a new node
        var node = new Node(element);
 
        // to store current node
        var current;
 
        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
 
            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }
 
            // add node
            current.next = node;
        }
        this.size++;
    }
 
    // insert element at the position index
    // of the list
    insertAt(element, index) {
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {
            // creates a new node
            var node = new Node(element);
            var curr, prev;
 
            curr = this.head;
 
            // add the element to the
            // first index
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
 
                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
 
                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
 
    // removes an element from the
    // specified location
    removeFrom(index) {
        if (index < 0 || index >= this.size)
            return console.log("Please Enter a valid index");
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;
 
            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the
                // position to remove an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
 
                // remove the element
                prev.next = curr.next;
            }
            this.size--;
 
            // return the remove element
            return curr.element;
        }
    }
 
    // removes a given element from the
    // list
    removeElement(element) {
        var current = this.head;
        var prev = null;
 
        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
 
 
    // finds the index of element
    indexOf(element) {
        var count = 0;
        var current = this.head;
 
        // iterate over the list
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }
 
        // not found
        return -1;
    }
 
    // checks the list for empty
    isEmpty() {
        return this.size == 0;
    }
 
    // gives the size of the list
    size_of_list() {
        console.log(this.size);
    }
 
 
    // prints the list items
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
 
}
 


var ll = new LinkedList();
ll.add(56) 
ll.add(34) 
ll.add(213) 
ll.add(34)

console.log(ll);

var map = new Map();

var map = new Map();
var node = ll; // Assuming that 'll' is a valid LinkedList instance

function iterateThroughList(linkedList) {
    let current = linkedList.head;
    while (current !== null) {
        if (map.has(current.element)) {
            map.set(current.element, map.get(current.element) + 1);
        } else {
            map.set(current.element, 1);
        }
        current = current.next;
    }
}

iterateThroughList(node); // Use the correct linked list instance 'node'
var resultLL = new LinkedList();
[...map].forEach((val)=>{
    if(val[1]===1){
        resultLL.add(val[0]);
    }
})

resultLL.printList();


//Implementation done in O(N+M) time complexity, where N is the size of the linked list and M is the size of the hashmap. N > M
//O(N+M) space complexity, where N is the number of elements in the linkedlist and M is the number of elements in the hashmap. N > M
//Even without the Buffer (Hashmap) the space complexity would just be O(N) because of the LinkedList

//But how would this algo be implemented without a hashmap (Buffer)?
//This algorithm can be implemented without a hashmap, but we would have to use a nested for loop to compare each element with every other element to find a match.

//No Buffer Allowed Implementation
function removeDuplicates(head){
    let current = head;

    while (current){
        //Runner checks all nodes ahead of current
        let runner = current;

        while(runner.next){
            if(runner.next.data === current.data){
                //Deletes current runner node
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }

        current = current.next;
    }

    return head;
}

console.log(removeDuplicates(node.head))

//Time Complexity is O(N^2), but since we removed the hashmap the space complexity is O(1)