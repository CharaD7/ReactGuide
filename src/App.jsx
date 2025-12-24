import Person from "./components/Person";
import Product from "./components/Product";

const App = () => {
	const myName = "Chara";
	const age = 48;

  return (
		<section>
			<p>2 + 2 = {2 + 2}</p>
			My name is <strong>{ myName }</strong>
			<hr />
			<Person name={myName} age={age} />
			<Product name="Backpack" price="GHS250" />
		</section>
  )
}

export default App
