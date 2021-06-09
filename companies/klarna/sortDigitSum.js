function sortDigitSum(array) {
    array.sort((a, b) => {
        if (sumOfDigit(a) < sumOfDigit(b)) {
            return -1;
        }
        if (sumOfDigit(a) > sumOfDigit(b)) {
            return 1;
        }

        if (a < b) { 
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    })

    return array;
}

function sumOfDigit(num) {
    let pre = 0;
    let moder = 10;
    let sum = 0;

    while (true) {
        const remain = num % moder;
        const digit = remain - pre;
        sum += digit / (moder / 10);
        pre = remain;
        moder = moder * 10;        

        if (num < moder && num < moder / 10) {
            break;
        }
    }
    
    return sum;
}

// unit test
const input1 = [12, 10, 102, 31, 15];
const input2 = [14, 1101, 10, 35, 0];
const input3 = [14, 129, 501, 23, 0, 145];
const input4 = [50, 11111, 500, 23, 104, 5];

console.log(sortDigitSum(input1));
// // expected output [10 12 102 31 15]
console.log(sortDigitSum(input2));
// // expected output [0 10 1101 14 35]
console.log(sortDigitSum(input3));
// // expected output [0, 14, 23, 501, 145, 129]
console.log(sortDigitSum(input4));
// expected output [ 5, 23, 50, 104, 500, 11111 ]
