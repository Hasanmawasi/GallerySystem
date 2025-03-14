import React from 'react';
import NavBar from '../components/NavBar';
import AlbumFolder from '../components/AlbumFolder';
const Album = () => {
    return (
        <div>
            <NavBar />
            <h1 className='mt-4 upload-title'>Albums group according to tags</h1>
            <div className='container-albums flex flex-row flex-wrap'>
                <AlbumFolder
                url1={"/logo.png"}
                url2={"/logo.png"}
                tag={"hello"}
                 />
                  <AlbumFolder
                url1={"/logo.png"}
                url2={"/logo.png"}
                tag={"hello"}
                 />
                  <AlbumFolder
                url1={"/logo.png"}
                url2={"/logo.png"}
                tag={"hello"}
                 />
            </div>
        </div>
    );
};

export default Album;