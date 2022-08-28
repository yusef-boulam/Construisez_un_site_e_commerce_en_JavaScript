const getCanap = async (url) => {

    const response = await fetch(url);

    if (response.status === 200) {
        return await response.json();
    }
    
    return -1

};


const postOrder = async (url, contact, arrayPanier) => {
    console.log ("contact", contact)
    console.log (arrayPanier)

    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(contact, arrayPanier)
    });


    // if (response.status === 201) {
    //     return await response.json();
    // }
    
    return -1

};
