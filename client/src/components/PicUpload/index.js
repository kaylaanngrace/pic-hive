import React from "react";
import Axios from 'axios'


const picUpload = () => {

    const uploadImage = (files) => {
        const formData = new FormData()
        formData.append('file', files)
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