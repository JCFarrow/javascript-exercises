const sumAll = function(...numbers) {
    for (num of numbers) {
        if (!Number.isInteger(num) || num < 0) {
            return 'ERROR';
        }
    }
    const sorted = [...numbers].sort();
    return ((sorted[1] + 1) * (sorted[1] - sorted[0] + 1)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
