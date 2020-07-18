function createTechUsedList(technology) {
  const currentList = technology.split(",");

  let listItemNum = 0;

  let newList = currentList.map(function (currValue) {
    listItemNum++;
    return listItemNum + ". " + currValue;
  });

  newList = newList.join("\n");
  return newList;
}

function generateMarkdown({ name, title, description, technology }) {
  return `
# ${title}

# Description :
${description}

## Technology Used
${createTechUsedList(technology)}


[![Generic badge](https://img.shields.io/badge/Maintained%3F-no-red.svg)](https://shields.io/)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/${name})

`;
}
module.exports = generateMarkdown;
