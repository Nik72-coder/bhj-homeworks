
let changeContent = document.querySelector('.dropdown__value');
let ulElement = document.querySelector('ul');
let li_a_Element = document.querySelectorAll('li > a');
changeContent.addEventListener('click', () => {
    ulElement.classList.add('dropdown__list_active');
    console.log('ulElement.classList - ', ulElement.classList);
})

li_a_Element.forEach((item, index) => {
    item.addEventListener('click', function(item) {
        console.log(item.textContent);
        item.addEventListener('click', () => {
            changeContent.textContent = item.textContent;
            changeContent.addEventListener('click', () => {
            ulElement.classList.remove('dropdown__list_active');
            });
        });
        return changeContent.textContent;
    });
});