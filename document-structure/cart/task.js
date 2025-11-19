
let minus = document.getElementsByClassName('product__quantity-control_dec'); // кнопка уменьшения товара
let productQuantityValue = document.getElementsByClassName('product__quantity-value'); // количество товара для заказа
let plus = document.getElementsByClassName('product__quantity-control_inc'); // кнопка увеличения товара
let productAdd = document.getElementsByClassName('product__add'); // кнопка добавления товара в корзину
let product = document.getElementsByClassName('product'); // карточка товара

let productTitle = document.getElementsByClassName('product__title'); // HTML-collection наименований товара
let cartProductCount = document.getElementsByClassName('cart__product-count');
cartProductCount = cartProductCount[0];                  // индикатор количества товара в корзине
let cartProductImage = document.getElementsByClassName('cart__product-image'); // картинка товара в корзине
cartProductImage = cartProductImage[0];
let productImage = document.getElementsByClassName('product__image'); // картинка товара для заказа
let productId = [];                                            // массив артикулов товаров
for (let i = 0; i < product.length; i++) {
    productId.push(product[i].dataset.id);
}

let cartProductArray = []; // массив артикулов товаров в корзине
let cartProduct = document.getElementsByClassName('cart__product'); // добавленный в корзину товар
cartProduct = cartProduct[0];
let cartProducts = document.getElementsByClassName('cart__products'); // добавленный в корзину товар
cartProducts = cartProducts[0];
let cartProductObject = { name: 'товар', id: 1, src: '' }; // объект товара в корзине

cartProduct.textContent = 'Заказов нет';
let cartProductObjectArray = []; // массив товаров(объектов) в корзине


for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', () => {
        let a = Number(productQuantityValue[i].textContent)
        if (a > 0) {
            productQuantityValue[i].textContent = Number(productQuantityValue[i].textContent) - 1;
        };
    });
};
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', () => {
        productQuantityValue[i].textContent = Number(productQuantityValue[i].textContent) + 1;
    });
};


for (let i = 0; i < productAdd.length; i++) {
    productAdd[i].addEventListener('click', () => {
        cartProduct.remove();
        makeObject(i);
        makeDiv(i);
    });
};

function makeObject(i) {
    let cartProductObject = {};
    cartProductObject.id = product[i].getAttribute('data-id');
    cartProductObject.name = product[i].textContent;
    cartProductObject.src = productImage[i].getAttribute('src');

    cartProductObjectArray.push(cartProductObject)
}

function makeDiv(i) {
    let newDiv = document.createElement('div');
    newDiv.className = 'cart__product';
    newDiv.src = productImage[i].getAttribute('src');
    newDiv.textContent = productTitle[i].textContent;

    let newcountDiv = document.createElement('div');
    newcountDiv.className = 'cart__product-count';
    newcountDiv.textContent = productQuantityValue[i].textContent;

    let newImg = document.createElement('img');
    newImg.className = 'cart__product-image';
    newImg.src = productImage[i].currentSrc;

    if(cartProductCount.textContent !== productQuantityValue[i].textContent) {
        cartProductCount.textContent = productQuantityValue[i].textContent;
    };

    cartProducts.appendChild(newDiv);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newcountDiv);
}