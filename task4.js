// Створіть html-сторінку, яка буде мати випадаючий список з декількома елементами та кнопку. Підключіть до сторінки скрипт [task4.js](task4.js), в якому реалізуйте логіку видалення вибраного елементу списку при натисканні на кнопку. Видаляти елементи можна в будь якому порядку.

// ![](https://user-images.githubusercontent.com/9075641/228462160-e0584c12-eb4a-4973-b598-46e1cde9b941.png)


const button = document.querySelector('button');
const select = document.querySelector('select');

button.addEventListener('click', function() {
    const selectedElement = select.options[select.selectedIndex];
    if (selectedElement) {
        select.removeChild(selectedElement);
      }

});

