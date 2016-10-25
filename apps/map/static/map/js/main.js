$(document).ready(function(){

    // $.get("https://data.sfgov.org/resource/cuks-n6tp.json", function(res){
    //     console.log("in function");
    //     console.log(res);
    //     alert('hi');
    // }, "json");

    //BEGIN QUERY FOR ASSAULT CRIMES
    var consumer = new soda.Consumer("data.sfgov.org");
    consumer.query()
        .withDataset('cuks-n6tp')
        .where({category: 'ASSAULT',})
        .order('date desc')
        .limit(1000)
        .getRows()
            .on('success', function(rows){
                var cats = [];
                for(var i in rows)
                {
                    //EACH ROW MAKE A MARKER
                    console.log(rows[i]['descript']);
                }
                console.log(rows.length);
            })
            .on('error', function(error){console.log(error);});
    //END QUERY ASSAULT

    var mapOptions = {
        center: new google.maps.LatLng(37.3382,-121.8863),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var acOptions = {
      types: ['establishment']
    };
    var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),acOptions);
    autocomplete.bindTo('bounds',map);
    var infoWindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
      map: map
    });

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      infoWindow.close();
      var place = autocomplete.getPlace();
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }
      marker.setPosition(place.geometry.location);
      infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
      infoWindow.open(map, marker);
      google.maps.event.addListener(marker,'click',function(e){

        infoWindow.open(map, marker);

      });
    });

})
