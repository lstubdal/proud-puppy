const store = {
    products:[
        {title: 'Striped sweater', description: 'Soft cotton t-shirt', price: 9.90, file: 'assets/products/clothes/striped-shirt.png', quantity: 1, category: 'top'}, /* category attribute for search function */
        {title: 'Banana onsie', description: 'Cute and soft onsie', price: 12.50, file: 'assets/products/clothes/banana-onsie.png', quantity: 1, category: 'onsie'},
        {title: 'Grey raincoat', description: 'Wind and waterproof', price: 20, file: 'assets/products/clothes/grey-jacket.png', quantity: 1, category: 'jacket'},      
        {title: 'Knittet turtleneck', description: 'Striped knittet onesie', price: 15.90, file: 'assets/products/clothes/knittet.png', quantity: 1, category: 'onsie'},
        {title: 'White hoodie', description: 'Soft cotton hoodie', price: 11, file: 'assets/products/clothes/white-hoodie.png', quantity: 1, category: 'hoodie'},
        {title: 'White t-shirt', description: 'Soft cotton t-shirt', price: 9.90, file: 'assets/products/clothes/white-shirt.png', quantity: 1, category: 'top'},

        {title: 'Sunglasses', description: 'Vintage round glasses', price: 5.90, file: 'assets/products/accessories/sunglasses.png', quantity: 1, category: 'sunglasses'},
        {title: 'Beanie', description: 'Orange beanie', price: 8.90, file: 'assets/products/accessories/beanie.png', quantity: 1, category: 'hat'},
        {title: 'Red bandana', description: 'Red cotton scarf', price: 3, file: 'assets/products/accessories/scarf.png', quantity: 1, category: 'scarf'},
        {title: 'Batman costume', description: 'Nylon custome', price: 15, file: 'assets/products/accessories/batman.png', quantity: 1, category: 'costume'},
        {title: 'Dark sunglasses', description: 'Retro sunglasses', price: 6.90, file: 'assets/products/accessories/dark-sunglasses.png', quantity: 1, category: 'sunglasses'},
        {title: 'Santa hat', description: 'Christmas hat', price: 13, file: 'assets/products/accessories/christmas-hat.png', quantity: 1, category: 'hat'},
    ],

    shoppingbag: [],

    messages: [
        'Your shoppingbag is empty',
        'Sorry, could not find product'
    ]
}

function addToBag(event) {
    const title = event.target.id;  /* access id that triggered event */

    /* if product already exist, increase quantity; */
    store.shoppingbag.forEach((product, index) => {       
        if (product.title === title) {
            product.quantity += 1;
            store.shoppingbag.splice(index, 1);  
        }
    }) 

    store.products.forEach(product => {
        if (product.title === title) {
            store.shoppingbag.push(product);
        } 
    })

    updateShoppingbagView();
    updateTotalProducts();
}

function removeFromBag(event) {
    const index = event.target.id;
    const currentProductTitle = store.shoppingbag[index].title;

    store.shoppingbag.forEach(product => {
        if (currentProductTitle === product.title) {
            resetQuantityNumber(product)        /* reset quanrtity if product removed */
            store.shoppingbag.splice(index, 1);
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
            view.innerHTML++;       /* update quanitty view */
            store.shoppingbag[index].quantity++;        /* update quanitty in product */
        }
    })

    updateTotalPriceView();   
}

function decreaseQuantity(event) {
    const index = event.currentTarget.id;
    const quantityViews = document.querySelectorAll('.shoppingbag__quantity');
    
    [...quantityViews].forEach(view => {
        if (view.id === index) {
            if (view.innerHTML != 1) {       /* make sure quantity don't go below 1 */
                view.innerHTML--;
                store.shoppingbag[index].quantity--;
            }
        }
    })

    updateTotalPriceView();
}

function resetQuantityNumber(product) {
    if (product.quantity > 1 ) {         /* reset quantity if product removed */
        product.quantity = 1;           
    }
}

function totalProductsCart(){
    return store.shoppingbag.length;
}

function totalPrice() {
    let total = 0;

    store.shoppingbag.forEach(product => {
        let tempPrice = product.price * product.quantity;
        total += tempPrice;
    })

    totalRounded = Math.round(total * 100) / 100        /* limit price to one decimal */
    return totalRounded + ' €'
}

function setUpProducts() {
    const productContainerClothes = document.querySelector('.product__clothes');
    const productContainerAccessories = document.querySelector('.product__accessories');

    for (let index = 0; index < store.products.length; index++) {
        const product = document.createElement('div');                               
        const imgElement = document.createElement('img');                      
        const titleElement = document.createElement('h3');
        const descriptionElement = document.createElement('p');
        const priceElement = document.createElement('div');
        const buttonElement = document.createElement('button');

        product.className = 'product__item';
        imgElement.className = 'product__img';
        titleElement.className = 'product__title';
        descriptionElement.className = 'product__description';
        priceElement.className = 'product__price';
        buttonElement.className = 'product__add-to-bag';

        imgElement.src = store.products[index].file
        titleElement.innerText = store.products[index].title;
        descriptionElement.innerText = store.products[index].description;
        priceElement.innerText = store.products[index].price + ' €';
        buttonElement.innerText = 'Add to bag';
        buttonElement.id = store.products[index].title;        /* add ID to products for addToBag/removeFromBag function */

        product.appendChild(imgElement);
        product.appendChild(titleElement);
        product.appendChild(descriptionElement);
        product.appendChild(priceElement);
        product.appendChild(buttonElement);

        if (index <= 5) {                                              /* seperate clothes and acceccories on webside */
            productContainerClothes.appendChild(product); 
        
        } else {
            productContainerAccessories.appendChild(product)
        } 
    }
}

function updateShoppingbagView() {
    const shoppingbagContainer = document.querySelector('.shoppingbag__container');
    const shoppingbagProductContainer = document.querySelector('.shoppingbag__productContainer');

    shoppingbagProductContainer.innerHTML = '';    // to reset the cartview

    for (let index = 0; index < store.shoppingbag.length; index++) {
        console.log(store.shoppingbag.length)

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

        imgElement.src = store.shoppingbag[index].file;
        titleElement.innerText = store.shoppingbag[index].title;
        priceElement.innerText = store.shoppingbag[index].price + ' €';
        decreaseButton.innerText = '-';
        quantityElement.innerText = store.shoppingbag[index].quantity;
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

    if (store.shoppingbag.length === 0) {
        emptyAlert.style.display = 'block';
        emptyAlert.innerText = store.messages[0];
        totalPrice.style.display = 'none';
    } else {
        emptyAlert.style.display = 'none';
        totalPrice.style.display = 'block';
    }

    updateShoppingbagView();
}

function changeHeaderColor() {
    const header = document.querySelector('.header--frontpage');
    if (window.scrollY > 550) {
        header.style.backgroundColor = '#f1ebde';
    } 

    if (window.scrollY < 550) {
        header.style.backgroundColor = 'none';
    }
}

function searchProducts() {     /* bug fix -> don't work again after wrong search */
    const productContainer = document.querySelector('.search__productContainer');
    
    const input = document.querySelector('.search__input').value        /* get input text from user */

    const searchProducts = []                                       

    for (let index = 0; index < store.products.length; index++) {       /*  add users productsearch if match, then add to list */
        if (input === store.products[index].title || input === store.products[index].category) {
            product = store.products[index];
            searchProducts.push(product); 
        } 
    }

    if (searchProducts.length === 0) {
        productContainer.className = 'search__message';
        productContainer.innerText = store.messages[1];
    
    } else {
        searchProducts.forEach(product => {
            showSearchProduct(product, productContainer)        /* show products that matches users search */
        })
    }
}

function showSearchProduct(product, productContainer) {
    const productCard = document.createElement('div');
    productCard.className = 'search__productCard';

    const img = document.createElement('img');
    const title = document.createElement('p');
    const description = document.createElement('p');
    const category = document.createElement('p');

    img.src = product.file;
    title.innerText = product.title;
    description.innerText = product.description;
    category.innerText = product.category;

    img.className = 'search__img';
    title.className = 'search__title';
    description.className = 'search__description';
    category.className = 'search__category';

    productCard.appendChild(img);
    productCard.appendChild(title);
    productCard.appendChild(description);
    productCard.appendChild(category)

    productContainer.appendChild(productCard);
}

function displaySearchSidebar() {
    const sidebar = document.querySelector('.search__sidebar');

    if (sidebar.style.visibility === 'visible') {
        sidebar.style.visibility = 'hidden';
    } else {
        sidebar.style.visibility = 'visible';
    }

}

setUpProducts()

/*********** EVENT LISTENERS ***********/

/* shoppingbag */
const shoppingbagButton = document.querySelector('.header__shoppingbag');
shoppingbagButton.addEventListener('click', displayShoppingbag);

/* add to bag */
const clothesButtons = document.querySelectorAll('.product__add-to-bag');

[...clothesButtons].forEach(button => {
    button.addEventListener('click', addToBag);
});

/* show search sidebar */
const searchSidebar = document.querySelector('.search__icon');
searchSidebar.addEventListener('click', displaySearchSidebar);

/* return search sidebar */
const returnSidebar = document.querySelector('.search__back');
returnSidebar.addEventListener('click', displaySearchSidebar)

/* search products */
const searchButton = document.querySelector('.search__button');
searchButton.addEventListener('click', searchProducts);

/* scroll listener */
window.addEventListener('scroll', changeHeaderColor);
