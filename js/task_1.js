
'use strict';


const friends = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const logItems = function (items) {
    for (const item of items) {
     console.log(item);
}
};
 
logItems(friends);
logItems(numbers);


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


// Напиши функцию logItems(array), которая получает массив и использует
// цикл for, который для каждого элемента массива будет выводить в консоль
// сообщение в формате[номер элемента]-[значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента
// массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет
// выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.