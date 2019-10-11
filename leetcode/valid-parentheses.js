const brackets = {
    '{': '}',
    '[': ']',
    '(': ')'
};

var isValid = function(s) {
    if (!s.length || !s) {
        return true;
    }

    if (s.length === 1) {
        return false;
    }

    const open = Object.keys(brackets);
    const close = Object.values(brackets);
    let stack = [];

    if (open.includes(s[0])) {
        stack.push(s[0]);
    } else {
        return false;
    }

    for (let i = 1; i < s.length; i++) {
        if (open.includes(s[i])) {
            stack.push(s[i]);
        }
        if (close.includes(s[i])) {
            const last = stack.pop();
            if (brackets[last] !== s[i]) {
                return false;
            }
        }
    }

    return !stack.length;
}

var s = '((';
console.log(isValid(s));
