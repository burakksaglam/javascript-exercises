const removeFromArray = function(array, ...args) {
    let index = 0;
    let removedArray = "";

    for(const n of args) {
        index = array.indexOf(n);

        if(index != -1) {
            array.splice(index, 1);
        }
    }

    removedArray = array;

    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;

console.log(removeFromArray([3, 5, 7, "lol"], 4, "lol"));
