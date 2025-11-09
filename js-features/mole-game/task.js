
const hitsWin = 10; // макс. количество попаданий
const missesLose = 5; // макс. количество промахов
const fieldHoles = 9; // поле 3х3
let hole = document.querySelectorAll('.hole-game .hole');

let hits = 0; // текущее количество попаданий
let misses = 0; // текущее количество промахов

const deadsMole = document.getElementById('dead');  // Попадания
const missesDisplay = document.getElementById('lost'); // Промахи


hole.forEach(function (item) {
    item.addEventListener('click', () => {
        if (item.classList.contains('hole_has-mole')) {
            if (hits < hitsWin) {
                hits += 1;
                deadsMole.textContent = hits;
            } else {
                alert(`Количество попаданий: ${hits}. Вы победили!`);
                endGame();
            };
        };
    });
    item.addEventListener('click', () => {
        if (!item.classList.contains('hole_has-mole')) {
            if (misses < missesLose) {
                misses += 1;
                missesDisplay.textContent = misses;
            } else {
                alert(`Количество промахов: ${misses}. Вы проиграли!`);
                endGame();
            };
        };
    });
});

function endGame() {
    let gameOver = confirm('Продолжить игру?');
    if(gameOver) {
        hits = 0;
        misses = 0;
        deadsMole.textContent = hits;
        missesDisplay.textContent = misses;
    } else {
        return;
    }
    
};