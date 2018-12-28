import React, {PureComponent} from 'react';
import styles from './home.scss';
import HeaderComponent from "../components/header/HeaderComponent";
import AddTodoComponent from "../features/addTodo/AddTodoComponent";
import TodoListComponent from "../features/todoList/TodoListComponent";

class HomeComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 0,
          title: 'Do homework'
        },
        {
          id: 1,
          title: 'Preparing for interview'
        }
      ],
      todo: '',
      filteredTodos: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {todo: title} = this.state;
    const id = new Date();
    const todo = {
      id,
      title
    };
    this.setState({
      todos: [...this.state.todos, todo]
    })
  };

  handleTodoChange = (e) => {
    const todo = e.target.value;
    this.setState({
      todo
    })
  };

  handleRemoveTodo = (id) => {
    const {todos} = this.state;
    const newTodoList = todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({
      todos: newTodoList
    })
  };

  render() {
    const {todos, todo} = this.state;
    const filteredTodos = todo !== '' ? todos.filter(item => {
        return (~item.title.indexOf(todo))
      })
      : todos;
    return (
      <div className={styles.home}>
        <HeaderComponent>
          <h1 className='display-4'>My todo list</h1>
        </HeaderComponent>
        <AddTodoComponent handleSubmit={this.handleSubmit} handleTodoChange={this.handleTodoChange}/>
        <TodoListComponent todos={filteredTodos} handleRemoveTodo={this.handleRemoveTodo}/>
      </div>
    )
  }
}

export default HomeComponent;
