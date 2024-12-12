class Livre {
  constructor(titre, auteur) {
    this.titre = titre;
    this.auteur = auteur;
  }
}

class Bibliotheque {
  constructor() {
    this.livres = [];
  }

  ajouterLivre(titre, auteur) {
    this.livres.push(new Livre(titre, auteur));
  }

  rechercheLivre(titre) {
    return this.livres.filter((i) => i.titre === titre);
  }
}

const Bibliotheque1 = new Bibliotheque();
Bibliotheque1.ajouterLivre("Harry Potter", "JK Rowling");
Bibliotheque1.ajouterLivre("Harry Potter 2", "JK Rowling");
Bibliotheque1.ajouterLivre("Harry Potter 3", "JK Rowling");
Bibliotheque1.ajouterLivre("Harry Potter 4", "JK Rowling");
Bibliotheque1.ajouterLivre("Harry Potter 5", "JK Rowling");
Bibliotheque1.ajouterLivre("Harry Potter 6", "JK Rowling");
Bibliotheque1.ajouterLivre("Harry Potter 7", "JK Rowling");

console.log(Bibliotheque1.livres);
console.log(Bibliotheque1.rechercheLivre("Harry Potter 5"));
