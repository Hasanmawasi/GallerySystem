import React, { useState } from 'react';
import InputField from '../components/InputField.jsx';
import Button from '../components/Button.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { request, BaseUrl } from '../utils/requests.js';
const Login = () => {
    const navigate = useNavigate();
    const [form,setForm] = useState({
        email:'',
        password: ''
    })
    const submit =async ()=>{
        const response = await request({
            method:"POST",
            url:BaseUrl+"login",
            data:form        
    })
    console.log(response)
    if(response.success){
        localStorage.setItem("user_id",response.user_id)
        navigate("/home");
    }
    }
    return (
        <div className='login-body'> 
        <div className='flex flex-col justify-center align-center login-card'>
            <h1>welcome Back!</h1>
            <InputField
            type='text'
            placeholder='exapmle@gmail.com'
            value={form.email}
            onChange={
                (e)=> setForm({
                    ...form,
                    email:e.target.value,
                })
            }
            style="mt-4"
            />
            <InputField
            type='password'
            placeholder='Password'
            value={form.password}
            onChange={
                (e)=> setForm({
                    ...form,
                    password:e.target.value,
                })
            }
            style="mt-4"
            />
            <div className='form-link mt-3'> 
            <p>Create an acount? <Link to="/signup">Sign UP</Link></p>
            </div>
            <Button
             label="Submit"
            onClick={submit}
            />
        </div>
        </div>
    );
};

// login.propTypes = {
    
// };

export default Login;