/*
 * Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
*/

var isIsomorphic = function(s, t) {
    let m = {};

    for (var i = 0; i < s.length; i++) {
        if (m[s[i]] === undefined) {
            if (Object.values(m).includes(t[i])) {
                return false;
            } else {
                m[s[i]] = t[i];
            }
        } else {
            if (m[s[i]] !== t[i]) {
                return false;
            }
        }
    }

    return true;
};

// const s = 'egg'
// const t = 'add'
// true
const s = 'foo';
const t = 'bar';
// false
isIsomorphic(s, t);
