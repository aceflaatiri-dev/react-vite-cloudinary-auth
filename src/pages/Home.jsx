import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import ImageUpload from '../components/ImageUpload'; // will create this later

const Home = () => {
  const navigate = useNavigate();

  // function to logout
  const handleLogout = () => {
    Cookies.remove('auth'); // remove the "auth" cookie
    navigate('/'); // redirect to login page
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
      <hr />
      <p>Image upload component will go here.</p>
      <ImageUpload /> {/* placeholder for now */}
    </div>
  );
};

export default Home;

