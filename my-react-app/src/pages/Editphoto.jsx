import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useParams, useNavigate } from 'react-router-dom';
import {request, BaseUrl} from '../utils/requests.js';


const Editphoto = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [edit, setEdit] = useState({
        title:"",
        tag:"",
        desc:"",
        photo_url:"",
    })
    const [Update, setUpdate]= useState(false);
    const [faildUpdate, setFailUpdate]= useState(false);
    const getPhoto =async ()=>{
      const response= await request({
            method:"POST"
            ,url:BaseUrl+"getphoto",
           data:{  
                  photo_id:id
                  }
        });
        response?.success ? setEdit({
            title:response.photo.photo_title,
            tag:response.photo.photo_tag,
            desc:response.photo.photo_desc,
            photo_url:response.photo.photo_url,
        })
        : console.log(response);
    }
    const updatePhotoData=async()=>{
        const response = await request({method:"POST",url:BaseUrl+"updatephoto",data:{
           photo_id:id,
           tag:edit.tag,
           title:edit.title,
           desc:edit.desc
        }})
        console.log(response);
       
        response.success ? 
         setUpdate(true) 
         : setFailUpdate(true);

        getPhoto();
    }
    const deletePhoto= async ()=>{
        const response = await request({
            method:"POST",
            url:BaseUrl+"deletephoto",
            data:{
                photo_id:id,
            }
        })
        if(response.success){
            navigate("/home");
        }
    }
    useEffect(()=>{
        console.log("id",id)
        getPhoto();
    },[])

    return (
        <div>
            <NavBar />
            <div className='container flex flex-col justify-center align-center'> 
                <div className="edit-card g-2">
                    <img src={edit.photo_url || "/logo.png"} alt="" />
                    <div className=' '>

                      <h2 className='mt-3'>Edit Photo</h2>
                      {Update ? <p className='successtext'>Photo Updated Successfully</p>:"" }
                      {faildUpdate ? <p  className='Failtext'>Failed to Update</p>:"" }
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
                        onClick={updatePhotoData}
                        />

                        <Button 
                        label={"Delete "}
                        btnType='outline-btn'
                        onClick={deletePhoto}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editphoto;