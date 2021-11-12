import './App.css';
import { Routes, Route } from "react-router-dom"; 
import Restaurant from './Restaurant';
import User from './User';

function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Restaurant />} />
        <Route path="/user" element={<User login="flaviodev" />} />
      </Routes>
    </div>
  );
}

export default App;
