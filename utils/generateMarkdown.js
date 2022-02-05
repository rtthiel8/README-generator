// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  return `![license](<https://img.shields.io/badge/license-${data.license}-green>)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === 'GNU AGPLv3')
    return `![license](https://choosealicense.com/licenses/agpl-3.0/)`
  if (data.license === 'GNU GPLv3')
    return `![license](https://choosealicense.com/licenses/gpl-3.0/)`
  if (data.license === 'Mozilla Public License 2.0')
    return `![license](https://choosealicense.com/licenses/mpl-2.0/)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data)}

  ## **Description**
   ${data.description}

  ## **Table of Contents**
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)

  ## **Installation**
   ${data.installation}

 
  ## **Usage**
   ${data.usage}
 
  ## **License**
  This application is covered under the ${data.license} license.
  ${renderLicenseLink(data)}

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
