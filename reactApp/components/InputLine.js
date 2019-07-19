import React from 'react'; 
import ReactDOM from 'react-dom';


class InputLine extends React.Component {
	constructor(props) {
        super(props); 
        this.state = {
            typedText :''
        }
    }
    
    handleTyping(event) {
        this.setState({typedText: event.target.value}); 
    }

    handleSubmit() {
        this.props.submit(this.state.typedText); 
        this.setState({typedText: ''}); 
    }

	render()  {
		return (
		<div> 
			<input type = "text" name = "todoItem" placeholder = "Enter a todo item" onChange = {(event) => this.handleTyping(event)}/> 
			<input type = 'submit' value = 'Submit' onClick = {() => this.handleSubmit()}/> 
		</div> 
		); 
	}
}

export default InputLine; 