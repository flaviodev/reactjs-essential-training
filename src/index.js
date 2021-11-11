import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  React.createElement(
    "lu", 
    null, 
    React.createElement("li", null,  "Monday"), // children
    React.createElement("li", null,  "Tuesday"),
    React.createElement("li", null,  "Wednesday"),
  ),
  document.getElementById('root')
);
