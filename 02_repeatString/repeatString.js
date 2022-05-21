const repeatString = function(repeatString, repeatCount) {
    if (repeatCount < 0) {
        return 'ERROR';
    }
    let outputString = '';
    for (let i = 1; i <= repeatCount; i++) {
        outputString += repeatString;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
