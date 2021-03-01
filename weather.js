const domain = 'http://api.weatherapi.com/v1/';
let forecast = 'forecast.json'
const api_key = '7d7cc083fad74e5193a213303212302'
let forecast_url = `${domain}${forecast}?key=${api_key}&days=3&q=`

const weather = async (value) => {
  const url = `${forecast_url}${value}`
  try {
    removeWeather()
      const response = await axios.get(url)
      let data = response.data
        weatherList(data)
      return response
    } catch (err) {
      console.error(err)
      alert('Please select a valid City.')
    }
}

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
  const weatherInfo = `
  <div class ="weatherDate">
    <p>${data.location.name}, ${data.location.region} </p> </div>
  <div class="temp">
    <p><br>${data.current.temp_f}° <br> ${data.current.condition.text} </p>
  </div>
  <div class="box-container">
    <div class="current" id="box">  
      <p> 3 Day Forecast </p>
      <p> Day 1 Forecast: ${data.forecast.forecastday[0].day.avgtemp_f}° </p>
      <p> Day 2 Forecast: ${data.forecast.forecastday[1].day.avgtemp_f}°</p>
      <p> Day 3 Forecast: ${data.forecast.forecastday[2].day.avgtemp_f}°</p>
    </div>
    <div class="astronomy" id="box">
      <p> Sunrise: ${data.forecast.forecastday[0].astro.sunrise} </p>
      <p> Sunset: ${data.forecast.forecastday[0].astro.sunset} </p>
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



