const COORDS = 'coords';
const API_KEY = "e6ef64686f2220161fa486a4a13969da";

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, // latitude: latitude,
        longitude // longitude: longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log('Cant access geo location');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError); // 위치정보 가져오기
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null) {
        askForCoords();
    } else {
        // getWeather
    }
}

function init(){
    loadCoords();
}

init();