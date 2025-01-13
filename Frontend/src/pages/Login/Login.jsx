import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error message
  
    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        email,    // Ensure email is sent as 'email'
        password, // Ensure password is sent as 'password'
      });
  
      if (response.status === 200) {
        alert('Login successful!');
        navigate('/home');
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error || 'Invalid email or password');
      } else {
        setErrorMessage('Network error. Please try again.');
      }
    }
  };  

  return (
  <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content rounded-4 shadow">
        <div className="modal-header p-5 pb-4 border-bottom-0">
          <h1 className="fw-bold mb-0 fs-2">Log In</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
   
        <div className="modal-body p-5 pt-0">
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-floating mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
          <button type="submit" className="w-100 mb-2 btn btn-lg rounded-3 btn-primary">Log In</button>
        </form>
        </div>

        <div className="text-center mb-4">
          <small className="text-body-secondary">Don't have an account? <a href="/signup" className="text-decoration-none">Sign up</a></small>
        </div>

      </div>
      </div>
    </div>
  );
};

export default Login;
