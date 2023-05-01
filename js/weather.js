const API_KEY = "9cfd420d8a2cd8ef00393df05c60668f"
const curCity = document.querySelector("h5#city");

let locationIcon = document.querySelector('.weather-icon');

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live it", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    //console.log(url);
    fetch(url)
    .then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        //const city = document.querySelector("#weather span:last-child");
        curCity.innerText = `🌤Today's weather in ${data.name}🌤`;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;

    });
;
}
  

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);