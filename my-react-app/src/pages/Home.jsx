import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import PhotoCard from '../components/PhotoCard';
import {request, BaseUrl} from '../utils/requests.js';
const Home = () => {
const [photos, setPhotos] = useState([]);

const fetchData =async ()=>{
try {
    const response = await request({
       method: "POST",
       url: (BaseUrl+"getphotos"),
        data:{
            user_id:1
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
            <NavBar />
            <SearchBar />
            <div className="container">
            <PhotoCard
            url="/gaming-chair.jpeg"
            title="Gaming Chair"
            tag="chairs"
            desc="gaming chair for more confort"
            />
            
           {
            photos.map((photo)=>
            <PhotoCard
            key={photo.photo_id}
            url={photo.photo_url}
            title={photo.photo_title}
            tag={photo.photo_tag}
            desc={photo.photo_desc}
            photo_id={photo.photo_id}
            />
            )
           }
            </div>
          
        </div>
    );
};

export default Home;