import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Editphoto = () => {
    const [edit, setEdit] = useState({
        title:"",
        tag:"",
        desc:"",
    })
    return (
        <div>
            <NavBar />
            <div className='container flex flex-col justify-center align-center'> 
                <div className="edit-card g-2">
                    <img src="/logo.png" alt="" />
                    <div className=' '>

                      <h2 className='mt-3'>Edit Photo</h2>
                        <InputField 
                        type='text'
                        placeholder={"Title"}
                        value={edit.title}
                        onChange={(e)=>{
                            setEdit({
                                ...edit,
                                title:e.target.value
                            })
                            
                        }}
                        style={"mt-3 "}
                        />

                    <InputField 
                        type='text'
                        placeholder={"Tag"}
                        value={edit.tag}
                        onChange={(e)=>{
                            setEdit({
                                ...edit,
                                tag:e.target.value
                            })
                           
                        }}
                        style={"mt-3"}
                        />
                        <InputField 
                        type='text'
                        placeholder={"description"}
                        value={edit.desc}
                        onChange={(e)=>{
                            setEdit({
                                ...edit,
                                desc:e.target.value
                            })
                            
                        }}
                        style={"mt-3"}
                        />
                        <Button 
                        label={"Update "}
                        />

                        <Button 
                        label={"Delete "}
                        btnType='outline-btn'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editphoto;