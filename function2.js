let getFullName = (firstName, lastName) => {
  let capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  return capitalize(firstName) + " " + capitalize(lastName);
};

console.log(getFullName("maxence", "ogier"));

function calculeAvance(a, b, operator) {
  return operator(a, b);
}

const puissance = (a, b) => Math.pow(a, b);
const reste = (a, b) => a % b;

console.log(calculeAvance(5, 3, puissance));
console.log(calculeAvance(5, 3, reste));

function startTimer() {
  let timer = 0;

  const seconde = setInterval(() => {
    timer++;
    console.log(timer);

    if (timer === 10) {
      clearTimeout(seconde);
      console.log("Temps écoulé !");
    }
  }, 1000);
}

startTimer();
