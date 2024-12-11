let panier = [
  {
    nom: "lait",
    quantité: 1,
    prix: 3,
  },
  {
    nom: "oeuf",
    quantité: 6,
    prix: 5,
  },
];

let ajouterProduitPanier = (item) => {
  let findProduit = panier.find((i) => i.nom === item.nom);

  if (findProduit !== null) {
    findProduit.quantité += item.quantité;
  } else {
    panier.push(item);
  }

  let totalPrice = 0;
  panier.map((i) => {
    let priceArticles = i.quantité * i.prix;
    totalPrice += priceArticles;
  });

  return totalPrice;
};

console.log(ajouterProduitPanier({ nom: "lait", quantité: 2, prix: 3 }));
