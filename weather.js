const DOMAIN = 'https://www.weatherapi.com/';
const API_KEY = '7d7cc083fad74e5193a213303212302'
const BASE_URL = `${DOMAIN}?key=${API_KEY}&`;


async function weather() {
  // const sun = `{BASE_URL}q={}`
  const url = 'http://api.weatherapi.com/v1/forecast.json?key=9279a9136a9b40af999212551212202&q=San-Jose&days=3'
    // console.log(sun)

    try {
      const response = await axios.get(url)
      // console.log(response)
      let data = response.data
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

// movie container

function weatherList(data) {

  const weatherContainer = document.querySelector('.weather-info')
    // console.log(weatherContainer)
}
const weatherInfo = `
  <div class="weatherCurrent">
    <h1> Weather Current Temperature: ${data.current.temp_f} </h1>
    <h2> Weather Condition: ${data.current.condition.text}


  </div>
  <div class="weatherAstro">
    <h1> Astro </h1>
    <h2> Sunrise: ${data.forecast.forecastday[0].astro.sunrise} </h2>
    <h2> Sunset: ${data.forecast.forecastday[0].astro.sunset} </h2>
    <h2> Moon Phase: ${data.forecast.forecastday[0].astro.moon_phase} </h2>
    <h2> Moonrise: ${data.forecast.forecastday[0].astro.moonrise} </h2>
    <h2> Moonset: ${data.forecast.forecastday[0].astro.moonset} </h2>

  </div>
`