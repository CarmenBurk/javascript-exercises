const reverseString = function(str) {
    let reverseArr = []
    let reverse = ""
    for (letter of str){
        reverseArr.unshift(letter)
    }
    for(letter of reverseArr){
     reverse += letter   
    }
    return reverse;

};

// Do not edit below this line
module.exports = reverseString;
