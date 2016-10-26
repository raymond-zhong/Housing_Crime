// var categories = ['ASSAULT', 'SEX OFFENSES, FORCIBLE', 'KIDNAPPING', 'ARSON'];
// var dict = new Array();
// for(var j=0; j < categories.length; j++)
// {
//     dict[categories[j]] = [1,];
//     dict[categories[j]].push(2);
// }

$(document).ready(function(){

    // $.get("https://data.sfgov.org/resource/cuks-n6tp.json", function(res){
    //     console.log("in function");
    //     console.log(res);
    //     alert('hi');
    // }, "json");

    //BEGIN QUERY FOR CRIMES
    var categories = ['ASSAULT', 'SEX OFFENSES, FORCIBLE', 'KIDNAPPING', 'ARSON'];
    var dict = new Array();
    for(var j=0; j < categories.length; j++)
    {
        dict[categories[j]] = [];
    }
    var consumer = new soda.Consumer("data.sfgov.org");
    for(var j=0; j < categories.length; j++)
    {
        consumer.query()
            .withDataset('cuks-n6tp')
            .where({category: categories[j],})
            .order('date desc')
            .limit(20)
            .getRows()
                .on('success', function(rows){
                    for(var i in rows)
                    {
                        if(rows[i]['date'].search('2016-') != -1)
                        {
                            //EACH ROW MAKE A MARKER
                            var latLng = new google.maps.LatLng(rows[i]['y'], rows[i]['x']);
                            // console.log(rows[i]['x'], rows[i]['y']);
                            var crimeMarker = new google.maps.Marker({
                             position: latLng,
                             map: map,
                            icon:'static/images/crimes/' + rows[i]['category'] + '.png'
                            });
                            var disc = '<h4>'+ rows[i]['descript'] +'</h4>';
                            var infowindow = new google.maps.InfoWindow();

                            google.maps.event.addListener(crimeMarker,'click', (function(crimeMarker,disc,infowindow){
                              return function() {
                                infowindow.setContent(disc);
                                infowindow.open(map,crimeMarker);
                              };
                            })(crimeMarker,disc,infowindow));

                            crimeMarker.addListener('click', function() {
                              infowindow.open(map, crimeMarker);
                            });
                            var key = rows[i]['category']
                            dict[key].push(5);

                        }

                    }
                })
                .on('error', function(error){console.log(error);});
    }
    //END QUERY ASSAULT
    for(var j=0; j < categories.length; j++)
    {
        console.log(categories[j] + ": " + dict[categories[j]]);
    }
    var mapInit = {
   center: new google.maps.LatLng(37.773972, -122.431297),
   zoom: 12,
   mapTypeId: google.maps.MapTypeId.TERRAIN,
};
var map = new google.maps.Map(document.getElementById('map'), mapInit);


var marker;

var circle = new google.maps.Circle({
    strokeColor: '#4285F4 ',
    strokeOpacity: 0.3,
    strokeWeight: 3,
    fillColor: '#4285F4 ',
    fillOpacity: 0.35,
    map: map,
    radius: 1000
  });




map.addListener('click', function(event) {
 deleteMarkers();
 addMarker(event.latLng);
 circle.bindTo('center', marker, 'position');
});



function addMarker(location) {
marker = new google.maps.Marker({
   position: location,
   map: map,
   animation: google.maps.Animation.DROP,
   //icon:'static/images/house.png'
 });
}

function deleteMarkers() {
 if (marker){
   marker.setMap(null)
   marker = null
 }
}

})
