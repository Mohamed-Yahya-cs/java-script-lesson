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






//truth vs, falsy Example
//console.log(1 == 1);
//console.log('1' == 1);
//console.log('1' === 1);

let number = [4, 7, 13, 99, 0, 100, 5, 1, '1'];


LooseEquality(number[7], number[7]);
LooseEquality(number[8], number[7]);

StrictEquality(number[8], number[7]);

//simpleOperators (number[0], number[1]);
//simpleOperators (number[2], number[3]);
//skipCounting (3, 6, 113);
//skipCounting (8, 11, -351);
//howManyTimes (number[4], number[5], number[6]);
