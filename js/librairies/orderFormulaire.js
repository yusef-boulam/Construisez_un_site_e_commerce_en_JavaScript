


const isValidRegex = (value, elementErrorMsg, messageAlert, regex) => {

// on teste la saisie avec une regex, on modifie le message d'erreur et on renvoi un booleen
if (regex.test(value) === false) {
    elementErrorMsg.innerHTML = `${messageAlert} n'est pas valide`;
    return false;
}
}

//on teste avec la fonction not empty que la saisie N EST PAS VIDE
const notEmpty = (value, elementErrorMsg, messageAlert) => {
    // La méthode trim() permet de retirer les blancs en début et fin de chaîne. 
    value = value.trim();
    console.log(value)
    // on vide la valeur erreur
    elementErrorMsg.innerHTML = "";
    // on verifie que la saisie n'est pas vide et on affiche le message d'erreur le cas écheant
    if (value === "") {
        elementErrorMsg.innerHTML = `${messageAlert} est obligatoire`;
        // on retourne true ou false pour permettre la validation du formulaire
        return false;
    }
    return true;
};



//on teste avec la fonction validName que la saisie soit valide
const validName = (value, elementErrorMsg, messageAlert) => {
    // on vide la valeur erreur
    elementErrorMsg.innerHTML = "";
    if (notEmpty(value, elementErrorMsg, messageAlert) === false) {
        return false;
    }
    if (isValidRegex(value, elementErrorMsg, messageAlert, /^[\w\s\áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\-]{1,50}$/)===false){
        return false;
    }
    return true;
}

//on teste la saisie de l'adresse
const validAdress = (value, elementErrorMsg, messageAlert) => {
    // on vide la valeur erreur
    elementErrorMsg.innerHTML = "";
    if (notEmpty(value, elementErrorMsg, messageAlert) === false) {
        return false;
    }
    if (isValidRegex(value, elementErrorMsg, messageAlert,/^[\pL\w\s\áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\-\,]{1,50}$/)===false){
        return false;
    }
    return true;
}


//on teste la saisie de l'adresse
const validCity = (value, elementErrorMsg, messageAlert) => {
    // on vide la valeur erreur
    elementErrorMsg.innerHTML = "";
    if (notEmpty(value, elementErrorMsg, messageAlert) === false) {
        return false;
    }
    if (isValidRegex(value, elementErrorMsg, messageAlert,/^[\pL\w\s\áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\-]{1,50}$/)===false){
        return false;
    }
    return true;
}

//on teste la saisie de l'adresse
const validEmail = (value, elementErrorMsg, messageAlert) => {
    // on vide la valeur erreur
    elementErrorMsg.innerHTML = "";
    if (notEmpty(value, elementErrorMsg, messageAlert) === false) {
        return false;
    }
    // const emailRegex = new RegExp('^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$', 'g');
 
    if (notEmpty(value, elementErrorMsg, messageAlert) === false) {
        return false;
    }
    if (isValidRegex(value, elementErrorMsg, messageAlert,/^[\w\áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\-\.]+@([\w-]+\.)+[\w-]{2,4}$/)===false){
        return false;
    }
    return true;
}

/////////////////////////////////////////////////////////////////////////////////////////////////

const firstName = () => {
    //on recupere la saisie et l'emplacement du message d'erreur
    const value = document.getElementById("firstName").value; 
    const elementErrorMsg = document.getElementById("firstNameErrorMsg")
    // on teste la saisie
    if (validName(value, elementErrorMsg, "le prénom")) {
        return true;
    }
    return false;
};

const lastName = () => {
    const value = document.getElementById("lastName").value;
    const elementErrorMsg = document.getElementById("lastNameErrorMsg")
    if (validName(value, elementErrorMsg, "le nom")) {
        return true;
    }
    return false;
};

const address = () => {
    const value = document.getElementById("address").value;
    const elementErrorMsg = document.getElementById("addressErrorMsg")

    if (validAdress(value, elementErrorMsg, "l'addresse")) {
        return true;
    } else {
        return false;
    }
};

const city = () => {
    const value = document.getElementById("city").value;
    const elementErrorMsg = document.getElementById("cityErrorMsg")

    if (validCity(value, elementErrorMsg, "la ville")) {
        return true;
    } else {
        return false;
    }
};

const email = () => {
    const value = document.getElementById("email").value;
    const elementErrorMsg = document.getElementById("emailErrorMsg")

    if (validEmail(value, elementErrorMsg, "l'email")) {
        return true;
    } else {
        return false;
    }
};




