import React from 'react'; 
import ReactDOM from 'react-dom'; 

let dummyData = ['do the dishes', 'study for GRE', 'work on React app']; 

class TodoList extends React.Component {
	constructor(props) {
		super(props); 
	}

	render() {
		return (
			<ul> 
			{dummyData.map((item) => <Todo task = {item}/>)} 
			</ul>  ); 
	}
}

class Todo extends React.Component {
	constructor(props) {
		super(props); 
	}

	render() {
		return (
		<li> 
		<input type = 'submit' value = 'X'></input> {this.props.task}  
		</li>
		); 

	}
}

class InputLine extends React.Component {
	constructor(props) {
		super(props); 
	}

	render()  {
		return (
		<div> 
			<input type = "text " name = "todoItem" placeholder = "Enter a todo item" value = ""/> 
			<input type = 'submit' value = 'Submit'/> 
		</div> 
		); 
	}
}

class TodoApp extends React.Component {
	constructor(props) {
		super(props); 
	}

	render() {
		return (
			<div> 
				<InputLine /> 
				<TodoList /> 
			</div> 
		);
	}
}



ReactDOM.render(<TodoApp />, document.getElementById('root'));

