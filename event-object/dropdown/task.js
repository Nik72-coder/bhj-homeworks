
let changeContent = document.querySelector('.dropdown__value');
let ulElement = document.querySelector('ul');
let li_a_Element = document.querySelectorAll('li > a');

li_a_Element.forEach((item, index) => {
    console.log(li_a_Element[index]);
    item.addEventListener('click', function(event) {
        console.log('Кликнули на элемент:', this.textContent);
        console.log('Индекс элемента:', index);
    });
});

changeContent.addEventListener('click', () => {
    ulElement.classList.add('dropdown__list_active');
})