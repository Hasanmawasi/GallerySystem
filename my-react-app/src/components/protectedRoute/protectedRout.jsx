import React, { useEffect, useState } from 'react';
import { request, BaseUrl } from '../../utils/requests';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRout = () => {
    const [isload, setLoad] = useState(true);
    const [isAuth, setAuth] = useState(false);

    const validateID = async ()=>{
        if(localStorage.getItem("user_id")){
         const response = await   request({method:"POST",url:BaseUrl+"validateID",data:{
                user_id:localStorage.getItem("user_id"),
            }})
            if(response.success){
                setAuth(true);
                setLoad(false);
            }else{
                setLoad(false);
                setAuth(false);
            }
        }else{
            setLoad(false);
            setAuth(false);
        }
    }

    useEffect(()=>{
        const ID = localStorage.getItem("user_id");
        if(!ID){
            setLoad(false);
            setAuth(false);
            localStorage.clear();
        }else{
            validateID(ID);
        }
    },[]);

    return ( 
        isload ?
         (<h1>Loading</h1>) 
         :isAuth ?
         (<Outlet />):
        (<Navigate to = "/login" />)
    )
};

export default ProtectedRout;