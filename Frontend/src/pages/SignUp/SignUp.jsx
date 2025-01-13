import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Basic client-side validation
    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/signup/", {
        email,
        password,
      });

      if (response.status === 201) {
        setSuccessMessage("User registered successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 2000); // Redirect after 2 seconds
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(
          error.response.data.error || "Something went wrong. Please try again."
        );
      } else {
        setErrorMessage("Network error. Please try again.");
      }
    }
  };

  return (
    <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
        <div className="modal-header p-5 pb-4 border-bottom-0">
          <h1 className="fw-bold mb-0 fs-2">Sign up </h1>
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
            <label htmlFor="floatingpassword" className="form-label">Password</label>
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
          {successMessage && <div className="text-success mb-3">{successMessage}</div>}
          <button type="submit" className="w-100 mb-2 btn btn-lg rounded-3 btn-primary">Sign Up</button>
          </form>
        </div>

        <div className="text-center mb-4">
          <small className="text-body-secondary">
            Already have an account? <a href="/login" className="text-decoration-none">Log in</a>
          </small>
        </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;