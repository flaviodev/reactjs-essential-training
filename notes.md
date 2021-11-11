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





