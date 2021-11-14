const products = {
    clothes:[
        {title: 'Striped sweater', description: 'Soft cotton t-shirt', price: 9.90, file: 'assets/img/products/clothes/striped-shirt.png', quantity: 1},
        {title: 'Banana onsie', description: 'Cute and soft onsie', price: 12.50, file: 'assets/img/products/clothes/banana-onsie.png', quantity: 1},
        {title: 'Grey raincoat', description: 'Wind and waterproof', price: 20, file: 'assets/img/products/clothes/grey-jacket.png', quantity: 1},
        {title: 'Knittet turtleneck', description: 'Striped knittet onesie', price: 15.90, file: 'assets/img/products/clothes/knittet.png', quantity: 1},
        {title: 'White hoodie', description: 'Soft cotton hoodie', price: 11, file: 'assets/img/products/clothes/white-hoodie.png', quantity: 1},
        {title: 'White t-shirt', description: 'Soft cotton t-shirt', price: 9.90, file: 'assets/img/products/clothes/white-shirt.png', quantity: 1}
    ] 
}
const cart = [];

function setUpProducts() {
    const product_container = document.querySelector('.clothes__products');
    console.log('length list:',  products.clothes.length);

    for (let index = 0; index < products.clothes.length; index++) {
        console.log('hallo');
        
        const product = document.createElement('div');
        const imgElement = document.createElement('img');                      
        const titleElement = document.createElement('h3');
        const descriptionElement = document.createElement('p');
        const priceElement = document.createElement('div');

        product.className = 'clothes__product';
        imgElement.className = 'clothes__img';
        titleElement.className = 'clothes__title';
        descriptionElement.className = 'clothes__description';
        priceElement.className = 'clothes__price';

        imgElement.src = products.clothes[index].file;
        titleElement.innerText = products.clothes[index].title;
        descriptionElement.innerText = products.clothes[index].description;
        priceElement.innerText = products.clothes[index].price + ' €';

        product.appendChild(imgElement);
        product.appendChild(titleElement);
        product.appendChild(descriptionElement);
        product.appendChild(priceElement);

        product_container.appendChild(product); 
    }
}

setUpProducts();

/**** EVENTLISTENERS ****/
const back = document.querySelector('.clothes__arrow');
back.addEventListener('click', event => {
    window.location.href = 'index.html';
})