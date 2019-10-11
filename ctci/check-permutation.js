const permutation = (a, b) => {
  let varB = b.split('');
  // ['o', 'l', 'l', 'e', 'h']
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    const target = varB.indexOf(a[i]);
    if (target === -1) {
      return false;
    }
    varB.splice(target, 1);
  }
  return !varB.length;
}

var a1 = 'lllll';
var b1 = 'hellp';
var a2 = 'Hello';
var b2 = 'lllll';

permutation(a1, b2)
