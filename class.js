class Robot {
  constructor(nom) {
    this.nom = nom;
    this.positionInit = { x: 0, y: 0 };
    this.positionNettoyer = [];
  }

  seDeplacer(direction) {
    switch (direction) {
      case "haut":
        this.positionInit.y += 1;
        break;
      case "bas":
        this.positionInit.y -= 1;
        break;
      case "droite":
        this.positionInit.x += 1;
        break;
      case "gauche":
        this.positionInit.x -= 1;
      default:
        console.log("Erreur de direction");
        break;
    }
  }

  nettoyer() {
    positionNettoyer.push(this.positionInit);
    console.log(
      `La position y:${this.positionInit.y} x:${this.positionInit.x} est propre`
    );
  }

  afficherPosition() {
    console.log(
      `La position actuelle est y:${this.positionInit.y} x:${this.positionInit.x}`
    );
  }

  reinitialiserPosition() {
    this.afficherPosition = { x: 0, y: 0 };
  }

  reculer() {
    this.positionInit.y -= 1;
  }

  historiqueNettoyage() {
    console.log(this.positionNettoyer);
  }
}

const robot = new Robot("Waly");
robot.nettoyer();
console.log(robot.positionNettoyer);
