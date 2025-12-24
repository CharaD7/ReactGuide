const Product = ( props ) => {
  return (
    <div>
			<h2>Product name is { props.name }</h2>
			<p>Product price is { props.price }</p>
		</div>
  )
}

export default Product;
