import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateEventPage from './pages/CreateEventPage';
import { Link } from 'react-router-dom';
import SuggestedPage from './pages/SuggestedPage';
import FilterPage from './pages/FilterPage';

function App() {
  return (
     <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/create">Crea Evento</Link>
        <Link to="/suggested" style={{ marginLeft: '10px' }}>Suggeriti</Link>
        <Link to="/filter" style={{ marginLeft: '10px' }}>Filtra Eventi</Link>
      </nav>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateEventPage />} />
      <Route path="/suggested" element={<SuggestedPage />} />
      <Route path="/filter" element={<FilterPage />} />
    </Routes>
     </div>
  );
}

export default App;
