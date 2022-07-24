
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


 // total des articles
 let totalQuantity = 0;
 arrayPanier.forEach(canape => {
        totalQuantity += canape.quantity;
 })
 document.getElementById("totalQuantity").innerHTML = totalQuantity;


  // total du prix
  let totalPrice = 0;
  arrayPanier.forEach(canape => {
    const price= datas.find(element => element._id === canape._id).price;
    totalPrice += price * canape.quantity;
  })
  document.getElementById("totalPrice").innerHTML = totalPrice;

    // supprimer l'article
      // on boucle sur chaque lien supprimer et on ecoute le click
  const allButtonDelete = document.querySelectorAll('.deleteItem')
  for(let btnDelete of allButtonDelete){
    btnDelete.addEventListener('click', () => {
         //on recupere l id du produit cliqué dans le panier
       const idObjectToDelete = btnDelete.closest('.cart__item').dataset.id
             //on le compare à l'index du tableau / on recupere l'index et on le supprime
       const objectArrayToDelete = arrayPanier.find(element => element._id === idObjectToDelete);
       const indexToDelete = arrayPanier.indexOf(objectArrayToDelete);
       arrayPanier.splice(indexToDelete, 1);
         //on sauvegarde et on actualise la page
       sauvegardeLocalStorage (arrayPanier);
       location.href = "./cart.html"
  }
)};
}
 // on execute la FUNCTION
 showPanier();