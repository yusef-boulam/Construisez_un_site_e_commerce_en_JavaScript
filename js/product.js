//URL
// recupere url avec l'id du produit
const url = new URL(document.location.href);
// on separe l'id de l Url
const idUrlHash = url.hash
// on supprime le # de l'id recupéré
const idProduit = idUrlHash.slice(1)


// creation des const modificatives  
let ChangeElementId = "";
let ChangeElementImg = "";
let ChangeElementH1 = "";
let ChangeElementPrice = "";
let ChangeElementP = "";
let ChangeElementColor = "";


//FONCTION vider les anciennes couleurs
const viderCouleursSelectionnables = () => {
    const options = document.querySelectorAll('#colors option');
    for (let option of options)
    option.remove();
};

//FONCTION creation fiche produit
const creationFicheProduit = () => {

    // Ajout de l'image <Img>
    const newElementImg = document.createElement("img");
    document.querySelector(".item__img")
        .appendChild(newElementImg)
        .setAttribute("src", ChangeElementImg);
    newElementImg.setAttribute('alt', 'Lorem ipsum dolor sit amet, Kanap name1');

    // Ajout du contenu du TITRE <h1>
    document.querySelector("#title")
        .innerHTML = ChangeElementH1;

    // Ajout du prix <price>
    document.querySelector("#price")
        .innerHTML = ChangeElementPrice;

    // Ajout de la description <p>
    document.querySelector("#description")
        .innerHTML = ChangeElementP;

  // Ajout de la premiere option "generique" couleur "SVP, choisissez une couleur"
  const newElementOption = document.createElement("option");
  document.querySelector("#colors")
      .appendChild(newElementOption)
      .setAttribute("value", "");
      newElementOption.innerHTML = "--SVP, choisissez une couleur --";

};


//FONCTION ajout Couleurs Selectionnables à la fiche produit
const ajoutCouleursSelectionnables = () => {

    const newElementOption = document.createElement("option");
    document.querySelector("#colors")
        .appendChild(newElementOption)
        .setAttribute("value", ChangeElementColor);
        newElementOption.innerHTML = ChangeElementColor;
};


// on recupere l'objet du produit sélectionné <p>
fetch(`http://localhost:3000/api/products/${idProduit}`)
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })

    .then(function (value) {

        // recuperation des données dans l API et on les charges dans les variables  
        ChangeElementId = value._id;
        ChangeElementImg = value.imageUrl;
        ChangeElementH1 = value.name;
        ChangeElementPrice = value.price;
        ChangeElementP = value.description;
       
         // VIDER anciennes couleurs
         viderCouleursSelectionnables ();

        // execute la fonction en injectant les données de l'API
        creationFicheProduit();

         //RECUPERATION DES COULEURS AVEC UNE BOUCLE
        // initialise numberIndexColors pour la boucle 
        let numberIndexColor = 0;
        for (let color of value.colors) {
          // recuperation des données dans l API 
            ChangeElementColor = value.colors[numberIndexColor];

            // ajoute les nouvelles couleurs
            ajoutCouleursSelectionnables();
            ++numberIndexColor;
        }

    })
    .catch(function (err) {
        // Une erreur est survenue
    });



 // VIDER LE LOCAL STORAGE

      // localStorage.clear();

    console.log(localStorage);

    
 // AJOUT AU PANIER - LOCALSTORAGE

 let quantiteProduit = "";
 let couleurProduit = "";
 let numeroAjoutArticle = "";



// on ECOUTE le boutton et on charge au "clic" les input dans les variables
 const ajoutPanier = document.getElementById('addToCart')
 .addEventListener('click', function() {        

    quantiteProduit = document.getElementById("quantity").value;     
    couleurProduit = document.getElementById("colors").value;  

    console.log(quantiteProduit);
    console.log(couleurProduit);
    
    // on AJOUTE les variables chargées dans le local storage

    if ((quantiteProduit == 0) || (couleurProduit == 0)) {

        alert("il manque la quantité ou la couleur du produit")

    }else{
      
        const ajoutArticle = [idProduit, quantiteProduit, couleurProduit];

        localStorage.setItem(`ajoutArticle${idProduit+numeroAjoutArticle}`, ajoutArticle);

        numeroAjoutArticle = ++numeroAjoutArticle;

        console.log(ajoutArticle);
        console.log(localStorage);

      
    };
 });
     
   

  