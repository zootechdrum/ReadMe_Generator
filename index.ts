const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//Interface for what the questions array should look like
interface questionObj {
  type: string;
  name: string;
  message: string;
}

// The built-in util package can be used to create Promise-based versions of functions using node style callbacks
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const questions: questionObj[] = [
  {
    type: "input",
    name: "name",
    message: "What is your GitHub userName?",
  },
  {
    type: "input",
    name: "title",
    message: "What is name of your Project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of the project",
  },
  {
    type: "input",
    name: "technology",
    message:
      "What were the technologies used for the project? Please seperate technology by comma",
  },
  {
    type: "input",
    name: "altText",
    message: "Please provide Alt Text for Gif",
  },
  {
    type: "input",
    name: "filePath",
    message: "Please provide file path to Gif",
  },
];

async function init() {
  try {
    const response = await inquirer.prompt(questions);
    await writeFileAsync("README.md", generateMarkdown(response), "utf8");
  } catch (err) {
    console.log(err);
  }
}

init();
