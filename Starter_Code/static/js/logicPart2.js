//urls to json data
let quakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
let platesDataUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

    // Create a map object.
    let myMap = L.map("map", {
      center: [37.09, -95.71],
      zoom: 5
    });

    // Add a tile layer.
    let street= L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(myMap);
    // Add a topography layer.
    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

//earthquake data
d3.json(quakeData)
  .then(function (data) {
    console.log(data);

    let features = data.features;
    let earthquakeLayer = L.layerGroup(); //create earthquakelayer
    for (let i = 0; i < features.length; i++) {
      let location = features[i].geometry;
      let eqSize = features[i].properties;

      if (location) {
        let marker = L.circleMarker([location.coordinates[1], location.coordinates[0]], {
          radius: markerSize(eqSize.mag),
          fillOpacity: 0.8,
          color: "black",
          fillColor: markerColor(location.coordinates[2]),
          weight: 0.5
        }).addTo(myMap);

        // Create a popup with additional information
        let popupContent =
          `<h3>Location: ${features[i].properties.place}</h3>
          <p>Time: ${Date(features[i].properties.time)}</p>
          <p>Magnitude: ${eqSize.mag}</p>
          <p>Depth: ${location.coordinates[2]}</p>
          <p>Title: ${features[i].properties.title}</p>
          <p>Minimum distance between the earthquake epicenter and the recording station: ${features[i].properties.dmin}</p>
          <p>Amplitude of the seismic waves: ${features[i].properties.rms}</p>
          <p>Gap: ${features[i].properties.gap}</p>`;
        marker.bindPopup(popupContent);
        marker.addTo(earthquakeLayer);
      }
    };

    // Function to determine the size of the marker based on earthquake magnitude
    function markerSize(magnitude) {
      return magnitude * 4;
    };

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
    };

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
          depthRanges[i]
        );
      };
      // sets the HTML content of the div element to the joined labels array, where each element is 
      //separated by the <br> tag. This creates a line break between each label in the legend.
      div.innerHTML = labels.join("<br>");
      return div;
      };
      legend.addTo(myMap);

    // Create layer for tectonic plates
    let tectPlates = new L.layerGroup();

    // Perform a GET request to the platesDataUrl
    d3.json(platesDataUrl).then(function (plates) {
      console.log(plates);
      L.geoJSON(plates, {
        color: "orange",
        weight: 2
      }).addTo(tectPlates);
    });

    // Create a baseMaps object
    let baseMaps = {
      Street: street,
      Topography: topo
    };

    // Create an overlayMaps object
    let overlayMaps = {
      "Earthquakes": earthquakeLayer,
      "Tectonic Plates": tectPlates
    };

    // Create our map, giving it the baseMaps and overlayMaps
    L.control.layers(baseMaps, overlayMaps).addTo(myMap);
  });
