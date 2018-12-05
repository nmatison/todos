import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      return Object.assign({}, state, {[action.todo.id]: action.todo})
    case REMOVE_TODO:
      let newState = Object.assign({}, state);
      delete newState[action.todoId];
      return newState;
    default:
    return state;
  }
}


export default todosReducer;