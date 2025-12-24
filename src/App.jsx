import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";
import UsersList from "./components/UsersList";

const App = () => {
	const myName = "Chara";

  return (
		<section>
			<p>2 + 2 = {2 + 2}</p>
			My name is <strong>{ myName }</strong>
			<hr />
			<Greeting username={myName} />
			<hr />
			<ProductInfo />
			<hr />
			<UsersList />
		</section>
  )
}

export default App
