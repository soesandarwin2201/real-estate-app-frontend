import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import Input from "../features/input";
import { loginUser } from "../lib/login/loginSlice";
import { newUser,reset } from "../lib/signup/signupSlice";

const Form = ({page}) => {
     const dispatch = useDispatch();
     const { error: errorLogin } = useSelector((state) => state.authentication);
     const { error : errorSignup, success, message } = useSelector((state) => state.registration);
     const [ name, setName ] = useState('');
     const [ userName, setUserName ] = useState('');
     const [email, setEmail] = useState('');
     const [ password, setPassword ] = useState('');
     const [ passwordconfirmation, setpasswordconfirmation] = useState('');
     const [ address, setAddress ] = useState('');
     const [details, setdetails] = useState('');
     const [company_name, setcompany_name] = useState('');
     const [ avatarData , setAvatarData] = useState(null);

     return ( 
          <section className="signup-section">
               <Form className="signup-form">
                    <label htmlFor="">
                    <input type="text" name="name" placeholder="type your name" className="form-input" />
                    </label>

               </Form>
          </section>
      );
}
 
export default Form;
