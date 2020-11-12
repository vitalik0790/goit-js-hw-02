'use strict';


function mapArray(array) {
    // const numbers = new Array(array.length);
    const newArr = [];
    const len = array.length;
    for(let pizza = 0; pizza < len; pizza += 1) {
        
        newArr.push(array[pizza] * 10);
    }
    return newArr;
  }
console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]
