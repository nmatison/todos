import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from '../src/javascripts/frontend/store/store';
import Root from '../src/javascripts/frontend/components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const root = document.getElementById('root');
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});