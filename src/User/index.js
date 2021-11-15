import { useEffect, useState } from "react";
import './User.css';
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <p><Link to="/">Home</Link></p>
      </nav>
    </div>
  );
}

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
        <Header />
        <div className="App">
            <p>Loading...</p>
            <p><a href="/">Home</a></p>
        </div>
    </>
  );

  if(error) return ( 
    <>
      <Header />
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </>
  );

  if(!data) return <p><a href="/">Home</a></p>;

  return (
    <div className="App">
        <Header />
        <header>
            <p>{data.name}</p>
            <p>{data.location}</p>
            <img src={data.avatar_url} height={90} alt="Avatar URL" />
        </header>
        <Outlet />
    </div>
  );
}

export default User;