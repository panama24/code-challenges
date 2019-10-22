/*
Say you have a func primitiveMultiply that in 20% of cases multiplies two numbers and in the other
80%, raises an exception of type MultiplicationUnitFailure. Write a func that wraps this clunky
func and just keeps trying until a call succeeds, after which it returns the result. Make sure you only
handle the exceptions you are trying to handle.
*/
class MultiplicationUnitFailure extends Error { };

const primitiveMultiply = (x, y) => {
  if (Math.random() < 0.2) {
    return x * y;
  } else {
    throw new InputError('Invalid input');
  }
}

const reliableMultiply = (a, b) => {
  for (; ;) {
    try {
      let res = primitiveMultiply(a, b);
      console.log(res);
      break;
    } catch (e) {
      if (!e instanceof MultiplicationUnitFailure) {
        throw e;
      }
    }
  }
}

// console.log(reliableMultiply(8, 8));

/*
The Locked Box
It is a box with a lock. There is an array in the box, but you can get at it only when the box is 
unlocked. Directly accessing the private _content property is forbidden.

Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs
the func, then ensures that the box is locked again before returning, regardless of whether the argument
func returned normally or threw an exception.
*/

const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },

  lock() {
    this.locked = true;
  },

  _content: [],

  getContent() {
    if (this.locked) throw new Error('locked!');
    return this._content;
  },
}

function withBoxUnlocked(body) {
  // your code here
  box.unlock();
  console.log('is locked?', box.locked)
  const content = box.getContent();
  console.log(content);
  body();
  box.lock();
}

withBoxUnlocked(function () {
  box._content.push('gold piece');
});

try {
  withBoxUnlocked(function () {
    throw new Error('Pirates on the horizon! Abort!');
  });
} catch (e) {
  console.log('Error raised', e);
}

console.log(box.locked);