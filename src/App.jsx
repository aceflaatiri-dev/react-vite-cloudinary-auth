import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Login from './pages/Login';
import Home from './pages/Home';

// ProtectedRoute ensures the user is logged in
const ProtectedRoute = ({ children }) => {
  const auth = Cookies.get('auth'); // check if auth cookie exists
  return auth ? children : <Navigate to="/" />; // redirect to login if not
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Login page */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        /> {/* Home page is protected */}
      </Routes>
    </Router>
  );
}

export default App;