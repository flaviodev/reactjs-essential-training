import { useEffect, useState } from "react";
import './App.css';

function User(props) {
  const { login } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
        .then((response) => response.json())
        .then(setData)
  }, []);

  return (
    <div className="App">
        <header>
            <p>{data.name}</p>
            <p>{data.location}</p>
            <img src={data.avatar_url} height={90} alt="Avatar URL" />
        </header>
    </div>
  );
}

export default User;