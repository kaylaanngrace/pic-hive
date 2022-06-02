import React, {useState} from "react";
import Axios from 'axios'
import {Image} from 'cloudinary-react';


const PicUpload = () => {

    const [imageSelected, setImageSelected] = useState("");

    const uploadImage = () => {
        const formData = new FormData()
        formData.append('file', imageSelected)
        formData.append("upload_preset", "h9pi2ot1")

        Axios.post(`https://api.cloudinary.com/v1_1/dsx7vhge4/image/upload`, formData)
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

            <Image 
            style={{width: 200}}
            cloudName="dsx7vhge4" publicId="https://res.cloudinary.com/dsx7vhge4/image/upload/v1654193124/emwig3vgcgqxlkwdqpau.jpg" />
        </div>
    )
}

export default PicUpload;