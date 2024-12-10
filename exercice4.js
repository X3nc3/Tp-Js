const carat = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let mdp = "";

for (let i = 0; i < 10; i++) {
  let index = Math.floor(Math.random() * carat.length);
  mdp += carat[index];
}

console.log(`Mot de passe aléatoire de 10 caractére : ${mdp}`);
