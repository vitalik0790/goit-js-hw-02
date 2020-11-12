'use strict';

const getItemsString = function (array) {
  
 let result= '';
    for (let i = 0; i < array.length; i+=1)
    {
        result += `${i + 1}${' - '}${array[i]}\n`}
  return result;
}

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
console.log(getItemsString([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));

console.log('=======================================');

const logItems= function(array) {
    let index = 1;
    for (const item of array) {
        console.log(`${index} - ${item}`);
        index += 1;
    }
}

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

console.log('22222222222222222222222222222222222222222222');

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */



// Напиши функцию logItems(array), которая получает массив и использует
// цикл for, который для каждого элемента массива будет выводить в консоль
// сообщение в формате[номер элемента]-[значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента
// массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет
// выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.