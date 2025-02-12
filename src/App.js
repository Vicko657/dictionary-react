import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        The project was coded by Victoria Olusegun and is open sourced on Github
        and hosted on Netlify
      </footer>
    </div>
  );
}

export default App;
