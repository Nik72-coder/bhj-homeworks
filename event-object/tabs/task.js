

let j = 0;

let tab = document.querySelectorAll('.tab');

let tab__content = document.querySelectorAll('.tab__content');
console.log('tab - ', tab);
console.log('tab__content - ', tab__content);
let array = [];
tab__content.forEach((item) => {
        console.log(item);
        array.push(item);
    })
    let t = 0;
console.log('array - ', array);
tab.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (item.classList.value !== 'tab tab_active') {
            for (let i = 0; i < tab.length; i++) {
                if (tab[i].classList.value === 'tab tab_active') {
                    console.log(`tab(${[i]}).classList.value - `, tab[i].classList.value);
                    tab[i].classList.remove('tab_active');
                    t = tab[i].classList.value;
                    console.log(`tab(${[i]}).classList.value - `, tab[i].classList.value);
                };
            };
            console.log('t - ', t)
            console.log('item - ', item);
            item.classList.add('tab_active');
            console.log('item - ', item);
            console.log('index - ', index);
            console.log(`array(${[index]}).classList.value - `, array[index].classList.value);
            array[index].classList.add('tab__content_active');
            console.log(`array(${[index]}).classList.value - `, array[index].classList.value);
            item.classList.value = array[index].classList.value;
            console.log(`${item}.classList.value - `, item.classList.value);
            console.log(`tab(${0}).classList.value - `, tab[0].classList.value);
        };
        console.log('t - ', t);
    });
});
console.log('t - ', t);