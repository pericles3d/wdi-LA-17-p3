var socket = io();

socket.on('connect', function() {
  console.log('Connected!');
});


function initialize() {
  // retrieve removeMarkers from the dom and make it a jQuery object
  var removeAll = $('#removeMarkers');
  var removeAll2 = $('#allTweets');
  var removeAll3 = $('#submitSearch');

  // Sets the map on all markers in the array.
  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  removeAll.on('click', function(evt) {
    setMapOnAll(null);
    markers = [];
  });

  removeAll2.on('click', function(evt) {
    setMapOnAll(null);
    markers = [];
  });

  removeAll3.on('click', function(evt) {
    setMapOnAll(null);
    markers = [];
  });

  //RENDER THE MAP
  var latlng = new google.maps.LatLng(0, 0); //this numbers sets the lat and long of the center of the map. UK 54, -4
  var myOptions = {
      zoom: 2  // this number changes the zoom that the map starts at UK 6
    , center: latlng
    , mapTypeId: google.maps.MapTypeId.ROADMAP //ROADMAP can also be SATELLITE, HYBRID, or TERRAIN
  };

  var map = new google.maps.Map(document.getElementById("map"), myOptions);

  var markers = [];
  socket.on('tweets', function(data) {
    // console.log(data.user);
    // console.log(data.text);
    // console.log(data);
    var myLatlng = new google.maps.LatLng(data.coordinates[1],data.coordinates[0]);
    // console.log(myLatlng);
    var image = '/images/dot_blue.png';
    var marker = new google.maps.Marker({
      position: myLatlng,
      // animation: google.maps.Animation.DROP,
      map: map,
      icon: image
    });
    markers.push(marker);
    console.log(markers);

    // Remove marker after 30 seconds

    setTimeout(function(){
      marker.setMap(null);
      delete marker;
    }, 30000);

    // Attach info window to marker

    var infowindow = new google.maps.InfoWindow({
      content: "<img src='"+data.pic+"' style='float:left; padding: 5px;' /><strong>"+data.screen_name+"</strong>: "+data.text
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

  });

}
