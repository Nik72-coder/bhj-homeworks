
let button = document.createElement('button');
button.textContent = 'Остановить';
let container = document.querySelector('.card')
container.appendChild(button)
let rotator = document.querySelectorAll('.rotator__case');
let index = 0;
let rotatorActive = document.querySelector('.rotator__case_active');
rotatorActive.classList.remove('rotator__case_active');
let timer = setInterval(() => {
    rotator[index].classList.remove('rotator__case_active');
    index = Math.floor(Math.random() * 6);
    rotator[index].classList.value = 'rotator__case rotator__case_active';
}, 1000);
button.addEventListener('click', () => {
    clearInterval(timer);
});