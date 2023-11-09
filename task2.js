/**
Напишіть функцію changeCSS, яка спрацьовуватиме по кліку на кнопку
і змінюватиме стиль вмісту тега <p>:
колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS"
 */

const button = document.querySelector("button");
const text = document.querySelector("p");

button.addEventListener('click', function changeCSS() {
    text.style.color = 'orange';
    text.style.fontSize = '20px';
    text.style.fontFamily = 'Comic Sans MS';
});


