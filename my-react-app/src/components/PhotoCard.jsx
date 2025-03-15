import React from 'react';
import { useNavigate } from 'react-router-dom';
const PhotoCard = ({title,desc,url,tag,photo_id}) => {

    const navigate  = useNavigate();
    const Edit = ()=>{
        navigate(`/editphoto/${photo_id}`)
    }
    return (
        <div className='photo-card flex flex-col justify-center align-center'  onClick={Edit}>
            <div className="card-img">
            <img src={url} alt="photo" />
            </div>
            <div className="card-cont">
                <h2 className='card-title'>{title}</h2>
                <p className="card-desc">{desc}</p>
            </div>
            <div className="flex flex-row g-1">
                <p className='press'>press to edit</p>
                <p className="card-tag "><i><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tag"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg></i>{tag}</p>
            </div>
        </div>
    );
};

export default PhotoCard;