const findTheOldest = function(people) {
    return people.reduce((acc, p) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return age(p, currentYear) > age(acc, currentYear) ? p : acc;
    }, {
        yearOfBirth: 0,
        yearOfDeath: 0,
    });
};

const age = function(p, currentYear) {
    return Number.isInteger(p.yearOfDeath) ? p.yearOfDeath - p.yearOfBirth : currentYear - p.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
