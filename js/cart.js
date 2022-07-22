
//FONCTION remplit le panier ////////////////////////////////////////////////////////////
const showPanier = async () => {
  // on initialise la variable
  let objetPanier = "";

  // on recupere le tableau dans le local storage
  let arrayPanier = chargeArrayPanier();
  console.log(arrayPanier);

  // on recupere les datas avec la FUNCTION getCanap
  let datas = await getCanap('http://localhost:3000/api/products');
  console.log(datas);

  // on verifie la reception des datas
  if (datas === -1) {
    alert("problème de connection au serveur, veuillez retenter ulterieurement ou vérifier votre connection.");
    return;
  };

  /* on boucle avec la METHODE forEach sur chaque objet du localStorage
        et on charge les objets dans le panier  */
  arrayPanier.forEach(objet => {

    // on recupere le prix du serveur pour chaque produit
    const price= datas.find(element => element._id === objet._id).price

    // on charge les donnée du local storage + le prix
    objetPanier += ` <article class="cart__item" data-id= ${objet._id} data-color=${objet.color} >
       <div class="cart__item__img">
         <img src=${objet.image} alt="Photographie d'un canapé">
       </div>
       <div class="cart__item__content">
         <div class="cart__item__content__description">
           <h2>${objet.name}</h2>
           <p>${objet.color}</p>
           <p>${price}€</p>
         </div>
         <div class="cart__item__content__settings">
           <div class="cart__item__content__settings__quantity">
             <p>Qté : </p>
             <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${objet.quantity}>
           </div>
           <div class="cart__item__content__settings__delete">
             <p class="deleteItem">Supprimer</p>
           </div>
         </div>
       </div>
     </article> `

    // on injecte les articles dans le code HTML
    document.getElementById("cart__items").innerHTML = objetPanier;
  });

};

 // on execute la FUNCTION
 showPanier();