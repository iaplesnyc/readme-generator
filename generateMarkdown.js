// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `![License Badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `\n[License](#license)`;
}

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
## License

This project is licensed under the ${license} license.
`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, feel free to reach out to me at [${data.email}](mailto:${data.email}).

You can view my GitHub Profile: [${data.github}](https://github.com/${data.github})
`;
}

export default generateMarkdown;
