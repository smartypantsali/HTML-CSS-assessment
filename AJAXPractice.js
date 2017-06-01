/*This is my JavaScript file for the AJAX exercise*/

var myManufacturer = document.getElementById("manufacturer");

myManufacturer.addEventListener("change", loadMyData, false);

function loadMyData() {
    
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "https://raw.githubusercontent.com/smartypantsali/HTML-CSS-assessment/master/expensiveLuxuryCars.json", true);
    
    myRequest.onload = function(){
        if(myRequest.readyState == 4 && myRequest.status == 200) {
            var myData = JSON.parse(myRequest.responseText);
            
            console.log(myData);
        }
    }
    
    myRequest.send();
    
   /* console.log(myRequest);*/
    
}