
let button = document.getElementById('cookie');
let clicks = document.getElementById('clicker__counter');
let clickCounter = Number(clicks.textContent);

function recovery() {
    button.style = 'width: 200px';
}
function buttonPress() {
    clickCounter += 1;
    clicks.textContent = clickCounter;
    button.style = 'width: 170px';
}
button.addEventListener("mousedown", buttonPress);
button.addEventListener('mouseup', recovery);

let firstClick = 0;
let clickSpeed = 0;

let speedClick = document.getElementById('clicker__speed');


document.addEventListener('click', (event) => {
    const currentTime = new Date().getTime();
    if(firstClick !== 0) {
        const timeDifference = currentTime - firstClick;
        if(timeDifference > 0) {
            clickSpeed = 1000 / timeDifference;
        } else {
            clickSpeed = Infinity;
        }
        speedClick.textContent = `${clickSpeed.toFixed(2)} кликов/сек.`
    }
    firstClick = currentTime;
})