function simpleOperators (numberA, numberB){
  let adding = numberA + numberB;
  let subtract = numberA - numberB;
  let mutliply = numberA * numberB;
  let divide = numberA / numberB;
  console.log(adding);
  console.log(subtract);
  console.log(mutliply);
  console.log(divide);
}
//Skipcount by ___ for ___ times starting at ___
function skipCounting (skipCount, times, startingNumber){
  let number = startingNumber - skipCount;
  for (let i=1; i<=times; i++){
    number += skipCount;
    console.log(number);
  }
}

//simpleComparison
function howManyTimes (numberStart, numberEnd, skipCount) {
   while (numberStart < numberEnd) {
   console.log(numberStart += skipCount);
}
}
function LooseEquality(firstOperand, secondOperant){
  console.log(firstOperand == secondOperant);
}

function StrictEquality(firstOperand, secondOperant){
  console.log(firstOperand == secondOperant);
}


//function notEqual(valueArray, ){
//if (number[i] !=5) { //This is when we do stop, so we accept every other value (common logic for "not")
//} else {console.log("5 is at the index", i); i=number.length}
//
//for (let i=0; i<number.length; i++) { //we do not know when to stop in the array
  //once we stop, we want to jump out of the loop
//}

//let number = [4, 7, 13, 99, 0, 100, 5, 1, '1']; //able to add any typeof to an array, index is automatic

//for(let i=0; i<number.length; i++){

//}
//simpleOperators (number[0], number[1]);
//simpleOperators (number[2], number[3]);
//skipCounting (3, 6, 113);
//skipCounting (8, 11, -351);
//howManyTimes (number[4], number[5], number[1]);

//Loose vs. Strict Example, == symbol or === symbol returns Booleans
//LooseEquality (number[7], number[7]); // Returns True, compares number 1 with number 1
//LooseEquality (number[8], number[7]); // Returns True, changes the second operand to a string, then compares values
                                        // For example: console.log('1' == '1');
//StrictEquality (number[8], number[7]); // Returns False, compares typeof variable and value


//Not Equality Starter Code
//Outputing individual values of an array, we want to start stop at the value 5, where ever it is in the array

//Introduces Break and Continue Code
//See: https://github.com/QEHS-Websites/JavaScript-Sandbox/tree/master/Control%20Flow#break-and-continue-key-words-and-loop-concepts

//let userColor = 'red';
//let defaultColor = 'blue';
//let currentColor = userColor || defaultColor
//console.log(currentColor);

let points = 110;
let type = points > 100 ? 'gold' : 'silver'
console.log(type);
