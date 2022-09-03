
//on crée une fonction qui recupere le numero de commande présent dans l'URL et on l'insere dans la page HTML

const showOrderId = () => {
    //on recupere url du produit
    const url = new URL(document.location.href);
    // on recupere l'id dans l'Url
    const orderid = url.searchParams.get("orderid");
     // on l'insere dans le HTML
  document.getElementById("orderId").innerHTML= orderid;
     // on vide le panier
     arrayPanier = [];
    sauvegardeLocalStorage(arrayPanier);
  }
  showOrderId();