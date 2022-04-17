const uluru = {lat: 38.5449, lng: -121.7405};
    // The map, centered at Uluru
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });


// Initialize and add the map
function initMap() {

    var a = document.getElementById('zip').value;   
    var b = document.getElementById('miles').value;   

    fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + a.toString() + "&key=AIzaSyB0ucw5518xdzrWd196Tr4S-hQilri21GQ")
    .then(response => response.json())
    .then(data => {
        latitude = data["results"][0]["geometry"]["location"]["lat"];
        longitude = data["results"][0]["geometry"]["location"]["lng"];

    const uluru = {lat: latitude, lng: longitude};
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: uluru,
    });
    map.style
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });

    const cityCircle = new google.maps.Circle({
        strokeColor: "#B1D8B8",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#3B6946",
        fillOpacity: 0.35,
        map,
        center: uluru,
        radius: b * 1609,
      });

    });
  }

  
  // the API CALL https://maps.googleapis.com/maps/api/geocode/json?address=94063&key=AIzaSyB0ucw5518xdzrWd196Tr4S-hQilri21GQ
  // REPLACE WITH THE DESIRED ZIPCODE