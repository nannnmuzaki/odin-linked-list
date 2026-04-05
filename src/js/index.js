// import "../css/style.css";
import { ListNode } from "./linked-list/ListNode.js";
import { LinkedList } from "./linked-list/LinkedList.js";

const list = new LinkedList();

list.append("first");
list.append(NaN);
list.prepend("no im first lol");

const list2 = new LinkedList();

list2.append("hehe");
list2.append();

console.log(list);
console.log(list2);
