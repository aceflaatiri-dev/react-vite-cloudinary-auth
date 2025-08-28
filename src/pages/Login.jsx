import React, { useState } from 'react'; // useState allows us to track data in the component
import { useNavigate } from 'react-router-dom'; // useNavigate is used to programmatically change pages
import Cookies from 'js-cookie'; // js-cookie helps us set and read cookies

const Login = () => {
  const [username, setUsername] = useState(''); // store the input username
  const [password, setPassword] = useState(''); // store the input password
  const navigate = useNavigate(); // allows us to redirect after login

  // called when the user clicks "Login"
  const handleLogin = (e) => {
    e.preventDefault(); // prevent page reload on form submit

    // check if credentials match our static values
    if (username === 'admin' && password === 'password') {
      Cookies.set('auth', 'true', { expires: 1 }); // create a cookie called "auth" valid for 1 day
      navigate('/home'); // redirect to Home page
    } else {
      alert('Invalid credentials'); // show error if login fails
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // update username state
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // update password state
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;