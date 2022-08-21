

//on teste avec la fonction not empty que l'iput n"est pas vide
const notEmpty = (value, elementErrorMsg, messageAlert) => {
   
    value = value.trim();

    console.log(value)
  
    elementErrorMsg.innerHTML = "";

    if (value === "") {
        elementErrorMsg.innerHTML = `${messageAlert} est obligatoire`;
        return false;
    }
    return true;
};

//on teste avec la fonction validName que la saisie est valide
const validName = (value) =>{
    if (value === "") {
        elementErrorMsg.innerHTML = `${messageAlert} n'est pas valide`;
        return false;
    }
    return true;

}

//on recupere la saisie et l'emplacement du message d'erreur et on execute les fonctions de test
const firstName = () => {
    const value = document.getElementById("firstName").value;
    const elementErrorMsg = document.getElementById("firstNameErrorMsg")
    return notEmpty(value, elementErrorMsg, "le prénom");
}; 

const lastName = () => {
    const value = document.getElementById("firstName").value;
    const elementErrorMsg = document.getElementById("firstNameErrorMsg")
    return notEmpty("lastName", "lastNameErrorMsg", "le nom");
};

const address = () => {
    const value = document.getElementById("firstName").value;
    const elementErrorMsg = document.getElementById("firstNameErrorMsg")
    return notEmpty("address", "addressErrorMsg", "l'adresse");
};

const city = () => {
    const value = document.getElementById("firstName").value;
    const elementErrorMsg = document.getElementById("firstNameErrorMsg")
    return notEmpty("city", "cityErrorMsg", "la ville");

};

const email = () => {
    const value = document.getElementById("firstName").value;
    const elementErrorMsg = document.getElementById("firstNameErrorMsg")
    return notEmpty("email", "emailErrorMsg", "l'email");
};



