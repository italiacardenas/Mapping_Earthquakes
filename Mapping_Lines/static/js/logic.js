// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// asigning the variable map to the L.map() object and we'll insttantiate 
// the object with the given string 'mapid'
// mapid will reference the id tag in our div element to the index.html file
// the setView() method sets the view of the map with a geographical center
// lat long zoom level 
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
    color: "yellow"
 }).addTo(map);

// // Create the map object with a center and zoom level. setView()method alternative
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

//  Add a marker to the map for Los Angeles, California.
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: 'ffffa1'
//  }).addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: "orange"
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// We create the tile layer that will be the background of our map.
// we assign tilelayer() method to the vartiable streets
// url appears in the parenthese of our tileLayer() accessToken and OpenstreetMap
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // // the id attribte will show the streets on the map
    // id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    // acesstoken with the value of our api key 
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
// The addTo() function will add the graymap object tile layer to our let map
streets.addTo(map);