
const mapboxgl = require("mapbox-gl");

const markerTypes = {
    activity: 'url(http://i.imgur.com/WbMOfMl.png)',
    hotel: 'url(http://i.imgur.com/D9574Cu.png)',
    restaurants: 'url(http://i.imgur.com/cqR6pUI.png)'
}

function builder(markerType, coordinates) {

    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = markerTypes[markerType];

    console.log(markerTypes[markerType]);

    let newMarker = new mapboxgl.Marker(markerDomEl)
    .setLngLat(coordinates);

    return newMarker;
}




module.exports = builder;

// const marker = new mapboxgl.Marker(markerDomEl)
// .setLngLat([-74.009151, 40.705086])
// .addTo(map);
