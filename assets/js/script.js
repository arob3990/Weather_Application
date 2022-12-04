var cityFormEl = document.querySelector('#city-search');
var cityInputEl = document.querySelector('#city')

var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Seattle&limit=5&appid=0e54a3594c4475d7abb085190b843fd4'



var citySearchHandler = function (event) {
  event.preventDefault();

  var cityName = cityInputEl.value.trim();

  if (cityName) {
    getCoordinates(cityName);

 
  } else {
    alert('Please enter a City to search');
  }
   
};

const country = 'US'

var getCoordinates = function (city) {
   var geoApiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city +',' + country + '&limit=5&appid=0e54a3594c4475d7abb085190b843fd4';

   fetch(geoApiUrl)
   .then(function(response){
    return response.json();
   })
   .then(function(data) {
    console.log(data);
      for(var i=0; i < data.length; i++){
      // console.log(data[i].lat)
      // console.log(data[i].lon)     
      var cityData = {
        name: data[0].name,
        latitude: data[0].lat,
        longitude: data[0].lon}
        
      }
      var CityDataParse = json.parse(cityData)
     console.log(CityDataParse)
      
    
   })}

   getCoordinates()

  cityFormEl.addEventListener ('submit', citySearchHandler);