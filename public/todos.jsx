import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from '../src/javascripts/frontend/store/store';
import Root from '../src/javascripts/frontend/components/root';
import {receiveTodo, receiveTodos} from '../src/javascripts/frontend/actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const root = document.getElementById('root');
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  ReactDOM.render(<Root store={store} />, root);
});