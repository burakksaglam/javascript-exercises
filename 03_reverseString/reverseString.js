const reverseString = function(str) {
    
    let strToArray = str.split("");
    let reversedString = "";

    for(let i = (str.length - 1); i >= 0 ; i--) {
        reversedString = reversedString.concat(strToArray[i]);

    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

console.log(reverseString("hello there!"));
