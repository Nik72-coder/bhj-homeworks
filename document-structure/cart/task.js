
let minus = document.getElementsByClassName('product__quantity-control_dec'); // кнопка уменьшения товара
let productQuantityValue = document.getElementsByClassName('product__quantity-value'); // количество товара для заказа
let plus = document.getElementsByClassName('product__quantity-control_inc'); // кнопка увеличения товара
let productAdd = document.getElementsByClassName('product__add'); // кнопка добавления товара в корзину
let cartProductCount = document.getElementsByClassName('cart__product-count');
let productImage = document.getElementsByClassName('product__image'); // картинка товара для заказа
let cartProduct = document.getElementsByClassName('cart__product'); // добавленный в корзину товар
cartProduct = cartProduct[0];
let cartProducts = document.getElementsByClassName('cart__products'); // добавленный в корзину товар
cartProducts = cartProducts[0];
let cart = document.querySelector('.cart'); // Корзина с товарами
let cartElementCount = cart.querySelector('.cart__product-count');
let cartProductArray = []; // массив товаров в корзине
cartProductArray.push(cartProduct);
cartProductCount[0].textContent = 'Корзина пуста';

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', () => {
        let a = Number(productQuantityValue[i].textContent)
        if (a > 1) {
            productQuantityValue[i].textContent = Number(productQuantityValue[i].textContent) - 1;
        };
    });
};
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', () => {
        productQuantityValue[i].textContent = Number(productQuantityValue[i].textContent) + 1;
    });
};
let foundItem = 0;  // Переменная для определения, есть ли уже в корзине кликнутый товар
for (let i = 0; i < productAdd.length; i++) {
    productAdd[i].addEventListener('click', () => {
        let product = productAdd[i].closest('.product'); // Нашел кликнутый товар
        let productId = product.dataset.id; // Получил id кликнутого товара
        for (let j = 0; j < cartProductArray.length; j++) { // цикл для поиска кликнутого товара в корзине
            console.log(productId);  // контролирую кликнутый товар
            console.log(cartProductArray[j].dataset.id); // контролирую опрашиваемый товар в корзине при переборе
            console.log(cartProductArray);  // контролирую состав корзины, включен ли предыдущий кликнутый товар в корзину
            console.log(productId === cartProductArray[j].dataset.id); // контролирую условие в следующей строке
            if (productId === cartProductArray[j].dataset.id) { // проверка наличия по id кликнутого товара в корзине
                console.log('j - ', j) // контролирую процесс перебора
                foundItem += 1; // в случае, если в корзине уже есть товар, foundItem становится равным 1, он может принимать значения 0 или 1
            };
        };
        console.log('foundItem - ', foundItem);  // контролирую правильность определения программой наличия товара в корзине
        if (foundItem === 0) { // если товара в корзине нет,
            makeDiv(i);   // то он помещается в корзину,
            cartProductArray.push(product);  // и включается в массив корзины
        } else {
            foundItem = 0;
            cartProductCount[i].textContent = productQuantityValue[i].textContent; // иначе меняется только количество товара
        };
    });
};


function makeDiv(i) {
    let newDiv = document.createElement('div');
    newDiv.className = 'cart__product';
    newDiv.src = cart.src;
    let newCountDiv = document.createElement('div');
    newCountDiv.className = 'cart__product-count';
    newCountDiv.textContent = productQuantityValue[i].textContent;
    let newImg = document.createElement('img');
    newImg.className = 'cart__product-image';
    newImg.src = productImage[i].src;
    cartProducts.append(newDiv);
    newDiv.append(newImg);
    newDiv.append(newCountDiv);
};