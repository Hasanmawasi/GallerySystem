import axios from "axios";

export const BaseUrl = "http://localhost/GallerySystem/";

export const request = async ({method,url,data})=>{

try {
    const response = await axios({
        method,
        url,
        data,
        header:{
            "Content-Type":"application/json",
        }
    })
    return response.data;
} catch (error) {
    console.log(error);
}

}

