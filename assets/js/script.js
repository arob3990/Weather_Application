// var apiKey = "0e54a3594c4475d7abb085190b843fd4"
// var city = "Seattle"
// var getCityCoordinates = function(){
//     var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=5&appid=' +apiKey

//     fetch(apiUrl)
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data) {
//             console.log(data);
//         });
// }

fetch('http://api.openweathermap.org/geo/1.0/direct?q=Seattle&limit=5&appid=0e54a3594c4475d7abb085190b843fd4')
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
