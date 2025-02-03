const sumAll = function (startInt, endInt) {
    let sum = 0;
    if (startInt < 0 || endInt < 0) return sum = "ERROR";
    else if (Math.floor(startInt) !== startInt
        || Math.floor(endInt) !== endInt) return sum = "ERROR";
    else if (typeof startInt !== typeof endInt) return sum = "ERROR";
    else if (endInt > startInt) {
        while (startInt <= endInt) {
            sum += startInt;
            startInt++;
        }
    } else {
        while (startInt >= endInt) {
            sum += startInt;
            startInt--;
        }
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
