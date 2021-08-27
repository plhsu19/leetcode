// Imperative programming
/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    const wordArray =  s.split(' ');
    
    for (let i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i].split('').reverse().join('');
    }
    return wordArray.join(' ');
};

// functional programming
var reverseWords = function(s) {
    
    // split the string and reverse each word at its original location in the sentence
    let wordArray = s.split(' ').map((word) => word.split('').reverse().join(''))
    return wordArray.join(' ');
};