

// //on teste avec la fonction not empty que la saisie N EST PAS VIDE
// const notEmpty = (value, elementErrorMsg, messageAlert) => {
//     // La méthode trim() permet de retirer les blancs en début et fin de chaîne. 
//     value = value.trim();
//     console.log(value)
//  // on vide la valeur erreur
//     elementErrorMsg.innerHTML = "";
//  // on verifie que la saisie n'est pas vide et on affiche le message d'erreur le cas écheant
//     if (value === "") {
//         elementErrorMsg.innerHTML = `${messageAlert} est obligatoire`;
//          // on retourne true ou false pour permettre la validation du formulaire
//         return false;
//     }
//     return true;
// };

//on teste avec la fonction validName que la saisie soit valise
const validName = (value, elementErrorMsg, messageAlert) =>{
      // La méthode trim() permet de retirer les blancs en début et fin de chaîne. 
     value = value.trim();
   // on crée la Regex
   let nameRegex = new RegExp('^[a-zA-Z0-9]{1,50}$','g');
   // on teste la saisie et on modifie le message d'erreur
   if (value === "") {
    elementErrorMsg.innerHTML = `${messageAlert} est obligatoire`;
    return false;
   }
   else if (nameRegex.test(value)) {
   return true;
   }else{
    elementErrorMsg.innerHTML = `${messageAlert} n'est pas valide`;
    return false;
   } 

}

//on teste avec la fonction validName que la saisie soit valise
const validAdress = (value, elementErrorMsg, messageAlert) =>{
    let adresseRegex = new RegExp('^[a-zA-Z0-9.-]{1,50}$','g');
    if (adresseRegex.test(value)) {
        return true;
    }
    elementErrorMsg.innerHTML = `${messageAlert} n'est pas valide`;
    return false;
}

//on recupere la saisie et l'emplacement du message d'erreur et on execute les fonctions de test
const firstName = () => {
    const value = document.getElementById("firstName").value;
    const elementErrorMsg = document.getElementById("firstNameErrorMsg")
    // On execute les fonctions et on les stocke dans des constantes.
    const testValidName = validName(value, elementErrorMsg, "le prénom");
    if (testValidName){
     return true;
    } else {
     return false;
    }
}; 

const lastName = () => {
    const value = document.getElementById("lastName").value;
    const elementErrorMsg = document.getElementById("lastNameErrorMsg")
    // On execute les fonctions et on les stocke dans des constantes.
    // const testNotEmpty = notEmpty(value, elementErrorMsg, "le nom");
    const testValidName = validName(value, elementErrorMsg, "le nom");
   // On controle que toutes les infos de firstName sont valides
    if (testValidName){
     return true;
    } else {
     return false;
    }
}; 

const address = () => {
    const value = document.getElementById("address").value;
    const elementErrorMsg = document.getElementById("addressErrorMsg")
    // On execute les fonctions et on les stocke dans des constantes.
    // const testNotEmpty = notEmpty(value, elementErrorMsg, "l'addresse");
    const testValidAdress = validAdress(value, elementErrorMsg, "l'addresse");
   // On controle que toutes les infos de firstName sont valides
    if (testValidAdress){
     return true;
    } else {
     return false;
    }
}; 

const city = () => {
    const value = document.getElementById("city").value;
    const elementErrorMsg = document.getElementById("cityErrorMsg")
    // On execute les fonctions et on les stocke dans des constantes.
    // const testNotEmpty = notEmpty(value, elementErrorMsg, "la ville");
    const testvalidCity = validCity(value, elementErrorMsg, "la ville");
   // On controle que toutes les infos de firstName sont valides
    if (testvalidCity){
     return true;
    } else {
     return false;
    }
}; 

const email = () => {
    const value = document.getElementById("email").value;
    const elementErrorMsg = document.getElementById("emailErrorMsg")
    // On execute les fonctions et on les stocke dans des constantes.
    // const testNotEmpty = notEmpty(value, elementErrorMsg, "l'email");
    const testvalidEmail = validEmail(value, elementErrorMsg, "l'email");
   // On controle que toutes les infos de firstName sont valides
    if (testvalidEmail){
     return true;
    } else {
     return false;
    }

}; 

