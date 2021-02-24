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
      // l15 = to l16
      let current = response.data.current
      const { temp_f } = current
      // showWeather(current)
      console.log(temp_f)
      return response
    } catch (err) {
      console.error(err)
    }
}

// weather()

const searchBtn = document.querySelector('#search')

searchBtn.addEventListener('click', (e) => {
  e.preventDefault()

  const searchBarValue = document.querySelector('#weather').value

  weather(searchBarValue)

  document.querySelector('#weather').value = ""
})

function showWeather(current) {
  const weatherContainer = document.querySelector('.Weather-Info')
  console.log(weatherContainer)
}