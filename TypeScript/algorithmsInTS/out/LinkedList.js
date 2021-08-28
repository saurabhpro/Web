'use strict';

class LinkedList {
  constructor(item) {
    this.head = item;
  }

  append(val) {
    let currentItem = this.head;
    let newItem = new LinkedListItem(val);
    if (!currentItem) {
      this.head = newItem;
    } else {
      while (true) {
        if (currentItem.next) {
          currentItem = currentItem.next;
        } else {
          currentItem.next = newItem;
          break;
        }
      }
    }
  }

  prepend(val) {
    let newItem = new LinkedListItem(val);
    let oldHead = this.head;
    this.head = newItem;
    newItem.next = oldHead;
  }

  insert(val, previousItem) {
    let newItem = new LinkedListItem(val);
    let currentItem = this.head;
    if (!currentItem) {
      this.head = newItem;
    } else {
      while (true) {
        if (currentItem === previousItem) {
          let tempNextItem = previousItem.next;
          currentItem.next = newItem;
          newItem.next = tempNextItem;
          break;
        } else {
          currentItem = currentItem.next;
        }
      }
    }
  }

  delete(val) {
    var currentItem = this.head;
    if (!currentItem) {
      return;
    }
    if (currentItem.value === val) {
      this.head = currentItem.next;
    } else {
      var previous = null;
      while (true) {
        if (currentItem.value === val) {
          if (currentItem.next) {
            previous.next = currentItem.next;
          } else {
            previous.next = null;
          }
          currentItem = null;
          break;
        } else {
          previous = currentItem;
          currentItem = currentItem.next;
        }
      }
    }
  }

  showInArray() {
    let arr = [];
    let currentItem = this.head;
    while (true) {
      arr.push(currentItem.value);
      if (currentItem.next) {
        currentItem = currentItem.next;
      } else {
        break;
      }
    }
    return arr;
  }
}

class LinkedListItem {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

let head = new LinkedListItem(4);
let linkedList = new LinkedList(head);
linkedList.append(10);
linkedList.append(2);
linkedList.append(20);
linkedList.append(5);
console.log(linkedList.showInArray());
linkedList.prepend(1);
linkedList.prepend(100);
console.log(linkedList.showInArray());
linkedList.delete(1);
linkedList.delete(10);
console.log(linkedList.showInArray());
linkedList.insert(200, head);
console.log(linkedList.showInArray());
//# sourceMappingURL=LinkedList.js.map
