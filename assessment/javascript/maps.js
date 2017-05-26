/*---------------------------------------------------------------------
                        GOOGLE MAP SCRIPT
---------------------------------------------------------------------*/
        
        function initMap() {
    
        // Creating a new variable to hold my lat and lng
          var officeLocation = {lat: 51.51234617, lng: -0.0752784};
    
        // Create a map object and specify the DOM element for display.
          map = new google.maps.Map(document.getElementById("map"), {
          center: officeLocation,
          scrollwheel : true,
          zoom: 16
        });
          var marker = new google.maps.Marker({
          position: officeLocation,
          map: map,
          title: 'Find us here!'
        });
    
          var popupAddress = "The Vintage Apparel Company, 2nd Floor<br />";
              popupAddress += "St. Clare House<br />";
              popupAddress += "30-33 Minories<br />";
              popupAddress += "London EC3N 1DD<br />";
          
              
          var infowindow = new google.maps.InfoWindow({
          content: popupAddress,
          maxWidth: 300
        });
          marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

      }




/*---------------------------------------------------------------------
                        MOBILE DEVICES SCRIPT
---------------------------------------------------------------------*/

    $("span.navBtn").click(function() {

        $("ul.menu-items").slideToggle();
    });


    $(window).resize(function() {

        if ( $(window).width() > 480 ) {

            $("ul.menu-items").removeAttr("style");
        }
    });
$(".menu-items li").on("click", function(){
        
        if ( $(window).width() < 800 ) {
        $("span.navBtn").click();
        }
    });
            
function displayLocation(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            
            var pLocation = document.getElementById("location");
            pLocation.innerHTML += latitude + ", " + longitude + "<br>";
        }
        
        window.onload = function() {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(displayLocation);
            } else {
                alert("Sorry, this browser doesn't support Geolocation!");
            }
        }
