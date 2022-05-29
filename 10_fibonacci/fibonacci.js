// const fibonacci = function(n) {
//     let prev = 0;
//     let acc = 1;
//     for (let i = 1; i < n; i++) {
//         acc += prev;
//         prev = acc;
//         console.log(acc);
//     }
//     return acc;
// };

const fibonacci = function(n) {
    if (n < 1) {
        return 'OOPS';
    }
    if (+n === 1 || +n === 2) {
        return 1;
    }
    return fibonacci(+n - 1) + fibonacci(+n - 2);
}

// Do not edit below this line
module.exports = fibonacci;
