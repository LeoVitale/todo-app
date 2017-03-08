import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/app';
import {AppContainer} from 'react-hot-loader';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import promise from 'redux-promise';

import reducers from './main/reducers';

import './sass/index.scss';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
                && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(promise)(createStore)(reducers,devTools);

const render = (Component) => {
  ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Component/>
    </Provider>
  </AppContainer>, 
  document.getElementById('root'));
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./main/app', () => { render(App) })
}