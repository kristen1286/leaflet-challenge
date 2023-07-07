
let jsonData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(jsonData)
  .then(function(data) {
    console.log(data)
    //createFeatures(data.features);
    //createMap(); // Call createMap with houses variable
  

// Create a map object.
let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


features=data.features;

for (let i=0; i< features.length; i++){
  let location = features[i].geometry;
  let eqSize = features[i].properties;
  
  if(location){
    let marker= L.circleMarker([location.coordinates[1], location.coordinates[0]],
      {radius: markerSize(eqSize.mag),
        fillOpacity: 0.8,
        color: "black",
        fillColor: markerColor(location.coordinates[2]),
        weight: 0.5}
      ).addTo(myMap);
    
          // Create a popup with additional information
          let popupContent =
          `
          <h3>Location: ${features[i].properties.place}</h3>
          <p>Magnitude: ${eqSize.mag}</p>
          <p>Depth: ${location.coordinates[2]}</p>
          <p>Title: ${features[i].properties.title}</p>
          <p>Minimum distance between the earthquake epicenter and the recording station: ${features[i].properties.dmin}</p>
          <p>Amplitude of the seismic waves: ${features[i].properties.rms}</p>
          <p>Gap: ${features[i].properties.gap}</p>
        `;

        marker.bindPopup(popupContent);
  }
};

// Function to determine the size of the marker based on earthquake magnitude
function markerSize(magnitude) {
  return magnitude * 4;
}

// Function to determine the color of the marker based on earthquake magnitude
function markerColor(depth) {
  if (depth > 90) {
    return "#f06b6b";
  } else if (depth > 70) {
    return "#f0a76b";
  } else if (depth > 50) {
    return "#f3ba4d";
  } else if (depth > 30) {
    return "#f3db4d";
  } else if (depth > 10) {
    return "#e1f34d";
  } else {
    return "#b7f34d";
  }
}

 // Create a legend
 let legend = L.control({ position: "bottomright" });

 legend.onAdd = function (map) {
   let div = L.DomUtil.create("div", "info legend");
   let labels = [];

   // Add the legend labels and colors
   let depthRanges = ["-10-10", "10-30", "30-50", "50-70", "70-90", "90+"];
   let colors = ["#b7f34d", "#e1f34d", "#f3db4d", "#f3ba4d", "#f0a76b", "#f06b6b"];

   for (let i = 0; i < depthRanges.length; i++) {
     labels.push(
       '<i class="legend-marker" style="background:' + colors[i] + '"></i> ' +
       depthRanges[i]);
   }

   div.innerHTML = labels.join("<br>");

   return div;
 };

 legend.addTo(myMap);

});