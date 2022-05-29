const palindromes = function (a) {
    const letters = a.toLowerCase().split(/[^a-z]/).join('').split('');
    console.log(letters.join(''));
    console.log(letters.reverse().join(''));
    return letters.join('') === letters.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
