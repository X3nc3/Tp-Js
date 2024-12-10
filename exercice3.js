const prompt = require("prompt-sync")({ sigint: true });

const userString = prompt("Entrez votre phrase : ");

console.log(userString.length);
console.log(userString.toUpperCase());
console.log(userString.includes("JAVASCRIPT"));
