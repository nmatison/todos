import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from '../src/javascripts/frontend/store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});