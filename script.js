let weather = {
    "apiKey": "bc237a16f19312051db22f9281d1bdf8",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
          .then((response) => response.json())
          .then((data) => this.displayWeather(data)); 
    },
    displayWeather: function(data) {
        const { name } = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Clima en " + name;
        document.querySelector(".icon").src = 
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText 
        = "Humedad: " + humidity + "%";
        document.querySelector(".wind").innerText 
        = "Velocidad del viento: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?landscape)" + name + "')"
    },
    search: function (){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document
.querySelector(".search button")
.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
})