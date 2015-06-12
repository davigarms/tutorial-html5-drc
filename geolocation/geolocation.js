(function(){

    var localization = document.querySelector('.localizacao');

    function sucess(geoPosition) {
      showCoords(geoPosition.coords);
    }

    function error(positionError) {
        console.log(positionError)
    }

    function showCoords(coords) {
        var data = '';

        for (var info in coords) {
            data +=  '<h1>' + info + ': ' + coords[info] + '</h1>';

        }

        localization.innerHTML = data;
    }

    navigator.geolocation.getCurrentPosition(sucess, error);

})();