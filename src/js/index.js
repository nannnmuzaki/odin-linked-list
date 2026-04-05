import "../css/style.css";
import { LinkedList } from "./linked-list/LinkedList.js";

// Expose functions to the global window object for playing with it in console or console debugging
window.LinkedList = LinkedList;

const listtt = new LinkedList();

listtt.append(1);
listtt.append(5);
listtt.append(7);
console.log(listtt.toString());
listtt.insertAt(1, 3);
console.log(listtt.toString());
listtt.insertAt(2, 11, 15, 23);
console.log(listtt.toString());
listtt.insertAt(0, 0, 2);
listtt.insertAt(listtt.size, 2, 17);
console.log(listtt.toString());
listtt.removeAt(2);
listtt.removeAt(0);
listtt.removeAt(listtt.size - 1);
console.log(listtt.toString());

console.log(listtt.pop());

console.log(listtt.head, listtt.tail, listtt.size);

console.log(listtt.at(4));
console.log(listtt.findIndex(23));
console.log(listtt.contains(11));
console.log(listtt.toString());
