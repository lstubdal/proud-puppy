const products = {
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
        {title: 'Dark sunglasses', description: 'Retro sunglasses', price: 6.90, file: 'assets/products/accessories/dark-sunglasses.png', quantity: 1},
        {title: 'Santa hat', description: 'Christmas hat', price: 13, file: 'assets/products/accessories/christmas-hat.png', quantity: 1},
    ]
}

const shoppingbag = [];

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

function setUpAccessories() {
    const product_container = document.querySelector('.accessories__products');

    for (let index = 0; index < products.accessories.length; index++) {

        const product = document.createElement('div');                               
        const img_element = document.createElement('img');                      
        const title_element = document.createElement('h3');
        const description_element = document.createElement('p');
        const price_element = document.createElement('div');
        const button_element = document.createElement('button');

        product.className = 'accessories__product';
        img_element.className = 'accessories__img';
        title_element.className = 'accessories__title';
        description_element.className = 'accessories__description';
        price_element.className = 'accessories__price';
        button_element.className = 'accessories__add-to-bag';

        img_element.src = products.accessories[index].file;
        title_element.innerText = products.accessories[index].title;
        description_element.innerText = products.accessories[index].description;
        price_element.innerText = products.accessories[index].price + ' €';
        button_element.innerText = 'Add to bag';

        product.appendChild(img_element);
        product.appendChild(title_element);
        product.appendChild(description_element);
        product.appendChild(price_element);
        product.appendChild(button_element);

        product_container.appendChild(product); 
    }
}

function displayShoppingbag() {
    const shoppingbag_display = document.querySelector('.shoppingbag--display');

    if (shoppingbag_display.style.display === 'none') {
        shoppingbag_display.style.display = 'block';
    } else {
        shoppingbag_display.style.display = 'none';
    }

}

setUpClothes();
setUpAccessories();


/*********** EVENT LISTENERS ***********/

/* shoppingbag */
const shoppingbag_button = document.querySelector('.header__shoppingbag');
shoppingbag_button.addEventListener('click', displayShoppingbag);

/* 
    1. header color when scrolling
    2. add to bag
    3. arrow down animation
    4. shoppingbag page
    5. when scroll hightlight page
    6. back to top
    7. hover over product: layover and big card

*/
