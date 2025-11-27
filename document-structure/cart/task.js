
let minus = document.getElementsByClassName('product__quantity-control_dec'); // кнопка уменьшения товара
let productQuantityValue = document.getElementsByClassName('product__quantity-value'); // количество товара для заказа

let plus = document.getElementsByClassName('product__quantity-control_inc'); // кнопка увеличения товара
let productAdd = document.getElementsByClassName('product__add'); // кнопка добавления товара в корзину


let product = document.getElementsByClassName('product'); // HTMLCollection карточек товара
let productTitle = document.getElementsByClassName('product__title'); // HTMLcollection наименований товара


let cartProductCount = document.getElementsByClassName('cart__product-count');
cartProductCount = cartProductCount[0];                  // индикатор количества товара в корзине

let cartProductImage = document.getElementsByClassName('cart__product-image'); // картинка товара в корзине
cartProductImage = cartProductImage[0];
let productImage = document.getElementsByClassName('product__image'); // картинка товара для заказа


let productId = [];                                            // массив артикулов товаров
for (let i = 0; i < product.length; i++) {
    productId.push(product[i].dataset.id);
}

let cartProduct = document.getElementsByClassName('cart__product'); // добавленный в корзину товар
cartProduct = cartProduct[0];
let cartProducts = document.getElementsByClassName('cart__products'); // добавленный в корзину товар
cartProducts = cartProducts[0];
// let cartProductObject = { name: 'товар', id: 1, src: '', count: 1 }; // объект товара в корзине

let cartProductObjectArray = []; // массив товаров(объектов) в корзине
cartProduct.textContent = 'Корзина пуста';

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
        if (cartProductObjectArray.length === 0) {
            makeObject(i);
        } else {
            let cartProductId = cartProductObjectArray.find((cartProductObject) => {
                cartProductObject.id = productId[i];
                return console.log('cartProductObject.id - ', cartProductObject.id);

            })
            if (cartProductId !== -1) {
                makeObject(i);
            } else {


            }

            // {
            //     if (cartProductObjectArray[j].id.includes(productId[i])) {
            //         console.log('Товар есть в корзине - ', cartProductObjectArray[j].id.includes(productId[i]));
            //         cartProductObjectArray[j].count = productQuantityValue[i].textContent;
            //         continue;
            //     } else {
            //         console.log('Товар есть в корзине - ', cartProductObjectArray[j].id.includes(productId[i]));
            //         makeObject(i);


            //     }
            // }
        }

        // makeDiv(i);
    });
};

function makeObject(i) {
    let cartProductObject = {};

    cartProductObject.id = productId[i];
    cartProductObject.src = productImage[i].src;
    cartProductObject.name = productTitle[i].textContent;
    cartProductObject.count = productQuantityValue[i].textContent;
    cartProductObjectArray.push(cartProductObject);


    console.log('Корзина - ', cartProductObjectArray);
}




// function makeDiv(i) {
//     let newDiv = document.createElement('div');
//     newDiv.className = 'cart__product';
//     newDiv.src = cartProductObjectArray[i].src;
//     newDiv.textContent = cartProductObjectArray[i].name;

//     let newcountDiv = document.createElement('div');
//     newcountDiv.className = 'cart__product-count';
//     newcountDiv.textContent = cartProductObjectArray[i].count;

//     let newImg = document.createElement('img');
//     newImg.className = 'cart__product-image';
//     newImg.src = productImage[i].currentSrc;

//     if (cartProductCount.textContent !== cartProductObjectArray[i].count) {
//         cartProductCount.textContent = productQuantityValue[i].textContent;
//     };

//     cartProducts.appendChild(newDiv);
//     newDiv.appendChild(newImg);
//     newDiv.appendChild(newcountDiv);
// }