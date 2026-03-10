let emotion = "Happy";
console.log(emotion); // Expected output: Happy
emotion = "sad";
console.log(emotion); // Expected output: sad 

let chaseBankDebt = 500000;
chaseBankDebt = chaseBankDebt - 100000;
console.log(chaseBankDebt); // Expected output: 400000

// What happens if I dont reference a value

let val
console.log(val) // Expected output: Nil/undefined...it's undefined

// 2 values at once

let operand1, operand2

// Does the sum 
let sumOfTwo = function (val1, val2)
{   
    // was doing it the jsx way
    return val1 + val2;
}

// Prints the sum
function printCalc(sum)
{
    console.log(sum);
}

printCalc(sumOfTwo(3,4))