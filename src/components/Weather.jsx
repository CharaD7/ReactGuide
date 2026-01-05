const Weather = ({ temperature }) => {
	const low_temperature = () => <div>It's cold outside!</div>
	const normal_temperature = () => <div>It's nice outside!</div>
	const high_temperature = () => <div>It's hot outside!</div>

	if (temperature < 15) {
    return low_temperature()
  } else if (temperature < 25) {
    return normal_temperature()
  } else return high_temperature()

}

export default Weather;
