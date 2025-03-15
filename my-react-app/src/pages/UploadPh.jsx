import React, {  useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import InputField from '../components/InputField.jsx';
import Button from '../components/Button.jsx';
import { BaseUrl, request } from '../utils/requests.js';
const UploadPh = () => {
    const user_id = localStorage.getItem("user_id");
    const [isupload,setUpload]= useState(false)
    const [base64Image, setBase64Image] = useState("");
    const[photoData, setPhotoData]= useState({
        title:"",
        tag:"",
        desc:""
    })
  // Function to Convert Image to Base64
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file); // Convert to Base64
    reader.onload = () => setBase64Image(reader.result); // Store Base64 string
    reader.onerror = (error) => console.log("Error:", error);
   
  };
  const uploadImg = async()=>{
    const response = await request({
        method:"POST",
        url:BaseUrl+"uploadphoto",
        data:{
            image:base64Image,
            title: photoData.title,
            description: photoData.desc,
            tag: photoData.tag,
            user_id,
        }
    })
   if(response.success){
    setPhotoData({
        title:"",
        tag:"",
        desc:""
    })
    setBase64Image("")
    setUpload(true)
   }

  }
//   useEffect(()=>{
//     console.log(base64Image)
//   },[base64Image])
    return (
        <div >
            <NavBar />
            <div className="container flex-col justify-center align-center">
            <div className="login-card flex flex-col justify-center align-center ">
            <h1 className='mt-4 upload-title'>Upload your photo</h1>
            {isupload && <h3 className='successtext' >Photo uploaded Successfully</h3>}
            
            <InputField 
            type='file'
            placeholder="enter Photo"
            style="mt-4"
            onChange={handleImageChange}
            />
            <InputField 
            type='text'
            placeholder="Enter Photo Title.."
            style="mt-4"
            value={photoData.title}
            onChange={(e)=>{
                setPhotoData({
                    ...photoData,
                    title: e.target.value,
                })
            }}
            />
             <InputField 
            type='text'
            placeholder="Enter Photo Tag.."
            style="mt-4"
            value={photoData.tag}
            onChange={(e)=>{
                setPhotoData({
                    ...photoData,
                    tag: e.target.value,
                })
            }}
            />
             <InputField 
            type='text'
            placeholder="Enter Photo Description.."
            style="mt-4"
            value={photoData.desc}
            onChange={(e)=>{
                setPhotoData({
                    ...photoData,
                    desc: e.target.value,
                })
            }}
            />
            <Button 
            label="Upload" 
            onClick={uploadImg}
            />
           </div>
            </div>
        </div>
    );
};

export default UploadPh;