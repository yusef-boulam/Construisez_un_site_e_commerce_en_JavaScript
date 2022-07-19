
//FONCTION qui charge le tableau depuis le local storage /////////////////////////////////////////////////////////////////////
const chargeArrayPanier = () => {
    const arrayPanier = JSON.parse(localStorage.arrayPanier);
    return arrayPanier
  }


//FONCTION remplit le panier ////////////////////////////////////////////////////////////
  const showPanier = async () => {
   // on initialise la variable
   let objetPanier = "";

   // on recupere le tableau dans le local storage
    let arrayPanier = chargeArrayPanier();
    console.log(arrayPanier);

  // on recupere les datas avec la FUNCTION getCanap
        let datas = await getCanap('http://localhost:3000/api/products');


    // /* on boucle avec la METHODE forEach sur chaque objet du datas 
    //    et on charge les valeurs dans canapCards  */
    //    arrayPanier.forEach(objet => {
    //     const objet = {
    //       constructor(idProduit, couleurProduit, quantiteProduit) {
    //         this.idProduit = idProduit; 
    //         this.idProduit = idProduit; 
    //         this.idProduit = idProduit; 
    //       }
    //     }
       
       
    //     const idProduit  = objet.idProduit 
    //     const couleurProduit  = objet.couleurProduit
    //     const quantiteProduit = objet.quantiteProduit

    //    });





       arrayPanier.forEach(objet => {
     ` <article class="cart__item" data-id= ${idProduit} data-color=${couleurProduit} >
       <div class="cart__item__img">
         <img src="../images/product01.jpg" alt="Photographie d'un canapé">
       </div>
       <div class="cart__item__content">
         <div class="cart__item__content__description">
           <h2>Nom du produit</h2>
           <p>Vert</p>
           <p>42,00 €</p>
         </div>
         <div class="cart__item__content__settings">
           <div class="cart__item__content__settings__quantity">
             <p>Qté : </p>
             <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
           </div>
           <div class="cart__item__content__settings__delete">
             <p class="deleteItem">Supprimer</p>
           </div>
         </div>
       </div>
     </article> `

          // on injecte les articles dans le code HTML
    document.getElementById("cart__items").innerHTML=objetPanier;

    })};

      // on execute la FUNCTION
      showPanier();