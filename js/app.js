function getRandomInt(min, max) {
  const min0 = Math.ceil(min);
  const max0 = Math.floor(max);
  return Math.floor(Math.random() * (max0 - min0) + min0);
}

let cellsArray = document.querySelectorAll('.cell');
cellsArray = Array.from(cellsArray);
const image = document.createElement('img');
image.src = './img/goblin.png';
let randomIndex;
setInterval(() => {
  const randomNumber = getRandomInt(0, (cellsArray.length - 1));
  if (randomNumber === randomIndex) {
    if (randomNumber === cellsArray.length - 1) {
      randomIndex -= 1;
    } else {
      randomIndex += 1;
    }
  } else {
    randomIndex = randomNumber;
  }
  cellsArray[randomIndex].appendChild(image);
}, 1000);
