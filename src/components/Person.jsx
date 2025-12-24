const Person = (props) => {
  return (
    <div>
			<h2>Person's name is { props.name }</h2>
			<p>Person's age is { props.age }</p>
		</div>
  )
}

export default Person
