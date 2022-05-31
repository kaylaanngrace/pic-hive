import React from "react";

let widget = window.cloudinary.createUploadWidget({
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET,
    source: ['local', 'url']
}, (error, result) => {
    if(!error && result && result.event === "success") {
        console.log("Here's the image!", result.info)
    }
})

const picUpload = () => {
    return (
        <div>
            {widget}
        </div>
    )
}

export default picUpload;