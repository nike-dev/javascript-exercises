const removeFromArray = function (array, ...args) {
    const newArray = array.filter((elem) => {
        return (!args.includes(elem));
    })
    return newArray;
}
  

// Do not edit below this line
module.exports = removeFromArray;
