'use strict';

function filterArray(array) {
    
    const numbers = [];
    const numberLength = array.length; 
    for(let pensil = 0; pensil < numberLength; pensil += 1) {
    //   console.log(array[pensil]);
      if (Number.isFinite(array[pensil])) {
          numbers.push(array[pensil])
      } 
      
    }
    return numbers;
  }
  

console.log(filterArray([-2, 0, 2]));
  // [-2, 0, 2]
  
  console.log(filterArray([1, NaN, Infinity]));
  // [1]
  
  console.log(filterArray([0, -0, 100, '100']));
  // [0, 0, 100]
  
  console.log(filterArray([undefined, false, null, [], 1]));
  // [1]
  
  console.log(filterArray([{}, () => {}, 2]));
  // [2]
