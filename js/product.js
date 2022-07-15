
 // on crée la FONCTION qui recupere l'ID dans l'URL
const recupId = () => {
  //on recupere url du produit
  const url = new URL(document.location.href);
  // on recupere l'id dans l'Url
  const idProduit = url.searchParams.get("id")
  return idProduit;
}


///on crée la FONCTION qui récupère la CARD CANAPE dans la base de donnée et l'ijecte dans le HTML
const showListProduct = async () => {

  // on execute la FONCTION recupId qu'on charge dans la variable idProduit
  const idProduit = recupId();

  // on recupere les datas avec la FONCTION getCanap
  const datas = await getCanap(`http://localhost:3000/api/products/${idProduit}`);

  console.log("datas", datas);
  // on charge les datas dans les variables  
  const ImgProduit = `<img src=${datas.imageUrl} alt="Photographie d'un canapé">`;
  const NomProduit = `${datas.name}`;
  const PrixProduit = `${datas.price}`;
  const DescriptionProduit = `${datas.description}`;

  // on injecte les datas dans le code HTML
  document.querySelector(".item__img").innerHTML = ImgProduit;
  document.querySelector("#title").innerHTML = NomProduit;
  document.querySelector("#price").innerHTML = PrixProduit;
  document.querySelector("#description").innerHTML = DescriptionProduit;

  // on injecte les couleurs séléctionnables dans le code HTML avec +=
   for (color of datas.colors) {
    const addOptionCouleur = `<option value="${color}">${color}</option>`;
    document.querySelector("#colors").innerHTML += addOptionCouleur;
  } ;


}

 
  // on execute la FONCTION
showListProduct();




// VIDER LE LOCAL STORAGE

// localStorage.clear();

console.log(localStorage);


// AJOUT AU PANIER - LOCALSTORAGE

let quantiteProduit = "";
let couleurProduit = "";
let numeroAjoutArticle = "";



// on ECOUTE le boutton et on charge au "clic" les input dans les variables
const ajoutPanier = document.getElementById('addToCart')
  .addEventListener('click', function () {

    quantiteProduit = document.getElementById("quantity").value;
    couleurProduit = document.getElementById("colors").value;

    console.log(quantiteProduit);
    console.log(couleurProduit);

    // on AJOUTE les variables chargées dans le local storage

    if ((quantiteProduit == 0) || (couleurProduit == 0)) {

      alert("il manque la quantité ou la couleur du produit")

    } else {

      const ajoutArticle = [idProduit, quantiteProduit, couleurProduit];

      localStorage.setItem(`ajoutArticle${idProduit + numeroAjoutArticle}`, ajoutArticle);

      numeroAjoutArticle = ++numeroAjoutArticle;

      console.log(ajoutArticle);
      console.log(localStorage);


    };
  });



