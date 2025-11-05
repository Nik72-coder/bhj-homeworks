
let timer = document.getElementById('timer');
let time = Number(timer.textContent);
// let timerID = setInterval(() => {
//     timer.textContent = time;
//     time = time - 1;
//     if(time <= 0) {
//         alert('Вы победили в конкурсе!');
//         clearInterval(timerID);
//     }
// }, 1000);

time = Number(timer.textContent);
console.log(time);
hours = 0;
minutes = 0;
timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(time).padStart(2, '0')}`;
let timerID = setInterval(() => {
    time = time - 1;
    timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(time).padStart(2, '0')}`;
    if(time === 0) {
        time = 0;
        alert('Вы победили в конкурсе!')
        clearInterval(timerID);
        timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(time).padStart(2, '0')}`;
    }
}, 1000);