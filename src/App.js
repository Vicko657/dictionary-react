import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container d-flex row h-100">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main className="d-flex">
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
