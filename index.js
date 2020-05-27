const fs = require("fs");
const util = require("util");

  // The built-in util package can be used to create Promise-based versions of functions using node style callbacks
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
