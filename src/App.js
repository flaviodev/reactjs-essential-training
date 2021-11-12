import './App.css';
import restaurantImg from "./restaurant.jpeg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img src={restaurantImg} height={200} alt="Italian food" />
      <ul style={{ textAlign: "left" }}>
        { props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Macaroni and Cheese",
  "Lasagna",
  "Pizza",
  "Pasta"
].map((dish, i) => ({ id: i, title: dish }));

function App() {
  return (
    <div className="App">
      <Header name="Cindy"/>
      <Main adjective="amazing" dishes={dishes} />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
