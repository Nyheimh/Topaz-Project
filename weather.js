const DOMAIN = 'http://api.weatherapi.com/v1/';
let FORECAST = 'forecast.json'
let ASTRO = 'astronomy.json'
let DAY = 'current.json'
const API_KEY = '7d7cc083fad74e5193a213303212302'
let ASTRO_URL = `${DOMAIN}${ASTRO}?key=${API_KEY}&q=`;
let FORECAST_URL = `${DOMAIN}${FORECAST}?key=${API_KEY}&q=`
let DAY_URL = `${DOMAIN}${DAY}?key=${API_KEY}&q=`;

async function weather(value) {
  const url = `${DAY_URL}${value}`
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


//  container

function weatherList(data) {

  const weatherContainer = document.querySelector('.weather-info')
    // console.log(weatherContainer)

const weatherInfo = `
  <div class ="weatherCurrent">
    <h1>Current Temperature: ${data.current.temp_f} </h1>
    <h2> Weather Condition: ${data.current.condition.text} <h2>

  </div>
`
weatherContainer.insertAdjacentHTML('beforeend', weatherInfo)
}

function removeWeather() {

  const weatherContainer = document.querySelector('.weather-info')

    while (weatherContainer.lastChild) {
      weatherContainer.removeChild(weatherContainer.lastChild)
    }
  }





// </div>
// <div class="weatherAstro">
//   <h1> Astro </h1>
//   <h2> 
//   <h2> Sunset: ${data.forecast.forecastday[0].astro.sunset} </h2>
//   <h2> Moon Phase: ${forecast.forecastday[0].astro.moon_phase} </h2>
//   <h2> Moonrise: ${data.forecast.forecastday[0].astro.moonrise} </h2>
//   <h2> Moonset: ${data.forecast.forecastday[0].astro.moonset} </h2>
