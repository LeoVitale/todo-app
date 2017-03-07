import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/app';
import {AppContainer} from 'react-hot-loader';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './main/reducers';

import './sass/index.scss';

const render = (Component) => {
  ReactDOM.render(
  <AppContainer>
    <Provider store={createStore(reducers)}>
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