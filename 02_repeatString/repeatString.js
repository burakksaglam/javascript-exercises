const repeatString = function(string, num) {
    let finalString = "";

    for(let i = 1; i <= num; i++) {
        finalString = finalString.concat(string);
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;

console.log(repeatString("bruJ", 5));