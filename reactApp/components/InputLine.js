import React from 'react'; 
import ReactDOM from 'react-dom';


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

export default InputLine; 