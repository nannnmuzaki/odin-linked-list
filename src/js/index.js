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
list.insertAt(list.size, 2, 17);
console.log(list.toString());
list.removeAt(2);
list.removeAt(0);
list.removeAt(list.size - 1);
console.log(list.toString());

console.log(list.pop());

console.log(list.head, list.tail, list.size);

console.log(list.at(4));
console.log(list.findIndex(23));
console.log(list.contains(11));
console.log(list.toString());
