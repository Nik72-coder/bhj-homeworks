
let j = 0;

let tab = document.querySelectorAll('.tab');
let tab__content = document.querySelectorAll('.tab__content');
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
        let array = [];
        tab__content.forEach((item) => {
            array.push(item);
        });
        console.log(array);
        tab__content.forEach((item) => {
            if (item.classList.value !== 'tab__content tab__content_active') {

                for (let i = 0; i < array.length; i++) {
                    console.log('item.classList.value - ', item.classList.value);
                    console.log(`tab__content(${[i]}).classList.value - `, tab__content[i].classList.value);
                    if (item.classList.value === 'tab__content tab__content_active' && item.classList.value === tab[i].classList.value) {
                        console.log('нажал на действующую вкладку');
                        console.log(item);
                        console.log(tab__content[j]);
                    } else {
                        item.classList.add('tab__content_active');
                        tab[i].classList.remove('tab__content_active');
                    };
                }
            };
        });
    });
});