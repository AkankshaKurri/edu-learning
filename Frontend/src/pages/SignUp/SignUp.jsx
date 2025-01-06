import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SignUp = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [errorMessage , setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
     e.preventDefault();
     setErrorMessage('');
     
     try{
      const response = await axios.post('http://localhost:8000/api/signup/',{
        email,
        password,
      })
       
      if (response.status === 201) {
        alert('User registered successfully!');
        navigate('/home');
      }

     }catch(error){
      if (error.response) {
        // If the server responded with an error
        setErrorMessage(error.response.data.error || 'Something went wrong');
      } else {
        setErrorMessage('Network error. Please try again.');
      }
     }
  }

  return (
            <div className="center modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog" role="document">
                  <div className="modal-content rounded-4 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                       <h1 className="fw-bold mb-0 fs-2">Sign up for free</h1>
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
                              onChange={(e)=> setEmail(e.target.value)}
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
                            />
                            <label for="floatingPassword">Password</label>
                           </div>

                           {errorMessage && <p className='text-danger'>{errorMessage}</p>}

                           <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>

                           <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                           <hr className="my-4"/>
                           <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                             <svg className="bi me-1" width="16" height="16"><use xlink:href="#twitter"></use></svg>
                             Sign up with Google <FaGoogle />
                           </button>
                           <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                             <svg className="bi me-1" width="16" height="16"><use xlink:href="#facebook"></use></svg>
                             Sign up with Facebook <FaFacebookSquare />
                           </button>
                           <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                             <svg className="bi me-1" width="16" height="16"><use xlink:href="#github"></use></svg>
                             Sign up with GitHub <FaGithub />
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
  );
}

export default SignUp
