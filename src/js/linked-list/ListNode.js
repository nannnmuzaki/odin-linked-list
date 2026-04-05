export class ListNode {
  #value = null;
  #nextNode = null;

  constructor(value) {
    this.#value = value;
    this.#nextNode = null;
  }

  get value() {
    return this.#value;
  }

  set value(data) {
    this.#value = data;
  }

  get nextNode() {
    return this.#nextNode;
  }

  set nextNode(node) {
    if (!(node instanceof ListNode)) {
      throw new Error("Next Node must be a type of ListNode");
    }
    this.#nextNode = node;
  }
}
