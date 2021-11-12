## React JS Course Notes
---

### 1 - What is React
* ES6 Synta
* Javascript library to create user interfaces
* [React Docs](https://reactjs.org/docs/getting-started.html)
* React Developer tools (chrome)

### 2 - Intro to React Elements
* [Create react app](https://create-react-app.dev)
* Command: `$ npx create-react-app react-essentials`
* index.js: 
```javascript
    <React.StrictMode> 
    // StrictMode is a tool for highlighting potential problems in an application. 
    // It activates additional checks and warnings
    // development mode only
```
* Cleaning
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
React.createElement("h1", null,"Hey everyone!"), // what create
document.getElementById('root') // where create
);
```
* Using JSX
* [BabelJS](babeljs.io): JSX -> React calls

```javascript
ReactDOM.render(
  <lu>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
  </lu>,
  document.getElementById('root')
);
```
```javascript
ReactDOM.render( /*#__PURE__*/React.createElement("lu", null, /*#__PURE__*/React.createElement("li", null, "Monday"), /*#__PURE__*/React.createElement("li", null, "Tuesday"), /*#__PURE__*/React.createElement("li", null, "Wednesday")), document.getElementById('root'));
```

### 3 - React Components

* Create component by creating a function that return JSX
* All components can receive the props (empty object), where has the values passed on component's tag
* React fragments does not create additional tags to the DOM
