class Vehicule {
  deplacer() {}
}

class Voiture extends Vehicule {
  klaxonner() {
    console.log("Klaxs!");
  }
}

class Bateau extends Vehicule {
  monterVoiles() {
    console.log("Hissez haut!");
  }
}
