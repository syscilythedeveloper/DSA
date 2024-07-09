class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //remove from beginning of list
  shift() {
    if (!this.head) return undefined;
    const removal = this.head;
    this.head = removal.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removal;
  }

  //add to beginning of list
  unshift(val) {
    //make head new node and make the next node the previous head
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let count = 0;
    let current = this.head;

    while (count !== idx) {
      current = current.next;
      count++;
    }
    return current;
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
    //!! = convert to boolean

    if (idx < 0 || idx >= this.length) return false;
    if (idx === this.length) return this.push(val);
    if (idx === 0) return this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(idx - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift(val);

    let prev = this.get(idx - 1);
    const removal = prev.next;
    prev.next = removal.next;
    this.length--;
    return removal;
  }
}

const myFirstSLL = new SinglyLinkedList();
