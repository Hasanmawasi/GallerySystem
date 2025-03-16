import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import PhotoCard from '../components/PhotoCard';
import {request, BaseUrl} from '../utils/requests.js';
const Home = () => {
const [photos, setPhotos] = useState([]);
const user_id = localStorage.getItem("user_id");
const fetchData =async ()=>{
try {
    const response = await request({
       method: "POST",
       url: (BaseUrl+"getphotos"),
        data:{
            user_id,
        }
    });
    setPhotos(response.photos);
return response;
} catch (error) {
    console.log(error);
    
}
}


useEffect(()=>{
    fetchData();
},[])

    return (
        <div>
            {/* <NavBar /> */}
            <SearchBar />
            <div className="container">
           {
           photos.length > 0 ?
            photos.map((photo)=>
            <PhotoCard
            key={photo.photo_id}
            url={photo.photo_url}
            title={photo.photo_title}
            tag={photo.photo_tag}
            desc={photo.photo_desc}
            photo_id={photo.photo_id}
            />
            ) :
            <h1>Upload Yout Images</h1>
           } 
            
            </div>
          
        </div>
    );
};

export default Home;