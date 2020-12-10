for (let button of document.querySelectorAll('.choosing-list__item')) {
  button.addEventListener('click', function(event) {
    document.querySelector('.active').classList.remove('active');
    this.classList.add('active');
  });
}
let current = 0;
document.querySelector('.first-part__button').addEventListener('click', function(event) {
  let cardsArr = [];

  document.querySelector('.start-page').classList.add('off');
  document.querySelector('.game-page').classList.remove('off');
  document.querySelector('.game-page__levels').classList.remove('off');

  let level = document.querySelector('.active').dataset.level;
  setLevel = Number(level);

  for (let i=0; i<level; i++) {
    let card = document.querySelector('.hidden-page .levels__item').cloneNode(true);
    card.addEventListener('click', function(event) {
      current++;
      if (card.classList.contains('opened')) {
        location.reload();
      } if (current<2) {
        let setCollection = document.querySelectorAll('.game-page__levels .levels__item');
        let cardIndex = [ ...setCollection ].indexOf(this);

        if (cardsArr[cardIndex] > 0) {
          card.classList.add('card-bug', 'opened');
        } else {
          card.classList.add('card-game-over', 'opened');
        } 
      } else {location.reload();}
    });

    document.querySelector('.game-page__levels').append(card);
  }
});

function getCards(arrLength) {
  let arr = Array(arrLength).fill(0);
  let rand = Math.floor(Math.random() * arrLength);
  arr[rand] = 1;

  return arr;
}

function getGameData(level) {
  let gameData = getCards(level);

  return gameData;
}

function checkGameResult(cardIndex, level) {
  let cardsArr = getGameData(level);
  
  return {
    cards: cardsArr,
    result: (cardsArr[cardIndex] > 0)
  }
}
