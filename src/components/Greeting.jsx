const Greeting = ( { username }) => {
  return (
    <div>
			<h1>Welcome, { username }</h1>
			<p>Today's date is { new Date().toLocaleDateString() }</p>
		</div>
  )
}

export default Greeting;
