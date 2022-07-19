
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//INSERER LES DETAILS DE LA CARD CANAPE SELECTIONNE DANS LA HOMEPAGE

// on crée la FONCTION qui recupere l'ID dans l'URL   //////////////////////////////////////////////////////////////////////////////
const recupId = () => {
  //on recupere url du produit
  const url = new URL(document.location.href);
  // on recupere l'id dans l'Url
  const idProduit = url.searchParams.get("id")
  return idProduit
}


///on crée la FONCTION qui récupère la CARD CANAPE dans la base de donnée et l'ijecte dans le HTML/////////////////////////////////////
const showListProduct = async () => {

  // on execute la FONCTION recupId qu'on charge dans la variable idProduit
  const idProduit = recupId();

  // on recupere les datas avec la FONCTION getCanap
  const datas = await getCanap(`http://localhost:3000/api/products/${idProduit}`)


  // on charge les datas dans les variables
  const ImgProduit = `<img src=${datas.imageUrl} alt="Photographie d'un canapé">`
  const NomProduit = `${datas.name}`
  const PrixProduit = `${datas.price}`
  const DescriptionProduit = `${datas.description}`

  // on injecte les datas dans le code HTML
  document.querySelector(".item__img").innerHTML = ImgProduit
  document.querySelector("#title").innerHTML = NomProduit
  document.querySelector("#price").innerHTML = PrixProduit
  document.querySelector("#description").innerHTML = DescriptionProduit

  // on injecte les couleurs séléctionnables dans le code HTML avec +=
  for (color of datas.colors) {
    const addOptionCouleur = `<option value="${color}">${color}</option>`
    document.querySelector("#colors").innerHTML += addOptionCouleur
  };
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// on execute la FONCTION //////////////////////////////////////////////////////////////////////////////////////////////////////

showListProduct();




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//AJOUT PANIER
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// VIDER LE LOCAL STORAGE///////////////////////////////////////////////////////////////////////////////////////////////////////////
// localStorage.clear();

console.log(localStorage)



//FONCTION sauvegarde le tableau dans le local storage /////////////////////////////////////////////////////////////////////////
const SauvegardeLocalStorage = (arrayPanier) => {
  localStorage.arrayPanier = (JSON.stringify(arrayPanier))
}


//FONCTION qui charge le tableau depuis le local storage /////////////////////////////////////////////////////////////////////////
const chargeArrayPanier = () => {
  const arrayPanier = JSON.parse(localStorage.arrayPanier);
  if (arrayPanier == null) {
    return []
  } else {
    return arrayPanier
  }

}


// FONCTION on crée un nouvel objet en chargeant les inputs///////////////////////////////////////////////////////////////////////
const newObjetPanier = (idProduitInput, couleurProduitInput, quantiteProduitInput) => {
  // On crée une classe
  class objetPanier {
    constructor(idProduit, couleurProduit, quantiteProduit) {
      this.idProduit = idProduit
      this.couleurProduit = couleurProduit
      this.quantiteProduit = quantiteProduit
    }
  }
  // et on crée un nouvel objet avec les inputs////////////////////////////////////////////////////////////////////////////////////
  const newObjetPanier = new objetPanier(idProduitInput, couleurProduitInput, quantiteProduitInput)
  return newObjetPanier
}


// FONCTION qui ajoute le nouvel objet dans le tableau//////////////////////////////////////////////////////////////////////////////
const pushObjetPanier = (arrayPanier, newObjetPanier) => {
  // On ajoute l'objet crée dans tableau
  arrayPanier.push(newObjetPanier)
  console.log(arrayPanier)
  return arrayPanier
}


// // FONCTION qui recherche dans le tableau si le produit selectionée à déja été ajouté////////////////////////////////////////////
// et retourne un tableau"ProduitIdentique" contenant l'objet en question
const verifieProduitIdentique = (arrayPanier, idProduitInput, couleurProduitInput) => {
  const produitIdentique = arrayPanier.forEach(element => {
    if ((element.idProduit == idProduitInput)
      && (element.couleurProduit == couleurProduitInput)) {
      console.log(element.idProduit)
      console.log(idProduitInput)
      console.log(element.couleurProduit)
      console.log(couleurProduitInput)
      const objetIdentique = element
      console.log(element)
      return element
    }
    return false
  })
}


// FONCTION qui modifie la quantité sur l'objet existant dans le tableau////////////////////////////////////////////////////////////
const modifieObjetPanier = (arrayPanier, arrayProduitIdentique, idProduitInput, couleurProduitInput, quantiteProduitInput) => {

  // on recupere l'index du produit identique dans le tableau
  const indexproduit = arrayPanier.findIndex(element => (element.idProduit === idProduitInput)
    && (element.couleurProduit === couleurProduitInput))

  console.log("arrayPanierORIGINAL", arrayPanier)
  console.log(arrayProduitIdentique)
  console.log(indexproduit)

  //on calcule la nouvelle quantité
  let quantiteTotale = arrayProduitIdentique[0].quantiteProduit + quantiteProduitInput

  // on ajoute le nouvel objet dans le tableau
  const newObjet = newObjetPanier(idProduitInput, couleurProduitInput, quantiteTotale)
  let newArrayPanier = pushObjetPanier(arrayPanier, newObjet)
  console.log(newArrayPanier)

  // on supprime l ancien objet dans le tableau
  newArrayPanier = newArrayPanier.splice(indexproduit, 1);
  console.log(newArrayPanier)

  return newArrayPanier
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FONCTION (MAIN) /////////////////////////////////////////////////////////////////////////////////////////////////////////////
const AjoutPanier = () => {

  // on initialise le tableau si localStorage vide sinon on charge le localStorage
  let arrayPanier = chargeArrayPanier();

  // on ECOUTE le boutton au "clic" 
  const ajoutPanier = document.getElementById('addToCart')
    .addEventListener('click', () => {
      // on charge les variables avec les inputs
      const idProduitInput = recupId();
      const couleurProduitInput = document.getElementById("colors").value
      const quantiteProduitInput = Number(document.getElementById("quantity").value)

      // on verifie que la quantite et la couleur soit saisie
      if ((quantiteProduitInput == 0) || (couleurProduitInput == 0)) {

        alert("il manque la quantité ou la couleur du produit")

      } else {
        console.log(arrayPanier);
        // on execute la FONCTION qui verifie si le produit à deja été ajouté et nous retourne un tableau
        const produitIdentique = verifieProduitIdentique(arrayPanier, idProduitInput, couleurProduitInput)

        console.log(produitIdentique)
        // si le tableau arrayProduitIdentique contient un élément modifier seulement la quantité
        if (produitIdentique == true) {
          arrayPanier = modifieObjetPanier(arrayPanier, arrayProduitIdentique, idProduitInput, couleurProduitInput, quantiteProduitInput)
          console.log(arrayPanier)
          alert("MODIF produit")

          //  on execute la FONCTION qui sauvegarde le tableau dans le local storage
          SauvegardeLocalStorage(arrayPanier);
          console.log(arrayPanier)


          // sinon ajouter un nouvel objet dans le tableau arrayProduit
        } else {

          alert("produit differents")
          // on execute la FONCTION qui crée un nouvel objet
          const newObjet = newObjetPanier(idProduitInput, couleurProduitInput, quantiteProduitInput);
          //  on execute la FONCTION qui ajoute le nouvel objet au tableau
          pushObjetPanier(arrayPanier, newObjet);
          //  on execute la FONCTION qui sauvegarde le tableau dans le local storage
          SauvegardeLocalStorage(arrayPanier);
          console.log(arrayPanier)
        }
      }
    })
}


// on execute la FONCTION //////////////////////////////////////////////////////////////////////////////////////////////////////

AjoutPanier();