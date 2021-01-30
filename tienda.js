function buildProductCard (product){

    const htmlCard = `
    
        <div class="card">
        <h2 class="title">${product.name}</h2>
        <img src=${product.img}>
        <p class="description">${product.description}</p>
        <p class="price">${product.price}</p>
        <input type="button" value="Seleccionar" class="btnProduct" data-id="${product.id}">
        </div>
    `;

    return htmlCard;
}

function onSelectClick(event){
    const idProduct = event.target.dataset.id;

    let selectedProduct = product.find(function(product){
        if(product.id == idProduct){
            return (product);
        }
    });

    selectedProducts.push(selectedProduct);
    console.log(selectedProducts);
};

function buildCart(){
    selectedProducts.forEach(function(product){
    const card = buildProductCard(product);
    selectedContainer.innerHTML += card;
    });
};

let selectedProducts = [];

window.addEventListener('load', function(){

    // Cuando guardo esto en jquery, no se ejecuta correctamente el codigo en html, no se que mas 
    //tengo que cambiar del js para que funcione.
    const productContainer = $("productContainer");
    const selectedContainer = $("selectedContainer");

    product.forEach(function(product){
        if(product.enabled){
            const card = buildProductCard(product);
            productContainer.innerHTML += card;
        }
    });

    const btnProducts = document.querySelectorAll('.btnProduct');
    btnProducts.forEach(function(btnProduct){
       btnProduct.addEventListener('click', onSelectClick);

    })

});

