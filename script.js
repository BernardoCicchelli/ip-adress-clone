
// endpoint
const APIURL = "https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_HtoJUl0vsPHFqEwjfB4IJkgTENjrj&ipAddress=";
const SEARCHURL = "https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_HtoJUl0vsPHFqEwjfB4IJkgTENjrj&ipAddress=";
const formEl = document.getElementById("form");
const searchEl = document.getElementById("search");
const ipAdressEl = document.getElementById("ip-adress");
const locationEl = document.getElementById("location");
const timezoneEl = document.getElementById("timezone");
const ispEl = document.getElementById("isp");
 
let map;

function initMap(lat,lng) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: lng },
    zoom: 15,
  });
}

// window.initMap = initMap();

getLocation(APIURL);

 async function getLocation(url) {

    const response = await fetch(url);
    console.log(response);
    const responseData = await response.json();
    console.log(responseData);
    locationData(responseData);
}

function locationData(data) {
  console.log(data);
    ipAdressEl.innerHTML = data.ip;
    locationEl.innerHTML = data.location.region+", " + data.location.city;
    timezoneEl.innerHTML = data.location.timezone;
    ispEl.innerHTML = data.isp;
initMap(data.location.lat,data.location.lng);

}

formEl.addEventListener("submit", (event) => {
    const searchInside = searchEl.value;
event.preventDefault();
console.log(event);
    if(searchInside){
      getLocation(SEARCHURL + searchInside)
      searchEl.value = ""
    }
  });
