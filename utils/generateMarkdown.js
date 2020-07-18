function generateMarkdown(data) {
  console.log(data.name);
  return `
# ${data.name}

`;
}
module.exports = generateMarkdown;
