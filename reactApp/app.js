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



ReactDOM.render(<TodoList />, document.getElementById('root'));

