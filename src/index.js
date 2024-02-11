'use strict';

function calculateFactorialOfNumber (numb) {
    let factorial = numb;
    if (typeof numb !== 'number') {
        return 'Unknown information. Please, try again later!'
    };
    if (numb === 0) {
        return 1;
    };
    return factorial * calculateFactorialOfNumber(factorial - 1);
};

console.log(calculateFactorialOfNumber(6))

// Max numb === 8968, 8969 is RangeError: Maximum call stack size exceeded