// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var renderedLicense = ""
  if (license == "Unlicensed") {
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
  let renderedLink = "";
  let intrLicense = "Notice, this software licenced under "
  if (license == "Unlicensed") {
    return renderedLink;
  }
  else if (license == "APLv3") {
    renderedLink = `[Applicable License: ${license}](https://choosealicense.com/licenses/agpl-3.0/)`;
    return renderedLink
  }
  else if (license == "GPLv3") {
    renderedLink = `[Applicable License: ${license}](https://choosealicense.com/licenses/gpl-3.0/)`;
    return renderedLink
  }
  else if (license == "LGPLv3") {
    renderedLink = `[Applicable License: ${license}](https://choosealicense.com/licenses/lgpl-3.0/)`;
    return renderedLink
  }
  else if (license == "Mozilla") {
    renderedLink = `[Applicable License: ${license}](https://choosealicense.com/licenses/mpl-2.0/)`;
    return renderedLink
  }
  else if (license == "Apache") {
    renderedLink = `[Applicable License: ${license}](https://choosealicense.com/licenses/apache-2.0/)`;
    return renderedLink
  }
  else if (license == "MIT") {
    renderedLink = `[Applicable License: ${license}](https://choosealicense.com/licenses/mit/)`;
    return renderedLink
  }
  else if (license == "Boost") {
    renderedLink = `[Applicable License: ${license}](https://choosealicense.com/licenses/bsl-1.0/)`;
    return renderedLink
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var renderedSection = ``
  renderedSection = `${renderLicenseLink(license)}  
  ${renderLicenseBadge(license)}`;
  return renderedSection;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(promptAnswers) {
  return `# ${promptAnswers.title}
  ${renderLicenseBadge(promptAnswers.license)}

## Description
${promptAnswers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${promptAnswers.install}

## Usage
${promptAnswers.usage}

## License
${renderLicenseSection(promptAnswers.license)}

---
## How to Contribute
${promptAnswers.contribute}

## Tests
${promptAnswers.test}

## Questions
Please visit my GitHub page
at https://github.com/${promptAnswers.github}

If there are any questions about the project,
feel free to open an issue or contact me at ${promptAnswers.email}`
};

module.exports = generateMarkdown;