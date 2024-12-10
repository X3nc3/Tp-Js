const prompt = require("prompt-sync")({ sigint: true });

const nb1 = parseInt(prompt("Entrez le premier nombre : "));
const nb2 = parseInt(prompt("Entrez le deuxième nombre : "));

console.log("Addition : ", nb1 + nb2);
console.log("Soustraction : ", nb1 - nb2);
console.log("Multiplication : ", nb1 * nb2);
console.log("Division : ", nb1 / nb2);
