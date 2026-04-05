// import "../css/style.css";
import { LinkedList } from "./linked-list/LinkedList.js";

const list = new LinkedList();

list.append(1);
list.append(5);
list.append(7);
console.log(list.toString());
list.insertAt(1, 3);
console.log(list.toString());
list.insertAt(2, 11, 15, 23);
console.log(list.toString());
list.insertAt(0, 0, 2);
console.log(list.toString());

// list.append("first");
// list.append();
// list.append(NaN);
// list.prepend("no im first lol");
// console.log(list.size, "list size");
// // console.log([list.pop(), "popped"]);

// console.log(list.size, "list size");
// console.log(list.head, "list head");
// console.log(list.tail, "list tail");
// console.log(list, "linked list");

// console.log(list.at(0), "value index");
// console.log(list.contains("holla"), "contains value");
// console.log(list.contains(null), "contains value");

// console.log(list.findIndex("holla"), "index value");
// console.log(list.findIndex(NaN), "index value");
// console.log(list.toString());
