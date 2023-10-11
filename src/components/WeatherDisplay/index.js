import React from 'react'

const WeatherDisplay = ({temperature}) => {
  let message

  if (temperature > 30) {
    message = "It's hot outside!"
  } else {
    message = "It's cool outside!"
  }

  return <div>{message}</div>
}

export default WeatherDisplay
