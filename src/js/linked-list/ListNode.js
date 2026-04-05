export class ListNode {
  #value = null;
  #nextNode = null;

  constructor(value) {
    this.value = value;
  }

  get value() {
    return this.#value;
  }

  set value(data = null) {
    this.#value = data;
  }

  get nextNode() {
    return this.#nextNode;
  }

  set nextNode(node) {
    if (!(node instanceof ListNode) && node !== null) {
      throw new Error("Next Node must be a type of ListNode");
    }
    this.#nextNode = node;
  }
}
