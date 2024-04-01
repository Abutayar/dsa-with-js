export class Stack {
    constructor() {
      this.count = 0;
      this.storage = {};
    }
  
    // Push operation: adds an element to the top of the stack
    push(element) {
      this.storage[this.count] = element;
      this.count++;
    }
  
    // Pop operation: removes and returns the top element of the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      this.count--;
      const result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    }
  
    // Peek operation: returns the top element of the stack without removing it
    peek() {
      return this.storage[this.count - 1];
    }
  
    // isEmpty operation: checks if the stack is empty
    isEmpty() {
      return this.count === 0;
    }
  
    // Print operation: displays the elements of the stack
    printStack() {
      let result = "";
      for (let i = 0; i < this.count; i++) {
        result += this.storage[i] + " ";
      }
      return result.trim();
    }
  }