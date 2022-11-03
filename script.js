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
          .then((data) => console.log(data)); 
    },
    displayWeather: function(data) {

    }
};