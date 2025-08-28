//using "npm init" in terminal, it will initiate npm and ask some info, using that create json package
//for install: npm install <something> "npm i <package>"
// https://npmjs.com --> search for package that want to install

var generateName = require("sillyname"); //require() is the common js method
var sillyName1 = generateName();
var sillyName2 = generateName();

console.log(`My name is ${sillyName1}.`)
console.log("My frnd's name is ", sillyName2);