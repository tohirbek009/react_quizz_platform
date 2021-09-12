import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LeaderBoardReducer from './Redux/Reducer/LeaderBoardReducer'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux';

const store = createStore(LeaderBoardReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

