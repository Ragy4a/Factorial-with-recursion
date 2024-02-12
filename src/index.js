'use strict';

function calculateFactorialOfNumber (numb) {
    if (typeof numb !== 'number' || numb < 0) {
        return 'Unknown information. Please, try again later!'
    };
    if (numb === 0) {
        return 1;
    };
    return numb * calculateFactorialOfNumber(numb - 1);
};

console.log(calculateFactorialOfNumber(6))

// Max numb === 8968, 8969 is RangeError: Maximum call stack size exceededs
