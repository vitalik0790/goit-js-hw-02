'use strict';


function formatString(string, maxLength = 40) {
    if (string.length <= maxLength) {
      return string
    }
    else {
        return string.slice(0, maxLength) + '...';
    }
  }

// const msg = 'Hello Vova and Sara';
// console.log(msg.slice(0, 6)); 
// console.log(msg);


console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // 'Vestibulum facilisis, purus nec pulvinar...'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'







// Напиши функцию formatString(string, maxLength = 40) которая принимает
// строку и форматирует ее если необходимо.

// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов
// и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.