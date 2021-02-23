const DOMAIN = 'https://www.weatherapi.com/';
const API_KEY = '7d7cc083fad74e5193a213303212302'
const BASE_URL = `${DOMAIN}?key=${API_KEY}&`;


async function weather() {
  const sun = `{BASE_URL}q={}`
    console.log(sun)

    try {
      const response = await axios.get(sun)
      return response
    } catch (error) {
      console.error(error)
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