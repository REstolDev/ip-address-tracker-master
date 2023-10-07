document.addEventListener('coordinatesReceived', function (e) {
    const lat = e.detail.lat;
    const lng = e.detail.lng;
    
    var map = L.map('map').setView([lat, lng], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
});

document.addEventListener("DOMContentLoaded", getAdvice);
