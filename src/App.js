import './App.css';
import { Routes, Route } from "react-router-dom"; 
import Restaurant from './Restaurant';
import User from './User';
import { useLocation } from 'react-router';

export function Error404() {
  let location = useLocation();

  return (
    <div><h1>Resource not found at {location.pathname}!</h1></div>
  );
}

function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Restaurant />} />
        <Route path="/user" element={<User login="flaviodev" />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
