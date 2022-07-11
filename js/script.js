// creation des const modificatives  
let ChangeElementId = "";
let ChangeElementImg = "";
let ChangeElementH3 = "";
let ChangeElementP = "";



const creationFicheProduit = () => {

  // creation de l'élement <a>
  const newElementLienA = document.createElement("a");
  document.getElementById("items")
    .appendChild(newElementLienA)
    .setAttribute('href', urlElementA);
    newElementLienA.setAttribute('id', ChangeElementId);

  // creation de l'élement <article>
  const newElementArticle = document.createElement("article");
    newElementLienA
    .appendChild(newElementArticle);

  // creation de l'élement <Img>
  const newElementImg = document.createElement("img");
    newElementArticle
    .appendChild(newElementImg)
    .setAttribute("src", ChangeElementImg);
    newElementImg.setAttribute('alt', 'Lorem ipsum dolor sit amet, Kanap name1');

  // creation de l'élement <h3>
  const newElementH3 = document.createElement("h3");
   newElementArticle
    .appendChild(newElementH3)
    .innerHTML = ChangeElementH3;
    newElementH3.classList.add("productName");

  // creation de l'élement <p>
  const newElementP = document.createElement("p");
    newElementArticle
    .appendChild(newElementP)
    .innerHTML = ChangeElementP;
    newElementP.classList.add("productDescription");
};


fetch('http://localhost:3000/api/products')
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {

    console.log(value);
   // initialise numberIndex pour la boucle 
   let numberIndex = 0;
   
   for (let item of value) {
      // recuperation des données dans l API  
        ChangeElementId = value[numberIndex]._id;
        ChangeElementImg = value[numberIndex].imageUrl;
        ChangeElementH3 = value[numberIndex].name;
        ChangeElementP = value[numberIndex].description;
  
       // injecte l'id dans l'url du <a> en utilisant la propriété hash de URL
       urlElementA =`http://127.0.0.1:5500/front/html/product.html#${ChangeElementId}`;
      
       // incremente pour faire fonctionner la boucle
        ++numberIndex;
      
        // execute la fonction en injectant les données de l'API
        creationFicheProduit();    
   }


  })
  .catch(function (err) {
    // Une erreur est survenue
  });



