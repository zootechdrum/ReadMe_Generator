function generateMarkdown({ name, title, description }) {
  return `
# ${title}

# Description :
${description}

## Technology Used

[![Generic badge](https://img.shields.io/badge/Maintained%3F-no-red.svg)](https://shields.io/)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/${name})

`;
}
module.exports = generateMarkdown;
