const getCanap = async (url) => {

    const response = await fetch(url);

    if (response.status === 200) {
        return await response.json();
    }
    
    return -1

};
