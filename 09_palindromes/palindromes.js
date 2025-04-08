const palindromes = function (string) {
    // const noPunctuationString = string
    //     .replace(/[!,. ]/g, "")
    //     .toLowerCase();
    // const stringReversed = noPunctuationString
    //     .split("")
    //     .toReversed()
    //     .join("");


    // return noPunctuationString == stringReversed;
    const noPunctuationString = string.replace(/[!., ]/g, "");
    const reversedString = noPunctuationString
        .split("")
        .toReversed()
        .join("");
    return noPunctuationString.toLowerCase() === reversedString.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
