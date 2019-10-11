/*
 * Implement an algorithm to determine if a string has all unique chars.
 * What if you cannot use additional data structures?
 */

const isUnique = str => {
  // rule out case where str.length > all possible chars in lowercase alphabet
  if (str.length > 128) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j < str.length; i++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

// with extra data structure
const unique = str => {
  if (str.length > 128) {
    return false;
  }

  let mySet = new Set();
  for (let i = 0; i < str.length; i++) {
    if (mySet.has(str[i])) {
      return false;
    } else {
      mySet.add(str[i]);
    }
  }
  return true;
}
