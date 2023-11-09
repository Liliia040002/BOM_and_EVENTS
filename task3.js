// Додайте код в [task3.js](task3.js), який додасть обробники подій для елементів сторінки [task3.html](task3.html):

// 1. 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
// 2. 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
// 3. 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
// 4. При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.

const body = document.querySelector('body');
const buttonClick = document.getElementsByTagName('button')[0];
const buttonDoubleClick = document.getElementsByTagName('button')[1];
const buttonHold = document.getElementsByTagName('button')[2];
const linkHover = document.querySelector('a');

buttonClick.addEventListener('click', function(){
    body.style.backgroundColor = 'blue';
    
});

buttonDoubleClick.addEventListener('dblclick', function(){
    body.style.backgroundColor = 'pink';
});

buttonHold.addEventListener('mousedown', function(){
    body.style.backgroundColor = 'brown';
});



linkHover.addEventListener('mouseenter', function(){
    body.style.backgroundColor = 'yellow';
});

linkHover.addEventListener('mouseleave', function(){
    body.style.backgroundColor = 'white';
});

body.addEventListener('mouseenter', function(){
    body.style.backgroundColor = 'white';
});