import { useState } from "react";

const TodoList = () => {
	// Use useState to manage an array of Todo items.
	// Initialize the state with an empty array.
	// Create a form to add new Todo items to the list
	// Display the list of Todo items
	const [todos, setTodos] = useState([]);

	const addTodo = (e) => {
		e.preventDefault();
		const input = e.target.previousSibling;
		const newTodo = input.value.trim();
		if (newTodo) {
			setTodos([...todos, newTodo]);
			input.value = '';
		}
	}

  return (
    <div>
			<br />
			<div>Todo items: {todos.map((todo, index) => <li key={index}>{todo}</li>)}</div>
			<form>
				<input type="text" placeholder="Enter a todo item" />
				<button type="submit" onClick={ addTodo }>Add</button>
			</form>
		</div>
  )
}

export default TodoList;
