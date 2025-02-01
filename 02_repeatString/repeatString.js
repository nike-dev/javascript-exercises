const repeatString = function(string, num ) {
    let i = 1;
    let finalString = "";
    while (i <= num) {
        finalString += string ;
        i++;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
