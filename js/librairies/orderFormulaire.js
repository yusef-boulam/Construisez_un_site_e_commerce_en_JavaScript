
//on teste avec la fonction validName que la saisie soit valide
const validName = (value, elementErrorMsg, messageAlert) =>{
   // on vide la valeur erreur
    elementErrorMsg.innerHTML = "";
   // on crée la Regex
   let nameRegex = new RegExp('^[a-zA-Z0-9]{1,50}$','g');
   // on teste la saisie, on modifie le message d'erreur et on renvoi un booleen
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

//on teste la saisie de l'adresse
const validAdress = (value, elementErrorMsg, messageAlert) =>{
    // on vide la valeur erreur
    elementErrorMsg.innerHTML = "";
    let adresseRegex = new RegExp('^[a-zA-Z0-9.-/s]{1,50}$','g');
    if (value === "") {
        elementErrorMsg.innerHTML = `${messageAlert} est obligatoire`;
        return false;
       }
       else if (adresseRegex.test(value)) {
        return true;
       }else{
        elementErrorMsg.innerHTML = `${messageAlert} n'est pas valide`;
        return false;
       } 
    }


//on teste la saisie de l'adresse
const validCity = (value, elementErrorMsg, messageAlert) =>{
    // on vide la valeur erreur
    elementErrorMsg.innerHTML = "";
    let cityRegex = new RegExp('^[a-zA-Z0-9.-]{1,50}$','g');
    if (value === "") {
        elementErrorMsg.innerHTML = `${messageAlert} est obligatoire`;
        return false;
       }
       else if (cityRegex.test(value)) {
        return true;
       }else{
        elementErrorMsg.innerHTML = `${messageAlert} n'est pas valide`;
        return false;
       } 
    }

//on teste la saisie de l'adresse
const validEmail = (value, elementErrorMsg, messageAlert) =>{
    // on vide la valeur erreur
    elementErrorMsg.innerHTML = "";
    let emailRegex = new RegExp("^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}+[a-z]{2,4}$","g");
    if (value === "") {
        elementErrorMsg.innerHTML = `${messageAlert} est obligatoire`;
        return false;
       }
       else if (emailRegex.test(value)) {
        return true;
       }else{
        elementErrorMsg.innerHTML = `${messageAlert} n'est pas valide`;
        return false;
       } 
    }


/////////////////////////////////////////////////////////////////////////////////////////////////

const firstName = () => {
    //on recupere la saisie et l'emplacement du message d'erreur
    const value = document.getElementById("firstName").value.trim(); // La méthode trim() permet de retirer les blancs en début et fin de chaîne. 
    const elementErrorMsg = document.getElementById("firstNameErrorMsg")
    // on teste la saisie
    if (validName(value, elementErrorMsg, "le prénom")){
     return true;
    }
     return false;
}; 

const lastName = () => {
    const value = document.getElementById("lastName").value.trim();
    const elementErrorMsg = document.getElementById("lastNameErrorMsg")
    if (validName(value, elementErrorMsg, "le nom")){
     return true;
    } 
     return false;
}; 

const address = () => {
     const value = document.getElementById("address").value.trim();
    const elementErrorMsg = document.getElementById("addressErrorMsg")
    
    if (validAdress(value, elementErrorMsg, "l'addresse")){
     return true;
    } else {
     return false;
    }
}; 

const city = () => {
    const value = document.getElementById("city").value.trim();
    const elementErrorMsg = document.getElementById("cityErrorMsg")
    
    if (validCity(value, elementErrorMsg, "la")){
     return true;
    } else {
     return false;
    }
}; 

const email = () => {
    const value = document.getElementById("email").value.trim();
    const elementErrorMsg = document.getElementById("emailErrorMsg")
    
    if (validEmail(value, elementErrorMsg, "l'email")){
     return true;
    } else {
     return false;
    }
}; 






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
