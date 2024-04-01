import { LinkedList, Stack } from './ds/index.js';



// Example usage: LinkedList
const numbers = [1, 3, 5, 6, 7, 8, 6, 2, 5, 6, 8, 9, 4, 24, 4, 3];

function createSortedLinkedList(numbers) {
    const linkedList = new LinkedList();

    for (const num of numbers) {
        linkedList.sortedAppend(num);
    }

    return linkedList;
}


function createPrependedLinkedList(numbers) {
    const linkedList = new LinkedList();

    for (const num of numbers) {
        linkedList.prepend(num);
    }

    return linkedList;
}

function createAppendedLinkedList(numbers) {
    const linkedList = new LinkedList();

    for (const num of numbers) {
        linkedList.append(num);
    }

    return linkedList;
}


console.log(createSortedLinkedList(numbers));
console.log(createPrependedLinkedList(numbers));
console.log(createAppendedLinkedList(numbers));


// Example usage: Stack
const stack = new Stack();
console.log(stack.isEmpty()); // true

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack()); // 10 20 30

console.log(stack.peek()); // 30

console.log(stack.pop()); // 30
console.log(stack.printStack()); // 10 20