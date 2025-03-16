import React, { useState } from 'react';
import Button from '../components/Button.jsx';
import InputField from '../components/InputField.jsx';
import {  Link , useNavigate } from 'react-router-dom';
import "../css/index.css";
import { BaseUrl, request } from '../utils/requests.js';

const Signup = () => {
    const [message ,setMessage]= useState("");
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username:"",
        password:"",
        email: ""
    });
    const register =async ()=>{
        const response = await request({
            method:"POST", 
            url:BaseUrl+"signup",
            data:form})
            response.success?navigate('/home'):setMessage(response.message); 
            localStorage.setItem("user_id",response.user.user_id)
    }
    return (
        <div className='login-body'> 
                <div className='flex flex-col justify-center align-center login-card'>
                    <h1>Create Account</h1>
                    <h3 className='failtext' >{message !== ""?message : ''}</h3>
                    <InputField
                    type='text'
                    placeholder='Username'
                    value={form.username}
                    onChange={
                        (e)=> setForm({...form,
                            username:e.target.value
                        })
                    }
                    style="mt-4"
                    />
                    <InputField
                    type='text'
                    placeholder='exapmle@gmail.com'
                    value={form.email}
                    onChange={
                        (e)=> setForm({...form,
                            email:e.target.value
                        })
                    }
                    style="mt-4"

                    />
                    <InputField
                    type='password'
                    placeholder='Password'
                    value={form.password}
                    onChange={
                        (e)=> setForm({...form,
                            password:e.target.value
                        })
                    }
                    style="mt-4"

                    />
                    <div className='form-link mt-3'> 
                    <p>Already Have an acount? <Link to="/login">Login</Link></p>
                    </div>
                    <Button
                     label="Submit"
                    onClick={register}
                    />
                </div>
                </div>
    );
};

export default Signup;