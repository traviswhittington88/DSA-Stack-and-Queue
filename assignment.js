/* 1. Create a stack class
Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core 
functions (push, pop) from scratch.

 - Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack. */

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(item) {
    // if the stack is empty the node will be the top
    if (this.top === null) {
      this.top = new _Node(item, null);
    }
    // if the stack already has an item
    // create a new node with the item/data and point it to the 
    // top, aka the item that was added before this one
    // then change the top to the current item on top...

    const node = new _Node(item, this.top);
    this.top = node;
  }

  pop() {
    if (this.top === null) {
      return;
    }
    const node = this.top;
    this.top = this.top.next;
    return node.data;
  }

  peek() { // allows you to look at the top of the stack without removing it
    console.log('Top', this.top.data);    
  }

  isEmpty() { 
    if (this.top === null) {
      console.log('Stack is empty');
    }
  }

  clearStack() {
    this.top = null;
  }
  
  printStack() {
    let current = this.top;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const starTrek = new Stack();
const s1 = 'Kirk';
const s2 = 'Spock';
const s3 = 'McCoy';
const s4 = 'Scotty';


starTrek.push(s1);
starTrek.push(s2);
starTrek.push(s3);
starTrek.push(s4);

starTrek.printStack();
starTrek.peek();
