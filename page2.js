
var map
var infowindow


function createMarker(lat, lon, content) {
  var latLng = new google.maps.LatLng(lat, lon)



  /*var markerImage = new google.maps.MarkerImage('images/boom.png',
                new google.maps.Size(30, 30),
                new google.maps.Point(15, 15),
                new google.maps.Point(30, 30));

*/
  var icon = {
    url: "images/boom.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};


  
  var marker = new google.maps.Marker({
    position: latLng,
    icon: icon,
    map: map
  });

  google.maps.event.addListener(marker, 'click', function(){
    infowindow.setContent("<div class='content'>" + content + "</div>");
    infowindow.open(map,marker);
  })

}


function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 20.5937, lng: 78.9629},
    zoom: 2
  })

  infowindow = new google.maps.InfoWindow({
    content: "placeholder"
  })
  
  createMarker(37.6000, 14.0154, "Battle of Sicily<br><img src='images/sicily.jpg'>")
  createMarker(49.1193, 6.1757, "Battle of Metz<br><img src='images/metz.jpg'>")
  createMarker(34.335331992, 8.942162898, "Battle of El Guettar<br><img src='images/tunisia.jpg'>")
  createMarker(49.333332, -0.5666644, "Battle of Normandy<br><img src='images/normandy.jpg'>")
  createMarker(19.308552, 166.631012, "Battle of Wake Island<br><img src='images/wakeisland.jpg'>")
  createMarker(26.2124, 127.6809, "Battle of Okinawa<br><img src='images/okinawa.jpg'>")
  createMarker(24.7740, 141.3273, "Battle of Iwo Jima<br><img src='images/iwojima.jpg'>")
  createMarker(51.6643,  6.6296, "Operation Varsity<br><img src='images/varsity.jpg'>")
   createMarker(48.3182, 7.4416, "Colmar Pocket<br><img src='images/colmar.jpg'>")
   createMarker(48.6921, 6.1844, "Battle of Nancy<br><img src='images/nancy.jpg'>")
   createMarker(41.4916, 13.8159, "Battle of Monte Cassino<br><img src='images/nancy.jpg'>")
   createMarker(35.2595939967, 8.74242737944, "Battle of Kaserine Pass<br><img src='images/nancy.jpg'>")
   createMarker(56.5110, 3.5156, "Battle of Atlantic<br><img src='images/nancy.jpg'>")
   createMarker(41.4496, 12.6197, "Battle of Nancy<br><img src='images/nancy.jpg'>")
   createMarker(48.6921, 6.1844, "Battle of Nancy<br><img src='images/nancy.jpg'>")
  

}
