import React from 'react'; 
import ReactDOM from 'react-dom';

class Todo extends React.Component {
	constructor(props) {
		super(props); 
	}

	render() {
		return (
		<li> 
		<input type = 'submit' value = 'X'></input> 
		{this.props.completed ? (<strike> {this.props.task} </strike>) : this.props.task}
		</li>
		); 

	}
}

export default Todo; 