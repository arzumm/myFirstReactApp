import React from 'react'; 
import ReactDOM from 'react-dom';
import InputLine from './InputLine'; 
import TodoList from './TodoList'; 

let dummyData = [{taskText: 'do the dishes', completed: !false },{ taskText: 'study for GRE', completed: false },{ taskText: 'work on React app', completed: false}]; 


class TodoApp extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			todos: []
		}; 
	}

	componentDidMount() {
		this.setState({todos: dummyData})
    }
    addTodo(task) {
        dummyData.push({taskText: task, completed: false}); 
        this.setState({todos: dummyData}); 
    }
	render() {
		return (
			<div> 
				<InputLine submit = {(task) => this.addTodo(task)}/> 
				<TodoList todos = {this.state.todos} /> 
			</div> 
		);
	}
}


export default TodoApp; 