const prompt = require("prompt-sync")({ sigint: true });

let nbAléatoire = Math.floor(Math.random() * 100);

for (let i = 5; i >= 0; i--) {
  const userNb = parseInt(
    prompt(`Trouvez le nombre entre 1 et 100, plus que ${i} essais : `)
  );
  if (userNb === nbAléatoire) {
    console.log(`Vous avez gagné!`);
    return;
  } else if (userNb < nbAléatoire) {
    console.log(`Le nombre est plus grand.`);
  } else if (userNb > nbAléatoire) {
    console.log(`Le nombre est plus petit.`);
  } else if (i === 1) {
    console.log(`Vous avez perdu!`);
  }
}
