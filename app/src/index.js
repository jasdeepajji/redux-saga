import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './index.css';
/*********** Redux-Saga ************/
import reducer from './redux';
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import sagaDemo from './redux/saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// then run the saga
sagaMiddleware.run(sagaDemo)			
// Application render here
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
