// Author: Marissa Henriquez <mrhenriq@ucsc.edu>
// Date: Jul 8


// Define Variables
myTransport = ["car","walking"];

//Create and Object for my main ride
myMainRide = {
  make : "Toyota",
  model : "Camry",
  color : "Silver",
  year : 2012,
  age : function() {
    return 2025 - this.year;
  }

}

// Output
document.writeln("Kinds of tranportation I use: ", myTransport, "</br>");


document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

