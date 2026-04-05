import { LinkedList } from "./LinkedList.js";

describe("LinkedList Class", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  describe("Initialization", () => {
    it("starts with size 0 and null head/tail", () => {
      expect(list.size).toBe(0);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
    });
  });

  describe("Insertion (append & prepend)", () => {
    it("appends to an empty list", () => {
      list.append("A");
      expect(list.size).toBe(1);
      expect(list.head.value).toBe("A");
      expect(list.tail.value).toBe("A");
    });

    it("appends multiple values and updates tail", () => {
      list.append("A");
      list.append("B");
      expect(list.size).toBe(2);
      expect(list.head.value).toBe("A");
      expect(list.tail.value).toBe("B");
    });

    it("prepends to an empty list", () => {
      list.prepend("A");
      expect(list.size).toBe(1);
      expect(list.head.value).toBe("A");
      expect(list.tail.value).toBe("A");
    });

    it("prepends multiple values and updates head", () => {
      list.prepend("A");
      list.prepend("B");
      expect(list.size).toBe(2);
      expect(list.head.value).toBe("B");
      expect(list.tail.value).toBe("A");
    });
  });

  describe("Deletion (pop)", () => {
    it("returns undefined when popping an empty list", () => {
      expect(list.pop()).toBeUndefined();
    });

    it("handles popping a list with exactly 1 node", () => {
      list.append("A");
      const popped = list.pop();
      expect(popped).toBe("A");
      expect(list.size).toBe(0);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
    });

    it("removes the head node when popping a list with multiple nodes", () => {
      list.append("A");
      list.append("B");
      const popped = list.pop();
      expect(popped).toBe("A");
      expect(list.size).toBe(1);
      expect(list.head.value).toBe("B");
    });
  });

  describe("Traversal Methods", () => {
    beforeEach(() => {
      list.append("A");
      list.append("B");
      list.append("C");
    });

    it("returns node value at a specific index using at()", () => {
      expect(list.at(0)).toBe("A");
      expect(list.at(1)).toBe("B");
      expect(list.at(2)).toBe("C");
      expect(list.at(5)).toBeUndefined();
      expect(list.at(-1)).toBeUndefined();
    });

    it("checks if list contains a value using contains()", () => {
      expect(list.contains("B")).toBe(true);
      expect(list.contains("Z")).toBe(false);
      expect(list.contains(undefined)).toBe(false);
    });

    it("finds the index of a value using findIndex()", () => {
      expect(list.findIndex("A")).toBe(0);
      expect(list.findIndex("C")).toBe(2);
      expect(list.findIndex("Z")).toBe(-1);
    });

    it("represents the list correctly using toString()", () => {
      expect(list.toString()).toBe("( A ) -> ( B ) -> ( C ) -> null");
    });

    it("returns an empty string for toString() on an empty list", () => {
      const emptyList = new LinkedList();
      expect(emptyList.toString()).toBe("");
    });
  });

  describe("Complex Splice (insertAt)", () => {
    beforeEach(() => {
      list.append(1);
      list.append(5);
      list.append(7);
    });

    it("throws an error for out of bounds indices", () => {
      expect(() => list.insertAt(-1, "X")).toThrow(RangeError);
      expect(() => list.insertAt(10, "X")).toThrow(RangeError);
    });

    it("inserts a single value at the head (index 0)", () => {
      list.insertAt(0, 0);
      expect(list.toString()).toBe("( 0 ) -> ( 1 ) -> ( 5 ) -> ( 7 ) -> null");
    });

    it("inserts multiple values at the head (index 0)", () => {
      list.insertAt(0, -2, -1, 0);
      expect(list.toString()).toBe(
        "( -2 ) -> ( -1 ) -> ( 0 ) -> ( 1 ) -> ( 5 ) -> ( 7 ) -> null",
      );
    });

    it("inserts a single value at the tail", () => {
      list.insertAt(3, 9);
      expect(list.toString()).toBe("( 1 ) -> ( 5 ) -> ( 7 ) -> ( 9 ) -> null");
    });

    it("inserts a single value in the middle", () => {
      list.insertAt(1, 3);
      expect(list.toString()).toBe("( 1 ) -> ( 3 ) -> ( 5 ) -> ( 7 ) -> null");
    });

    it("inserts multiple values in the middle", () => {
      list.insertAt(2, 11, 15, 23);
      expect(list.toString()).toBe(
        "( 1 ) -> ( 5 ) -> ( 11 ) -> ( 15 ) -> ( 23 ) -> ( 7 ) -> null",
      );
    });
  });

  describe("Complex Deletion (removeAt)", () => {
    beforeEach(() => {
      list.append("A");
      list.append("B");
      list.append("C");
      list.append("D");
    });

    it("throws an error for out of bounds indices", () => {
      expect(() => list.removeAt(-1)).toThrow(RangeError);
      expect(() => list.removeAt(5)).toThrow(RangeError);
    });

    it("removes at head (index 0)", () => {
      const removed = list.removeAt(0);
      expect(removed).toBe("A");
      expect(list.toString()).toBe("( B ) -> ( C ) -> ( D ) -> null");
    });

    it("removes at tail (last index)", () => {
      const removed = list.removeAt(3);
      expect(removed).toBe("D");
      expect(list.toString()).toBe("( A ) -> ( B ) -> ( C ) -> null");
      expect(list.tail.value).toBe("C");
    });

    it("removes in the middle", () => {
      const removed = list.removeAt(1);
      expect(removed).toBe("B");
      expect(list.toString()).toBe("( A ) -> ( C ) -> ( D ) -> null");
    });
  });
});
