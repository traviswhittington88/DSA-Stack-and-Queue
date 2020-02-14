// creat node class for linked list for stack

class _Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  // Insertion
  push(data) {
    //if the stack is empty then the node will be top
    if (this.top === null) {
      this.top === new _Node(data, null);
      return this.top;
    }
    /* If the stack already has something,
       then create a new node,
       add data to the new node, and
       have the pointer point to the top , aka last node */
      
    const node = new _Node(data, this.top);  // O(1)
    this.top = node;
  }
  pop() {
  /*  In order to remove the top of the stack (Last item), you have
      to point the pointer to the next item and that 
      next item becomes the top of the stack  */
    const node = this.top;
    this.top = node.next;
    return node.data;  // O(1)
  }
}