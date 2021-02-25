const DOMAIN = 'http://api.weatherapi.com/v1/';
let FORECAST = 'forecast.json'
// let ASTRO = 'astronomy.json'
// let DAY = 'current.json'
const API_KEY = '7d7cc083fad74e5193a213303212302'
// let ASTRO_URL = `${DOMAIN}${ASTRO}?key=${API_KEY}&q=`;
let FORECAST_URL = `${DOMAIN}${FORECAST}?key=${API_KEY}&days=3&q=`
// let DAY_URL = `${DOMAIN}${DAY}?key=${API_KEY}&q=`;

const weather = async (value) => {
  const url = `${FORECAST_URL}${value}`
  // console.log(url)
    // console.log(sun)

  try {
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
  removeWeather()

  const searchBarValue = document.querySelector('#weather').value

  weather(searchBarValue)

  document.querySelector('#weather').value = ""
  
})


// new function for astro valuex
// async function astronomy(info) {
//   const link = `${ASTRO_URL}${info}`

//   try {
//     const response = await axios.get(link)
//   // console.log(response)
//   let dataStro = response.data.forecast.forecastday[0].astro
//     weatherList(dataStro)
//   // console.log(dataStro)
//   return response
// } catch (err) {
//   console.error(err)
// }
// }


//  container

function weatherList(data) {

  const weatherContainer = document.querySelector('.weather-info')
    // console.log(weatherContainer)
// Add state to location in below div'
  console.log(data.forecast)
const weatherInfo = `
  <div class ="weatherDate">
    <p> Hello, the date is ${data.location.localtime}</p>
    <p> Location: ${data.location.name}, ${data.location.region} </p>

    <div class ="current" id="box">
    
    <p> Current Temperature: ${data.current.temp_f} </p>
    <p> Weather Condition: ${data.current.condition.text} </p>
    
    <li> Day 1 Forecast: ${data.forecast.forecastday[1].day.avgtemp_f} </li>
    <li> Day 2 Forecast: ${data.forecast.forecastday[2].day.avgtemp_f}</li>
    <li> Day 3 Forecast: ${data.forecast.forecastday[2].day.avgtemp_f}</li>
    </div>

  <div class ="astronomy" id="box">
    <p> Sunset: ${data.forecast.forecastday[0].astro.sunset} </p>
    <p> Sunrise: ${data.forecast.forecastday[0].astro.sunrise} </p>
    <p> Moon Phase: ${data.forecast.forecastday[0].astro.moon_phase} </p>
    <p> Moonrise: ${data.forecast.forecastday[0].astro.moonrise} </p>
    <p> Moonset: ${data.forecast.forecastday[0].astro.moonset} </p>
    </div>
    
`
weatherContainer.insertAdjacentHTML('beforebegin', weatherInfo)
}


  // remove previous data
  function removeWeather() {
    const weatherContainer = document.querySelector('.weather-info')
    while (weatherContainer.lastChild) {
      weatherContainer.removeChild(weatherContainer.lastChild)
    }
} 
