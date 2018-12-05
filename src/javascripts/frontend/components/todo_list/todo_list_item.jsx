import React from 'react';

export const TodoListItem = ({todo, removeTodo}) => (
  <div>
    <h1>{todo.title}</h1>
    <input type="submit" value="Remove Todo" onSubmit={(e) => removeTodo(todo.id)} />
  </div>
)