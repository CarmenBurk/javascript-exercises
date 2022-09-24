    const removeFromArray = function(array,...removedValues) {
       
        let newArray = array
        const removedArray = removedValues
        console.log(removedArray)
        for (index = 0; index < array.length; index++){
            let value = array[index]
            for (const removedValue of removedArray) {
                console.log("to be removed: "+ removedValue)
                if (value === removedValue){
                console.log(value + " is equal to " + removedValue +" and the current index is "+index)
                newArray.splice(index,1)
                index --;
               }
                
            }
            
        }
    return newArray;
    };

// Do not edit below this line
module.exports = removeFromArray;
