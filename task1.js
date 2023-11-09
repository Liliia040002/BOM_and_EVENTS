/**
1. створить нове вікно розміром 300х300 пікселів;
2. із затримкою 2 сек змініть розміри вікна на 500х500 пікселів;
3. із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200);
4. із затримкою 2 сек закрийте вікно.
 */

const newWindow = window.open('', '', 'width=300, height=300');

setTimeout(function resizeWin(){
    newWindow.resizeTo(500, 500);
}, 2000);

  setTimeout(function moveWin() {
    newWindow.moveTo(500, 500);
  }, 4000);

  setTimeout(  function closeWin() {
    newWindow.close();
  }, 6000 );








