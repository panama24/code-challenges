const operate = s => {
  let stack = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      if (stack.length) {
        stack.pop();
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('');
}

var backspaceCompare = function (S, T) {
  const resS = operate(S);
  const resT = operate(T);

  return resS === resT;
};

// backspaceCompare('ab#c', 'ad#c')
backspaceCompare("y#fo##f", "y#f#o##f")