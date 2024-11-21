// YOUR JS CODE HERE
const displayTemp = document.querySelector('.temp-display')
const displayWindSpeed = document.querySelector('.wind-display')
const displayTimezone = document.querySelector('.timezone-display')
const displayTime = document.querySelector('.time-display')

const getWeather = async () => {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1`)
    const data = await response.json()

    displayTemp.innerHTML = `${data.current.temperature_2m} ${data.current_units.temperature_2m}`;
    displayWindSpeed.innerHTML = `${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`
    displayTimezone.innerHTML = `${data.timezone}`

    let currTime = new Date(data.current.time)
    displayTime.innerHTML = `${currTime.toLocaleString("en-US")}`

  } catch (err) {
    console.error(err)
  }
}

getWeather()