window.onload = function () {

    navigator.geolocation.getCurrentPosition(sucess, error);

    function showMap(coords) {

        console.log(coords)

        var mapOptions = {
            zoom: 19,
            center: new google.maps.LatLng(coords.latitude, coords.longitude)
        };

        map = new google.maps.Map(document.body, mapOptions);

        var marker = new google.maps.Marker({
            position: mapOptions.center,
            map: map,
            title: 'Here am I'
        })
    }

    function sucess(geoPosition) {
        showMap(geoPosition.coords);
    }

    function error(positionError) {
        showMap(positionError)
    }

}