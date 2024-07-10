class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    const toDisconnect = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = toDisconnect.prev;
      this.tail.next = null;
      toDisconnect.prev = null;
    }

    this.length--;
    return toDisconnect;
  }

  //remove from beginning of list
  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  //add to beginning of list
  unshift(val) {
    //make head new node and make the next node the previous head
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count != idx) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count != idx) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }
  set(idx, val) {
    let target = this.get(idx);
    if (target) {
      target.val = val;
      return true;
    }
    return false;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return this.push(val);
    if (idx === 0) return this.unshift(val);

    const newNode = new Node(val);
    const beforeNode = this.get(idx - 1);
    const afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    const removedNode = this.get(idx);
    removedNode.next.prev = removedNode.prev;
    removedNode.prev.next = removedNode.next;

    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
  reverse() {
    let current = this.head;
    let temp = null;

    // Swap the head and tail
    this.tail = this.head;

    // Traverse and swap next and prev pointers
    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev; // Move to the next node (previously prev)
    }

    // After the loop, temp will be the new head
    if (temp !== null) {
      this.head = temp.prev;
    }

    return this;
  }
}

let myDouble = new DoublyLinkedList();
myDouble.push("a");
myDouble.push("b");
myDouble.push("c");
myDouble.push("d");
myDouble.push("e");
myDouble.push("f");
