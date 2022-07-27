// solomon_uche 👑👑👑
class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}
// initialized with Node class.......................................
class LinkedList {
    constructor() {
        this.head = new Node('head');
    }
    find(item) {
        let currentNode = this.head;
        while (currentNode.item != item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    findPrevious(item) {
        let currentNode = this.head;
        while (currentNode.next != null && currentNode.next.item != item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    insert(newItem, item) {
        const newNode = new Node(newItem);
        const currentNode = this.find(item);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    remove(item) {
        let previousNode = this.findPrevious(item);
        if (previousNode.next != null) {
            previousNode.next = previousNode.next.next;
        }
    }

    display() {
        let currentNode = this.head;
        while (currentNode.next != null) {
            console.log(currentNode.next.item);
            currentNode = currentNode.next;
        }
    }
}

const linkedList = new LinkedList();
// inserting items to linkedList
linkedList.insert(1, 'head');
linkedList.insert(2, 1);
linkedList.insert(3, 2);
linkedList.insert(4, 3);
console.log(linkedList);
const previous = linkedList.findPrevious(2);
console.log(previous);
// removing items 
linkedList.remove(2);
[linkedList].forEach((item) => {
    console.log(item);
});

// displaying linkedList
linkedList.display();