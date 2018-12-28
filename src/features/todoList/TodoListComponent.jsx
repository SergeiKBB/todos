import React, { PureComponent } from 'react';
import TodoComponent from "../../components/todo/TodoComponent";

const TodoListComponent = props => {
    const { todos, handleRemoveTodo } = props;
    return (
      <ul className='list-unstyled'>
        {todos.map(todo => {
          return <li key={todo.id}><TodoComponent todoData={todo} handleRemoveTodo={handleRemoveTodo}/></li>
        })}
      </ul>
    )
};

export default TodoListComponent;
