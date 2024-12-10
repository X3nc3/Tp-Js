const prompt = require("prompt-sync")({ sigint: true });

const userAge = prompt("Entrez votre age : ");

if (userAge === "") {
  console.log("Vous n'avez pas entré un nombre valide. ");
} else if (parseInt(userAge) < 18) {
  console.log("Vous etes mineur.");
} else {
  console.log("Vous etes majeur.");
}
