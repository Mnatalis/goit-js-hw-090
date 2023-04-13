
import throttle from 'lodash';

const bodyColor = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

let timerId = null;

buttonStop.disabled = true;

buttonStart.addEventListener('click', () => {
  getRandomHexColor();
  timerId = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
});




buttonStop.addEventListener('click', () => {
  clearInterval(timerId);
  console.log('timer stoped');
  buttonStart.disabled = false;
  buttonStop.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}