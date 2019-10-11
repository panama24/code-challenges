const wordBreak = (s, wordDict) => {
  if (s.length === 0) {
    return true;
  }

  for (let i = 1; i <= s.length; i++) {
    if (wordDict.has(s.substring(0, i)) && wordBreak(s.substring(i, s.length -1))){
      return true;
    }
  }

  return false;
};

var set = new Set(['a', 'b', 'bb', 'bbbb']);
var mySet = new Set(['cat', 'and', 'sand', 'dog']);
// console.log(wordBreak('bbb', set));
console.log(mySet);
console.log(wordBreak('catsanddogs', mySet));
