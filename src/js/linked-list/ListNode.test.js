import { ListNode } from "./ListNode.js";

describe("ListNode Class", () => {
  it("initializes with a value and a null nextNode by default", () => {
    const node = new ListNode("A");
    expect(node.value).toBe("A");
    expect(node.nextNode).toBe(null);
  });

  it("allows setting nextNode to another ListNode", () => {
    const node1 = new ListNode("A");
    const node2 = new ListNode("B");
    node1.nextNode = node2;
    expect(node1.nextNode.value).toBe("B");
  });
});
