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
    <p> Location: ${data.location.name}, ${data.location.region} </p>
  </div>
  <div class="box-container">
    <div class="current" id="box">  
      <p> Current Condition </p>
      <p> Temperature: ${data.current.temp_f} </p>
      <p> Weather Condition: ${data.current.condition.text} </p>
    
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
