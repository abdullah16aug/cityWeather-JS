let temp_c = document.getElementById("temp_c");
let condition = document.getElementById("condition");
let gust_kph = document.getElementById("gust_kph");
let country = document.getElementById("country");
let localTime = document.getElementById("localTime");
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=a701af167dee40d8ae6181422230502&q=${city}&aqi=no`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp_c.innerHTML = response.current.temp_c;
      condition.innerHTML=response.current.condition.text
      gust_kph.innerHTML=response.current.gust_kph
      country.innerHTML=response.location.country
      localTime.innerHTML=response.location.localtime
        console.log(response.current.gust_kph)
    });
};

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("button clicked");
    getWeather(city.value);
  });
  
getWeather("New Delhi");
