function factorial(n) {

    const array = new Array(n + 1);
    array[0] = 1

    for (let i = 1; i < n + 1; i ++ ) {
        array[i] = array[i - 1] * i;
    }
    return array[n]
}

// unit test
console.log(factorial(5));
// 120
console.log(factorial(10));
// 3628800
console.log(factorial(20));
// 2432902008176640000
console.log(factorial(50));
// 3.041409320×E64
console.log(factorial(70));
// 	1.197857167×E100




