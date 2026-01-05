import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import Greeting from './components/Greeting'

const App = () => {

  return (
		<section>
			<Weather temperature={18} />
			<UserStatus loggedIn={true} isAdmin={true} />
			<Greeting timeOfDay="afternoon" />
		</section>
  )
}

export default App
