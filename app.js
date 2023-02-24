const names = require("./names");
const { sayHi, items, object } = require("./utils");

console.log(sayHi);
sayHi(names.john);
sayHi(names.peter);
console.log(`Items and Object from module.export ${items} ${object}`);
