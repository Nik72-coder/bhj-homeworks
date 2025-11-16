
let tab = document.querySelectorAll('.tab');
let tab__content = document.querySelectorAll('.tab__content');
tab.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (item.classList.value !== 'tab tab_active') {
            for (let i = 0; i < tab.length; i++) {
                if (tab[i].classList.value === 'tab tab_active') {
                    tab__content[i].classList.remove('tab__content_active');
                    tab[i].classList.remove('tab_active');       
                };
            };
            item.classList.add('tab_active');
            tab__content[index].classList.add('tab__content_active');
        };
    });
});