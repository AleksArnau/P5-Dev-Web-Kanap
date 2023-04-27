const zoneKanaps = document.getElementById("items");

//permet de créer les elements html du DOM
function displayProduct(product) {
  console.log(product);
  let a = document.createElement("a");
  a.setAttribute("href", `./product.html?id=${product._id}`);
  zoneKanaps.appendChild(a);

  let article = document.createElement("article");
  a.appendChild(article);

  let img = document.createElement("img");
  img.setAttribute("src", product.imageUrl);
  img.setAttribute("alt", product.altTxt);
  article.appendChild(img);

  let h3 = document.createElement("h3");
  h3.setAttribute("class", "productName");
  h3.innerText = product.name;
  article.appendChild(h3);

  let p = document.createElement("p");
  p.setAttribute("class", "productDescription");
  p.innerText = product.description;
  article.appendChild(p);
}

//Affichage du catalogue sur la page principale
fetch("http://localhost:3000/api/products/")
  .then((response) => response.json())
  .then((data) => {
    for (let product of data) {
      displayProduct(product);
    }
  })
  //Retour d'une erreur dans la console en cas de pb. lors du fetch
  .catch(function (err) {
    zoneKanaps.innerHTML = `<p > Une erreur s'est produite et le catalogue est indisponible, veuillez réessayer plus tard</p>`;
    console.log(err);
  });
