import { ListNode } from "./ListNode.js";

export class LinkedList {
  #headNode = null;
  #tailNode = null;
  #listSize = 0;

  constructor() {}

  get head() {
    return this.#headNode;
  }

  set #head(node) {
    if (!(node instanceof ListNode) && node !== null) {
      throw new Error("Linked List must only contain List of Node");
    }
    this.#headNode = node;
  }

  get tail() {
    return this.#tailNode;
  }

  set #tail(node) {
    if (!(node instanceof ListNode) && node !== null) {
      throw new Error("Linked List must only contain List of Node");
    }
    this.#tailNode = node;
  }

  get size() {
    return this.#listSize;
  }

  append(value) {
    if (!this.#headNode) {
      const node = new ListNode(value);
      this.#head = node;
      this.#tail = node;
    } else {
      const node = new ListNode(value);
      let current = this.#headNode;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = node;
      this.#tail = node;
    }
    this.#listSize++;
  }

  prepend(value) {
    if (!this.#headNode) {
      const node = new ListNode(value);
      this.#head = node;
      this.#tail = node;
    } else {
      const node = new ListNode(value);
      node.nextNode = this.#headNode;
      this.#head = node;
      this.#listSize++;
    }
  }

  pop() {
    if (this.#listSize <= 0) {
      return undefined;
    }
    const head = this.#headNode;
    this.#headNode = head.nextNode;
    this.#listSize--;
    return head.value;
  }
}
