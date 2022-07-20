///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//INSERER LES DETAILS CANAPE SELECTIONNE DANS LA PAGE
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// on crée la FONCTION qui recupere l'ID dans l'URL  ////////////////////////////////////////////////////////////////////////
const recupId = () => {
  //on recupere url du produit
  const url = new URL(document.location.href);
  // on recupere l'id dans l'Url
  const idProduit = url.searchParams.get("id");
  return idProduit;
}

///on crée la FONCTION qui récupère la CARD CANAPE dans la base de donnée et l'ijecte dans le HTML//////////////////////////////
const showListProduct = async () => {

  // on execute la FONCTION recupId qu'on charge dans la variable idProduit
  const idProduit = recupId();

  // on recupere les datas avec la FONCTION getCanap
  const datas = await getCanap(`http://localhost:3000/api/products/${idProduit}`);
  console.log(datas)

  // on injecte les datas dans le code HTML
  document.querySelector(".item__img").innerHTML = `<img src=${datas.imageUrl} alt="Photographie d'un canapé">`;
  document.querySelector("#title").innerHTML = `${datas.name}`;
  document.querySelector("#price").innerHTML = `${datas.price}`;
  document.querySelector("#description").innerHTML = `${datas.description}`;

  // on injecte les couleurs séléctionnables dans le code HTML avec +=
  for (color of datas.colors) {
    const addOptionCouleur = `<option value="${color}">${color}</option>`;
    document.querySelector("#colors").innerHTML += addOptionCouleur;
  };

  // on execute la FONCTION///////////////////////////////////////////////////////////////////////////////////////
AjoutPanier(datas);
};

// on execute la FONCTION///////////////////////////////////////////////////////////////////////////////////////
showListProduct();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FONCTION AJOUT PANIER /////////////////////////////////////////////////////////////////////////////////////////////////
const AjoutPanier = (datas) => {

  // on initialise le tableau si localStorage vide sinon on charge le localStorage
  let arrayPanier = localStorage.length === 0 ? [] : chargeArrayPanier();

  // on ECOUTE le boutton au "clic"
  const ajoutPanier = document.getElementById('addToCart').addEventListener('click', () => {
    
        // on crée le nouvel objet
        const newObjetPanier = {
          _id: datas._id,
          color: document.getElementById("colors").value,
          quantity: Number(document.getElementById("quantity").value),
          image : datas.imageUrl ,
          name: datas.name,
        };
        console.log("newObjetPanier", newObjetPanier)

      // on verifie que la quantite et la couleur soit saisie
      if ((newObjetPanier.quantity === 0) || (newObjetPanier.color === 0)) {
        alert("il manque la quantité ou la couleur du produit");
        return;
      };
        // on verifie si le produit à deja été ajouté 
        const produitIdentique =  arrayPanier.find(element => element._id === newObjetPanier._id && element.color === newObjetPanier.color);
        console.log(produitIdentique)

        // si produit identique déjà ajouté on modifie seulement la quantité
        if (produitIdentique !== undefined) {
          alert("MEME Produit");
          produitIdentique.quantity += newObjetPanier.quantity;
          // sinon ajouter un nouvel objet dans le tableau
        } else {
          alert("NOUVEAU produit");
          arrayPanier.push(newObjetPanier);
        }
        sauvegardeLocalStorage(arrayPanier);
        console.log("localStorage", localStorage)

                // redirection vers le panier
        location.href= "./cart.html"
      }
    )
};

