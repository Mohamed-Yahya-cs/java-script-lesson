// hello world function
function greet (firstName, LastName){
  console.log('Hello ' + firstName + ' world ' + LastName)
}

function square (number) {
  return number*number;
}

// Function, lastname, age, ageafraid, hair, male, female
let MohamedYahya = ["Mohamed", "Yahya", 19, 40, null, true, false];
let MeganSpence = ["Megan", "Spence", 14, null, true, false];

greet (MohamedYahya[0], MohamedYahya[1]);
greet (MeganSpence[0], MeganSpence[1]);
greet (square (MohamedYahya[2]), MeganSpence[2]);
