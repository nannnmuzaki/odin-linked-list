import { ListNode } from "./ListNode.js";

export class LinkedList {
  #root = null;

  constructor() {}

  get root() {
    return this.#root;
  }

  set root(node) {
    if (!(node instanceof ListNode)) {
      throw new Error("Linked List must only contain List of Node");
    }
    this.#root = node;
  }

  append(value) {
    if (!this.#root) {
      this.root = new ListNode(value);
    } else {
      const node = new ListNode(value);
      let current = this.#root;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
  }

  prepend(value) {
    if (!this.#root) {
      this.root = new ListNode(value);
    } else {
      const node = new ListNode(value);
      node.nextNode = this.#root;
      this.#root = node;
    }
  }
}
