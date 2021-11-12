import './App.css';
import { Routes, Route } from "react-router-dom"; 
import Restaurant from './Restaurant';
import User from './User';

export function Error404() {
  return (
    <div><h1>This page dos not exist!</h1></div>
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
