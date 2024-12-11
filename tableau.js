let arrays = ["chat", "chien", "souris", "poisson", "cochon"];

const add = (item) => arrays.push(item);
const supp = (item) => {
  arrays = arrays.filter((i) => i !== item);
};
const find = (item) => arrays.filter((i) => i === item);

add("serpent");
console.log(arrays);
supp();
console.log(arrays);
console.log(find("chat"));
