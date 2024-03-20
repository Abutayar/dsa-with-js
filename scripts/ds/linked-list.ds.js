// Define a class for the linked list
export class LinkedList {
    #head; // Private field to store the head of the list
    constructor(head = null) {
      this.#head = head; // Initialize the head of the list
    }
  
    // Append a node with the given data at the end of the list
    append(data) {
      const newNode = new ListNode(data); // Create a new node with the given data
      let currentNode = this.root;
  
      // If the list is empty, set the new node as the head
      if (!currentNode) {
        this.#head = newNode;
        return;
      }
  
      // Traverse the list to find the last node
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
  
      // Append the new node to the last node
      currentNode.next = newNode;
    }
  
    // Prepend a node with the given data at the beginning of the list
    prepend(data) {
      const newNode = new ListNode(data); // Create a new node with the given data
      newNode.next = this.root; // Set the next of the new node to the current head
      this.#head = newNode; // Update the head to the new node
    }
  
    // Append a node with the given data in sorted order
    sortedAppend(data) {
      const newNode = new ListNode(data); // Create a new node with the given data
  
      let currentNode = this.root;
  
      // If the list is empty, set the new node as the head
      if (!currentNode) {
        this.#head = newNode;
        return;
      }
  
      // Traverse the list to find the correct position to insert the new node
      while (currentNode.next && currentNode.next.data < data) {
        currentNode = currentNode.next;
      }
  
      // Insert the new node after the currentNode
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  
    // Clear the list by setting the head to null
    clear() {
      this.#head = null;
    }
  
    // Get the size of the list
    get size() {
      let currentNode = this.root;
      let count = 0;
      // Traverse the list and count the nodes
      while (currentNode) {
        count++;
        currentNode = currentNode.next;
      }
      return count;
    }
  
    // Get the root node of the list
    get root() {
      return this.#head;
    }
  
    // Get the last node of the list
    get last() {
      let lastNode = this.root;
  
      // Traverse the list to find the last node
      while (lastNode && lastNode.next) {
        lastNode = lastNode.next;
      }
      return lastNode;
    }
  }
  
  // Define a class for a single node in the linked list
  class ListNode {
    constructor(data, next = null) {
      this.data = data; // Data stored in the node
      this.next = next; // Reference to the next node in the list
    }
  }
  