import generateName from "sillyname"; //this import is module method, import <method> from <"module">
var sillyName1 = generateName();
var sillyName2 = generateName();

console.log(`My name is ${sillyName1}.`)
console.log("My frnd's name is ", sillyName2);