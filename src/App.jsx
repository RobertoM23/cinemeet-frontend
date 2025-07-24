import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateEventPage from './pages/CreateEventPage';
import SuggestedPage from './pages/SuggestedPage';
import FilterPage from './pages/FilterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Cinemeet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/create">Crea Evento</Nav.Link>
            <Nav.Link as={Link} to="/suggested">Suggeriti</Nav.Link>
            <Nav.Link as={Link} to="/filter">Filtra Eventi</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateEventPage />} />
          <Route path="/suggested" element={<SuggestedPage />} />
          <Route path="/filter" element={<FilterPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;