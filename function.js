function greet(nom) {
  console.log(`Bonjour, ${nom}!`);
}

greet("Maxence");

let multiplyByTwo = (number) => number * 2;
console.log(multiplyByTwo(5));

function calculeTotal(price, taxRate) {
  if (taxRate === null || taxRate === undefined) {
    taxRate = 0.2;
  }
  return price * taxRate;
}

console.log(calculeTotal(5, 2));
console.log(calculeTotal(5));
