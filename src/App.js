import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container d-flex row vh-100 ">
      <div className="card align-self-center">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main className="mb-5">
          <Dictionary defaultKeyword="Sunshine" />
        </main>
        <footer className="text-center">
          Coded by
          <a href="https://github.com/Vicko657" target="blank">
            Victoria Olusegun
          </a>
          on
          <a href="https://github.com/Vicko657/Outlook-App" target="blank">
            Github
          </a>
          and website hosted on
          <a href="https://vix-weather-react.netlify.app/" target="blank">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
