
let changeContent = document.querySelector('.dropdown__value');
let ulElement = document.querySelector('ul');
let li_a_Element = document.querySelectorAll('li > a');
changeContent.addEventListener('click', () => {
    ulElement.classList.add('dropdown__list_active');
})

li_a_Element.forEach((item, index) => {
    item.addEventListener('click', function(event) {
        event.preventDefault()
        changeContent.textContent = item.textContent;
        ulElement.classList.remove('dropdown__list_active');
    });
});