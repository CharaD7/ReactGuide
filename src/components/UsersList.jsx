const UsersList = () => {
	const users = [
		{ id: 1, name: 'Alice', age: 25 },
		{ id: 2, name: 'Bob', age: 30 },
		{ id: 3, name: 'Charlie', age: 22 },
	];

  return (
    <main>
			{users.map(({ id, name, age }) => (
				<div key={id}>
					<div>Name: {name}</div>
					<div>Age: {age}</div> <br />
				</div>
			))}
		</main>
  )
}

export default UsersList
