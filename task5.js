/*
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!",\
а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
Нове повідомлення додається до уснуючих.
додаткове випробування: обмежити кількість виведених повідомлень до 5,
при додаванні повіомлення після 5го, зі сторінки має зникнути найстаріше повідомлення.
*/


const button = document.querySelector('button');
const body = document.querySelector('body');
const paragraph = document.createElement('p');
body.appendChild(paragraph);

const maxLine = 5; 
const messages = [];

button.addEventListener('click', function(){
    messages.push("I was pressed!");
    updateMessages();
});

button.addEventListener('mouseenter', function(){
    messages.push("Mouse on me!");
    updateMessages();
});

button.addEventListener('mouseleave', function(){
    messages.push("Mouse is not on me!");
    updateMessages();
});

function updateMessages() {
    if (messages.length > maxLine) {
        messages.shift(); 
    }
    paragraph.innerHTML = messages.join('<br>');
}
