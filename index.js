// const infoBox = document.querySelector('.info-box');

// infoBox.addEventListener('click', (event) => {
//   if (event.target.classList.contains('arrow-icon')) {
//     const parent = event.target.parentElement;
//     parent.querySelector('div').classList.toggle('hidden');
//   }
// });

const info = document.querySelector('.info');

info.addEventListener('click', (event) => {
  if (event.target.classList.contains('arrow-icon')) {
    const parent = event.target.parentElement;
    parent.querySelector('div').classList.toggle('hidden');
    parent.querySelector('p').classList.toggle('bold');
    event.target.classList.toggle('rotate');
  }
});
