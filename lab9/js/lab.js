// Author: Marissa Henriquez <mrhenriq@ucsc.edu>
// Date: Aug 11

// add button to challenge section

$(document).ready(function() {

  $("#challenge").append("<button id='button-challenge'>Make Special</button>");

  $("#problems").append("<button id='button-problems'>Make Special</button>");

  $("#results").append("<button id='button-results'>Make Special</button>");


      $("#button-challenge").click(function(){

    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
      });

      $("#button-problems").click(function(){
      $("#problems").toggleClass("special");
       });

      $("#button-results").click(function(){
      $("#results").toggleClass("special");
  });
  });