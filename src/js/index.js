// import "../css/style.css";
import { LinkedList } from "./linked-list/LinkedList.js";

const list = new LinkedList();

list.append("first");
list.append();
list.append(NaN);
list.prepend("no im first lol");
console.log(list.size, "list size");
console.log([list.pop(), "popped"]);

console.log(list.size, "list size");
console.log(list.head, "list head");
console.log(list.tail, "list tail");
console.log(list, "linked list");

console.log(list.at(0), "value index");
