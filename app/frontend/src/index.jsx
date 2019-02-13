import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { DragDropContextProvider } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';

import App from './components/App';
import rootReducer from './reducers';
import './scss/main.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <DragDropContextProvider
      backend={TouchBackend({ enableMouseEvents: true })}
    >
      <App />
    </DragDropContextProvider>
  </Provider>,
  document.getElementById('root')
);
