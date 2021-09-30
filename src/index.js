import React from 'react';
import ReactDOM from 'react-dom';
import { RegistroApp } from './RegistroApp';
import { Provider } from 'react-redux'
import { store } from './store/store';
import './index.css'

ReactDOM.render(
  
  <Provider store={store}>
    <RegistroApp />
  </Provider>,
  document.getElementById('root')
);