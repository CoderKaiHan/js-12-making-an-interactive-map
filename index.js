//Set up leaflet map 
const map = L.map('map').setView([35.787743,-78.644257], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//OpenStreetMap® is open data, licensed under the Open Data Commons Open Database License (ODbL) by the OpenStreetMap Foundation (OSMF).

//Get user current location and add a marker on map
async function getUserCoords() {
    const pos = await new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition(resolve,reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}

async function userCoords() {
    const coords = await getUserCoords();
    return coords;
}

const userLocation = L.marker([0,0]).addTo(map);
userCoords().then(coords => {
    userLocation.setLatLng(coords);
    userLocation.bindPopup("You are here.").openPopup();
})


//Fetch searching result with Foursquare API
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'fsq3UKFW12P48SUfAUc49a5SS+qRCW0Z6M1YKGzC9wjPhvo='
    }
  };
  
  fetch('https://api.foursquare.com/v3/places/search?query=gas&ll=35.787743%2C-78.644257&sort=DISTANCE&limit=5', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  fetch('https://api.foursquare.com/v3/places/search?query=restaurant&ll=35.787743%2C-78.644257&sort=DISTANCE&limit=5', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  fetch('https://api.foursquare.com/v3/places/search?query=grocery%20store&ll=35.787743%2C-78.644257&sort=DISTANCE&limit=5', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  fetch('https://api.foursquare.com/v3/places/search?query=gym&ll=35.787743%2C-78.644257&sort=DISTANCE&limit=5', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  fetch('https://api.foursquare.com/v3/places/search?query=airport&ll=35.787743%2C-78.644257&sort=DISTANCE&limit=5', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));