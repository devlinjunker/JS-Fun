var clsExample = require("./example/class.js");
var lib = require("./example/lib.js");

function main(){
 var inst = new clsExample(5, "42");

 console.log(inst);

 console.log(inst.func())

 console.log(lib.sum(15, 4));

 console.log(lib.object);

 lib.testPrint();
}

main();
