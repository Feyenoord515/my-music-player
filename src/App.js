import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Biblioteca from './components/Biblioteca';
import Playlist from './components/Playlist';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={loggedIn ? <Navigate to="/home" /> : <Login handleLogin={handleLogin} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/player" element={<Playlist />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
