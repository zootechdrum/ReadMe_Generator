const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

  // The built-in util package can be used to create Promise-based versions of functions using node style callbacks
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [];

fs.writeFile('message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

function init() {

}

init();