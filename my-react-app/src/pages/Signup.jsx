import React, { useState } from 'react';
import Button from '../components/Button.jsx';
import InputField from '../components/InputField.jsx';
import { Link } from 'react-router-dom';
import "../css/index.css";

const Signup = () => {
    const [username, setUsername]= useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState('');
    return (
        <div className='login-body'> 
                <div className='flex flex-col justify-center align-center login-card'>
                    <h1>Create Account</h1>
                    <InputField
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={
                        (e)=> setUsername(e.target.value)
                    }
                    style="mt-4"
                    />
                    <InputField
                    type='text'
                    placeholder='exapmle@gmail.com'
                    value={email}
                    onChange={
                        (e)=> setEmail(e.target.value)
                    }
                    style="mt-4"

                    />
                    <InputField
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={
                        (e)=> setPassword(e.target.value)
                    }
                    style="mt-4"

                    />
                    <div className='form-link mt-3'> 
                    <p>Already Have an acount? <Link to="/login">Login</Link></p>
                    </div>
                    <Button
                     label="Submit"
        
                    />
                </div>
                </div>
    );
};

export default Signup;