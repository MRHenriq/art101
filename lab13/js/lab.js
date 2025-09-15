// Author: Marissa Henriquez <mrhenriq@ucsc.edu>
// Date: Sep 9

function FizzBuzz(){
  var oneLongString = "";
  for (let num = 1;num<=200;num++){
    if(num % 3 == 0 && num % 5 ==0 && num % 7 == 0){
        oneLongString += num +" FizzBuzzBoom!<br>";
    } else if (num % 3 == 0 && num % 5 == 0){
        oneLongString += num + "FizzBuzz!<br>";
    } else if (num % 3 == 0 && num % 7 == 0){
        oneLongString += num + "FizzBoom!<br>";
    } else if (num % 5 == 0 && num % 7 == 0){
        oneLongString += num + "BuzzBoom!<br>";
    } else if (num % 3 == 0){
        oneLongString += num + "Fizz!<br>";
    } else if (num % 5 == 0){
        oneLongString += num + "Buzz!<br>";
    } else if (num % 7 == 0){
       oneLongString += num + "Boom!<br>";
    } else {
        oneLongString += num + "<br>";
    };
  };
  return oneLongString;
};

  $(document).ready(function() {
    const oneLongString = FizzBuzz();

    //append a new div to our output div
    $("#output").append('<div class="text"><p>' + oneLongString + '</p></div>');
  });
