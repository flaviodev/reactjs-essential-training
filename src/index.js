import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './User';

ReactDOM.render(
  <>
    <App showSecond={false}/>
    <User login="flaviodev" />
  </>
  , document.getElementById('root')
);
