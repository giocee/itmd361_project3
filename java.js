function initMap() {
  var home = {lat: 25.928588, lng: -80.306304};
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: home,
  disableDefaultUI: true,
  zoomControl: true,
  scaleControl:true,
  mapTypeControl:true,
  mapTypeControlOptions: {
  style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
  position: google.maps.ControlPosition.BOTTOM_CENTER
}
  });
    var marker1 = new google.maps.Marker({
    position: home,
    map: map,
    title: "Mom's House"
  });
    var contentString1 ='<h1 id="mom" class="mom">Mom&#39;s House</h1>'+
    '<p>My mom lives here. She is a pretty cool lady.</p>';

    var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
  });
    marker1.addListener('click', function() {
    infowindow1.open(map, marker1);
  });
    var marker2 = new google.maps.Marker({
    position: {lat:25.763799, lng: -80.130219},
    map: map,
    title: "South Pointe Pier"
  });
    var contentString2='<h1 id="pierHeading" class="pierHeading">South Pointe Pier</h1>'+
    '<p>Probably one of my most favorite places in the world.</p>';

    var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });
    marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
  });
    var marker3 = new google.maps.Marker({
    position: {lat:25.801231, lng: -80.200188},
    map: map,
    title: "Wynwood Walls"
  });
    var contentString3 ='<h1 id="wallsHeading" class="wallsHeading">Wynwood Walls</h1>'+
    '<p>Text.</p>';

    var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
  });
    marker3.addListener('click', function() {
    infowindow3.open(map, marker3);
  });  
}
