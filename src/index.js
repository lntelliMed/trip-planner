const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1Ijoic2NoYWk2IiwiYSI6ImNqYTl1a2JpcTBjN2UzMnBlcWNleWs2M2YifQ.MKE3KBd5Uu6vUxHWxL_O9w';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

let el = document.createElement('div');
el.className = 'marker';
el.style.width = "32px";
el.style.height = "39px";
el.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
const marker = new mapboxgl.Marker(el)
.setLngLat([-74.009151, 40.705086])
.addTo(map);

// var mapboxgl = require('mapbox-gl');

// mapboxgl.accessToken = 'pk.eyJ1Ijoic2NoYWk2IiwiYSI6ImNqYTl1a2JpcTBjN2UzMnBlcWNleWs2M2YifQ.MKE3KBd5Uu6vUxHWxL_O9w';
// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v10'
// });
