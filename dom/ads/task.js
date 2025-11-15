
let button = document.createElement('button');
button.textContent = 'Остановить';
let container = document.querySelector('.card')
container.appendChild(button)
let rotator = document.querySelectorAll('.rotator__case');
let timer;
let newTimer;
let newDelay = 1000;
let index = 0;
let rotatorActive = document.querySelector('.rotator__case_active');
let timerSpeed = 1000;
rotatorActive.classList.remove('rotator__case_active');

function timerId() {
    rotator[index].classList.remove('rotator__case_active');
    index = Math.floor(Math.random() * 6);
    timerSpeed = rotator[index].dataset.speed;
    rotator[index].style.color = rotator[index].dataset.color;
    rotator[index].classList.value = 'rotator__case rotator__case_active';
    clearInterval(newTimer);
    changeDelay(timerSpeed);
};
function changeDelay(newDelay) {
    clearInterval(timer);
    newTimer = setInterval(timerId, newDelay);
}

timer = setInterval(timerId, 1000);

button.addEventListener('click', () => {
    clearInterval(timer);
    clearInterval(newTimer);
});