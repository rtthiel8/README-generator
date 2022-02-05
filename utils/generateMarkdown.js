// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  return `![license](<https://img.shields.io/badge/license-${data.license}-green>)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data)}

  ## **Description**
  <p>${data.description}</p>

  ## **Table of Contents**
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)

  ## **Installation**
   <p>${data.installation}</p>

 
  ## **Usage**
   ${data.usage}
 
  ## **License**
  This application is covered under the ${data.license} license.

  ## **Contributing**
   ${data.contributing}

  ## **Tests**
  
  ## **Questions**
  GitHub: https://github.com/${data.github}
  Reach out via email for additional questions.
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
