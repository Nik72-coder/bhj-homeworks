
let minus = document.getElementsByClassName('product__quantity-control_dec'); // кнопка уменьшения товара
let productQuantityValue = document.getElementsByClassName('product__quantity-value'); // количество товара для заказа

let plus = document.getElementsByClassName('product__quantity-control_inc'); // кнопка увеличения товара
let productAdd = document.getElementsByClassName('product__add'); // кнопка добавления товара в корзину
// let product = productAdd[0].closest('.product');
// console.log(product);
let cartProductCount = document.getElementsByClassName('cart__product-count');
cartProductCount = cartProductCount[0];
let productImage = document.getElementsByClassName('product__image'); // картинка товара для заказа


let cartProduct = document.getElementsByClassName('cart__product'); // добавленный в корзину товар
cartProduct = cartProduct[0];
let cartProducts = document.getElementsByClassName('cart__products'); // добавленный в корзину товар
cartProducts = cartProducts[0];


let cart = document.querySelector('.cart'); // Корзина с товарами
console.log(cart)

let cartElementCount = cart.querySelector('.cart__product-count');
let cartProductArray = []; // массив товаров в корзине
cartProduct.textContent = 'Корзина пуста';

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
let foundItem = 0;
for (let i = 0; i < productAdd.length; i++) {
    cartProduct.textContent = '';
    productAdd[i].addEventListener('click', () => {

        let product = productAdd[i].closest('.product');

        let productId = product.dataset.id;
        if (cartProductArray.length === 0) {
            cartProductArray.push(product);
            makeDiv(i);
        } else {

            for (let j = 0; j < cartProductArray.length; j++) {

                if (productId === cartProductArray[j].dataset.id) {
                    foundItem = 0;

                    foundItem += 1;

                }
                if (foundItem !== 0) {
                    cartElementCount.textContent = productQuantityValue.textContent;
                } else {
                    cartProductArray.push(product);

                }
            }
            makeDiv(i);
        }

    })
}
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


    // if (cartProductCount.textContent !== cartElement.count) {
    //     cartProductCount.textContent = productQuantityValue[i].textContent;
    // };

    cartProducts.appendChild(newDiv);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newCountDiv);
}