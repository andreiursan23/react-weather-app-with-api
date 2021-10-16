import './App.css';
import { Navbar, Nav, Container} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from "./components/Search"
import City from "./pages/City";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg" className="navbar">
          <Container>
            <Navbar.Brand href="/">WEATHER APP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/city/bucharest,ro">Bucharest</Nav.Link>
                <Nav.Link href="/city/budapest,hu">Budapest</Nav.Link>
                <Nav.Link href="/city/warsaw,pl">Warsaw</Nav.Link>
              </Nav>
              <Search></Search>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/city/:city,:country">
            <City />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
