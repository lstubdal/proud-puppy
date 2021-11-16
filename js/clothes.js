/*import { products } from '/js/app.js';
import { setUpClothes } from '/js/app.js';

function setUpClothes() {
    const product_container = document.querySelector('.clothes__products');

    for (let index = 0; index < products.clothes.length; index++) {

        const product = document.createElement('div');                               
        const imgElement = document.createElement('img');                      
        const titleElement = document.createElement('h3');
        const descriptionElement = document.createElement('p');
        const priceElement = document.createElement('div');
        const buttonElement = document.createElement('button');

        product.className = 'clothes__product';
        imgElement.className = 'clothes__img';
        titleElement.className = 'clothes__title';
        descriptionElement.className = 'clothes__description';
        priceElement.className = 'clothes__price';
        buttonElement.className = 'clothes__add-to-bag';

        imgElement.src = products.clothes[index].file;
        titleElement.innerText = products.clothes[index].title;
        descriptionElement.innerText = products.clothes[index].description;
        priceElement.innerText = products.clothes[index].price + ' €';
        buttonElement.innerText = 'Add to bag';

        product.appendChild(imgElement);
        product.appendChild(titleElement);
        product.appendChild(descriptionElement);
        product.appendChild(priceElement);
        product.appendChild(buttonElement);

        product_container.appendChild(product); 
    }
}

setUpClothes();

/*const products = {
    clothes:[
        {title: 'Striped sweater', description: 'Soft cotton t-shirt', price: 9.90, file: 'assets/products/clothes/striped-shirt.png', quantity: 1},
        {title: 'Banana onsie', description: 'Cute and soft onsie', price: 12.50, file: 'assets/products/clothes/banana-onsie.png', quantity: 1},
        {title: 'Grey raincoat', description: 'Wind and waterproof', price: 20, file: 'assets/products/clothes/grey-jacket.png', quantity: 1},
        {title: 'Knittet turtleneck', description: 'Striped knittet onesie', price: 15.90, file: 'assets/products/clothes/knittet.png', quantity: 1},
        {title: 'White hoodie', description: 'Soft cotton hoodie', price: 11, file: 'assets/products/clothes/white-hoodie.png', quantity: 1},
        {title: 'White t-shirt', description: 'Soft cotton t-shirt', price: 9.90, file: 'assets/products/clothes/white-shirt.png', quantity: 1}
    ],
    accessories: [
        {title: 'Sunglasses', description: 'Vintage round glasses', price: 5.90, file: 'assets/products/accessories/sunglasses.png', quantity: 1},
        {title: 'Beanie', description: 'Orange beanie', price: 8.90, file: 'assets/products/accessories/beanie.png', quantity: 1},
        {title: 'Red bandana', description: 'Red cotton scarf', price: 3, file: 'assets/products/accessories/scarf.png', quantity: 1},
        {title: 'Batman costume', description: 'Nylon custome', price: 15, file: 'assets/products/accessories/batman.png', quantity: 1},
        {title: 'Red beret', description: 'Handmade beret', price: 8.90, file: 'assets/products/accessories/beret.png', quantity: 1},
        {title: 'elf costume', description: 'Christmas costume', price: 13, file: 'assets/products/accessories/elf.png', quantity: 1},
    ]
}

const bag = [];

function setUpClothes() {
    const product_container = document.querySelector('.clothes__products');

    for (let index = 0; index < products.clothes.length; index++) {

        const product = document.createElement('div');                               
        const imgElement = document.createElement('img');                      
        const titleElement = document.createElement('h3');
        const descriptionElement = document.createElement('p');
        const priceElement = document.createElement('div');
        const buttonElement = document.createElement('button');

        product.className = 'clothes__product';
        imgElement.className = 'clothes__img';
        titleElement.className = 'clothes__title';
        descriptionElement.className = 'clothes__description';
        priceElement.className = 'clothes__price';
        buttonElement.className = 'clothes__add-to-bag';

        imgElement.src = products.clothes[index].file;
        titleElement.innerText = products.clothes[index].title;
        descriptionElement.innerText = products.clothes[index].description;
        priceElement.innerText = products.clothes[index].price + ' €';
        buttonElement.innerText = 'Add to bag';

        product.appendChild(imgElement);
        product.appendChild(titleElement);
        product.appendChild(descriptionElement);
        product.appendChild(priceElement);
        product.appendChild(buttonElement);

        product_container.appendChild(product); 
    }
}
setUpClothes();




/**** EVENTLISTENERS ***
const back = document.querySelector('.clothes__arrow');
back.addEventListener('click', event => {
    window.location.href = 'index.html';
}) */ 