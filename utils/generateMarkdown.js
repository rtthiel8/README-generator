// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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

  ## **Description**
  <p>${data.description}</p>

  ## **Table of Contents**
  <nav>
    <ol>
      <li><a href="#install">Install</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#test">Tests</a></li>
      <li><a href="#questions">Questions</a></li>
    </ol>
  </nav>

  ## **Installation**
   <p>${data.installation}</p>

  ## **Usage**

  ## **License**

  ## **Contributing**
   ${data.contributing}

  ## **Tests**
  
  ## **Questions**
  GitHub: "https://github.com/${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
