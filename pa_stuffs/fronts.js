class SLLNode { // singly link list node class
    constructor(val){
        this.value = val; //node value
        this.next = null; //pointe to next node
    }
}
// Front


class SLL { 
    constructor(){ //starts with no nodes
        this.head = null;

    }
    // all methods built into class go here
    addFront(value) {
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    //remove a node from the front list
    removeFront(){
        if (this.head == null){
            return this.head;
        }
        var removeNode = this.head; // this variable holds the node to remove
        this.head = removeNode.next;// moves head of list to second node
        removeNode.next = null;
        return this.head;
    }
    //return the value at the front (head) of list
    front(){
        if (this.head == null){
            return null;
        }
        else{
            return this.head.value;
        }
    }
}
var mySLL = new SLL() //starts with empty list
mySLL.addFront (10);
mySLL.addFront (5);
mySLL.addFront (7);
console.log(mySLL.front());
console.log (mySLL);
mySLL.removeFront();
console.log (mySLL);
//console.log (mySLL.head.next);
//Examples:

//SLL1 = new SLL()
//SLL1.addFront(18) => Node { data: 18, next: null }
//SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
//SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

//Remove Front

//Write a method to remove the head node and return the new list head node. If the list is empty,
// return null.