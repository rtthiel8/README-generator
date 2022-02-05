// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  return `![license](<https://img.shields.io/badge/license-${data.license}-green>)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === 'GNU AGPLv3')
    return `[Link](https://choosealicense.com/licenses/agpl-3.0/)`
  if (data.license === 'GNU GPLv3')
    return `[Link](https://choosealicense.com/licenses/gpl-3.0/)`
  if (data.license === 'GNU LGPLv3')
    return `[Link](https://choosealicense.com/licenses/lgpl-3.0/)`
  if (data.license === 'Mozilla Public License 2.0')
    return `[Link](https://choosealicense.com/licenses/mpl-2.0/)`
  if (data.license === 'Apache License 2.0')
    return `[Link](https://choosealicense.com/licenses/apache-2.0/)`
  if (data.license === 'MIT License')
    return `[Link](https://choosealicense.com/licenses/mit/)`
  if (data.license === 'Boost Software License 1.0')
    return `[Link](https://choosealicense.com/licenses/bsl-1.0/)`
  if (data.license === 'The Unlicense')
    return `[Link](https://choosealicense.com/licenses/unlicense/)`
  if (data.license === 'None')
    return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

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
