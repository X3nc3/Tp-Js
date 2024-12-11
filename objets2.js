let arrayStudents = [
  {
    nom: "Pierre",
    note: 10,
  },
  {
    nom: "Paul",
    note: 15,
  },
  {
    nom: "Jacques",
    note: 20,
  },
];

let filtreStudents = (noteRef) => {
  return arrayStudents.filter((i) => i.note > noteRef);
};

let moyenneStudents = () => {
  let totalNote = 0;
  arrayStudents.map((i) => {
    totalNote += i.note;
  });
  let moyenne = totalNote / arrayStudents.length;
  return moyenne;
};

console.log(filtreStudents(12), `, Moyenne : ${moyenneStudents()}`);
