import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [image, setImage] = useState(null); // state to store the selected file
  const [url, setUrl] = useState(''); // state to store uploaded image URL

  // called when user selects a file
  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // take the first selected file
  };

  // called when user clicks "Upload"
  const handleUpload = async () => {
    if (!image) return alert('Please select an image'); // prevent empty upload

    const formData = new FormData(); // FormData allows sending files in POST requests
    formData.append('file', image); // attach file
    formData.append('upload_preset', 'YOUR_UPLOAD_PRESET'); // Cloudinary preset

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload', // Cloudinary API
        formData
      );
      setUrl(response.data.secure_url); // get the uploaded image URL
      alert('Upload successful!');
    } catch (error) {
      console.error(error);
      alert('Upload failed');
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" onChange={handleImageChange} /> {/* file input */}
      <button onClick={handleUpload}>Upload</button> {/* upload button */}

      {/* show uploaded image */}
      {url && (
        <div>
          <p>Uploaded Image:</p>
          <img src={url} alt="Uploaded" width="200" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;