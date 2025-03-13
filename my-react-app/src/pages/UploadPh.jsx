import React from 'react';
import NavBar from '../components/NavBar.jsx';
import InputField from '../components/InputField.jsx';
import Button from '../components/Button.jsx';
const UploadPh = () => {
    return (
        <div >
            <NavBar />
            <div className="container flex-col justify-center align-center">
            <div className="login-card flex flex-col justify-center align-center ">
            <h1 className='mt-4 upload-title'>Upload your photo</h1>
            
            <InputField 
            type='file'
            placeholder="enter Photo"
            style="mt-4"
            />
            <InputField 
            type='text'
            placeholder="Enter Photo Title.."
            style="mt-4"
            />
             <InputField 
            type='text'
            placeholder="Enter Photo Tag.."
            style="mt-4"
            />
             <InputField 
            type='text'
            placeholder="Enter Photo Description.."
            style="mt-4"
            />
            <Button 
            label="Upload" 
            />
           </div>
            </div>
        </div>
    );
};

export default UploadPh;