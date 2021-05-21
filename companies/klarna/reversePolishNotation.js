/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {

    const numList = new Array();
    let numIdx = 0;

    for (const token of tokens) {
        // if token is not an operator, add the token into a num list 
        if (token !== '+' &&
            token !== '-' &&
            token !== '*' &&
            token !== '/') {
            numList[numIdx] = token;
            numIdx += 1;
        }
        // if token is an operator, calculate the result, 
        // and replace the first operands in number list with the result
        else {
            const operand1 = parseInt(numList[numIdx - 2], 10);
            const operand2 = parseInt(numList[numIdx - 1], 10);
            let result = null;

            switch (token) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
            }
            numList[numIdx - 2] = Math.trunc(result);
            numIdx -= 1;
        }
    }

    return numList[numIdx - 1];
};

const tokens = ["2", "1", "+", "3", "*"];
console.log('output: ', evalRPN(tokens));
// should output 9

const tokens2 = ["4", "13", "5", "/", "+"];
console.log(evalRPN(tokens2));
// output: 6

const tokens3 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
console.log(evalRPN(tokens3));
// Output: 22