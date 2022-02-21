// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const renderedLicense = ""
  if (license == "Unlicense") {
    return renderedLicense;
  }
  else {
    renderedLicense = `![License: ${license}](https://img.shields.io/badge/license-${license}-blue)`;
    return renderedLicense;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const renderedLink = "";
  if (license == "") {
    return renderedLink;
  }
  else if (license == "APLv3") {
    renderedLink = "https://choosealicense.com/licenses/agpl-3.0/"
    return renderedLink
  }
  else if (license == "GPLv3") {
    renderedLink = "https://choosealicense.com/licenses/gpl-3.0/"
    return renderedLink
  }
  else if (license == "LGPLv3") {
    renderedLink = "https://choosealicense.com/licenses/lgpl-3.0/"
    return renderedLink
  }
  else if (license == "Mozilla") {
    renderedLink = "https://choosealicense.com/licenses/mpl-2.0/"
    return renderedLink
  }
  else if (license == "Apache") {
    renderedLink = "https://choosealicense.com/licenses/apache-2.0/"
    return renderedLink
  }
  else if (license == "MIT") {
    renderedLink = "https://choosealicense.com/licenses/mit/"
    return renderedLink
  }
  else if (license == "Boost") {
    renderedLink = "https://choosealicense.com/licenses/bsl-1.0/"
    return renderedLink
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(promptAnswers) {
  return `# ${promptAnswers.title}
  ${renderLicenseBadge(promptAnswers.license)}

## Description
${promptAnswers.description}

## Badges
![Project License Badge](https://img.shields.io/badge/license-${promptAnswers.license}-green)

## Table of Contents-
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${promptAnswers.install}

## Usage
${promptAnswers.usage}

## License
${promptAnswers.license}

---
## How to Contribute
${promptAnswers.contribute}

## Tests
${promptAnswers.test}

## Questions
If there are any questions about the project please visit myn GitHub page
at https://github.com/${promptAnswers.github}

...or feel free to contact me at ${promptAnswers.email}

`;
}

module.exports = generateMarkdown;