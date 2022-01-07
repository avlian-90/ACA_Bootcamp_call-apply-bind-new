// Implementation of bind method

function myBind(cb, context) {
  return function (...args) {
    return cb.apply(context, args);
  };
}

function myFunc(a, b) {
  return `${this.num}, ${a}, ${b}`;
}

const obj = {
  num: 3,
};

const originalBind = myFunc.bind(obj);
const fakeBind = myBind(myFunc, obj);

console.log(originalBind(5, 7));
console.log(fakeBind(5, 7));
