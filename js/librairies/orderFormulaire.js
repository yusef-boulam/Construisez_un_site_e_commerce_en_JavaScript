
const notEmpty = (element) => {
    let value = document.getElementById(`${element}`).value;
    value = value.trim();
    console.log(value)
    const errorMsg = document.getElementById(`${elementErrorMsg}`)
    errorMsg.innerHTML = "";

    if (value === "") {
        errorMsg.innerHTML = "Le prénom est obligatoire";
        return false;
    }
    return true;
};

const firstName = () => {
    return notEmpty(firstName, firstNameErrorMsg);
}; 

const lastName = () => {
    return notEmpty(lastName, lastNameErrorMsg);
    // let value = document.getElementById("lastName").value;
    // value = value.trim();
    // console.log(value)
    // const lastNameErrorMsg = document.getElementById("lastNameErrorMsg")
    // lastNameErrorMsg.innerHTML = "";

    // if (value === "") {
    //     lastNameErrorMsg.innerHTML = "Le nom est obligatoire";
    //     return false;
    // }
    // return true;
};

const address = () => {
    // const value = document.getElementById("address").value;
    // console.log(value)
    // return true;
};

const city = () => {
    // const value = document.getElementById("city").value;
    // console.log(value)
    // return true;
};

const email = () => {
    // const value = document.getElementById("email").value;
    // console.log(value)
    // return true;
};



