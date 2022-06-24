import {
  BrowserRouter as Router, 
  Routes, 
  Route,
  NavLink
} from "react-router-dom";

import "./App.css";

import Home from './pages/Home'
import Characters from './pages/Characters'
import PageNotFound from './pages/PageNotFound'


function App() {

  return (
    <Router>
      <header className="header">
        <div className="wrapper">
          <h1 className="title">Rick & Morty </h1>
          <Navbar />
        </div>
      </header>

      <main className="main">
        <div className="wrapper">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/characters" element={<Characters />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;


function Navbar() {
  return (
    <nav>
      <NavLink activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/characters">
        Characters
      </NavLink>
    </nav>
  );
}