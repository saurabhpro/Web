class LinkedList {
  private head: LinkedListItem;

  constructor(item: LinkedListItem) {
    this.head = item;
  }

  // Adds the element at the end of the linked list
  append(val: number): void {
    let currentItem: LinkedListItem = this.head;
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

  // Add the element at the beginning of the linked list
  prepend(val: number): void {
    let newItem = new LinkedListItem(val);
    let oldHead = this.head;

    this.head = newItem;
    newItem.next = oldHead;
  }

  // Adds the element at a specific position inside the linked list
  insert(val: number, previousItem: LinkedListItem): void {
    let newItem: LinkedListItem = new LinkedListItem(val);
    let currentItem: LinkedListItem = this.head;

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

  delete(val: number): void {
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
            // special case for last element
            previous.next = currentItem.next;
          } else {
            previous.next = null;
          }
          currentItem = null; // avoid memory leaks
          break;
        } else {
          previous = currentItem;
          currentItem = currentItem.next;
        }
      }
    }
  }

  showInArray(): Array<number> {
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
  value: number;
  next: LinkedListItem;

  constructor(val: number) {
    this.value = val;
    this.next = null;
  }
}

let head = new LinkedListItem(4); //create first node
let linkedList = new LinkedList(head);

linkedList.append(10);
linkedList.append(2);
linkedList.append(20);
linkedList.append(5);
console.log(linkedList.showInArray()); // Should log 4, 10, 2, 20, 5

linkedList.prepend(1);
linkedList.prepend(100);
console.log(linkedList.showInArray()); // Should log 100, 1, 4, 10, 2, 20, 5

linkedList.delete(1);
linkedList.delete(10);
console.log(linkedList.showInArray()); // Should log 100, 4, 2, 20, 5

linkedList.insert(200, head);
console.log(linkedList.showInArray()); // Should log 100, 200, 4, 2, 20, 5
