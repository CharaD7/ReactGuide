const ProductInfo = (  ) => {
	const product = {
		name: "Laptop",
		price: 1200,
		availability: "In stock",
	};

  return (
		<>
			<div>
				Below is the product information: <br />
				Product name: { product.name } <br />
				Product price: ${ product.price } <br />
				Product availability: { product.availability }
			</div>
		</>
  )
}

export default ProductInfo
