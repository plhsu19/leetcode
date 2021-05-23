/**
 * @param {string} info
 * @return {string}
 */

const maskPersonalInfo = (info) => {

    const charList = new Array();
    let count = 0; // number used to count the consecutive numbers

    // loop the string to parse the char into the array and mask the numbers if continuous count > 5
    for (const char of info) {
        charList.push(char);

        if (!isNaN(char)) {
            count += 1;
        } else  // if the parsed char is a letter, mask the numbers before it if the consecutive number count > 5 
            if (count > 5) {               
                for (let i = charList.length - count - 1; i < charList.length - 1; i++) {
                    charList[i] = '*';
                }
                count = 0;
            } else {
                count = 0;
            }
    }

    // check the consecutive numbers in the end of input
    if (count > 5) {
        for (let i = charList.length - count; i < charList.length; i++) {
            charList[i] = '*';
        }
    }
    // restore the last 4 digit
    for (let i = charList.length - 4; i < charList.length; i++) {
        charList[i] = info.charAt(i);
    }

    return charList.join('');
}

const mask = (charList, count, lastIdx) => {
    for (let i = lastIdx - count; i < lastIdx; i++) {
        charList[i] = '*';
    }
}

// unit test
console.log(maskPersonalInfo('3985027e9A9gf88bdfg7777903df'));
//output: '*******e9A9gf88bdfg*****03df'
console.log(maskPersonalInfo('eic33920f88f0d@9f0393920028'));
// output: 'eic33920f88f0d@9f******0028'
console.log(maskPersonalInfo('eic33920f88f0d@9f53939'));
// output: 'eic33920f88f0d@9f53939'
console.log(maskPersonalInfo('04051992alice10369@gmail.comB78W40H55+15227224195'));
// output: '********alice10369@gmail.comB78W40H55+*******4195'


