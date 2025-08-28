// https://nodejs.org/docs/latest/api/

const fs = require("fs"); //fs is the module "file system", it have many method like writeFile("file", "data", (err)=>{...})

//Write file
/*
fs.writeFile("_02_message.txt", "Hello from _02_nativeModule.js", (err) => {
    if (err) throw err;
    console.log("This file has been saved!");
}
);
*/

//read file
fs.readFile("./_02_message.txt","utf8", (err, data) => { 
  if (err) throw err;
  console.log(data);
});