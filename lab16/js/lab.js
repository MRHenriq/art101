// Author: Marissa Henriquez <mrhenriq@ucsc.edu>
// Date: Sep 11

jQuery(function (){
  $('#activate').on('click', function () {
    //using the core $.ajax () methos
    $.ajax ({
      //the URL for this lab
      url:"https://xkcd.com/info.0.json",
      //whether this is a POSTor GET request
      type: "GET",
      //The type of data we expect back
      dataType: "json",
      //what do we do when the api call is successful
      success: function (data) {
        //do stuff
        var comic0bj = data;

        //change the page title 
        document.title = comic0bj.title;

        const imgElement = document.createElement('img');
        imgElement.src = comic0bj.img;
        imgElement.alt = comic0bj.alt;
        imgElement.title = comic0bj.title;
        $("#output").append(imgElement);
      },
      //what we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
        //do stuff
        console.log("Error:", textStatus, errorThrown);
      }
    });
  });
});

