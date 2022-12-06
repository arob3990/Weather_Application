var cityFormEl = document.querySelector('#city-search');
var cityInputEl = document.querySelector('#city')
var currentWeatherEl = document.querySelector('#current-day')
var fiveDayForecastEl = document.querySelector('#five-day')
var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Seattle&limit=5&appid=0e54a3594c4475d7abb085190b843fd4'
var previousCities = document.querySelector('#previous-cities')

var apiKey = '0e54a3594c4475d7abb085190b843fd4'

var citySearchHandler = function (event) {
  event.preventDefault();

  var cityName = cityInputEl.value.trim();


  if (cityName) {
    getCoordinates(cityName)
      .then(function (cityData) {

        console.log(cityData)
        localStorage.setItem(cityName, JSON.stringify(cityData))
        
      

        currentWeatherEl.textContent = '';
        fiveDayForecastEl.textContent = '';
        cityInputEl.value = '';
      });

  } else {
    alert('Please enter a City to search');
  }

  var previousCity = document.createElement('button')
 

  }  ;



const country = 'US'

var getCoordinates = function (city) {
  var geoApiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + ',' + country + '&limit=5&appid=' + apiKey;

  return fetch(geoApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
         
        var cityData = {
          name: data[0].name,
          latitude: data[0].lat,
          longitude: data[0].lon
        }
     
      

      var latitude = cityData.latitude
      var longitude = cityData.longitude

    

      getForecastWeather(latitude, longitude);
      getCurrentWeather(latitude, longitude)

      return cityData;
    })
}

getForecastWeather = function (latitude, longitude) {

  var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey

  fetch(weatherApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (i = 0; i < data.list.length; i++) {
        if (data.list[i].dt_txt.endsWith("15:00:00")) {
          console.log(data.list[i])

          var DayForecast = document.createElement('div')

          var dateElement = document.createElement('h3')

          dateElement.textContent = data.list[i].dt_txt
          DayForecast.appendChild(dateElement)

          var tempElement = document.createElement('div')

          fiveDayForecastEl.appendChild(tempElement)

          tempElement.append(data.list[i].dt_txt)
          tempElement.append("Temp: " + data.list[i].main.temp + "Degrees F")
          tempElement.append("Humidity: " + data.list[i].main.humidity + "%")
          tempElement.append("Wind: " + data.list[i].wind.speed + "MPH")




        }
      }



    })

}

getCurrentWeather = function (latitude, longitude) {
  var currentWeatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey
  fetch(currentWeatherApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      console.log("This is the name element " + data.name);
      var cityName = data.name;
      var currentTemp = data.main.temp;
      var currentHumidity = data.main.humidity;
      var currentWind = data.wind.speed
      console.log(cityName + currentTemp + currentHumidity + currentWind)

      var titleEl = document.createElement('h3')
      titleEl.textContent = cityName

      var currentTempEl = document.createElement('h4')
      currentTempEl.textContent = currentTemp

      var currentHumidityEl = document.createElement('h4')
      currentHumidityEl.textContent = currentHumidity

      var currentWindEl = document.createElement('h4')
      currentWindEl.textContent = currentWind

      currentWeatherEl.appendChild(titleEl);

      currentWeatherEl.append("Temp: " + currentTemp + "F")
      currentWeatherEl.append("Wind: " + currentWind + "MPH")


    })
}

var retrieveStoredCity = function (latitude,longitude){



}

cityFormEl.addEventListener('submit', citySearchHandler);