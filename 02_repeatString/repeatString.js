const repeatString = function(str, num) {
 let string = str
 if (num == 0){
    let empty_str = ""
    return empty_str
 }
 if (num < 0){
    return "ERROR"
 }
    while(num > 1){
    str += string
    num --
};
return str
}
// Do not edit below this line
module.exports = repeatString;
