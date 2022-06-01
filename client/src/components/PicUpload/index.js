import React, {useState} from "react";
import Axios from 'axios'
import {Image} from 'cloudinary-react';


const PicUpload = () => {

    const [imageSelected, setImageSelected] = useState("");

    const uploadImage = () => {
        const formData = new FormData()
        formData.append('file', imageSelected)
        formData.append("upload_preset", process.env.CLOUDINARY_UPLOAD_PRESET)

        Axios.post(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`, formData)
        .then((response)=> {
            console.log(response)
        });
    };

    return (
        <div>
            <input type="file" onChange={(e)=>{
                setImageSelected(e.target.files[0])
            }}/>
            <button onClick={uploadImage}>Upload Image</button>

            <Image cloudName="dsx7vhge4" publicId="" />
        </div>
    )
}

export default PicUpload;