// creat node class for linked list for stack

class _Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;  //nodes
    this.last = null;
  }

  // Enqueue adds data to a queue (insertion)
    enqueue(data) {
      const node = new _Node(data);

      if (this.first === null) {
        this.first = node;
      }

      if (this.last) {
        this.last.next = node;
      }
      //make the new item the last item on the queue
      this.last = node;

      // because we are inserting items only at 1 place the time complexity
      // of inserting in a queue is constant time O(1)

    }

    dequeue(data) {
      if (this.first === null) {
        return;
      }
      const node = new _Node(data);
      this.first = this.first.next;

      if (node === this.last) {
        this.last = null;
      }

      return node.value;
    }

  // Dequeue removes the oldest data added to a queue (deletion)
    dequeue(data) {
      if (this.first === null) {
        return;
      }
      const node = new _Node(data);
      this.first = this.first.next;
      // if  this is the last item in the queue
      if (node === this.last) {
        this.last = null;
      }

      return node.value;  //also constant time, complexity O(1)
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
       have the pointer point to the top */
      
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