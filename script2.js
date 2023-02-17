let temp_c = document.getElementById("temp_c");
let condition = document.getElementById("condition");
let gust_kph = document.getElementById("gust_kph");
let country = document.getElementById("country");
let localTime = document.getElementById("localTime");
let element = document.getElementById("section");
const changeColor=async(weather)=>{
  if (weather == "Overcast") {
    element.style.backgroundColor = "#001a49";
  } else if (weather == "Clouds") {
    element.style.backgroundColor = "blue";
    // give proper url for the image or gif here
  } else if (weather == "Clear") {
    element.style.backgroundColor = "#00d1ff";

  } else if (weather == "Haze") {
    element.style.backgroundColor = "white";

  } 
  else if (weather == "Partly cloudy") {
    element.style.backgroundColor = "#ed5555";

  }
  else if (weather == "Sunny") {
    element.style.backgroundColor = "#ff7504";

  }
  else {
    element.style.backgroundColor = "#262323";
      // give proper url for the image or gif here
  }
}
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=a701af167dee40d8ae6181422230502&q=${city}&aqi=no`
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
        changeColor(response.current.condition.text)
    });
};

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("button clicked");
    getWeather(city.value);
  });
  
getWeather("New Delhi");
