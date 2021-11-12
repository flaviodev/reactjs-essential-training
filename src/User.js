import { useEffect, useState } from "react";
import './App.css';

function User(props) {
  const { login } = props;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
        .then((response) => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
  }, [login]);

  if(loading) return (
    <>
        <div className="App">
            <p>Loading...</p>
        </div>
    </>
  );

  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  if(!data) return null;

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