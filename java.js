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
          var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Mom&#39;s House</h1>'+
            '<div id="bodyContent">'+
            '<p>My mom lives here. She is a pretty cool lady.</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        marker1.addListener('click', function() {
          infowindow.open(map, marker1);
        });
        var marker2 = new google.maps.Marker({
          position: {lat:25.763799, lng: -80.130219},
          map: map,
          title: "South Pointe Pier"
        });
          var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">South Pointe Pier</h1>'+
            '<div id="bodyContent">'+
            '<p>Probably one of my most favorite places in the world.</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        marker2.addListener('click', function() {
          infowindow.open(map, marker2);
        });
        var marker3 = new google.maps.Marker({
          position: {lat:25.801231, lng: -80.200188},
          map: map,
          title: "Wynwood Walls"
        });
          var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Wynwood Walls</h1>'+
            '<div id="bodyContent">'+
            '<p>Text.</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        marker3.addListener('click', function() {
          infowindow.open(map, marker3);
        });  
      }
