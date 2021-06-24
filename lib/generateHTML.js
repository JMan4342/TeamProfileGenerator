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
        <div id="managerProfile">
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
        </div>
    </section>

    <script src="../index.js"></script>
  </body>
</html>

    `;
}

module.exports = generateHTML;
