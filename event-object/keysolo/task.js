class Game {
  constructor(container) {
    this.container = container;

    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    let statusWins1 = document.querySelector('.status__wins');
    let statusLoss1 = document.querySelector('.status__loss');
    let statusWins = Number(statusWins1.textContent);
    let statusLoss = Number(statusLoss1.textContent);

    let symbolCurrent = document.querySelectorAll('.symbol');
    let array = [];
    symbolCurrent.forEach((item) => {
      array.push(item);
    });
    let i = 0;
    let j = 0;
    let k = 0;
    document.body.addEventListener('keydown', (event) => {
      if (event.key === array[i].textContent) {
        this.success;
        statusWins += 1;
        statusWins1.textContent = statusWins;
        j += 1;
        if (j <= array.length) {

          if (statusWins >= array.length) {
            alert('Игра окончена! Вы победили!')
        }
      }
      } else {
        this.fail;
        statusLoss += 1;
        statusLoss1.textContent = statusLoss;
        k += 1;
        if (k <= 3) {

          if (statusLoss >= 3) {
            alert('Игра окончена! Вы проиграли!')
          };
        };
      };
      i += 1;
  });




    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода символа вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
     */
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript'
    ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

