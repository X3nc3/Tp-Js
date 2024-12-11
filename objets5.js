const randomWords = ["java", "javascript", "python"];
const prompt = require("prompt-sync")({ sigint: true });
const max_attemps = 10;

const getRandomWord = () => {
  const index = Math.floor(Math.random() * randomWords.length);
  return randomWords[index];
};

const getCurrentGess = (word, guessedLetters) => {
  return word
    .split("")
    .map((lettre) => (guessedLetters.includes(lettre) ? lettre : "_"))
    .join("");
};

const game = () => {
  const word = getRandomWord();
  const gessedLetters = [];
  let currentGess;
  let attempNumber = 0;

  while (currentGess !== word && attempNumber < max_attemps) {
    const guess = prompt("Guess letter :");
    gessedLetters.push(guess);
    currentGess = getCurrentGess(word, gessedLetters);
    attempNumber++;

    console.log(currentGess.split("").join(" "));
    console.log("Try number :" + attempNumber);
  }

  if (attempNumber === max_attemps) {
    console.log("You Lose");
  } else {
    console.log("You win!");
  }
};

game();
