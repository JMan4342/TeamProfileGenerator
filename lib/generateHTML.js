const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

const mang = new Manager();
const eng = new Engineer();
const int = new Intern();

const generateCards = (data) => {
  let htmlString = '';
  data.forEach(mang => {
    console.log("Hello", mang);
    console.log("TESTtestTEST", data);
    if (mang instanceof Manager) {
      htmlString += `
    <div id="managerProfile">
      <h2>${mang.name}</h2>
      <h3>Manager</h3>
      <p>ID: ${mang.id}</p>
      <p>Email: ${mang.email}</p>
      <p>Office Number: ${mang.officeNumber}</p>
    </div>
    `;
    }
  });
  data.forEach((eng) => {
    if (eng instanceof Engineer) {
      htmlString += `
    <div id="engineerProfile">
      <h2>${eng.name}</h2>
      <h3>Engineer</h3>
      <p>ID: ${eng.id}</p>
      <p>Email: ${eng.email}</p>
      <p>Office Number: ${eng.github}</p>
    </div>
    `;
    }
  });
  data.forEach((int) => {
    if (int instanceof Intern) {
      htmlString += `
    <div id="internProfile">
      <h2>${int.name}</h2>
      <h3>Intern</h3>
      <p>ID: ${int.id}</p>
      <p>Email: ${int.email}</p>
      <p>Office Number: ${int.school}</p>
    </div>
    `;
    }
  });
  return htmlString
};

// Generate HTML page with data from inquirer prompts
function generateHTML(data) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Team Profile</title>
    <link rel="stylesheet" href="./style.css" />
  </head>

  <body>
    <header>
      <h1>My Team</h1>
    </header>

    <section>
        ${generateCards(data)}
    </section>

    <script src="../index.js"></script>
  </body>
</html>

    `;
}

module.exports = generateHTML;

// {
  /* <div id="managerProfile">
<h2>${data.name}</h2>
<h3>Manager</h3>
<p>ID: ${data.id}</p>
<p>Email: ${data.email}</p>
<p>Office Number: ${data.officeNumber}</p>
</div>

<div id="engineerProfile">
<h2>${data.name}</h2>
<h3>Engineer</h3>
<p>ID: ${data.id}</p>
<p>Email: ${data.email}</p>
<p>GitHub: ${data.github}</p>
</div>

<div id="internProfile">
<h2>${data.name}</h2>
<h3>Intern</h3>
<p>ID: ${data.id}</p>
<p>Email: ${data.email}</p>
<p>School: ${data.school}</p>
</div> */
// }
