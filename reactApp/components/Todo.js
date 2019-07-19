import React from 'react'; 
import ReactDOM from 'react-dom';

class Todo extends React.Component {
	constructor(props) {
		super(props); 
	}

	render() {
		return (
		<li onClick = {this.props.toggle}> 
		<input type = 'submit' value = 'X' onClick = {this.props.xClick}></input> 
	    {this.props.completed ? (<strike> {this.props.task} </strike>) : this.props.task} 
		</li>
		); 

	}
}

export default Todo; 