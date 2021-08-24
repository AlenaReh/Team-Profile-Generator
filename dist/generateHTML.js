const generateCards = data => {

//variable for card 
  let cardsTemplate =[]; 
  
  const ManagerCard = manager => { 
    return `<div class="card shadow m-4" style="width: 16rem; height: 22rem; display: inline-block;">
    <div class="card-header bg-primary">
        <h2 class="card-title text-center">${manager.getName()}</h2>
        <h3 class="card-title text-center"><i class="fas fa-hard-hat mr-2"></i></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>`
  }
  
  const EngineerCard = engineer => { 
    return `<div class="card shadow m-4" style="width: 16rem; height: 22rem; display: inline-block;">
    <div class="card-header bg-success">
        <h2 class="card-title text-center">${engineer.getName()}</h2>
        <h3 class="card-title text-center"><i class="fas fa-tools mr-2"></i></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href='https://github.com/${engineer.getGithub()}' target="_blank">https://github.com/${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>`
  }

  const InternCard = intern => { 
    return `<div class="card shadow m-4" style="width: 16rem; height: 22rem; display: inline-block;">
    <div class="card-header bg-warning">
        <h2 class="card-title text-center">${intern.getName()}</h2>
        <h3 class="card-title text-center"><i class="fas fa-graduation-cap mr-2"></i></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>`
  }

  
//   //filter roles 
//   for (let i = 0; i<data.length; i ++) {
//       if (data[i].getRole() === "Manager") {
//         cardsTemplate.push(ManagerCard(data[i]))
//       }
//       if (data[i].getRole() === "Engineer") {
//         cardsTemplate.push(EngineerCard(data[i]))
//       }
//       if (data[i].getRole() === "Intern") {
//         cardsTemplate.push(InternCard(data[i]))
//       }
//     return cardsTemplate.join(data);
    
//   }

  //filter roles 
  for (let i = 0; i<data.length; i ++) {
      if (data[i].getRole() === "Manager") {
        cardsTemplate.push(ManagerCard(data[i]))
      }
      if (data[i].getRole() === "Engineer") {
        cardsTemplate.push(EngineerCard(data[i]))
      }
      if (data[i].getRole() === "Intern") {
        cardsTemplate.push(InternCard(data[i]))
      }
  }
  return cardsTemplate.join().trim();
}


// A function to generate HTML
function generateHTML(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body style="background-color: #e3f2fd;">
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-12 jumbotron mb-4 bg-primary'>
                <h1 class='text-center fw-bold text-lg-centered' style="color: #e3f2fd;">My Team</h1>
            </div>
        </div>
    </div>

    <div class="container text-center">
    ${generateCards(data)}
    </div>
    
</body>
</html>`
    
  }
  
  module.exports = generateHTML;