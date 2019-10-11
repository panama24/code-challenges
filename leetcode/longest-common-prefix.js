var longestCommonPrefix = function(strs) {
  let str = '';

  if (strs.length < 1) {
    return str;
  }

  if (strs.length === 1) {
      return strs[0];
  }

  const sorted = strs.sort((a, b) => a.length - b.length);
  const first = sorted[0];
  const rest = sorted.slice(1);

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < rest.length; j++) {
      // console.log(rest[j][i]);
      if (first[i] !== rest[j][i]) {
        return str;
      }
    }
    str += first[i];
  }

  return str;
};
//const arr = ['flower', 'flow', 'flight'];
const arr = ['a', 'aa']
 console.log(longestCommonPrefix(arr))
