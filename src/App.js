import { useEffect, useReducer } from "react";
import './App.css';
import restaurantImg from "./restaurant.jpeg";
import pepperImg from "./pepper.png";

function Header(props) {
  const { name } = props;
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  const {adjective, dishes, dishOfTheDay} = props;
  const [votes, incVotes] = useReducer((votes) => votes+1, 0);
  const [spicy, spicyToogle] = useReducer((spicy) => !spicy, false);

  useEffect(() => {
    console.log(`Votes: ${votes}`);
  }, [votes]);

  useEffect(() => {
    console.log(`Spicy: ${spicy}`);
  }, [spicy]);

  return (
    <section>
      <p>We serve the most {adjective} food around.</p>
      <img src={restaurantImg} height={200} alt="Italian food" />
      <ul style={{ textAlign: "left" }}>
        { dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
      <h2>
        <img src={pepperImg} hidden={!spicy} height={20} alt="Pepper" />
        Dish of the day: {dishOfTheDay.title} (votes: {votes})
        <button onClick={incVotes}>vote</button>
      </h2>
      <input 
        type="checkbox"
        value={spicy}
        onChange={spicyToogle}
      /> Spicy
    </section>
  );
}

function Footer(props) {
  const { year } = props;
   return (
    <footer>
      <p>Copyright {year}</p>
    </footer>
  );
}

const dishes = [
  "Macaroni and Cheese",
  "Lasagna",
  "Pizza",
  "Pasta"
].map((dish, i) => ({ id: i, title: dish }));

const [dishOfTheDay] = dishes;

function App(props) {
  return (
    <>
      <div className="App">
        <Header name="Cindy"/>
        <Main 
          adjective="amazing" 
          dishes={dishes} 
          dishOfTheDay={dishOfTheDay}
        />
        <Footer year={new Date().getFullYear()}/>
      </div>
      { props.showSecond ? <AppTwo /> : null }
    </>
  );
}

function AppTwo() {
  return (
    <h3>Second App</h3>
  );
}

export default App;
