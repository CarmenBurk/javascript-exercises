
const sumAll = function(number1, number2) {
    let total = 0
    if ( typeof number1 === 'number' && typeof number2 === 'number'){
      if (number1<0 || number2<0){
        return 'ERROR'
      }
      if (number1>number2){
        max = number1;
        min = number2;
      }
      else {
        max = number2;
        min = number1;
      }

      while(min<=max){
          total += max;
          max--
      }}
    else {
        return 'ERROR'
    }
        
return total
};

// Do not edit below this line
module.exports = sumAll;
