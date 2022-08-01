const removeFromArray = function(array,...remove) {
    arrRemove = Array.from(remove);
    
    for (i = arrRemove.length; i--;) {
        arrRemove.filter(val => !array.includes(val));
        array.splice(arrRemove[0]-1,1);
        arrRemove.splice(0,1);
        
    }

  return array;
}
    
console.log(removeFromArray([1,2,3,4,5],3,2));
console.log(arrRemove);




// Do not edit below this line
module.exports = removeFromArray;


// X remove item from array using splice() 
// X  and returning the new array
// X turn the remove element into an array that can be read
//loop length of remove[] and splice each value
//