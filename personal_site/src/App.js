import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark"> <!-- Edited code from https://getbootstrap.com/docs/4.0/components/navbar/ -->
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="ProjectsPage.html">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="AboutMePage.html">About Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="bodyContent">
        <p>Welcome to my React website. It is currently in progress.</p>
      </div>
    </div>
  );
}

export default App;
