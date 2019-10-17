/*
Given a string s and a list of strings dict, you need to add a closed pair of bold tag <b> and </b> to wrap the substrings in s that exist in dict. If two such substrings overlap, you need to wrap them together by only one pair of closed bold tag. Also, if two substrings wrapped by bold tags are consecutive, you need to combine them.
Example 1:
Input: 
s = "abcxyz123"
dict = ["abc","123"]
Output:
"<b>abc</b>xyz<b>123</b>"
Example 2:
Input: 
s = "aaabbcc"
dict = ["aaa","aab","bc"]
Output:
"<b>aaabbc</b>c"
Note:
The given dict won't contain duplicates, and its length won't exceed 100.
All the strings in input have length in range [1, 1000]
*/

// DOES NOT WORK!
const getIdxs = (s, dict) => {
  let subs = [];
  for (var i = 0; i < dict.length; i++) {
    let start, end;
    if (s.indexOf(dict[i]) !== -1) {
      start = s.indexOf(dict[i]);
      end = start + dict[i].length - 1;
      subs.push([start, end]);
    }
  }
  return subs;
};

var addBoldTag = function (s, dict) {
  let idxs = getIdxs(s, dict);

  let newS, newE;
  for (var i = 0; i < idxs.length; i++) {
    for (var j = i + 1; j < idxs.length; j++) {
      if (idxs[j][0] <= idxs[i][1] && idxs[j][1] >= idxs[i][0]) {
        newS = Math.min(idxs[i][0], idxs[j][0]);
        newE = Math.max(idxs[i][1], idxs[j][1]);
        idxs.splice(i, 2, [newS, newE]);
      }
    }
  }

  for (var k = 0; k < idxs.length; k++) {
    for (var j = k + 1; j < idxs.length; j++) {
      if (s[idxs[k][1]] === s[idxs[j][0]]) {
        newS = idxs[k][0];
        newE = idxs[j][1];
        idxs.splice(k, 2, [newS, newE]);
      }
    }
  }
  console.log('second:', idxs)

  if (idxs.some((arr) => arr[0] === 0 && arr[1] === s.length - 1)) {
    idxs = [[0, s.length - 1]];
  }

  s = s.split('');
  for (var l = 0; l < idxs.length; l++) {
    s[idxs[l][0]] = `<b>${s[idxs[l][0]]}`;
    s[idxs[l][1]] = `${s[idxs[l][1]]}</b>`;
  }

  return s.join('');
};