// Author: Marissa Henriquez <mrhenriq@ucsc.edu>
// Date: August 8

array = [5, 14, 26, 38, 44, 68]
console.log("My array", array);

function addition(x) {
   var results = x + 7; 
   return results; 
  }

//test function
console.log("Is 5 + 7 = 12?", addition(5));
console.log("Is 14 + 7 = 21?", addition(14));

array.map(addition); 
console.log("Test of addition to array:", result);

array.map(function(x){ 
  var results = x - 2; 
  return results; 
})
console.log("Test of subtraction from array", result);

var mapResults = array.map(addition); 
console.log("Results: ", mapResults)





