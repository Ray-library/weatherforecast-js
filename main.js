const APIKEY = "125ca58ea6d6441c80e62702251307";
const city = document.querySelector(".city").textContent='padang';


  function getIconEmoji(code, isNight){
    if([1000].includes(code)) return isNight ? "🌙" : "☀️";
    if([1003].includes(code)) return "⛅";
    if([1006, 1008].includes(code)) return "☁️";
    if([1030, 1135, 1147].includes(code)) return "🌫️";
    if([1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1243, 1246].includes(code)) return "🌧️";
    if([1066, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(code)) return "🌨️";
    if([1069, 1204, 1207, 1249, 1252].includes(code)) return "🌨️";
    if([1072, 1168, 1171, 1198, 1201].includes(code)) return "🌨️";
    if([1087, 1273, 1276].includes(code)) return "⛈️";
    if([1114, 1117].includes(code)) return "❄️";
    if([1135, 1147].includes(code)) return "🌫️";
    if([1009].includes(code)) return "☁️";
    if([1150, 1153, 1180, 1183].includes(code)) return "🌦️";
    if([1186, 1189].includes(code)) return "🌧️";
    if([1192, 1195, 1243, 1246].includes(code)) return "🌧️";
    if([1249, 1252].includes(code)) return "🌧️";
    if([1198, 1201].includes(code)) return "🌨️";
    if([1204, 1207].includes(code)) return "🌨️";
    if([1210, 1213, 1216, 1219, 1255, 1258].includes(code)) return "🌨️";
    if([1222, 1225].includes(code)) return "❄️";
    if([1237, 1261, 1264].includes(code)) return "🧊";
    if([1240, 1243].includes(code)) return "🌧️";
    if([1246].includes(code)) return "🌧️";
    if([1249, 1252].includes(code)) return "🌨️";
    if([1255, 1258].includes(code)) return "🌨️";
    if([1261, 1264].includes(code)) return "🧊";
    if([1273, 1276].includes(code)) return "⛈️";
    if([1279, 1282].includes(code)) return "⛈️";
    return "🌤️";
}









function isNight(hour) {
  return hour >= 18 || hour < 6;
}

function getWeatherByCity(city) {
  const URL = `http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${city}&days=8`

  fetch(URL)
    .then(response => response.json())
    .then(result => {
      const location = result.location;
      const current = result.current;
      const forecast = result.forecast;

      const localHour = new Date(location.localtime).getHours();
      const nightMode = isNight(localHour);
      const emoji = getIconEmoji(current.condition.code, nightMode)


      const body = document.body;
      const card = document.querySelector(".weather-card");
      const sun = document.querySelector(".sun");
        const moon = document.querySelector(".moon");

        if (nightMode) {
            body.dataset.mode = "night";
            card.dataset.mode = "night";
            sun.style.display = "none";
            moon.style.display = "block";
        } else {
            body.dataset.mode = "day";
            card.dataset.mode = "day";
            sun.style.display = "block";
            moon.style.display = "none";
        }
        

        document.querySelector(".city").textContent = location.name

        document.querySelector(".date").textContent = new Date(location.localtime).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
            });
            document.querySelector('.details-top').innerHTML = `
             <div class="humidity">💧 ${current.humidity}</div>
              <div class="wind">💨 ${current.wind_kph}/div>`
            

            document.querySelector(".humidity").textContent = `${current.humidity}%`;
            document.querySelector(".wind").textContent = `${current.wind_kph} km/j`;
            document.querySelector(".weather-temperature").textContent = `${current.temp_c}°C`;

            document.querySelector('.weather-icon').innerHTML = emoji

            // day1
            document.querySelector(".weather-time1").textContent = new Date(forecast.forecastday[1].date).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
            });
            const emoji1 = getIconEmoji(forecast.forecastday[1].day.condition.code, nightMode)
            document.querySelector(".weather-emoji1").textContent = emoji1;
            document.querySelector(".weather-temperature1").textContent = `${forecast.forecastday[1].day.avgtemp_c}°C`;

               // day2
            document.querySelector(".weather-time2").textContent = new Date(forecast.forecastday[2].date).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
            });

            const emoji2 = getIconEmoji(forecast.forecastday[2].day.condition.code, nightMode)
            document.querySelector(".weather-emoji2").textContent = emoji2;
            document.querySelector(".weather-temperature2").textContent = `${forecast.forecastday[2].day.avgtemp_c}°C`;
   
   
   
             // 3
        document.querySelector(".weather-time3").textContent = new Date(forecast.forecastday[3].date).toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long"
        })
        const emoji3 = getIconEmoji(forecast.forecastday[3].day.condition.code, nightMode)
        document.querySelector(".weather-emoji3").textContent = emoji3
        document.querySelector(".weather-temperature3").textContent = `${forecast.forecastday[3].day.avgtemp_c} °C`

        // 4
        document.querySelector(".weather-time4").textContent = new Date(forecast.forecastday[4].date).toLocaleDateString("id-id", {
            weekday: "long",
            day: "numeric",
            month: "long"
        })
        const emoji4 = getIconEmoji(forecast.forecastday[4].day.condition.code, nightMode)
        document.querySelector(".weather-emoji4").textContent = emoji4
        document.querySelector(".weather-temperature4").textContent = `${forecast.forecastday[4].day.avgtemp_c} °C`

        // 5
        document.querySelector(".weather-time5").textContent = new Date(forecast.forecastday[5].date).toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long"
        })
        const emoji5 = getIconEmoji(forecast.forecastday[5].day.condition.code, nightMode)
        document.querySelector(".weather-emoji5").textContent = emoji5
        document.querySelector(".weather-temperature5").textContent = `${forecast.forecastday[5].day.avgtemp_c} °C`

        // 6
        document.querySelector(".weather-time6").textContent = new Date(forecast.forecastday[6].date).toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long"
        })
        const emoji6 = getIconEmoji(forecast.forecastday[6].day.condition.code, nightMode)
        document.querySelector(".weather-emoji6").textContent = emoji6
        document.querySelector(".weather-temperature6").textContent = `${forecast.forecastday[6].day.avgtemp_c} °C`

        // 7
        document.querySelector(".weather-time7").textContent = new Date(forecast.forecastday[7].date).toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long"
        })
        const emoji7 = getIconEmoji(forecast.forecastday[7].day.condition.code, nightMode)
        document.querySelector(".weather-emoji7").textContent = emoji7
        document.querySelector(".weather-temperature7").textContent = `${forecast.forecastday[7].day.avgtemp_c} °C`
   
   
   
   
   
   
   
   
   
   
   
   
          })

      

            
    .catch(err => {
      console.log(err)
    })
}

window.onload = () => {
  getWeatherByCity(city)
}