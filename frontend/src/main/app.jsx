import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import style from '../sass/index.scss';

import React from 'react';
import Routes from './routes';
import Menu from '../template/menu';

const App = (props) => {
  return (
    <div className="container">
      <Menu/>
      <Routes/>
    </div>
  );
};

export default App;