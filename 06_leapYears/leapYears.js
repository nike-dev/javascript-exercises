const leapYears = function(year) {
    // if (!(year % 4) && (year % 100)) {
    //     return true;
    // }
    // else if (!(year % 100) && !(year % 400)) return true;
    // else return false;
    const isYearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;

    if (isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)) return true;
    else return false;
}

// Do not edit below this line
module.exports = leapYears;
