
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

const validName = (value) =>{
   

}


const firstName = () => {
    const value = document.getElementById("firstName").value;
    const elementErrorMsg = document.getElementById("firstNameErrorMsg")
    return notEmpty(value, elementErrorMsg, "le prénom");
}; 

const lastName = () => {
    return notEmpty("lastName", "lastNameErrorMsg", "le nom");
};

const address = () => {
    return notEmpty("address", "addressErrorMsg", "l'adresse");
};

const city = () => {
    return notEmpty("city", "cityErrorMsg", "la ville");

};

const email = () => {
    return notEmpty("email", "emailErrorMsg", "l'email");
};



