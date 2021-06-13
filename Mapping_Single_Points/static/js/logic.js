

// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// asigning the variable map to the L.map() object and we'll insttantiate 
// the object with the given string 'mapid'
// mapid will reference the id tag in our div element to the index.html file
// the setView() methon sets the view of the map with a geographical center
// lat long zoom level 
let map = L.map('mapid').setView([40.7, -94.5], 4);

// // Create the map object with a center and zoom level. setView()method alternative
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// L.circle([34.0522, -118.2437], {
//     radius: 300
//  }).addTo(map);
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#ffffa1'
 }).addTo(map);

// We create the tile layer that will be the background of our map.
// we assign tilelayer() method to the vartiable streets
// url appears in the parenthese of our tileLayer() accessToken and OpenstreetMap
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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