// script.js
const themeBtn = document.getElementById('theme-toggle');
const langBtn = document.getElementById('lang-toggle');
const body = document.body;
const text = document.getElementById('main-text');

themeBtn.addEventListener('click', () => body.classList.toggle('dark-mode'));

let isRussian = true;
langBtn.addEventListener('click', () => {
    isRussian = !isRussian;
    text.textContent = isRussian ? 'Мы создаем сайты вашей мечты. Связаться.' : 'We create websites of your dreams. Contact us.';
    langBtn.textContent = isRussian ? 'Сменить язык' : 'Change Language';
});
