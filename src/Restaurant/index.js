import { useEffect, useReducer } from "react";
import './Restaurant.css';
import restaurant from "./restaurant.jpeg";
import pepper from "./pepper.png";

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
      <img src={restaurant} height={200} alt="Italian food" />
      <ul style={{ textAlign: "left" }}>
        { dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
      <h2>
        <img src={pepper} hidden={!spicy} height={20} alt="Pepper" id="pepperImg"/>
        Dish of the day: {dishOfTheDay.title} (votes: {votes})
        <button onClick={incVotes}>vote</button>
      </h2>
      <input 
        id="spicyCheckBox"
        type="checkbox"
        value={spicy}
        onChange={spicyToogle}
      />
      <label htmlFor="spicyCheckBox">Spicy</label>
    </section>
  );
}

function Footer(props) {
  const { year } = props;
   return (
    <footer>
      <p>Copyright {year}</p>
      <p><a href="/user">User</a></p>
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

function Restaurant(props) {
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
    </>
  );
}

export default Restaurant;
