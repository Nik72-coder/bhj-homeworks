
let j = 0;

let tab = document.querySelectorAll('.tab');

tab.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (item.classList.value !== 'tab tab_active') {
            for (let i = 0; i < tab.length; i++) {
                if (tab[i].classList.value === 'tab tab_active') {
                    tab[i].classList.remove('tab_active');
                };
            };
            item.classList.add('tab_active');
            console.log('item - ', item);
            console.log('index - ', index);
            j = index;
        };
        console.log('j - ', j);
    });
});


let tab__content = document.querySelectorAll('.tab__content');

tab__content.forEach((item, index) => {
    item.addEventListener('click', () => {
        // changeClassContent(item);
        if (item.classList.value === 'tab__content tab__content_active') {
            for (let i = 0; i < tab__content.length; i++) {
                if (tab__content[i].classList.value === 'tab__content tab__content_active') {
                    tab__content[i].classList.remove('tab__content_active');
                };
            };
        };
    });
});