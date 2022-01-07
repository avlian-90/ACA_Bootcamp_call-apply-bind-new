// Implementation of new

function myNew(constructor, ...args) {
  const obj = {};
  obj.__proto__ = constructor.prototype;
  const result = constructor.call(obj, args);
  return typeof result === "object" ? result : obj;
}

function Constructor(args) {
  this.name = args[0];
  this.age = args[1];
}

const student1 = myNew(Constructor, "Liana", 31);
console.log(student1);
