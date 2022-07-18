console.log(localStorage)

//FONCTION qui charge le tableau depuis le local storage 
const chargeArrayPanier = () => { 
    const arrayPanier = JSON.parse(localStorage.arrayPanier);
     return arrayPanier
  }