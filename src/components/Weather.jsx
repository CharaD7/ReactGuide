const Weather = ({ temperature }) => {
	let lowTemperature = () => <div>It's cold outside!</div>
	let normalTemperature = () => <div>It's nice outside!</div>
	let highTemperature = () => <div>It's hot outside!</div>

	if (temperature < 15) {
    return lowTemperature()
  } else if (temperature < 25) {
    return normalTemperature()
  } else return highTemperature()

}

export default Weather;
