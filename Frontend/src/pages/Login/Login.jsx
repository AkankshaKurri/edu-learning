import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [errorMessage  ,  setErrorMessage] = useState('');


  const handleSubmit = async(e) => {
      e.preventDefault();
      setErrorMessage('') // Reset error message before submitting

      try {
        const response = await axios.post('http://localhost:8000/api/login/', {
          email,
          password,
        });
  
        // Handle the successful login response (e.g., redirect or show a message)
        alert('Login successful!');
      } catch (error) {
        if (error.response) {
          // If the server responded with a status code outside the 2xx range
          setErrorMessage(error.response.data.error || 'Something went wrong');
        } else {
          setErrorMessage('Network error. Please try again.');
        }
      }
  }

  return <>
      <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
         <div className="modal-dialog" role="document">
           <div className="modal-content rounded-4 shadow">

              <div className="modal-header p-5 pb-4 border-bottom-0">
                 <h1 className="fw-bold mb-0 fs-2">Log In</h1>
                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body p-5 pt-0">
                 <form onSubmit={handleSubmit}> 
                   <div className="form-floating mb-3">
                     <input 
                         type="email" 
                         className="form-control rounded-3" 
                         id="floatingInput" 
                         placeholder="name@example.com"
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}
                         required
                      />
                      <label htmlFor="floatingInput">Email address</label>
                   </div>

                   <div className="form-floating mb-3">
                      <input 
                        type="password" 
                        className="form-control rounded-3" 
                        id="floatingPassword" 
                        placeholder="Password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required
                      />
                      <label htmlFor="floatingPassword">Password</label>
                   </div>

                   {errorMessage && <p className='text-danger'>{errorMessage}</p>}

                    <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Log in</button>

                    <small className="text-body-secondary">
                      Not registered yet? <a href='#'>Create an account</a>
                    </small>

                    <hr className="my-4"/>

                    <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                      <svg className="bi me-1" width="16" height="16"><use xlink:href="#twitter"></use></svg>
                      Log in with Google <FaGoogle />
                    </button>

                    <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                      <svg className="bi me-1" width="16" height="16"><use xlink:href="#facebook"></use></svg>
                      Log in with Facebook <FaFacebookSquare />
                    </button>

                    <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                      <svg className="bi me-1" width="16" height="16"><use xlink:href="#github"></use></svg>
                      Log in with GitHub <FaGithub />
                    </button>

                 </form>
              </div>

            </div>
         </div>
      </div>   
  </>
}

export default Login;
