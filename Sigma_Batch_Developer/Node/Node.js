// Node.js is Javascript Runtime Environment used for server side programming
// Node.js is not a language library framework
// Node.js installation https://node.js.org/en/download check chocolatey
// Node.js REPL (Read-Eval-Print Loop) is a tool used to run and test JavaScript code
// in gitbash or terminal or powershell command node to run
// .help command use for basic info
// global command use for global info
// Whenever we want run any file on node.js we want to go thier folder path & node index.js
// process command is object method & properties for input output version current working directory memory related info
// process.argv command is object argument node index.js hello 1
module.exports = 123; //filename.js
let a = require("./filename");
console.log(a); // 123
let b = 5, c = 7; // module.exports.b;
let sum = (d,e) => d+e; // module.exports.sum = (d,e) => d+e;
let mul = (f,g) => f*g;
let obj = { // module.exports = {}
    sum: sum,
    mul: mul,
    b: b,
    c: c
}
module.exports = obj;
let h = require("./filename");
console.log(h.sum(2,3)); // 5
console.log(h.b); // 5
// A folder have multiple files and index.js file are merge everyone
// bcz for index.js we can access folder
let data = require ("./foldername");
console.log(data);
// npm node package manager
// library of packages, command line tool
// npm command to see info
// npm install packagename command to install packages
// mkdir FigletDir
// cd FigletDir
// npm install figlet
// mkdir index.js
let figlet = require("figlet");
figlet("Hello AI", function (err,data) {
    if (err) {console.log("Something went wrong");
    console.dir(err);
    return;}
    console.log(data);
});
// package.json its auto install npm files
// npm install command to restore npm files
// npm init command to create own package
// npm install -g packagename command its install globally
// npm link packagename command then we use global package
// Loading is synchronous for 'require' but can be asynchronous for 'import'
// export let sum = (a,b) => a+b; export let b = 0; export let c = 0;
// import {sum, b, c} from "./filename" command for using it
// mpm init create our package
// package.json add line ,"type": "module"
// 'require' take everything but 'import' we choose what we need
