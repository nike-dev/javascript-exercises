const palindromes = function (string) {
    const noPunctuationString = string
        .replace(/[!,. ]/g, "")
        .toLowerCase();
    const stringReversed = noPunctuationString
        .split("")
        .toReversed()
        .join("");


    return noPunctuationString == stringReversed;
};

// Do not edit below this line
module.exports = palindromes;
