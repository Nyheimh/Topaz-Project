const domain = 'http://api.weatherapi.com/v1/';
let forecast = 'forecast.json'
// let ASTRO = 'astronomy.json'
// let DAY = 'current.json'
const api_key = '7d7cc083fad74e5193a213303212302'
// let ASTRO_URL = `${DOMAIN}${ASTRO}?key=${API_KEY}&q=`;
let forecast_url = `${domain}${forecast}?key=${api_key}&days=3&q=`
// let DAY_URL = `${DOMAIN}${DAY}?key=${API_KEY}&q=`;

const weather = async (value) => {
  const url = `${forecast_url}${value}`
  // console.log(url)
    // console.log(sun)
  try {
    removeWeather()
      const response = await axios.get(url)
      // console.log(response)
      let data = response.data
        weatherList(data)
      // console.log(data)
      return response
    } catch (err) {
    console.error(err)
    alert('Invalid city, please insert Zipcode or City, State')
    }
}
// weather()
// event listener
const searchBtn = document.querySelector('#search')
  searchBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const searchBarValue = document.querySelector('#weather').value
  weather(searchBarValue)
  document.querySelector('#weather').value = ""
})

function weatherList(data) {
  const weatherContainer = document.querySelector('.weather-info')
// Add third day on line 82'
  const weatherInfo = `
  <div class ="weatherDate">
    <p>${data.location.name}, ${data.location.region} </p>
    <p> Weather Condition: ${data.current.condition.text}, ${data.current.temp_f} </p>
  </div>
  <div class="box-container">
    <div class="current" id="box">  
      <p>  </p>
      <p> Temperature: ${data.current.temp_f} </p>
      
    
      <li> Day 1 Forecast: ${data.forecast.forecastday[0].day.avgtemp_f} </li>
      <li> Day 2 Forecast: ${data.forecast.forecastday[1].day.avgtemp_f}</li>
      <li> Day 3 Forecast: ${data.forecast.forecastday[2].day.avgtemp_f}</li>
    </div>
    <div class="astronomy" id="box">
      <p>Astronomy</p>
      <p> Sunset: ${data.forecast.forecastday[0].astro.sunset} </p>
      <p> Sunrise: ${data.forecast.forecastday[0].astro.sunrise} </p>
      <p> Moon Phase: ${data.forecast.forecastday[0].astro.moon_phase} </p>
      <p> Moonrise: ${data.forecast.forecastday[0].astro.moonrise} </p>
      <p> Moonset: ${data.forecast.forecastday[0].astro.moonset} </p>
    </div>
  </div>
`
weatherContainer.insertAdjacentHTML('beforeend', weatherInfo)
}
  // remove previous data
  function removeWeather() {
    const weatherContainer = document.querySelector('.weather-info')
    while (weatherContainer.lastChild) {
      weatherContainer.removeChild(weatherContainer.lastChild)
    }
} 



// let currentWeather = newWeather().getWeather()
// if (document.body) {
//   if (sunny) {
//     document.body.background = "https://images.unsplash.com/photo-1465577512280-1c2d41a79862?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3Vubnl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"      
//   }
//   else if (rainy) {
//     document.body.background = "https://images.unsplash.com/photo-1549882657-c5d2b3ecf5ee?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTF8fHJhaW55fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
//   }
//   else if (storm) {
//     document.body.background = "https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
//   }
//   else (cloudy)
//     document.body.background = "https://images.unsplash.com/photo-1533281061131-fb923d5db140?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGNsb3VkeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
// }
