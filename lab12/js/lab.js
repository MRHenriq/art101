// Author: Marissa Henriquez <mrhenriq@ucsc.edu>
// Date: Sep 8

function sortingHat(str){
  length = str.length;
  mod = length %4;

  if(mod==0){
    str="House of Soul: Known for wisdom, emotional intelligence, and a graceful attitude.";
  } else if (mod==1){
    str="House of R&B: Known for fierce loyalty, honesty, and a strong sense of radical justice."
  } else if (mod==2) {
    str="House of Jazz: Known for strength, incredible resilience and joy in the face of the unkown, and the will to make dreams reality."
  } else if (mod==3){
    str="House of Punk: Known for breaking rules, unconventionality, and a rebellios spirit."
  }

  return str;
}

  $(document).ready(function(){
    //click listener for the button
    $("#button").click(function(){
      //gets the value of #input and assigns it to a variable name
      const name =$("#input").val();
      //runs sortingHat(name) and stores the result in a variable house
      house = sortingHat(name);
      //appends a new styled paragraph tp #output
      $("#output").html('<div class="text"><p>The Gengre Sorter has sorted you into ' +house+ '</p></div>');
    });
  });


