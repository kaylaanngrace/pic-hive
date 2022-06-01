import React from "react";
import Axios from 'axios'


const picUpload = () => {

    const uploadImage = (files) => {
        const formData = new FormData()
        formData.append('file', files)
        formData.append("upload_preset", process.env.CLOUDINARY_UPLOAD_PRESET)

        Axios.post(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/`)
    };

    return (
        <div>
            <input type="file" onChange={(e)=>{
                uploadImage(e.target.files);
            }}/>
        </div>
    )
}

export default picUpload;