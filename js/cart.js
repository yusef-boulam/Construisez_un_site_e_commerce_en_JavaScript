
//FONCTION remplit le panier ////////////////////////////////////////////////////////////
const showPanier = async () => {

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

  // on initialise la variable
  let objetPanier = "";

  /* on boucle avec la METHODE forEach sur chaque objet du localStorage
        et on charge les objets dans le panier  */

  arrayPanier.forEach(objet => {

    // on recupere le prix du serveur pour chaque produit
    const price = datas.find(element => element._id === objet._id).price

    // on charge les donnée du local storage + le prix
    objetPanier += ` <article class="cart__item" data-id= ${objet._id} data-color=${objet.color} >
       <div class="cart__item__img">
         <img src=${objet.image} alt="Photographie d'un canapé">
       </div>
       <div class="cart__item__content">
         <div class="cart__item__content__description">
           <h2>${objet.name}</h2>
           <p>${objet.color}</p>
           <p>${price} €</p>
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


  // total des articles
  let totalQuantity = 0;
  arrayPanier.forEach(canape => {
    totalQuantity += canape.quantity;
  })
  document.getElementById("totalQuantity").innerHTML = totalQuantity;


  // total du prix
  let totalPrice = 0;
  arrayPanier.forEach(canape => {
    const price = datas.find(element => element._id === canape._id).price;
    totalPrice += price * canape.quantity;
  })
  document.getElementById("totalPrice").innerHTML = totalPrice;

  // supprimer l'article
  // on boucle sur chaque lien "supprimer" et on ecoute le click
  const allButtonDelete = document.querySelectorAll('.deleteItem')
  for (let btnDelete of allButtonDelete) {
    btnDelete.addEventListener('click', () => {
      //on recupere l id du produit cliqué dans le panier
      const idObjectToDelete = btnDelete.closest('.cart__item').dataset.id
      const colorObjectToDelete = btnDelete.closest('.cart__item').dataset.color
      //on le compare à l'index du tableau / on recupere l'index et on le supprime
      const objectArrayToDelete = arrayPanier.find(element => element._id === idObjectToDelete && element.color === colorObjectToDelete);
      const indexToDelete = arrayPanier.indexOf(objectArrayToDelete);
      arrayPanier.splice(indexToDelete, 1);
      //on sauvegarde et on actualise la page
      sauvegardeLocalStorage(arrayPanier);
      location.href = "./cart.html"
    }
    )
  };

  // modifier l'article
  // on boucle sur les inputs de chaque produit et on ecoute le changement
   document.querySelectorAll('.itemQuantity').forEach( (inputQuantity)=>{
    inputQuantity.addEventListener('change', () => {
      if (inputQuantity.value < 1 ) {
        alert("la quantité ne peut être inferieure à 1")
        return
      }
      if (inputQuantity.value > 100 ) {
        alert("la quantité ne peut être supérieure à 100")
        return
      }
      //on recupere l id du produit cliqué dans le panier et la couleur
      const idObjectToChange = inputQuantity.closest('.cart__item').dataset.id
      const colorObjectToChange = inputQuantity.closest('.cart__item').dataset.color
      //on recupere l'emplacement de l'objet dans le tableau et on modifie la quantite
      const objectArrayToChange = arrayPanier.find(element => element._id === idObjectToChange && element.color === colorObjectToChange);
      objectArrayToChange.quantity = Number(inputQuantity.value)
      console.log(inputQuantity.value);
      //on sauvegarde et on actualise la page
        sauvegardeLocalStorage(arrayPanier);
       location.href = "./cart.html"
     }
    )
  })
  // for (let inputQuantity of allInputQuantity) {
  //   inputQuantity.addEventListener('change', () => {
  //     //on recupere l id du produit cliqué dans le panier et la couleur
  //     const idObjectToChange = inputQuantity.closest('.cart__item').dataset.id
  //     const colorObjectToChange = inputQuantity.closest('.cart__item').dataset.color
  //     //on recupere l'emplacement de l'objet dans le tableau et on modifie la quantite
  //     const objectArrayToChange = arrayPanier.find(element => element._id === idObjectToChange && element.color === colorObjectToChange);
  //     objectArrayToChange.quantity = Number(inputQuantity.value)
  //     console.log(inputQuantity.value);
  //     //on sauvegarde et on actualise la page
  //       sauvegardeLocalStorage(arrayPanier);
  //      location.href = "./cart.html"
  //    }
  //   )
  // };


document.getElementById("order").addEventListener('click', (event) => {
    event.preventDefault();

    const isValidFirstName = firstName();
    const isValidLastName = lastName();
    if (isValidFirstName && isValidLastName){
      // if (firstName() && lastName() && address() && city() && email()){
        alert("commande envoyé");
    } else {
      alert("commande pas envoyé");
    }
})



}
// on execute la FUNCTION
showPanier();


