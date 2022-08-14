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
    display() {
        var listStr = ""; //empty string for values of list
        // if lst is emptty
        if( this.head == null){
            return listStr
        }
        //we made it we have at least on node
        listStr += this.head.value; //cocatenates list values

        var runner = this.head.next;
        while( runner != null){
            listStr += ", " + runner.value; //add the nodes value to list
            runner = runner.next;// move the runner to next node
        }
        return listStr;
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
//
console.log (mySLL.display());



