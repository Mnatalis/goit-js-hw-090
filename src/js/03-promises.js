import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const amount = Number(e.target.amount.value);
  const firstDelay = Number(e.target.delay.value);
  const step = Number(e.target.step.value);

  if (firstDelay < 0 || step < 0 || amount < 0) {
    return Notify.failure('The values in the fields must be positive numbers');
  }
  for (let i = 0; i < amount; i++) {
    let delay = firstDelay + step * i;
    createPromise(i + 1, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}