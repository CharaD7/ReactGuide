import Weather from './components/Weather'
import UserStatus from './components/UserStatus'

const App = () => {

  return (
		<section>
			<Weather temperature={18} />
			<UserStatus loggedIn={true} isAdmin={true} />
		</section>
  )
}

export default App
