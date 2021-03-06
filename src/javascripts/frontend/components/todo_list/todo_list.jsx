import React from 'react';
import { TodoListItem } from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  render() { 
    const { todos, receiveTodo, removeTodo } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem
        key={`todo-list-item${todo.id}`}
        todo={todo}
        removeTodo={removeTodo} />
      )
    );

    return (
      <div>
        <ul className="todo-list">
        <li>bye</li>
         {todoItems}
       </ul>
       <TodoForm receiveTodo={receiveTodo} />
    </div>
    )
  }
};

export default TodoList;