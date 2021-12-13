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

function addToBag(event) {
    const title = event.target.id;  

    // if product already exist, increase quantity;
    shoppingbag.forEach((product, index) => {       
        if (product.title === title) {
            product.quantity += 1;
            shoppingbag.splice(index, 1);  
        }
    }) 

    // add clothes 
    products.clothes.forEach(product => {
        if (product.title === title) {
            shoppingbag.push(product);
        } 
    })

    // add accessories
    products.accessories.forEach(product => {
        if (product.title === title) {
            shoppingbag.push(product);
        } 
    })

    updateShoppingbagView();
    updateTotalProducts();
}

function removeFromBag(event) {
    const index = event.target.id;
    const currentProductTitle = shoppingbag[index].title;

    shoppingbag.forEach(product => {
        if (currentProductTitle === product.title) {
            resetQuantityNumber(product)
            shoppingbag.splice(index, 1);
        } 
    })

    emptyShoppingbagalert();
    updateShoppingbagView();
    updateTotalProducts();
    updateTotalPriceView();
}

function increaseQuantity(event) {
    const index = event.currentTarget.id;
    const quantityViews = document.querySelectorAll('.shoppingbag__quantity');
    
    [...quantityViews].forEach(view => {
        if (view.id === index) {
            view.innerHTML++;
            shoppingbag[index].quantity++;
        }
    })

    updateTotalPriceView();   
}

function decreaseQuantity(event) {
    const index = event.currentTarget.id;
    const quantityViews = document.querySelectorAll('.shoppingbag__quantity');
    
    [...quantityViews].forEach(view => {
        if (view.id === index) {
            if (view.innerHTML != 1) {      // make sure quantity don't go below 1
                view.innerHTML--;
                shoppingbag[index].quantity--;
            }
        }
    })

    updateTotalPriceView();
}

function resetQuantityNumber(product) {
    if (product.quantity > 1 ) {        // reset quantity if product removed
        product.quantity = 1;           
    }
}

function totalProductsCart(){
    return shoppingbag.length;
}

function totalPrice() {
    let total = 0;

    shoppingbag.forEach(product => {
        let tempPrice = product.price * product.quantity;
        total += tempPrice;
    })

    totalRounded = Math.round(total * 100) / 100

    return totalRounded + ' €'
}

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
        buttonElement.id = products.clothes[index].title;       // add ID to products for addToBag/removeFromBag function

        product.appendChild(imgElement);
        product.appendChild(titleElement);
        product.appendChild(descriptionElement);
        product.appendChild(priceElement);
        product.appendChild(buttonElement);

        product_container.appendChild(product); 
    }
}

function setUpAccessories() {
    
    const productContainer = document.querySelector('.accessories__products');

    for (let index = 0; index < products.accessories.length; index++) {

        const product = document.createElement('div');                               
        const imgElement = document.createElement('img');                      
        const titleElement = document.createElement('h3');
        const descriptionElement = document.createElement('p');
        const priceElement = document.createElement('div');
        const buttonElement = document.createElement('button');

        product.className = 'accessories__product';
        imgElement.className = 'accessories__img';
        titleElement.className = 'accessories__title';
        descriptionElement.className = 'accessories__description';
        priceElement.className = 'accessories__price';
        buttonElement.className = 'accessories__add-to-bag';

        imgElement.src = products.accessories[index].file;
        titleElement.innerText = products.accessories[index].title;
        descriptionElement.innerText = products.accessories[index].description;
        priceElement.innerText = products.accessories[index].price + ' €';
        buttonElement.innerText = 'Add to bag';
        buttonElement.id = products.accessories[index].title;

        product.appendChild(imgElement);
        product.appendChild(titleElement);
        product.appendChild(descriptionElement);
        product.appendChild(priceElement);
        product.appendChild(buttonElement);

        productContainer.appendChild(product); 
    }
}

function updateShoppingbagView() {

    const shoppingbagContainer = document.querySelector('.shoppingbag__container');
    const shoppingbagProductContainer = document.querySelector('.shoppingbag__productContainer');

    shoppingbagProductContainer.innerHTML = '';    // to reset the cartview

    for (let index = 0; index < shoppingbag.length; index++) {
        console.log(shoppingbag.length)

        const product = document.createElement('div');      // create container for product 
        product.className = 'shoppingbag__product'; 

        const imgElement = document.createElement('img');
        const titleElement = document.createElement('h4');
        const priceElement = document.createElement('p');
        const removeButton = document.createElement('button');

        const quantityContainer = document.createElement('div');
        const decreaseButton = document.createElement('button');
        const quantityElement = document.createElement('div');
        const increaseButton = document.createElement('button');

        imgElement.className = 'shoppingbag__img';
        titleElement.className = 'shoppingbag__title';
        priceElement.className = 'shoppingbag__price';
        removeButton.className = 'shoppingbag__remove';
        quantityContainer.className = 'shoppingbag__quantityContainer';
        quantityElement.className = 'shoppingbag__quantity';
        decreaseButton.className = 'shoppingbag__decrease';
        increaseButton.className = 'shoppingbag__increase';

        imgElement.src = shoppingbag[index].file;
        titleElement.innerText = shoppingbag[index].title;
        priceElement.innerText = shoppingbag[index].price + ' €';
        decreaseButton.innerText = '-';
        quantityElement.innerText = shoppingbag[index].quantity;
        increaseButton.innerText = '+';
        increaseButton.id = index
        removeButton.innerText = 'Remove';
        
        decreaseButton.id = index;
        quantityElement.id = index;
        removeButton.id = index;
        increaseButton.id = index
        
        quantityContainer.appendChild(decreaseButton);
        quantityContainer.appendChild(quantityElement);
        quantityContainer.appendChild(increaseButton);

        product.appendChild(imgElement);
        product.appendChild(titleElement);
        product.appendChild(priceElement);
        product.appendChild(quantityContainer);
        product.appendChild(removeButton);

        shoppingbagProductContainer.appendChild(product)
        shoppingbagContainer.appendChild(shoppingbagProductContainer);

        // adjust quantity butttons
        const increaseButtons = document.querySelectorAll('.shoppingbag__increase');
        const decreaseButtons = document.querySelectorAll('.shoppingbag__decrease');

        [...increaseButtons].forEach(button => {
            button.addEventListener('click', increaseQuantity);
        });

        [...decreaseButtons].forEach(button => {
            button.addEventListener('click', decreaseQuantity);
        });

        // remove button
        const removeButtons = document.querySelectorAll('.shoppingbag__remove');
        [...removeButtons].forEach(button => {
            button.addEventListener('click', removeFromBag);
        })

        updateTotalPriceView();
    }
}

function displayShoppingbag() {
    const shoppingbagDisplay = document.querySelector('.shoppingbag--display');

    emptyShoppingbagalert();

    if (shoppingbagDisplay.style.visibility === 'visible') {
        shoppingbagDisplay.style.visibility = 'hidden';
    } else {
        shoppingbagDisplay.style.visibility = 'visible';
    }
}

function updateTotalPriceView() {
    const total = document.querySelector('.shoppingbag__total');
    total.innerText = totalPrice();
}

function updateTotalProducts() {
    const totalProductsContainer = document.querySelector('.header__totalProducts');
    
    if (totalProductsCart() === 0) {
        totalProductsContainer.style.visibility = 'hidden';
    } else {
        totalProductsContainer.style.visibility = 'visible';
        totalProductsContainer.innerHTML = totalProductsCart();
    }
}

function emptyShoppingbagalert() {
    const totalPrice = document.querySelector('.shoppingbag__totalContainer');
    const emptyAlert = document.querySelector('.shoppingbag__emptyAlert');

    if (shoppingbag.length === 0) {
        emptyAlert.style.display = 'block';
        totalPrice.style.display = 'none';
    } else {
        emptyAlert.style.display = 'none';
        totalPrice.style.display = 'block';
    }

    updateShoppingbagView();
}


setUpClothes();
setUpAccessories();

/*********** EVENT LISTENERS ***********/

/* shoppingbag */
const shoppingbagButton = document.querySelector('.header__shoppingbag');
shoppingbagButton.addEventListener('click', displayShoppingbag);

/* add to bag */
const clothesButtons = document.querySelectorAll('.clothes__add-to-bag');
const accessoriesButtons = document.querySelectorAll('.accessories__add-to-bag');

[...clothesButtons].forEach(button => {
    button.addEventListener('click', addToBag);
});

[...accessoriesButtons].forEach(button => {
    button.addEventListener('click', addToBag);
})





/* 
         quantity to do:
         - counts everyone at the same time
         - does not update total price
 

    5. when scroll hightlight page
    6. back to top
    7. hover over product: layover and big card
    8. total price when empty - bug
    9. empty cart alert 

    10. no count total products after 0 bug

*/
