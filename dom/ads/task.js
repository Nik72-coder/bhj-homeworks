
let button = document.createElement('button');
button.textContent = 'Остановить';
let container = document.querySelector('.card')
container.appendChild(button)
let rotator = document.querySelectorAll('.rotator__case');
let newTimer;
let newDelay = 1000;
let index = 0;
let rotatorActive = document.querySelector('.rotator__case_active');
console.log(rotatorActive.dataset.speed)
let timerSpeed = 1000;
rotatorActive.classList.remove('rotator__case_active');

function timerId() {
    rotator[index].classList.remove('rotator__case_active');
    index = Math.floor(Math.random() * 6);
    timerSpeed = rotator[index].dataset.speed;
    console.log('timerSpeed - ', timerSpeed);
    rotator[index].style.color = rotator[index].dataset.color;
    
    rotator[index].classList.value = 'rotator__case rotator__case_active';
    changeDelay(timerSpeed);
}
let timer = setInterval(timerId, 1000);

function changeDelay(newDelay) {
    clearInterval(timer);
    newTimer = setInterval(timerId, newDelay);
}

button.addEventListener('click', () => {
    clearInterval(timer);
});