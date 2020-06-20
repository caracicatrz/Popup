const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');




close.addEventListener('click', () => {
    popup.style.display = 'none';

})

button.addEventListener('click', () => {
    popup.style.display = 'block';

})

popup.addEventListener('click', () => {
    popup.style.display = 'none';

})