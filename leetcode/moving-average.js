/*Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Example:

MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3
*/

var MovingAverage = function (size) {
  this.size = size;
  this.integers = [];
};

MovingAverage.prototype.next = function (val) {
  this.integers.push(val)

  if (this.integers.length > this.size) {
    this.integers = this.integers.slice(this.integers.length - this.size)
  }

  const sum = this.integers.reduce((a, c) => {
    a += c
    return a;
  }, 0);

  return sum / this.integers.length
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

var m = new MovingAverage(3);
m.next(1)
m.next(10)
m.next(3)
m.next(5)