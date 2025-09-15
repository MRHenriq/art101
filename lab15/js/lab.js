// Author: Marissa Henriquez <mrhenriq@ucsc.edu>
// Date: Sep 10


jQuery(function () {
  $('#activate').on('click', function () {
    //using the core $.ajax() methods
    $.ajax({
      //the URL for the request (from api docs)
      url: 'https://swapi.info/api/films/1',
      //wherher this is a POST or GET request
      type: 'GET',
      //the type of data we expect back
      dataType:'json',
      // what do we do when the api call is successful
      // all the action goes in here
      success: function (data) {
        //do stuff
        console.log(data);
        //append a new div to out output div
        $("#output").append('<div class="text"><p>' +JSON.stringify(data) + '</p></div>');

  },
      //what we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
        //do stuff
        console.log ('Error: ', textStatus, errorThrown);

      },    
    });

 });
});