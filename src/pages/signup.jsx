import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../features/input";
import { loginUser } from "../lib/login/loginSlice";
import { newUser,reset } from "../lib/signup/signupSlice";
import '../index.css'

const SignUp = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const [ name, setName ] = useState('');
     const [ userName, setUserName ] = useState('');
     const [email, setEmail] = useState('');
     const [phone, setPhone] = useState('');
     const [ password, setPassword ] = useState('');
     const [ passwordconfirmation, setpasswordconfirmation] = useState('');
     const [ address, setAddress ] = useState('');
     const [details, setdetails] = useState('');
     const [company_name, setcompany_name] = useState('');
     const [ avatarData , setAvatarData] = useState(null);

     const handleSubmit = (e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append('name', name);
          formData.append('username', userName);
          formData.append('email', email);
          formData.append('phone', phone);
          formData.append('password', password);
          formData.append('password_confirmation', passwordconfirmation);
          formData.append('address', address);
          formData.append('details', details);
          formData.append('company_name', company_name);
          formData.append('avatar', avatarData);
          console.log(formData);
          dispatch(newUser(formData));
          navigate('/home');
     }

     return ( 
          <section className="signup-section">
                 <div className="image-cotainer desktop">
                    <h1>Welcome To Mandalar May App</h1>
                    <h2>Let's Find your dream House</h2>
                 </div>
               <form className="signup-form">
                   <div className="avatar-container form-items">
                    <label>
                    {avatarData ? avatarData.name : 'Change Avatar'}
                    <input type="file" accept="image/*" hidden  onChange={(e) => setAvatarData(e.target.files[0])} />
                    </label>
                    </div>

                    <div className="form-items">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" placeholder="type your name" className="form-input" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="form-items">
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input type="text" name="username" placeholder="type your user name" className="form-input"  onChange={(e) => setUserName(e.target.value)}/>
                    </div>

                    <div className="form-items">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="text" name="email" placeholder="type your email" className="form-input"  onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="form-items">
                    <label htmlFor="Phone Number" className="form-label">Phone number</label>
                    <input type="text" name="phone number" placeholder="type your phone number" className="form-input"  onChange={(e) => setPhone(e.target.value)}/>
                    </div>

                    <div className="form-items">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="text" name="password" placeholder="type your password" className="form-input"  onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    
                    <div className="form-items">
                    <label htmlFor="Password Confirmation" className="form-label">Password Confirmation</label>
                    <input type="text" name="password" placeholder="type your password confirmation" className="form-input" onChange={(e) => setpasswordconfirmation(e.target.value)} />
                    </div>

                    <div className="form-items">
                    <label htmlFor="Address" className="form-label">Address</label>
                    <input type="text" name="address" placeholder="type your address" className="form-input" onChange={(e) => setAddress(e.target.value)}/>
                    </div>

                    <div className="form-items">
                    <label htmlFor="Company Name" className="form-label">Company Name</label>
                    <input type="text" name="company name" placeholder="type your company name" className="form-input" onChange={(e) => setcompany_name(e.target.value)}/>
                    </div>

                    <div className="form-items">
                    <label htmlFor="Details" className="form-label">Details</label>
                    <textarea type="text" name="details" placeholder="type your company information or your experience" className="form-input text-area"  onChange={(e) => setdetails(e.target.value)}/>
                    </div>
                       
                    
                    <div className="form-items">
                         {
                              avatarData ? 
                              <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
                              : null
                         }
                    </div>

               </form>
          </section>
      );
}
 
export default SignUp;
