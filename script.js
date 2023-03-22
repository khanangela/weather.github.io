const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a7b9864ab9mshff15cf07636b58cp130730jsnb0435cb1057b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city) => {

    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then((response) => {
           
        
        console.log(response)


      
        
  temp.innerHTML = response.temp
  temp2.innerHTML = response.temp
  feels_like.innerHTML = response.feels_like
  humidity.innerHTML = response.humidity
  humidity2.innerHTML = response.humidity
  min_temp.innerHTML =response.min_temp
  max_temp.innerHTML = response.max_temp
  cloud_pct.innerHTML = response.cloud_pct
  wind_speed.innerHTML = response.wind_speed
  wind_speed2.innerHTML = response.wind_speed
  wind_degree.innerHTML = response.wind_degree
  sunrise.innerHTML = response.sunrise
  sunset.innerHTML = response.sunset
    
})



    
.catch(err => console.error(err));
}

submit.addEventListener('click' ,(e) =>{
    e.preventDefault();
    getWeather(city.value);
})

getWeather("Delhi");


const input = document.getElementById('city');
input.addEventListener('click', function() {
    input.style.width = '500px';
    input.style.fontSize = '16px';
    input.style.border = '0px';
    input.style.transition ="0.5s ease";

    
    
  });