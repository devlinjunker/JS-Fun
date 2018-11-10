import ExtendedClass from "./classes.js";
import {BaseClass} from "./classes.js";


console.log("Creating Base('test'):")
var base = new BaseClass("test");

console.log("\n Creating Extended():")
var extended = new ExtendedClass();

console.log("\n Creating Extended('test2'):")
extended = new ExtendedClass("test2");


console.log("\n\n base.method():");
base.method();
console.log("\n base.overwrite():");
base.overwrite();


console.log("\n\n extended.method():");
extended.method();
console.log("\n extended.overwrite():");
extended.overwrite();
