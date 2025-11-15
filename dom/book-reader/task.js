
let icon = document.querySelectorAll('.font-size');
let fontSize = document.getElementById('book');
let array = [];
icon.forEach((item) => {
    array.push(item);
});
icon.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        for (let i = 0; i < array.length; i++) {
            if (icon[i].classList.contains('font-size_active')) {
                icon[i].classList.remove('font-size_active');
            };
        };
        item.classList.add('font-size_active');
        if (icon[index].classList.contains('font-size_small')) {
            fontSize.classList.remove('font-size_big');
            fontSize.classList.add('font-size_small');
        } else if (icon[index].classList.contains('font-size_big')) {
            fontSize.classList.remove('font-size_small');
            fontSize.classList.add('font-size_big');
        } else {
            fontSize.classList.remove('font-size_small');
            fontSize.classList.remove('font-size_big');
        };
    });
});