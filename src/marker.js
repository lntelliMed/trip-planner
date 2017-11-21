
const mapboxgl = require("mapbox-gl");

function buildMarker(type, coordinates){
  let el = document.createElement('div');
  el.className = 'marker';
  el.style.width = "32px";
  el.style.height = "39px";


  if(type === 'activity'){
    el.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";


  } else if (type === 'hotel'){
    el.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

  } else if (type === 'restaurant') {
    el.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }


  return new mapboxgl.Marker(el)
    .setLngLat(coordinates);

}

module.exports = {
  buildMarker
};
