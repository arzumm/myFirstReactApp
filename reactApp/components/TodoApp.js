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
        if (task !== '') {
        dummyData.push({taskText: task, completed: false}); 
        this.setState({todos: dummyData}); 
        }
    }
    removeTodo(index) {
        dummyData.splice(index, 1); 
        this.setState({todos: dummyData}); 
    }
    toggleTodo(index) {
        let item = dummyData[index]; 
        item.completed = !item.completed; 
        this.setState({todos: dummyData}); 
    }
	render() {
		return (
			<div> 
				<InputLine submit = {(task) => this.addTodo(task)}/> 
				<TodoList todoToggle = {(index) => this.toggleTodo(index)} todoXClick = {(index)=> this.removeTodo(index)} todos = {this.state.todos} /> 
			</div> 
		);
	}
}


export default TodoApp; 