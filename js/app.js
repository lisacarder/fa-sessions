$(document).ready(function (){
	//All our logic will go here
	var app = new TopcoatTouch(); //Initialize TopCoat
	app.goTo("home");
	getLocation();
});
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude+","+position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=13&size=400x300&sensor=false";
     $("#map-holder").html ("<img src='"+img_url+"'>");
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
