class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
    } else {
      let p = this.head;
      while (p.next !== null) {
        p = p.next;
      }
      p.next = node;
    }
    // console.log(JSON.stringify(list, null, 6))
    this.size++;
  }
}

let empty = new LinkedList();
empty;

let single = new LinkedList();
single.append(1);
single;

let twoDiff = new LinkedList();
twoDiff.append(5);
twoDiff.append(4);
twoDiff;

let twoSame = new LinkedList();
twoSame.append(5);
twoSame.append(5);
twoSame;

let threeSame = new LinkedList();
threeSame.append(1);
threeSame.append(1);
threeSame.append(1);
threeSame;

let fourSame = new LinkedList();
fourSame.append(1);
fourSame.append(1);
fourSame.append(1);
fourSame.append(1);
fourSame;

let endingDupe = new LinkedList();
endingDupe.append(4);
endingDupe.append(3);
endingDupe.append(3);
endingDupe;

let startDupe = new LinkedList();
startDupe.append(2);
startDupe.append(2);
startDupe.append(1);
startDupe;

let midDupe = new LinkedList();
midDupe.append(1);
midDupe.append(2);
midDupe.append(3);
midDupe.append(3);
midDupe.append(4);
midDupe;

const removeDupes = list => {
  let p = list.head, q;
  if (p === null || p.next === null) {
    return list;
  }

  while (p.next !== null) {
    q = p.next;
    if (p.val === q.val && q.next === null) {
      p.next = null;
      list.size--;
      break;
    }

    if (p.val === q.val) {
      if (q.next === null) {
        p.next = null;
        list.size--;
        break;
      } else {
        p.next = q.next;
        q = q.next;
        list.size--;
        removeDupes(list);
      }
    }

    p = q;
    q = q.next;
  }

  console.log(JSON.stringify(list, null, 5))
  return list;
}

// removeDupes(empty);
// removeDupes(single);
// removeDupes(twoDiff);
// removeDupes(twoSame);
// console.log(JSON.stringify(threeSame, null, 3))
// removeDupes(threeSame);
// removeDupes(fourSame);

// removeDupes(endingDupe);
// removeDupes(startDupe);
// removeDupes(midDupe);
