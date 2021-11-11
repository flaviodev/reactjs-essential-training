import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      <p>We serve the most delicius food around.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>It's true.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Cindy"/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
