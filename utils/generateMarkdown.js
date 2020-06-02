function generateMarkdown(data) {
  return `
# ${data.name}

`;
}

function helloWorld(){
  console.log("Hello Wrld")
}

module.exports = {generateMarkdown, helloWorld}
