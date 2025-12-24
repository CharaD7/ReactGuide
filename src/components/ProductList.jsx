const ProductList = () => {
	const products = [
		{ id: 1, name: "Phone", price: "$699" },
		{ id: 2, name: "Laptop", price: "$1200" },
		{ id: 3, name: "Headphones", price: "$199" },
	];

  return (
    <main>
			{products.map(({ id, name, price }) => (
				<div key={id}>
					<div>Product name: { name }</div>
					<div>Product price: { price }</div> <br />
				</div>
			))}
		</main>
  )
}

export default ProductList
