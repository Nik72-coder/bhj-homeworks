const element = document.querySelectorAll('.reveal');
element.forEach((item) => {
    document.addEventListener('scroll', () => {
        for (let i = 0; i < element.length; i++) {
            if (isVisible(element[i])) {
                element[i].classList.add('reveal_active');
            } else {
                element[i].classList.remove('reveal_active');
            };
        };
    });
});
function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();
    if (bottom < 0) {
        return false;
    };
    if (top > window.innerHeight) {
        return false;
    };
    return true;
};