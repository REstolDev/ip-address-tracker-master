// Define las coordenadas iniciales
const initialLat = 51.505;
const initialLng = -0.09;
let map = null;

function initMap(lat, lng) {
    if (map !== null) {
        map.remove(); // Elimina el mapa existente si lo hay
    }

    map = L.map('map').setView([lat, lng], 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

// Llama a la función initMap en DOMContentLoaded para cargar el mapa con coordenadas iniciales
// document.addEventListener("DOMContentLoaded", function () {
//     fetch('https://api.ipify.org?format=json')
//   .then(response => response.json())
//   .then(data => {
//     const ipAddress = data.ip;
//     getLocation()
//   })
//   .catch(error => {
//     console.error('Error al obtener la dirección IP:', error);
//   });

// });

function getLocation() {
    const inputIP = document.getElementById("IP").value;
    const apiKey = 'at_Xlg4rXP9NOZbGh2pbivsYIbSXphfL'; // Reemplaza con tu propia API key de Geo IPify
    const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${inputIP}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `The request was not successful. Status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        const ipAddress = data.ip;
        const location = data.location.city + ', ' + data.location.country + ' ' + data.location.postalCode;
        const timezone = data.location.timezone;
        const isp = data.isp;
        const lat = data.location.lat;
        const lng = data.location.lng;
        console.log(lat,lng,ipAddress,location,timezone);
        initMap(lat,lng);
        document.getElementById("ipAddress").textContent = ipAddress;
        document.getElementById("location").textContent = location;
        document.getElementById("timezone").textContent = 'UTC '+timezone;
        document.getElementById("isp").textContent = isp;
        initMap(lat,lng);

      })
      .catch((error) => {
        console.error("Error getting location:", error);
      });


  }

    const getLocationBtn = document.getElementById("getLocationBtn");
    getLocationBtn.addEventListener("click", getLocation);
  