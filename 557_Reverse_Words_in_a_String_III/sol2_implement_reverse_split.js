/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    const wordArray = split(s);    
    for (let i = 0; i < wordArray.length; i++) {
        wordArray[i] = reverse(wordArray[i]);
    }
    return wordArray.join(' ');
};

function reverse(w) {
    const charArray = w.split('');
    
    let hi = charArray.length - 1;
    let lo = 0;
    
    while (hi > lo) {
        const temp = charArray[hi]
        charArray[hi] = charArray[lo];
        charArray[lo] = temp;
        hi--;
        lo++;
    }
    
    return charArray.join('');
}

function split(sentence) {
    const wordArray = [];
    const len = sentence.length;
    let s = 0;
    
    for (let i = 0; i <= len; i++) {
        if (sentence[i] === ' ' || i === len) {
            wordArray.push(sentence.slice(s, i));
            s = i + 1;
        }
    }
    return wordArray;
}