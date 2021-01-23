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

// funcion para generar el evento en cada boton y que me devuelva el array del producto seleccionado

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

    const productContainer = document.getElementById('productContainer');
    const selectedContainer = document.getElementById('selectedContainer');

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

