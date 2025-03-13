import React, { useState } from 'react';
import InputField from '../components/InputField.jsx';
import Button from '../components/Button.jsx';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    return (
        <div className='login-body'> 
        <div className='flex flex-col justify-center align-center login-card'>
            <h1>welcome Back!</h1>
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
            <p>Create an acount? <Link to="/signup">Sign UP</Link></p>
            </div>
            <Button
             label="Submit"

            />
        </div>
        </div>
    );
};

// login.propTypes = {
    
// };

export default Login;