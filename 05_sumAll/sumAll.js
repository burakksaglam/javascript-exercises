const sumAll = function(firstNumber, lastNumber) {
    let total = 0;
    let calculationString = "";

    if(firstNumber >= lastNumber) {
        let temporaryValue = lastNumber;
        lastNumber = firstNumber;
        firstNumber = temporaryValue;
    }

    if(firstNumber < 0 || lastNumber < 0) {
        return "ERROR";
    }

    if((typeof firstNumber == "string") || (typeof lastNumber == "string") || (isNaN(firstNumber) == true) ||(isNaN(lastNumber) == true)) {
        return "ERROR";
    }

    for(i = firstNumber;i <= lastNumber; i++) {

        if(i != lastNumber) 
            calculationString = calculationString.concat(i, " + ");

        else
            calculationString = calculationString.concat(i);

        total += i;
    }

    console.log(calculationString);

    return total;
};

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(1, 123));