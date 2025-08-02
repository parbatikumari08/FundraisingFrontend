import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import { useState } from 'react';

const Navbar = ({ handleLogout }) => (
  <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: '#2c3e50' }}>
    <div>
      <Link to="/dashboard" style={{ color: '#ecf0f1', marginRight: '20px', textDecoration: 'none', fontWeight: 'bold' }}>Dashboard</Link>
      <Link to="/leaderboard" style={{ color: '#ecf0f1', textDecoration: 'none', fontWeight: 'bold' }}>Leaderboard</Link>
    </div>
    <button onClick={handleLogout} style={{
      padding: '8px 16px',
      backgroundColor: '#e74c3c',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    }}>
      Logout
    </button>
  </nav>
);

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <>
      {isLoggedIn && location.pathname !== '/' && <Navbar handleLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Login onLogin={handleLoginSuccess} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Leaderboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
