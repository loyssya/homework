var OpenWeatherApi = /** @class */ (function () {
    function OpenWeatherApi(apiKey) {
        this.apiKey = apiKey;
        this.url = "http://api.openweathermap.org/data/2.5/weather";
    }
    OpenWeatherApi.prototype.getWeather = function (id) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", this.url + "?id=" + id + "&appid=" + this.apiKey);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                var response = JSON.parse(xhr.responseText);
                var result = {
                    icon: response.weather[0].icon,
                    name: response.name,
                    description: response.weather[0].description,
                    temp: response.main.temp
                };
                console.log(result);
            }
        };
        xhr.send();
    };
    return OpenWeatherApi;
}());
var weatherAPI = new OpenWeatherApi("e36b19f6cb4a5ec5d24a9c4980c5c61f");
weatherAPI.getWeather(703448);
